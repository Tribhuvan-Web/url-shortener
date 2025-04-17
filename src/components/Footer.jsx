import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a2e35] text-white py-10 relative z-40">
      <div className="container mx-auto px-6 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">ShortLy</h2>
          <p className="text-gray-400">
            Simplifying URL shortening for efficient sharing. Join us to make your links shorter and smarter.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="hover:text-gray-400 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-gray-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-gray-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <a href="mailto:amitraj730182@gmail.com" className="hover:text-gray-200 transition">
                support@shortly.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone />
              <a href="tel:+918252376122" className="hover:text-gray-200 transition">
              +91 82523 76122
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/developer_9736?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tribhuvan-nath-sagar/" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-4 lg:mt-0 text-gray-400 text-sm">
            &copy; 2025 ShortLy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
