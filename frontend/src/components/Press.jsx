import React from 'react';
import Footer from './Footer';

const PressPage = () => {
  return (
    <div className="max-padd-container text-black p-6">
      <h1 className="text-4xl text-center font-bold mb-6">Press & Media at Extrovert Introvert Clothing Company</h1>
      <p className="mb-6">
        At Extrovert Introvert Clothing Company, we value the power of media and storytelling. Our brand is built on creativity, individuality, and sustainability, and we love sharing our journey with the world. Through press features, interviews, and media collaborations, we strive to inspire and connect with our audience.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Latest Press Releases</h2>
        <ul className="list-disc ml-6">
          <li><strong>January 2025:</strong> Extrovert Introvert Launches a New Eco-Friendly Collection.</li>
          <li><strong>December 2024:</strong> Celebrating a Year of Growth and Sustainability Achievements.</li>
          <li><strong>November 2024:</strong> Behind the Scenes: How We Create Sustainable Fashion.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Media Features</h2>
        <p>Extrovert Introvert Clothing Company has been featured in various fashion and lifestyle publications, highlighting our commitment to quality and sustainability.</p>
        <ul className="list-disc ml-6">
          <li><strong>Vogue:</strong> "The Rise of Dual-Personality Fashion – Extrovert Introvert’s Bold Approach."</li>
          <li><strong>Forbes:</strong> "Sustainable Fashion Brands Making a Difference in 2025."</li>
          <li><strong>GQ:</strong> "How Extrovert Introvert is Changing the Game for Streetwear."</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Interviews & Collaborations</h2>
        <p>We have had the pleasure of collaborating with influencers, sustainability advocates, and industry leaders.</p>
        <ul className="list-disc ml-6">
          <li><strong>Podcast Feature:</strong> "The Future of Ethical Fashion" with our CEO.</li>
          <li><strong>YouTube Series:</strong> "Behind the Brand – The Extrovert Introvert Story."</li>
          <li><strong>Influencer Spotlights:</strong> Our designs worn by top fashion icons.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Press Contact</h2>
        <p>For press inquiries, collaborations, or media opportunities, reach out to our media team at:</p>
        <p><strong>Email:</strong> press@extrovertintrovert.com</p>
        <p><strong>Phone:</strong> +254 714 102 214</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Our Story</h2>
        <p>
          Extrovert Introvert Clothing Company is more than just a brand; it’s a movement. We invite journalists, bloggers, and content creators to help us tell our story. Thank you for your support in sharing our mission with the world!
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default PressPage;

