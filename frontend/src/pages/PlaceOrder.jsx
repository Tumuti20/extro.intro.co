import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import mpesa from "../assets/mpesa.png";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const {
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    products,
    backendUrl,
  } = useContext(ShopContext);
  const navigate = useNavigate();
  const [method, setMethod] = useState("cod"); // Default method: Cash on Delivery

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    country: "",
    zipcode: "",
    county: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Redirect to login if user is not authenticated
    if (!token) {
      toast.error("You must log in to place an order!");
      navigate("/login");
    }
  }, [token, navigate]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount(),
      };

      switch (method) {
        case "cod":
        
          const response = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
            window.scrollTo(0, 0);
          } else {
            toast.error(response.data.message);
          }
          break;

        case "mpesa":
          const responseStripe = await axios.post(
            `${backendUrl}/api/order/stripe`,
            orderData,
            { headers: { token } }
          );
          if (responseStripe.data.success) {
            setCartItems({});
            navigate("/orders");
            window.scrollTo(0, 0);
          } else {
            toast.error(response.data.message);
          }
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="bg-primary mb-16">
        <form onSubmit={onSubmitHandler} className="max-padd-container py-10">
          <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              <Title title1={"Delivery"} title2={"Information"} />
              <div className="flex gap-3">
                <input
                  onChange={onChangeHandler}
                  value={formData.firstName}
                  type="text"
                  name="firstName"
                  placeholder="First Name:"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                  required
                />
                <input
                  onChange={onChangeHandler}
                  value={formData.lastName}
                  type="text"
                  name="lastName"
                  placeholder="Last Name:"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                  required
                />
              </div>
              <input
                onChange={onChangeHandler}
                value={formData.email}
                type="text"
                name="email"
                placeholder="Email:"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none "
                required
              />
              <input
                onChange={onChangeHandler}
                value={formData.phoneNumber}
                type="text"
                name="phoneNumber"
                placeholder="PhoneNumber:"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none "
                required
              />
              <input
                onChange={onChangeHandler}
                value={formData.street}
                type="text"
                name="street"
                placeholder="Street Name:"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none "
                required
              />
              <div className="flex gap-3">
                <input
                  onChange={onChangeHandler}
                  value={formData.city}
                  type="text"
                  name="city"
                  placeholder="City Name:"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                  required
                />
                <input
                  onChange={onChangeHandler}
                  value={formData.country}
                  type="text"
                  name="country"
                  placeholder="Country Name:"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                  required
                />
              </div>
              <div className="flex gap-3">
                <input
                  onChange={onChangeHandler}
                  value={formData.zipcode}
                  type="text"
                  name="zipcode"
                  placeholder="Zip Code:"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                  required
                />
                <input
                  onChange={onChangeHandler}
                  value={formData.county}
                  type="text"
                  name="county"
                  placeholder="County Name:"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                  required
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <CartTotal />
              <div className="my-6">
                <h3 className="bold-20 mb-5">
                  Payment <span className="text-secondary"> Method </span>
                </h3>
                  <h3 className="bold-20 mb-5">make sure to pay first then <span className="text-secondary"> PlaceOrder when using m-pesa </span></h3>
                <div className="flex gap-3">
                  {/* <div */}
                  {/* onClick={() => setMethod("googlepay")} */}
                  {/* className={`${ */}
                  {/* method === "googlepay" ? "btn-dark" : "btn-white" */}
                  {/* // } !py-1 text-xs cursor-pointer flex items-center justify-center w-30 h-20`} */}
                  {/* > */}
                  {/* <img src={googlepay} alt="Google Pay" className="w-20 h-20 object-contain" /> */}
                  {/* </div> */}
                  <div
                    onClick={() => {
                      setMethod("mpesa");

                      const paymentWindow = window.open(
                        "https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/extrointro",
                        "_blank"
                      );

                      // Check every 5 seconds if the user has completed payment
                      const checkPaymentStatus = setInterval(() => {
                        if (paymentWindow?.closed) {
                          clearInterval(checkPaymentStatus);
                          navigate("/orders"); // Redirect user to Orders page
                        }
                      }, 1000);
                    }}
                    className={`${
                      method === "mpesa" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs cursor-pointer flex items-center justify-center w-30 h-20`}
                  >
                    <img
                      src={mpesa}
                      alt=""
                      className="w-20 h-20 object-contain"
                    />
                  </div>

                  <div
                    onClick={() => setMethod("cod")}
                    className={`${
                      method === "cod" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs  cursor-pointer flex items-center justify-center w-30 h-20`}
                  >
                    Cash on Delivery
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="btn-secondary">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;