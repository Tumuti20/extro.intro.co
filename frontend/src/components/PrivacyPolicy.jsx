import React from "react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div>
    <div className="max-padd-container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-4">Extrovert Introvert Privacy Policy</h1>

      <h2 className="text-xl font-semibold mt-6">Introduction</h2>
      <p>
        Welcome to Extrovert Introvert. Your privacy is critically important to us, and we are committed to protecting your personal data.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>

      <h3 className="text-lg font-semibold mt-4">A. Personal Identification Information</h3>
      <ul className="list-disc pl-5">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Shipping and billing addresses</li>
        <li>Date of birth</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">B. Payment Information</h3>
      <ul className="list-disc pl-5">
        <li>Credit/debit card details (processed through secure payment gateways)</li>
        <li>Mobile money transaction details</li>
        <li>PayPal transaction details</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">C. Technical Data</h3>
      <ul className="list-disc pl-5">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device type and operating system</li>
        <li>Cookies and tracking technology data</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. How We Collect Information</h2>
      <ul className="list-disc pl-5">
        <li>When you create an account on our website</li>
        <li>When you make a purchase</li>
        <li>When you subscribe to our newsletter</li>
        <li>When you engage with our customer service team</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. How We Use Your Information</h2>
      <ul className="list-disc pl-5">
        <li>Process and fulfill your orders</li>
        <li>Improve user experience and website functionality</li>
        <li>Provide personalized marketing and promotions</li>
        <li>Enhance customer service interactions</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">4. Cookies & Tracking Technologies</h2>
      <ul className="list-disc pl-5">
        <li><strong>Essential Cookies</strong>: Required for website functionality</li>
        <li><strong>Performance Cookies</strong>: Help analyze site traffic and user behavior</li>
        <li><strong>Marketing Cookies</strong>: Used for targeted advertisements</li>
        <li><strong>Third-Party Cookies</strong>: Set by external services</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">5. How We Share Your Information</h2>
      <p>We do not sell your personal information. However, we may share it with:</p>
      <ul className="list-disc pl-5">
        <li><strong>Payment Processors</strong>: To securely handle transactions</li>
        <li><strong>Shipping & Logistics Partners</strong>: To ensure order delivery</li>
        <li><strong>Third-Party Analytics Services</strong>: To monitor and improve website performance</li>
        <li><strong>Legal Authorities</strong>: When required by law or for fraud prevention</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">6. Data Security Measures</h2>
      <ul className="list-disc pl-5">
        <li><strong>SSL Encryption</strong>: For secure data transmission</li>
        <li><strong>Firewalls & Secure Servers</strong>: To prevent unauthorized access</li>
        <li><strong>Two-Factor Authentication (2FA)</strong>: For account security</li>
        <li><strong>Regular Security Audits</strong>: To ensure compliance with best practices</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">7. Your Rights & Choices</h2>
      <ul className="list-disc pl-5">
        <li><strong>Right to Access</strong>: Request a copy of your stored data</li>
        <li><strong>Right to Correction</strong>: Update or correct incorrect data</li>
        <li><strong>Right to Deletion</strong>: Request data removal</li>
        <li><strong>Right to Object</strong>: Opt out of marketing communications</li>
        <li><strong>Right to Data Portability</strong>: Receive a copy of your data in a structured format</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">8. Data Retention Policy</h2>
      <ul className="list-disc pl-5">
        <li><strong>Customer accounts</strong>: Retained until account deletion request</li>
        <li><strong>Purchase history</strong>: Retained for tax and legal compliance (minimum 5 years)</li>
        <li><strong>Marketing preferences</strong>: Retained until the user opts out</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">9. Third-Party Integrations</h2>
      <p>Our website may include links to third-party platforms. We are not responsible for their privacy policies.</p>

      <h2 className="text-xl font-semibold mt-6">10. International Data Transfers</h2>
      <p>As we serve global customers, your data may be transferred to countries outside your region. We ensure compliance with GDPR for EU customers.</p>

      <h2 className="text-xl font-semibold mt-6">11. Children’s Privacy</h2>
      <p>Our services are not intended for individuals under 16 years old. If a parent/guardian believes a child has provided personal data, they can contact us to remove it.</p>

      <h2 className="text-xl font-semibold mt-6">12. Updates to This Privacy Policy</h2>
      <p>We may update this Privacy Policy periodically. Continued use of our services after updates signifies acceptance.</p>

      <h2 className="text-xl font-semibold mt-6">13. Contact Information</h2>
      <ul className="list-disc pl-5">
        <li><strong>Email</strong>: privacy@extrointro.com</li>
        <li><strong>Phone</strong>: +254 714 102 214</li>
        <li><strong>Mailing Address</strong>: Extrovert Introvert HQ, Nairobi, Kenya</li>
      </ul>

      <p className="mt-6">
        By using Extrovert Introvert’s website and services, you agree to our Privacy Policy.
        Your trust is important to us, and we are dedicated to keeping your information secure.
      </p>

    </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;