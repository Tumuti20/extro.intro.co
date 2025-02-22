import express from "express"
import { allOrders, placeOrder, placeOrderStripe, updateStatus, userOrders, verifyStripe, placeOrderPesaPal,verifyPesaPalPayment } from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"

const orderRouter = express.Router()

// for admin
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status',adminAuth, updateStatus)

// payment
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post("/pesapal", authUser, placeOrderPesaPal); // <-- PesaPal payment

//verify payment
orderRouter.post('/verifystripe', authUser, verifyStripe)
orderRouter.post("/verifypesapal", verifyPesaPalPayment); // <-- PesaPal verification


// for User
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter