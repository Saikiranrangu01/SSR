import React from "react";

const Courses = ({title, description}) => {
  return (
    <div className="bg-[#0d1b2a] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        
        {/* Left Section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg font-bold">5.0 ★★★★★</span>
            <span className="text-gray-300">1634 Reviews</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
            {title} <br /> with Certification
          </h1>

          <p className="mt-4 text-gray-300 font-medium">{description}</p>
          <div className="flex gap-4 mt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/10/Indian_Institute_of_Technology_Guwahati_Logo.svg"
              alt="IIT Guwahati"
              className="h-12 bg-white p-2 rounded"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="h-12 bg-white p-2 rounded"
            />
          </div>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3 text-gray-200">
            {[
              "Learn Python, R, SQL, and core data science concepts",
              "Become expert in machine learning, AI, and predictive analytics",
              "Work with Pandas, NumPy, and data visualization tools",
              "Explore big data technologies like Hadoop, Spark and more",
              "Gain expertise in deep learning, TensorFlow, and NLP",
              "Build industry-level projects with real datasets",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-500 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition">
            Enroll Now
          </button>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold text-center mb-4">
            Get the syllabus and start your success journey!
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              placeholder="Enter your city"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              value="Data Science"
              readOnly
              className="w-full border rounded-lg px-3 py-2 bg-gray-100"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Download Syllabus
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Courses;
