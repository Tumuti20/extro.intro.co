import React, { useState } from "react";
import Footer from "./Footer";

const CustomerComplaintsPolicy = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    complaint: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("https://formsubmit.co/support@extrointro.com", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
      });

      if (response.ok) {
        setStatus("✅ Complaint submitted successfully!");
        setFormData({ email: "", phone: "", complaint: "" });
      } else {
        setStatus("❌ Error submitting complaint. Try again.");
      }
    } catch (error) {
      setStatus("❌ Error: Unable to submit complaint.");
    }
  };

  return (
    <div>
    <div className="max-padd-container py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-black">Extro.Intro Customer Complaints Policy and Resolution Process</h2>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">1. Introduction</h3>
        <p>
          At Extro.Intro, we are committed to delivering high-quality clothing and exceptional customer service.
          However, we understand that sometimes things may not go as expected. This document outlines our
          approach to handling customer complaints, ensuring transparency, fairness, and efficiency in resolving issues.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">2. Scope of Complaints</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Product Quality Issues:</strong> Defective items, incorrect sizing, fabric defects, color discrepancies.</li>
          <li><strong>Order and Delivery Issues:</strong> Delayed shipments, missing items, incorrect items received.</li>
          <li><strong>Customer Service Concerns:</strong> Unresponsive support, rude service representatives.</li>
          <li><strong>Billing and Payment Issues:</strong> Overcharges, refund disputes, unauthorized transactions.</li>
          <li><strong>Website and Online Experience Issues:</strong> Order errors, checkout failures, website glitches.</li>
          <li><strong>Return and Refund Disputes:</strong> Denied returns, delayed refunds, unclear policies.</li>
          <li><strong>Promotional and Discount Concerns:</strong> Discount codes not working, incorrect application of promotions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">3. How to File a Complaint</h3>
        <p>You can file complaints through the following channels:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Online Form:</strong> Submit your complaint via our website with details and supporting evidence.</li>
          <li><strong>Email Support:</strong> Email <strong>support@extrointro.com</strong> with the subject line: "Complaint – [Issue]".</li>
          <li><strong>Phone Support:</strong> Call our helpline at <strong>+254 714 102 214</strong>.</li>
          <li><strong>Social Media:</strong> Reach out through Instagram, Facebook, or Twitter.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">Submit Your Complaint</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block font-semibold">Complaint</label>
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button type="submit" className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary">Submit Complaint</button>
        </form>
        {status && <p className="mt-4 text-center font-semibold">{status}</p>}
      </section>

    </div>
      <Footer />
    </div>
  );
};

export default CustomerComplaintsPolicy;
