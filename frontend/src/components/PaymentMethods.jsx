import React from "react";
import Footer from "./Footer";

const PaymentMethods = () => {
  return (
    <div className="max-padd-container text-black min-h-screen p-10">
      <div className="   mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Extrovert Introvert Payment Methods
        </h1>
        
        {/* Introduction Section */}
        <section className="mb-6">
          <p className="text-lg text-black">
            At Extrovert Introvert, we aim to provide multiple secure and
            convenient payment options. Whether you prefer mobile money,
            credit/debit cards, or online payments, we have you covered.
          </p>
        </section>
        
        {/* Payment Methods */}
        <section className="mb-6">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Accepted Payment Methods
          </h2>
          
          {/* Credit & Debit Cards */}
          <div className=" mb-6">
            <h3 className="text-2xl text-black">Credit & Debit Cards</h3>
            <p className="text-black mt-2">We accept the following cards:</p>
            <ul className="list-disc list-inside text-black mt-2">
              <li>Visa</li>
              <li>MasterCard</li>
              
              
            </ul>
          </div>
          
          {/* Mobile Money */}
          <div className=" mb-6">
            <h3 className="text-2xl text-black">Mobile Money</h3>
            <p className="text-black mt-2">Supported services:</p>
            <ul className="list-disc list-inside text-black mt-2">
              <li>M-Pesa</li>
              
              
            </ul>
          </div>
          
          {/* PayPal */}
        </section>
        
        {/* Security & Fraud Prevention */}
        <section className="mb-6">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Security & Fraud Prevention
          </h2>
          <p className="text-black">
            Your payment security is our priority. We use:
          </p>
          <ul className="list-disc list-inside text-black mt-2">
            <li>SSL Encryption</li>
            <li>3D Secure Authentication</li>
            <li>Fraud Monitoring</li>
          </ul>
        </section>
        
        {/* Refunds & Disputes */}
        <section className="mb-6">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Refunds & Disputes
          </h2>
          <p className="text-black">
            Refund processing times vary by payment method. Please contact
            customer support for any disputes.
          </p>
        </section>
        
        {/* Contact Support */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Need Help?
          </h2>
          <p className="text-black">Contact us at support@extrointro.com</p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentMethods;
