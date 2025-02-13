import React from 'react';
import Footer from './Footer';

const TeamPage = () => {
  return (
    <div>
    <div className=" max-padd-container text-black p-6">
      <h1 className="text-4xl text-center font-bold mb-6">Our Team at Extrovert Introvert Clothing Company</h1>
      <p className="mb-6">
        At Extrovert Introvert Clothing Company, we believe that fashion is more than just fabric and stitches—it's an expression of personality, a statement of identity, and a movement toward inclusivity. Behind every piece of clothing we design, there is a team of passionate, creative, and dedicated individuals who bring our vision to life. Meet the brilliant minds and skilled hands that shape the soul of Extrovert Introvert.
      </p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">The Visionaries: Leadership Team</h2>
        <ul className="list-disc ml-6">
          <li><strong>Founder/CEO:</strong> The mastermind behind Extrovert Introvert, Samuel Tumuti is a visionary who saw the need for a clothing brand that embraces duality.</li>
          <li><strong>COO:</strong> Our operations guru, ensuring that everything from production to logistics runs smoothly.</li>
          <li><strong>Creative Director:</strong> The artistic genius responsible for our unique designs.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">The Creators: Design & Production Team</h2>
        <ul className="list-disc ml-6">
          <li><strong>Fashion Designers:</strong> Trendsetters who create stunning collections.</li>
          <li><strong>Pattern Makers:</strong> Skilled artisans who bring sketches to life.</li>
          <li><strong>Tailors & Seamstresses:</strong> Meticulously stitching each piece with precision and care.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">The Strategists: Marketing & Branding Team</h2>
        <ul className="list-disc ml-6">
          <li><strong>Brand Manager:</strong> The storyteller of our brand.</li>
          <li><strong>Social Media Experts:</strong> Engaging with our community.</li>
          <li><strong>Graphic Designers:</strong> Crafting stunning visuals.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">The Connectors: Sales & Customer Support Team</h2>
        <ul className="list-disc ml-6">
          <li><strong>Sales Representatives:</strong> Helping customers find their perfect style.</li>
          <li><strong>Customer Service Specialists:</strong> Ensuring every customer interaction is smooth.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">The Innovators: Tech & E-Commerce Team</h2>
        <ul className="list-disc ml-6">
          <li><strong>Web Developers:</strong> Ensuring our website is seamless.</li>
          <li><strong>SEO Specialists:</strong> Making our brand visible online.</li>
          <li><strong>Data Analysts:</strong> Improving the shopping experience.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Us on This Journey</h2>
        <p>
          Our team is more than just a workforce—we're a family dedicated to creating stylish, high-quality, and meaningful fashion. Every role at Extrovert Introvert Clothing Company plays a part in shaping our brand's success. We welcome anyone who shares our passion for fashion and individuality to join our journey.
        </p>
        <p>Thank you for supporting Extrovert Introvert.</p>
      </section>
    </div>
      <Footer />
    </div>
  );
};

export default TeamPage;

