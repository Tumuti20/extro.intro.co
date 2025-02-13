import React, { useState } from "react";
import Footer from "./Footer";

const JobsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To show success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("_subject", `Job Application for ${formData.position}`);

    formDataToSend.append("_captcha", "false"); // Disable captcha

    try {
      const response = await fetch("https://formsubmit.co/samueltumuti20@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus("✅ Message submitted successfully!");
        setFormData({ name: "", email: "", position: "", message: "" }); // Clear form
      } else {
        setStatus("❌ Error sending application. Try again.");
      }
    } catch (error) {
      setStatus("❌ Error: Unable to send application.");
    }
  };

  return (
    <div className="max-padd-container text-black p-6">
      <h1 className="text-4xl text-center font-bold mb-6">
        Careers at Extrovert Introvert Clothing Company
      </h1>
      <p className="mb-6">
        At Extrovert Introvert Clothing Company, we are always looking for passionate individuals to join our team. Our brand thrives on creativity, sustainability, and innovation, and we believe in creating a work environment where everyone can grow and succeed.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Current Job Openings</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Fashion Designer:</strong> Create new and innovative designs for our sustainable collections.
          </li>
          <li>
            <strong>Marketing Specialist:</strong> Develop campaigns to promote our brand and engage with customers.
          </li>
          <li>
            <strong>Supply Chain Manager:</strong> Oversee logistics and ensure ethical sourcing of materials.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Apply for a Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Position Applying For</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Cover Letter / Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary"
          >
            Submit Application
          </button>
        </form>

        {status && <p className="mt-4 text-center font-semibold">{status}</p>}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Our HR Team</h2>
        <p>For any job-related inquiries, please reach out to our HR department:</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:careers@extrovertintrovert.com" className="text-secondary">
            careers@extrovertintrovert.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> +254 714 102 214
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default JobsPage;
