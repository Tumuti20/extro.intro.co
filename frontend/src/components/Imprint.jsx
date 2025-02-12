import React from 'react';
import Footer from './Footer';

const Imprint = () => {
    return (
        <div className="max-padd-container text-black font-sans p-6">
            <h1 className="text-3xl text-center font-bold">Imprint - Extro.Intro</h1>
            
            <h2 className="text-2xl font-semibold mt-4">1. Company Information</h2>
            <p><strong>Company Name:</strong> Extrovert Introvert</p>
            {/* <p><strong>Legal Form:</strong> [Your Business Structure]</p> */}
            {/* <p><strong>Registered Address:</strong> [Company Address]</p> */}
            {/* <p><strong>Registration Number:</strong> [Company Registration Number]</p> */}
            {/* <p><strong>VAT ID:</strong> [Your VAT ID]</p> */}
            <p><strong>Founded:</strong> 1/1/2025</p>
            <p><strong>Business Purpose:</strong> Designing and selling high-quality fashion items.</p>
            
            <h2 className="text-2xl font-semibold mt-4">2. Contact Information</h2>
            <p><strong>Email:</strong> <a href="mailto:contact@extrointro.com" className="text-blue-500">contact@extrointro.com</a></p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Website:</strong> <a href="https://extrointro.vercel.app" className="text-blue-500">https://extrointro.vercel.app</a></p>
            <p><strong>Customer Support Hours:</strong> Monday - Friday, 9 AM - 5 PM</p>
            
            <h2 className="text-2xl font-semibold mt-4">3. Responsible Person</h2>
            <p><strong>Managing Director:</strong> Samuel Tumuti</p>
            <p><strong>Legal Representative:</strong> Lynn Ruguru</p>
            
            <h2 className="text-2xl font-semibold mt-4">4. Business Activities</h2>
            <p>Extro.Intro is a fashion brand specializing in modern apparel that blends stylish designs with comfort. We create clothing that reflects individuality and confidence.</p>
            <p>Our business covers:</p>
            <ul className="list-disc pl-6">
                <li>Manufacturing and selling clothing items.</li>
                <li>Collaborations with fashion designers and influencers.</li>
                <li>Offering seasonal collections and limited editions.</li>
                <li>Providing customization options for select items.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-4">5. Intellectual Property & Copyright</h2>
            <p>All content, images, and designs featured on Extro.Intro's website and products are the exclusive property of Extrovert Introvert. Any reproduction, modification, or distribution without explicit consent is prohibited.</p>
            <p>Trademarks, logos, and brand names appearing on this website are legally protected.</p>
            
            <h2 className="text-2xl font-semibold mt-4">6. Liability Disclaimer</h2>
            <p>While we strive to ensure all information provided on our website is accurate and up-to-date, we do not take responsibility for any errors or omissions. We also reserve the right to modify product details, pricing, and availability at any time.</p>
            
            <h2 className="text-2xl font-semibold mt-4">7. External Links</h2>
            <p>Our website may contain links to third-party websites. We do not assume liability for the content, privacy policies, or practices of external sites.</p>
            
            <h2 className="text-2xl font-semibold mt-4">8. Data Protection & Privacy</h2>
            <p>We are committed to protecting customer privacy. Our full privacy policy outlines how we collect, store, and use customer data. For more details, please visit our Privacy Policy page.</p>
            
            <h2 className="text-2xl font-semibold mt-4">9. Dispute Resolution</h2>
            <p>In case of any disputes, we aim to resolve them amicably. If necessary, legal proceedings will be held in accordance with the law .</p>
            
            <p className="mt-6">For legal inquiries, business collaborations, or any other concerns, please reach out via the provided contact details.</p>

            <Footer />
        </div>
    );
};

export default Imprint;
