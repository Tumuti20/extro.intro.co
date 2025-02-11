import React from "react";
import Footer from "./Footer";

const CustomerComplaintsPolicy = () => {
  return (
    <div className="max-padd-container max-w-6xl mx-auto p-8  from-blue-50 to-white shadow-xl rounded-lg">
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
          <li><strong>Phone Support:</strong> Call our helpline at <strong>[Customer Service Phone Number]</strong>.</li>
          <li><strong>Social Media:</strong> Reach out through Instagram, Facebook, or Twitter.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">4. Complaint Handling Process</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Acknowledgment:</strong> Complaints are acknowledged within 24 hours.</li>
          <li><strong>Initial Assessment:</strong> Simple issues are resolved in 48 hours, complex ones in 5-7 business days.</li>
          <li><strong>Resolution Proposal:</strong> We offer refunds, exchanges, discounts, or corrective actions.</li>
          <li><strong>Customer Response:</strong> Customers can accept or escalate the resolution.</li>
          <li><strong>Final Resolution:</strong> Communicated within 3 business days after escalation.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">5. Complaint Escalation</h3>
        <p>Unresolved complaints can be escalated to senior customer service representatives or company management.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">6. Refund and Return Policies</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Defective Items:</strong> Must be reported within 7 days. Refund or replacement within 5 business days.</li>
          <li><strong>Incorrect Orders:</strong> Report within 3 days. Correct items will be shipped at no extra cost.</li>
          <li><strong>General Returns:</strong> Unworn items can be returned within 14 days. Refunds issued in 7 business days.</li>
          <li><strong>Non-Refundable Items:</strong> Personalized or final sale items are not eligible for return.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">7. Preventive Measures</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Quality control checks on all products.</li>
          <li>Improved sizing guides for better fit selection.</li>
          <li>Faster response times for customer inquiries.</li>
          <li>Clear policies on returns, refunds, and exchanges.</li>
          <li>Enhanced order tracking for real-time updates.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">8. Customer Rights & Responsibilities</h3>
        <p><strong>Customer Rights:</strong> Quality products, fair resolutions, and escalation options.</p>
        <p><strong>Customer Responsibilities:</strong> Providing accurate complaint details and reporting issues on time.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">9. Confidentiality and Data Protection</h3>
        <p>All complaints are handled confidentially. Customer data is protected in compliance with privacy laws.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-black">10. Contact Information</h3>
        <ul className="list-disc pl-6">
          <li><strong>Email:</strong> support@extrointro.com</li>
          <li><strong>Phone:</strong> +254 714 1022 14</li>
          <li><strong>Website:</strong> http://extrointro.vercel.app</li>
          <li><strong>Social Media:</strong> @extro_intro</li>
        </ul>
      </section>

      <p className="text-center text-lg font-semibold text-black">We value your satisfaction and strive to improve your experience with Extro.Intro.</p>

      <Footer />
    </div>
  );
};

export default CustomerComplaintsPolicy;
