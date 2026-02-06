import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient from-indigo-500 via-purple-500 to-pink-500 px-4 py-10 flex items-center justify-center">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl p-8 md:p-12">
        
        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Help & Support
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Need assistance? Find answers to common questions or reach out to our
          support team. We're here to help you every step of the way.
        </p>

        {/* Help Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">❓</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              FAQs
            </h2>
            <p className="text-gray-600 text-sm">
              Browse frequently asked questions and find quick solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">📘</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              User Guide
            </h2>
            <p className="text-gray-600 text-sm">
              Learn how to use our platform with step-by-step guidance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">📞</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Support
            </h2>
            <p className="text-gray-600 text-sm">
              Still need help? Get in touch with our support team anytime.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Support Information
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            📧 Email: support@example.com
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            📞 Phone: +91 98765 43210
          </p>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            ⏰ Available: 24/7 Customer Support
          </p>
        </div>

      </div>
    </div>
  );
};

export default Help;
