import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, PayPal, and Apple Pay."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, you will receive a tracking number via email."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or canceled within 30 minutes of placing them. After that, they are processed for shipment."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes, we offer free shipping on orders over $50. For orders below $50, shipping fees apply."
    },
    {
      question: "How do I return an item?",
      answer: "You can return items within 30 days of receipt. Please visit our Returns page for instructions."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, we offer digital gift cards in various amounts. You can purchase them on our website."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team by emailing support@ecommerce.com or by calling 1-800-123-4567."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle FAQ visibility
  };

  return (
    <div className="bg-[#111827] min-h-screen text-white py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-md overflow-hidden"
          >
            <button
              className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 transition duration-300 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-900 text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
