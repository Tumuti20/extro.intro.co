import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import Stripe from "stripe"
import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

// global variables for payments
const currency = "kes"

//STRIPE GATEWAY INITIALIZATION
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//pesapal credentials
const PESAPAL_CONSUMER_KEY = process.env.PESAPAL_CONSUMER_KEY;
const PESAPAL_CONSUMER_SECRET = process.env.PESAPAL_CONSUMER_SECRET;
const PESAPAL_API_URL = "https://cybqa.pesapal.com/pesapalv3/api/PostPesapalDirectOrderV4";
const PESAPAL_VERIFY_URL = "https://cybqa.pesapal.com/pesapalv3/api/CheckTransactionStatus";


//controller function for placing orders using cod method
const placeOrder = async (req,res)=>{
try {
    const {userId, items, amount, address} =req.body
    const orderData = {
        userId,
        items,
        amount,
        address,
        paymentMethod:"COD",
        payment:false,
        date: Date.now()
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, {cartData:{}})

    res.json({ success:true, message: "Order Placed"})
} catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message})
}
}
// controller function for placing orders using pesapal
const placeOrderPesaPal = async (req, res) => {
    try {
      const { userId, items, amount, address, email, phone } = req.body;
      const orderData = {
        userId,
        items,
        amount,
        address,
        paymentMethod: "PesaPal",
        payment: false,
        date: Date.now(),
      };
  
      // Save order to database first
      const newOrder = new orderModel(orderData);
      await newOrder.save();

       // Get PesaPal token
       const getPesaPalToken = async () => {
        try {
            const response = await axios.post("https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken", {
                consumer_key: PESAPAL_CONSUMER_KEY,
                consumer_secret: PESAPAL_CONSUMER_SECRET
            });
    
            return response.data.token; // Return the token
        } catch (error) {
            console.error("🔴 Error getting PesaPal Token:", error.response?.data || error.message);
            return null;
        }
    };
    
    

  
      const orderDetails = {
        Amount: amount,
        Description: "Order Payment",
        Type: "MERCHANT",
        Reference: newOrder._id, // Using MongoDB order ID as reference
        FirstName: "Customer",
        LastName: "User",
        Email: email,
        PhoneNumber: phone,
        Currency: "KES",
        CallbackUrl: `https://extrointro.vercel.appm/verify?orderId=${newOrder._id}`, // Redirect URL after payment
      };
          // Request PesaPal payment link
    const response = await axios.post(PESAPAL_API_URL, orderDetails, {
        headers: {
          Authorization: `Bearer ${PESAPAL_CONSUMER_KEY}:${PESAPAL_CONSUMER_SECRET}`,
          "Content-Type": "application/json",
        },
      });
  
      res.json({ success: true, paymentLink: response.data.redirect_url });
    } catch (error) {
      console.log("Error placing PesaPal order:", error);
      res.json({ success: false, message: "Failed to initiate payment" });
    }
  };
  
  // Controller function for verifying PesaPal payment
  const verifyPesaPalPayment = async (req, res) => {
    try {
      const { orderId } = req.body;
      const verifyUrl = `${PESAPAL_VERIFY_URL}?orderTrackingId=${orderId}`;
  
      const response = await axios.get(verifyUrl, {
        headers: {
          Authorization: `Bearer ${PESAPAL_CONSUMER_KEY}:${PESAPAL_CONSUMER_SECRET}`,
        },
      });
  
      const status = response.data.status;
  
      if (status === "COMPLETED") {
        await orderModel.findByIdAndUpdate(orderId, { payment: true });
        res.json({ success: true, message: "Payment Verified" });
      } else {
        res.json({ success: false, message: "Payment Not Completed" });
      }
    } catch (error) {
      console.log("Error verifying PesaPal payment:", error);
      res.json({ success: false, message: "Failed to verify payment" });
    }
  };
  

//controller function for placing orders using stripe method
const placeOrderStripe = async (req,res)=>{
    try {
        const {userId, items, amount, address} =req.body
        const {origin} = req.headers
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"stripe",
            payment:false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData) 
        await newOrder.save()

        const line_items = items.map((item)=>({
            price_data:{
                currency:currency,
                product_data:{
                    name: item.name
                },
                unit_amount: item.price * 100 * 1 // converting to kes currency
            },
            quantity:item.quantity
        }))

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })
        res.json({ success: true, session_url: session.url})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message})
    }
}

//controller function for getting all the orders data from admin panel
const allOrders = async (req,res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

//controller function for GETTING USER ORDERS for frontend
const userOrders = async (req,res)=>{
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true, orders})
    } catch (error) {
            console.log(error) 
    res.json({ success: false, message: error.message})
    }
}

//controller function for updating order status from admin panel
const updateStatus = async (req,res)=>{
try {
    const {orderId, status} = req.body
    await orderModel.findByIdAndUpdate(orderId, {status})
    res.json({success:true, message: " Status Updated"})
} catch (error) {
    console.log(error) 
    res.json({ success: false, message: error.message})
}
}
//controller function for verify stripe (tempo method)
const verifyStripe = async (req,res)=>{
    const {orderId, success, userId} = req.body
    try {
        if(success === "true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true})
            await userModel.findByIdAndUpdate(userId, {cartData: {}})
            res.json({success:true})
        }else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false})
        }
    } catch (error) {
        console.log(error) 
        res.json({ success: false, message: error.message})
    }
}

export { placeOrder, placeOrderStripe, placeOrderPesaPal, allOrders, userOrders, updateStatus, verifyStripe, verifyPesaPalPayment, };