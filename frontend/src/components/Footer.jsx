import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-3">seven wonder</h3>
            <p className="text-gray-400">
              Your one-stop solution for all your shopping needs. Quality and
              trust guaranteed.
            </p>
          </div>

          {/* Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="/AboutUs" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/ContactUs" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-3">Customer Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/Faq" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-3">Subscribe</h4>
            <p className="text-gray-400 mb-3">
              Get updates on the latest offers and discounts!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded-l bg-gray-800 text-white outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded-r hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Seven wonder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
