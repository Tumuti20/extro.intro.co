import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("newsletterEmail");
    if (storedEmail) {
      setSubscribed(true);
    }
  }, []);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    localStorage.setItem("newsletterEmail", email);
    setSubscribed(true);
    setMessage("🎉 Thank you for subscribing! Expect exciting updates soon.");
  };

  const handleUnsubscribe = () => {
    localStorage.removeItem("newsletterEmail");
    setSubscribed(false);
    setMessage("You've been unsubscribed.");
    setEmail("");
  };

  return (
    <div className="max-padd-container p-6">
      {/* Blog Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center mb-6">📰 Fashion & Lifestyle Blog</h1>
        <p className="text-gray-600 text-center mb-8">
          Explore the latest trends, styling tips, and behind-the-scenes insights into the world of fashion.
        </p>

        <div className="space-y-8">
          {/* Blog Post 1 */}
          <div className="border p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">🌟 Top 5 Fashion Trends for This Season</h2>
            <p className="text-gray-700 mt-2">
              This season is all about bold colors, oversized fits, and sustainable fabrics. Bright hues like neon green and hot pink are making waves on runways, while relaxed silhouettes in streetwear and athleisure dominate casual fashion.  
            </p>
            <p className="text-gray-700 mt-2">
              If you're looking to refresh your wardrobe, try mixing statement pieces with classic essentials. A pop of color in a blazer or a unique textured fabric can elevate any look. Don't be afraid to experiment!
            </p>
          </div>

          {/* Blog Post 2 */}
          <div className="border p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">♻ Sustainable Fashion: Why It Matters</h2>
            <p className="text-gray-700 mt-2">
              The fashion industry is undergoing a transformation, with more brands embracing sustainability. But why does it matter?  
            </p>
            <p className="text-gray-700 mt-2">
              Fast fashion contributes significantly to environmental pollution, with millions of garments ending up in landfills every year. By choosing sustainable brands, you support ethical labor practices and reduce waste.  
            </p>
            <p className="text-gray-700 mt-2">
              Start small—opt for clothes made from organic cotton, bamboo fabric, or recycled materials. Supporting second-hand fashion or upcycling old clothes is another great way to contribute to a greener planet.
            </p>
          </div>

          {/* Blog Post 3 */}
          <div className="border p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">👗 How to Build a Timeless Wardrobe</h2>
            <p className="text-gray-700 mt-2">
              A timeless wardrobe is all about quality over quantity. Instead of chasing every trend, focus on classic pieces that never go out of style.  
            </p>
            <p className="text-gray-700 mt-2">
              Some must-haves include a crisp white shirt, a tailored blazer, a well-fitted pair of jeans, and a versatile pair of black or nude heels. Accessories like a leather belt, a structured handbag, and minimalist jewelry can instantly elevate any look.
            </p>
            <p className="text-gray-700 mt-2">
              Investing in durable, high-quality fabrics ensures that your wardrobe lasts for years. It’s not just about looking good—it’s about making sustainable fashion choices that benefit both you and the environment.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-secondary mb-4">📩 Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 text-center mb-6">
          Be the first to know about <span className="text-secondary font-bold">exclusive deals, fashion tips, and early access</span> to our latest collections.
        </p>

        <ul className="list-disc text-gray-700 text-left pl-6 mb-6">
          <li>🔥 Get VIP access to new collections before anyone else.</li>
          <li>🎁 Enjoy subscriber-only discounts & special offers.</li>
          <li>💡 Receive expert fashion advice and styling tips.</li>
          <li>🌍 Stay updated on our sustainable fashion initiatives.</li>
        </ul>

        {message && <p className="text-center text-green-600 font-semibold">{message}</p>}

        {!subscribed ? (
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
              required
            />
            <button
              onClick={handleSubscribe}
              className="w-full bg-secondary text-white p-3 mt-3 rounded-lg font-semibold hover:bg-secondary transition duration-300"
            >
              ✅ Subscribe Now
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <p className="text-green-600 font-semibold">🎉 You're subscribed! Expect amazing updates soon.</p>
            <button
              onClick={handleUnsubscribe}
              className="bg-red-500 text-white p-2 mt-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              ❌ Unsubscribe
            </button>
          </div>
        )}

        <p className="text-gray-500 text-center mt-4 text-sm">
          *We respect your privacy. No spam, just quality updates.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Newsletter;