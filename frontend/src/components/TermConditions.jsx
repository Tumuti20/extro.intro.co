import React from "react";
import Footer from "./Footer";

const TermsConditions = () => {
  return (
    <div className="max-padd-container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-4">Terms & Conditions</h1>
      <p>Last Updated:Today</p>

      <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
      <p>Welcome to Extro.Intro. By accessing or using our website, you agree to be bound by these Terms and Conditions.</p>

      <h2 className="text-xl font-semibold mt-6">2. User Accounts</h2>
      <h3 className="text-lg font-semibold mt-4">2.1 Registration</h3>
      <p>To make a purchase, you may be required to create an account. You must provide accurate information and keep your credentials secure.</p>

      <h3 className="text-lg font-semibold mt-4">2.2 Account Termination</h3>
      <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>

      <h2 className="text-xl font-semibold mt-6">3. Orders & Payments</h2>
      <h3 className="text-lg font-semibold mt-4">3.1 Accepted Payment Methods</h3>
      <ul className="list-disc pl-5">
        <li>M-Pesa</li>
        <li>Google Pay</li>
        <li>Visa/MasterCard</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">3.2 Order Confirmation</h3>
      <p>All orders are subject to acceptance and availability.</p>

      <h3 className="text-lg font-semibold mt-4">3.3 Fraud Prevention</h3>
      <p>We use secure gateways to protect your transactions. Fraudulent transactions will be reported.</p>

      <h2 className="text-xl font-semibold mt-6">4. Shipping & Delivery</h2>
      <p>Delivery times depend on your location:</p>
      <ul className="list-disc pl-5">
        <li>Kenya: 2-5 business days</li>
        <li>International: 7-14 business days</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">5. Returns & Refunds</h2>
      <h3 className="text-lg font-semibold mt-4">5.1 Return Eligibility</h3>
      <p>Items must be unused, in original packaging, and returned within 30 days.</p>

      <h3 className="text-lg font-semibold mt-4">5.2 Refund Process</h3>
      <p>Refunds will be processed within 7-10 business days after receiving the return.</p>

      <h2 className="text-xl font-semibold mt-6">6. Privacy & Data Protection</h2>
      <p>We collect and process personal data as outlined in our Privacy Policy.</p>

      <h2 className="text-xl font-semibold mt-6">7. Intellectual Property</h2>
      <p>All website content, including logos, designs, and text, is protected under copyright laws.</p>

      <h2 className="text-xl font-semibold mt-6">8. Prohibited Activities</h2>
      <ul className="list-disc pl-5">
        <li>Unauthorized account access</li>
        <li>Reselling our products without consent</li>
        <li>Spamming or distributing harmful software</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">9. Dispute Resolution</h2>
      <p>Disputes will be resolved under Kenyan law.</p>

      <h2 className="text-xl font-semibold mt-6">10. Changes to Terms</h2>
      <p>We may update these Terms periodically. Continued use of our services constitutes acceptance.</p>

      <h2 className="text-xl font-semibold mt-6">11. Contact Information</h2>
      <ul className="list-disc pl-5">
        <li><strong>Email:</strong> support@extrointro.com</li>
        <li><strong>Phone:</strong> +254 714 102 214</li>
        <li><strong>Address:</strong> Extrovert Introvert HQ, Nairobi, Kenya</li>
      </ul>

      <Footer />
    </div>
  );
};

export default TermsConditions;