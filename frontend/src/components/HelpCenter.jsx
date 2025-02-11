import React from "react";

const HelpCenter = () => {
  return (
    <div className="maz-padd-container   mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Extro.Intro Help Center</h1>
      <p>
        At Extro.Intro, we are committed to providing you with the best shopping experience possible. 
        Whether you have questions about our products, orders, or policies, we are here to assist you every step of the way.
      </p>

      <h2 className="text-xl font-semibold mt-6">Ordering & Payment</h2>
      <h3 className="text-lg font-semibold mt-4">How to Place an Order</h3>
      <ul className="list-disc pl-5">
        <li>Browse our collections and add your favorite items to the cart.</li>
        <li>Proceed to checkout and fill in your shipping and payment details.</li>
        <li>Confirm your order and await a confirmation email with tracking information.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">Accepted Payment Methods</h3>
      <ul className="list-disc pl-5">
        <li>Credit/Debit Cards (Visa, MasterCard)</li>
        <li>Mobile Money (M-Pesa, Airtel Money, )</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Shipping & Delivery</h2>
      <h3 className="text-lg font-semibold mt-4">Shipping Policy</h3>
      <p>
        We offer fast and reliable shipping options both locally and internationally. Estimated delivery times vary based on location:
      </p>
      <ul className="list-disc pl-5">
        <li><strong>Local Deliveries (Kenya)</strong>: 2-5 business days</li>
        <li><strong>International Deliveries</strong>: 7-14 business days</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">Shipping Costs</h3>
      <p>Shipping costs depend on the destination and order size. You will see the final shipping cost at checkout before payment.</p>

      <h3 className="text-lg font-semibold mt-4">Tracking Your Order</h3>
      <p>Once your order is shipped, you will receive an email  to monitor your shipment.</p>

      <h2 className="text-xl font-semibold mt-6">Returns & Refunds</h2>
      <h3 className="text-lg font-semibold mt-4">Return Policy</h3>
      <ul className="list-disc pl-5">
        <li>The item must be in its original condition, unworn, and with tags attached.</li>
        <li>You must have proof of purchase.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">How to Request a Return</h3>
      <ul className="list-disc pl-5">
        <li>Contact our support team at <strong>support@extrointro.com</strong> with your order details.</li>
        <li>Our team will guide you through the return process.</li>
        <li>Once we receive and inspect the item, you’ll be eligible for a refund or exchange.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">Refund Process</h3>
      <p>Refunds will be processed within 7-10 business days after receiving the returned item. The refund will be credited to your original payment method.</p>

      <h2 className="text-xl font-semibold mt-6">Customer Support</h2>
      <h3 className="text-lg font-semibold mt-4">Contact Us</h3>
      <ul className="list-disc pl-5">
        <li><strong>Email</strong>: support@extrointro.com</li>
        <li><strong>Phone</strong>: +254 714 102 214</li>
        <li><strong>Live Chat</strong>: Available on our website from 9 AM - 6 PM (Monday - Saturday)</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">Frequently Asked Questions (FAQ)</h3>
      <p>Before reaching out, you may find answers in our FAQ section, which covers common questions about orders, shipping, returns, and more.</p>

      <h2 className="text-xl font-semibold mt-6">Loyalty Program & Discounts</h2>
      <p>Sign up for our loyalty program to enjoy exclusive perks:</p>
      <ul className="list-disc pl-5">
        <li>Earn points for every purchase.</li>
        <li>Get early access to new collections and special discounts.</li>
        <li>Receive birthday surprises and seasonal offers.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Wholesale & Collaborations</h2>
      <ul className="list-disc pl-5">
        <li>Contact our wholesale team at <strong>wholesale@extrointro.com</strong> for bulk orders.</li>
        <li>Influencers and content creators can reach us at <strong>collabs@extrointro.com</strong> for partnership opportunities.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Terms & Policies</h2>
      <p>For full details on our terms and conditions, privacy policy, and cookie usage, please visit our Legal section.</p>

      <p className="mt-6">We hope this Help Center provides you with all the information you need. Thank you for being part of the Extro.Intro family – where fashion meets personality!</p>
    </div>
  );
};

export default HelpCenter;

