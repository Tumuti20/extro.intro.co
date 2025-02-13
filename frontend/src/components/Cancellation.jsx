import React, { useState } from 'react';
import Footer from './Footer';

const CancellationPolicy = () => {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        cancellationReason: "",
        screenshot: null
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, screenshot: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        const formDataToSend = new FormData();
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("cancellationReason", formData.cancellationReason);
        if (formData.screenshot) {
            formDataToSend.append("screenshot", formData.screenshot);
        }

        try {
            const response = await fetch("https://formsubmit.co/support@extrointro.com", {
                method: "POST",
                body: formDataToSend
            });

            if (response.ok) {
                setStatus("✅ Cancellation request submitted successfully!");
                setFormData({ email: "", phone: "", cancellationReason: "", screenshot: null });
            } else {
                setStatus("❌ Error submitting request. Try again.");
            }
        } catch (error) {
            setStatus("❌ Error: Unable to submit request.");
        }
    };

    return (
        <div>
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
            <li>Email us at <a href="mailto:support@extrointro.com" className="text-secondary">support@extrointro.com</a> with their <strong>order number</strong> and reason for cancellation.</li>
            <li>Call our customer service hotline at <strong>+254 14 1022 14</strong>.</li>
            <li>Use the cancellation request form on our website.</li>
        </ol>
        
        <p className="mt-6">For any questions, feel free to contact our support team!</p>
                
                <h2 className="text-2xl font-semibold mt-4">Submit a Cancellation Request</h2>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                        <label className="block font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Cancellation Reason</label>
                        <textarea
                            name="cancellationReason"
                            value={formData.cancellationReason}
                            onChange={handleChange}
                            rows="4"
                            required
                            className="w-full p-2 border rounded"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block font-semibold">Upload Screenshot </label>
                        <input
                            type="file"
                            name="screenshot"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <button type="submit" className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary">Submit Cancellation</button>
                </form>
                {status && <p className="mt-4 text-center font-semibold">{status}</p>}
            </div>
            <Footer />
        </div>
    );
};

export default CancellationPolicy;
