import React from 'react';
import Footer from './Footer';

const SustainabilityPage = () => {
  return (
    <div className="max-padd-container text-black p-6">
      <h1 className="text-4xl text-center font-bold mb-6">Sustainability at Extrovert Introvert Clothing Company</h1>
      <p className="mb-6">
        At Extrovert Introvert Clothing Company, sustainability is at the heart of everything we do. We believe that fashion should not only be stylish but also responsible and ethical. Our commitment to sustainability drives every decision, from the materials we use to the way we produce and distribute our garments.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Sustainable Mission</h2>
        <p>We are dedicated to reducing our environmental footprint while providing high-quality, fashion-forward clothing. Our mission is to integrate sustainable practices into every step of our supply chain and encourage a positive impact on the planet and our communities.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Eco-Friendly Materials</h2>
        <ul className="list-disc ml-6">
          <li><strong>Organic Cotton:</strong> Certified organic cotton requiring less water and fewer chemicals.</li>
          <li><strong>Recycled Fabrics:</strong> Up-cycled materials to reduce waste and extend textile life cycles.</li>
          <li><strong>Natural Dyes:</strong> Non-toxic, biodegradable dyes that are safe for both the environment and customers.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ethical Manufacturing</h2>
        <ul className="list-disc ml-6">
          <li><strong>Fair Labor Practices:</strong> Ensuring fair wages, safe working conditions, and ethical treatment of workers.</li>
          <li><strong>Low-Impact Production:</strong> Focused on reducing energy consumption and minimizing waste.</li>
          <li><strong>Handcrafted Techniques:</strong> Supporting artisans and small-batch production to reduce excess inventory.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Sustainable Packaging</h2>
        <ul className="list-disc ml-6">
          <li><strong>Biodegradable Packaging:</strong> Compostable bags and recyclable boxes for all shipments.</li>
          <li><strong>Minimalist Design:</strong> Packaging that uses fewer materials while maintaining durability.</li>
          <li><strong>Plastic-Free Alternatives:</strong> Commitment to eliminating single-use plastics.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Carbon Footprint Reduction</h2>
        <ul className="list-disc ml-6">
          <li><strong>Energy-Efficient Operations:</strong> Utilizing renewable energy sources whenever possible.</li>
          <li><strong>Eco-Friendly Transportation:</strong> Partnering with sustainable logistics providers.</li>
          <li><strong>Local Sourcing:</strong> Reducing emissions by working with local suppliers.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Community Engagement & Social Responsibility</h2>
        <ul className="list-disc ml-6">
          <li><strong>Charity Initiatives:</strong> A portion of profits dedicated to environmental and social causes.</li>
          <li><strong>Clothing Recycling Programs:</strong> Encouraging customers to return worn-out garments for recycling.</li>
          <li><strong>Educational Campaigns:</strong> Promoting sustainability awareness through workshops and events.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Commitment to the Future</h2>
        <p>
          At Extrovert Introvert Clothing Company, we continuously seek innovative ways to improve our sustainability efforts. We understand that the journey to a greener future is ongoing, and we invite our customers and partners to join us in making a lasting impact.
        </p>
        <p>By choosing Extrovert Introvert, you are supporting a movement towards a more sustainable and ethical fashion industry.</p>
        <p>Thank you for being part of our journey towards a better planet!</p>
      </section>
      <Footer />
    </div>
  );
};

export default SustainabilityPage;

