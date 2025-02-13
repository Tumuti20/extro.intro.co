import React from "react";
import Footer from "./Footer";

const CookiePolicy = () => {
  return (
    <div className="max-padd-container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-4">Cookie Policy</h1>
      <p>
        At Extro.Intro, we are committed to protecting your privacy. This Cookie Policy explains how we use cookies and similar technologies to enhance your experience.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit our website. They help us recognize you, remember your preferences, and improve website functionality.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. Types of Cookies We Use</h2>
      <ul className="list-disc pl-5">
        <li><strong>Essential Cookies:</strong> Required for website functionality.</li>
        <li><strong>Performance Cookies:</strong> Analyze site traffic and user behavior.</li>
        <li><strong>Marketing Cookies:</strong> Used for personalized advertising.</li>
        <li><strong>Third-Party Cookies:</strong> Placed by external services (e.g., Google Analytics, Facebook Pixel).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Third-Party Cookies</h2>
      <h3 className="text-lg font-semibold mt-4">Google Analytics</h3>
      <p>Tracks site usage to improve performance. <a href="https://tools.google.com/dlpage/gaoptout" className="text-secondary">Opt-out here</a>.</p>

      <h3 className="text-lg font-semibold mt-4">Facebook Pixel</h3>
      <p>Enhances ad targeting on Facebook and Instagram. <a href="https://www.facebook.com/settings?tab=ads" className="text-secondary">Manage ad settings</a>.</p>

      <h3 className="text-lg font-semibold mt-4">YouTube Cookies</h3>
      <p>Stores video preferences and engagement metrics. <a href="https://myaccount.google.com/data-and-personalization" className="text-secondary">Manage Google settings</a>.</p>

      <h2 className="text-xl font-semibold mt-6">4. Managing Cookies</h2>
      <p>
        You can adjust cookie settings through your browser:
      </p>
      <ul className="list-disc pl-5">
        <li><strong>Chrome:</strong> Go to Settings &gt; Privacy &gt; Cookies.</li>
        <li><strong>Firefox:</strong> Go to Preferences &gt; Privacy & Security.</li>
        <li><strong>Safari:</strong> Go to Preferences &gt; Privacy.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">5. GDPR & CCPA Compliance</h2>
      <p>We comply with global privacy laws, allowing users to:</p>
      <ul className="list-disc pl-5">
        <li>Request access to stored cookie data.</li>
        <li>Opt out of non-essential cookies.</li>
        <li>Request deletion of cookie data.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">6. Cookies in Mobile Apps</h2>
      <p>If you use our mobile app, cookies may store login credentials and app preferences.</p>

      <h2 className="text-xl font-semibold mt-6">7. Contact Us</h2>
      <ul className="list-disc pl-5">
        <li><strong>Email:</strong> privacy@extrointro.com</li>
        <li><strong>Phone:</strong> +254 714 102 214</li>
        <li><strong>Address:</strong> Extrovert Introvert HQ, Nairobi, Kenya</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">8. Updates to This Policy</h2>
      <p>We update this policy periodically. Last Updated: [Insert Date]</p>

      <Footer />
    </div>
  );
};

export default CookiePolicy;