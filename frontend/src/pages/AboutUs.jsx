import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className=" bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white-800 text-center mb-6">
          About Us
        </h1>
        <p className="text-white-600 text-center mb-8">
          Learn more about who we are and what we do.
        </p>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white-800 text-center ">
              Who We Are
            </h2>
            <p className="text-white-600 leading-relaxed mb-4 text-center">
              At Seven wonder, we aim to deliver the best quality products at
              affordable prices. With a wide variety of options across
              categories, we are dedicated to making online shopping seamless,
              enjoyable, and accessible for everyone.
            </p>
            <p className="text-white-600 leading-relaxed mb-4 text-center">
              Our mission is to ensure customer satisfaction, backed by
              excellent support, quick deliveries, and trust you can rely on.
            </p>
            <h3 className="text-lg font-medium text-white-800 mt-6 mb-2 text-center">
              Why Choose Us?
            </h3>
            <ul className="list-disc pl-5 text-white-600 text-center list-none">
              <li>Wide range of quality products</li>
              <li>Fast and secure delivery</li>
              <li>Excellent customer support</li>
              <li>Easy returns and refunds</li>
            </ul>
          </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <a
            href="/"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-lg"
          >
            Go Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
