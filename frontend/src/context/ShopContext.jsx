import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "ksh";
  const delivery_charges = 0;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({});

  // adding items to cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select size first bruv!");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  //get cart count
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  // updating quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if(token){
      try {
        await axios.post(backendUrl + '/api/cart/update',{itemId, size, quantity},{headers:{token}});
        
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  // get cart total amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  /// GETTING ALL PRODUCTS
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  //get user cart
  const getUserCart = async (token)=>{
    try {
      const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers:{token}})
      if(response.data.success){
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }


  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"))
    }
    getProductsData();
  }, []);

  const value = {
    currency,
    delivery_charges,
    navigate,
    products,
    token,
    setToken,
    search,
    setSearch,
    setShowSearch,
    showSearch,
    addToCart,
    getCartCount,
    cartItems,
    setCartItems,
    updateQuantity,
    getCartAmount,
    backendUrl,
    
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
