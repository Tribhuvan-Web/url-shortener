import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { use } from "react";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loader , setLoader] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = "service_3ofqjh6";
    const templateId = "template_hin018m"; 
    const userId = "pzk-cuoAEWo7di2GP";

   setLoader(true);
    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          setLoader(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-900 text-slate-200 p-8">
      <div className="max-w-4xl mx-auto text-center my-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          Have questions or need assistance? Feel free to reach out to us using
          the form below.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
            <p className="text-lg">
              Your message has been successfully sent. We will get back to you
              shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <p className="text-red-500 text-center font-semibold">{error}</p>
            )}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium mb-2 text-slate-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-3 rounded-md bg-gray-700 text-slate-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium mb-2 text-slate-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-gray-700 text-slate-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2 text-slate-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows="5"
                className="w-full p-3 rounded-md bg-gray-700 text-slate-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`${loader? "bg-blue-800 " : ""} w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition duration-200 `}
            >
             {loader ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
      <div className="max-w-4xl mx-auto text-center mt-8">
        <p className="text-lg">
          Alternatively, you can reach us at{" "}
          <a
            href="mailto:support@yoururlshortener.com"
            className="text-blue-500 hover:underline"
          >
            support@shortly.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactUsPage;