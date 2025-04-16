import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_5pzazrp", // Replace with your EmailJS service ID
        "template_ajtsajl", // Replace with your EmailJS template ID
        formData,
        "fXzukggNBo9cL_DQR" // Replace with your EmailJS user ID
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-6 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-center py-6 sm:py-8">
            <div className="max-w-xs mx-auto sm:max-w-md">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-down">
                Contact Us
              </h1>
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-white animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  I'm here to help! Whether you have questions, feedback, or
                  need support, I am ready to assist you.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <ContactInfoItem
                    icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    title="Email"
                    info="tribhuvannath4567@gmail.com"
                    link="mailto:tribhuvannath4567@gmail.com"
                  />
                  <ContactInfoItem
                    icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    title="Phone"
                    info="+91 8228904121"
                    link="tel:+918228904121"
                  />
                  <ContactInfoItem
                    icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    title="Address"
                    info="Kurthaul, Patna, Bihar, India"
                    link="https://maps.app.goo.gl/P8kmf1vGgdKes3zL9"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="animate-fade-in-up">
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Tribhuvan nath"
                  required
                />
              </div>

              <div className="animate-fade-in-up delay-100">
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="mailgenius@example.com"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>

              <div className="animate-fade-in-up delay-200">
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg font-semibold transition-all ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 transform hover:scale-[1.02]"
                } text-white shadow-lg`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="mt-3 sm:mt-4 p-3 sm:p-4 text-sm sm:text-base bg-green-100 text-green-700 rounded-lg animate-fade-in">
                  Message sent successfully! We'll respond as soon as possible.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-3 sm:mt-4 p-3 sm:p-4 text-sm sm:text-base bg-red-100 text-red-700 rounded-lg animate-fade-in">
                  Error sending message. Please try again or contact us directly
                  on +91 8228904121.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactInfoItem = ({ icon, title, info, link }) => (
  <a
    href={link}
    target={link?.startsWith("http") ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className="flex items-start space-x-2 sm:space-x-4 group cursor-pointer hover:bg-gray-50 p-2 sm:p-3 rounded-lg transition-all"
  >
    <div className="flex-shrink-0 p-2 sm:p-3 bg-purple-600 rounded-md sm:rounded-lg text-white group-hover:bg-purple-700 transition-colors">
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={icon}
        />
      </svg>
    </div>

    <div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600">{info}</p>
    </div>
  </a>
);
