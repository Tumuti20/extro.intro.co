import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "./Title"

const CartTotal = () => {

    const{currency, getCartAmount, delivery_charges} = useContext(ShopContext)
    
    return (
        <section className="w-full">
          <Title title1={'Cart'} title2={"Total"} titleStyles={"h3"} />
          <div className="flexBetween pt-3">
            <h5 className="h5">SubTotal:</h5>
            <p className="h5">
              {currency}
              {getCartAmount()}.00
            </p>
          </div>
          <hr className="mx-auto h-[1px] w-full bg-gray-900/10" />
          <div className="flexBetween pt-3">
            <h5 className="h5">Shipping fee:</h5>
            <p className="h5">
              free within nrb. <br /> outside nrb will be dm'd
            </p>
          </div>
          <hr className="mx-auto h-[1px] w-full bg-gray-900/10" />
          <div className="flexBetween pt-3">
            <h5 className="h5">Total:</h5>
            <p className="h5">
              {currency}
              {getCartAmount() === 0 ? "0.00" : getCartAmount()}.00
            </p>
          </div>
          <hr className="mx-auto h-[1px] w-full bg-gray-900/10" />
        </section>
      );
    };
    
    export default CartTotal;