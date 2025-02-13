import React from "react"
import Footer from "./Footer";

const ContactInfo = () => {
  return (
    <div>
    <div className="max-padd-container text-black p-10 min-h-screen">
      <div className="max-w-6xl ">
        <h1 className="text-4xl font-bold mb-6">Contact Us - Extrovert Introvert</h1>
        <p className="text-lg mb-4">
          We are committed to providing excellent customer service. If you have any questions, concerns, or need
          assistance, please do not hesitate to reach out to us using any of the following methods.
        </p>

        {/* General Contact Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">General Contact</h2>
          <p>Email: <a href="mailto:support@extrointro.com" className="text-black">support@extrointro.com</a></p>
          <p>Phone: <span className="font-semibold">+254 714 102 214</span></p>
          <p>Office Address: <span className="font-semibold">123 Fashion Street, Nairobi, Kenya</span></p>
          <p>Working Hours: Monday - Saturday (9 AM - 6 PM)</p>
        </div>

        {/* Customer Support */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Customer Support</h2>
          <p>
            Our customer support team is available via email, phone, and live chat. We aim to respond to all queries
            within 24 hours.
          </p>
          <p>
            Live Chat: Available on our instagram from <span className="font-semibold">9 AM - 6 PM (Monday - Saturday)</span>
          </p>
          <p>For urgent matters, call us at <span className="font-semibold">+254 714 102 214</span></p>
        </div>

        {/* Wholesale & Partnerships */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Wholesale & Partnerships</h2>
          <p>
            Interested in selling Extrovert Introvert clothing in your store? Contact our wholesale team for bulk orders
            and special pricing.
          </p>
          <p>Email: <a href="mailto:wholesale@extrointro.com" className="text-black">wholesale@extrointro.com</a></p>
          <p>
            For influencer collaborations and partnerships, reach out to our marketing team at
            <a href="mailto:collabs@extrointro.com" className="text-secondary"> collabs@extrointro.com</a>
          </p>
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Connect with Us on Social Media</h2>
          <p>Stay updated with our latest collections, promotions, and announcements by following us:</p>
          <ul className="list-disc ml-6">
            <li>
              Instagram: <a href="https://instagram.com/extrointro" className="text-secondary">@extrointro</a>
            </li>
            <li>
              Facebook: <a href="https://facebook.com/extrointro" className="text-secondary">@extrointro</a>
            </li>
            <li>
              Twitter: <a href="https://twitter.com/extrointro" className="text-secondary">@extrointro</a>
            </li>
          </ul>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p>Before reaching out, check our FAQ section for common questions about orders, shipping, and returns.</p>
          <p>
            Visit: <a href="/faq" className="text-secondary">www.extrointro.com/faq</a>
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default ContactInfo;
