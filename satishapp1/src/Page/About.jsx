import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient from-indigo-500 via-purple-500 to-pink-500 px-4 py-10 flex items-center justify-center">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl p-8 md:p-12">
        
        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          About Us
        </h1>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text Content */}
          <div className="space-y-5 text-gray-600 text-sm md:text-base">
            <p>
              Welcome to{" "}
              <span className="font-semibold text-purple-600">
                Our Company
              </span>
              . We build modern, scalable, and high-performance web applications
              using the latest technologies like React and Tailwind CSS.
            </p>

            <p>
              Our goal is to deliver clean user interfaces, optimized
              performance, and maintainable code that helps businesses grow
              digitally.
            </p>

            <p>
              We follow best development practices and focus on responsiveness,
              accessibility, and seamless user experience across all devices.
            </p>
          </div>

          {/* Highlight Card */}
          <div className="flex justify-center">
            <div className="bg-gradient from-purple-600 to-indigo-600 text-white rounded-2xl p-8 shadow-xl w-full max-w-sm">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="space-y-3 text-sm">
                <li>✔ Modern & Responsive Design</li>
                <li>✔ Latest React Standards</li>
                <li>✔ Clean & Scalable Code</li>
                <li>✔ Performance Optimized</li>
                <li>✔ Easy API Integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-center">
          <div>
            <h3 className="text-3xl font-bold text-purple-600">100+</h3>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-600">80+</h3>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-600">6+</h3>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-600">24/7</h3>
            <p className="text-gray-600 text-sm">Support</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
