import React from "react";
import Footer from "./Footer";

const ShippingStatus = () => {
  return (
    <div className=" max-padd-container mx-auto p-6  to-purple-600 text-gray shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-black">Extro.Intro Shipping Status</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-black">Track Your Order with Ease</h3>
        <p>
          At Extro.Intro, we understand how important it is for you to stay informed about the status of your order. Whether you’re eagerly awaiting your latest fashion piece or checking on a gift for a loved one, we ensure a seamless tracking experience. Our shipping status system allows you to check the location of your package, estimated delivery time, and current status effortlessly.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-black">Shipping Status Definitions</h3>
        <ul className="list-disc pl-6">
          <li><strong className="text-black" >Processing:</strong> Your order has been received and is being prepared for shipment.</li>
          <li><strong className="text-black" >Shipped:</strong> Your order has left our warehouse and is on its way to you.</li>
          <li><strong className="text-black" >In Transit:</strong> Your order is moving through our logistics network.</li>
          <li><strong className="text-black" >Out for Delivery:</strong> Your package is with a courier and will arrive soon.</li>
          <li><strong className="text-black" >Delivered:</strong> Your package has arrived at its final destination.</li>
          <li><strong className="text-black" >Exception:</strong> There may be a delay due to unforeseen circumstances (weather, customs clearance, etc.).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-black">Estimated Delivery Time</h3>
        <ul className="list-disc pl-6">
          <li><strong className="text-black">Local Deliveries (Kenya):</strong> 2-5 business days</li>
          <li><strong className="text-black">East African Region:</strong> 5-10 business days</li>
          <li><strong className="text-black">International Deliveries:</strong> 7-14 business days</li>
        </ul>
        <p>Expedited shipping options are available at checkout for faster delivery times.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-black">What If My Order is Delayed?</h3>
        <p>While we strive to ensure timely deliveries, there are situations where delays may occur due to factors beyond our control, such as:</p>
        <ul className="list-disc pl-6">
          <li>High order volumes during peak seasons</li>
          <li>Customs clearance for international shipments</li>
          <li>Weather disruptions</li>
          <li>Logistics network delays</li>
        </ul>
        <p>If your order has not arrived within the estimated time, please contact our support team at <strong className="text-black">support@extrointro.com</strong> or call <strong className="text-black font-extrabold">+254 714 102 214</strong> for further assistance.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-black">Change of Delivery Address</h3>
        <p>If you need to update your delivery address after placing an order, please follow these steps:</p>
        <ul className="list-disc pl-6">
          <li>Contact our customer support team as soon as possible with your order number and new address.</li>
          <li>Address changes can only be made before the order has been shipped.</li>
          <li>If your order has already been dispatched, we may not be able to change the address, but we will do our best to assist you.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-black">Missing or Lost Packages</h3>
        <p>In rare cases, packages may go missing during transit. If your order tracking shows as delivered but you have not received it:</p>
        <ul className="list-disc pl-6">
          <li>Check with your neighbors or building concierge in case they accepted the package on your behalf.</li>
          <li>Verify the shipping address entered at checkout.</li>
          <li>Contact the courier service directly using the tracking number.</li>
          <li>If you still cannot locate your package, reach out to our customer support team for assistance.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-black">Shipping Fees & Customs Duties</h3>
        <p><strong className="text-black">Shipping Fees:</strong> Calculated at checkout based on delivery location and order size.</p>
        <p><strong className="text-black">International Orders:</strong> Customs duties and taxes may apply, which are the responsibility of the customer.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-black">Contact Us</h3>
        <p>If you have any concerns or questions regarding your shipping status, don’t hesitate to reach out:</p>
        <ul className="list-disc pl-6">
          <li><strong className="text-black">Email:</strong> support@extrointro.com</li>
          <li><strong className="text-black">Phone:</strong> +254 714 102 214</li>
          <li><strong className="text-black">Live Chat:</strong> Available on our website from 9 AM - 6 PM (Monday - Saturday)</li>
        </ul>
      </section>

      <p className="text-center mt-6 font-semibold text-black">Thank you for shopping with Extro.Intro! We appreciate your support and strive to provide a smooth and reliable shipping experience.</p>

      <Footer />
    </div>
  );
};

export default ShippingStatus;
