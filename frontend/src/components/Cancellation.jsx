import React from 'react';
import Footer from './Footer';

const CancellationPolicy = () => {
    return (
        <div className="max-padd-container text-black font-sans p-6">
            <h1 className="text-3xl text-center  font-bold">Extrovert Introvert Cancellation Policy</h1>
            
            <h2 className="text-2xl font-semibold mt-4">1. Order Cancellations</h2>
            <p>Customers may cancel their orders under the following conditions:</p>
            <ul className="list-disc pl-6">
                <li><strong>Before Processing:</strong> Orders can be canceled within <strong>24 hours</strong> of placement if they have not been processed.</li>
                <li><strong>After Processing:</strong> If the order has already been shipped, cancellations are <strong>not</strong> possible. Instead, customers must follow the return and refund process.</li>
                <li><strong>Custom or Personalized Orders:</strong> These are <strong>non-cancelable</strong> once production has started.</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-3">Process for Order Cancellation:</h3>
            <ul className="list-disc pl-6">
                <li>Customers must contact our support team via email or phone with their <strong>order number</strong>.</li>
                <li>If eligible, refunds will be processed within <strong>5-7 business days</strong>.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-4">2. Subscription & Service Cancellations</h2>
            <p>For customers with a subscription or recurring service:</p>
            <ul className="list-disc pl-6">
                <li><strong>Monthly Subscriptions:</strong> Cancellations must be requested at least <strong>3 days</strong> before the next billing date.</li>
                <li><strong>Annual Subscriptions:</strong> Customers can cancel anytime, but refunds will only be granted if the request is made within <strong>7 days</strong> of renewal.</li>
                <li><strong>One-Time Services:</strong> If a cancellation request is received before work begins, a full refund will be issued. If work has started, a partial refund may be provided based on progress.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-4">3. Refund & Return Policies</h2>
            <ul className="list-disc pl-6">
                <li><strong>Eligibility for Refunds:</strong> Items must be <strong>unused, in original packaging</strong>, and returned within <strong>14 days</strong> of delivery.</li>
                <li><strong>Non-Refundable Items:</strong> Custom-made products, final sale items, and gift cards.</li>
                <li><strong>Refund Processing:</strong> Refunds will be processed within <strong>7-10 business days</strong> upon receipt of returned items.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-4">4. Event & Booking Cancellations</h2>
            <ul className="list-disc pl-6">
                <li><strong>Customer-Initiated Cancellations:</strong> Customers must cancel at least <strong>48 hours</strong> before the scheduled event to receive a full refund.</li>
                <li><strong>Company-Initiated Cancellations:</strong> If we cancel an event due to unforeseen circumstances, customers will receive a <strong>full refund or rescheduling option</strong>.</li>
                <li><strong>No-Show Policy:</strong> No refunds will be provided for no-shows.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-4">5. Exceptions & Special Cases</h2>
            <ul className="list-disc pl-6">
                <li><strong>Force Majeure:</strong> In cases of natural disasters, emergencies, or government restrictions, we will assess cancellations on a case-by-case basis.</li>
                <li><strong>Damaged or Defective Items:</strong> If a product arrives damaged, customers must report it within <strong>48 hours</strong> for a replacement or refund.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-4">6. How to Request a Cancellation</h2>
            <p>To request a cancellation, customers should:</p>
            <ol className="list-decimal pl-6">
                <li>Email us at <a href="mailto:support@extrointro.com" className="text-blue-500">support@extrointro.com</a> with their <strong>order number</strong> and reason for cancellation.</li>
                <li>Call our customer service hotline at <strong>+254 14 1022 14</strong>.</li>
                <li>Use the cancellation request form on our website.</li>
            </ol>
            
            <p className="mt-6">For any questions, feel free to contact our support team!</p>

            <Footer />
        </div>
    );
};

export default CancellationPolicy;