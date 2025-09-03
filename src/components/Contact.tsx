"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState("");

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setStatus("");

  //   const form = e.currentTarget;
  //   const formData = {
  //     name: (form.elements.namedItem("name") as HTMLInputElement).value,
  //     email: (form.elements.namedItem("email") as HTMLInputElement).value,
  //     message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  //   };

  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     if (res.ok) {
  //       setStatus("✅ Message sent successfully!");
  //       form.reset();
  //     } else {
  //       setStatus("❌ Failed to send message. Please try again.");
  //     }
  //   } catch (err) {
  //     console.error("Contact form error:", err);
  //     setStatus("❌ Something went wrong.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    // Build WhatsApp message
    const text = encodeURIComponent(
      `Hello! \n\nMy name is ${name} (${email}).\n\n${message}`
    );

    // Replace with your number
    const phone = "6281319840203";

    // Redirect to WhatsApp
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    
    form.reset();
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          Feel free to reach out for collaborations or just a friendly chat!
        </motion.p>

        {/* Contact Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 dark:text-blue-400 text-2xl" />
              <p className="text-lg text-gray-700 dark:text-gray-300">
                deswinauliyaarabbani@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-500 dark:text-blue-400 text-2xl" />
              <p className="text-lg text-gray-700 dark:text-gray-300">
                +62 813 1984 0203
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 mt-4">
              <a href="https://linkedin.com/in/deswinar/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://github.com/deswinar" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://x.com/auliyaa_deswin" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={28} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://instagram.com/deswinar" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* {status && (
              <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
                {status}
              </p>
            )} */}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
