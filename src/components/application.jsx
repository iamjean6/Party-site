import React from "react";

const JoinUs = () => {
  return (
    <main id="registration" className="bg-gray-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Join the Liberal Democratic Party
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90">
            Be part of a transparent, policy-driven movement building ethical,
            inclusive, and people-powered leadership.
          </p>
        </div>
      </section>

      {/* ================= NOMINATION PROCESS ================= */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Nomination Process – Electoral College System
          </h2>

          {/* Flow Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              { label: "Expression of Interest", color: "bg-blue-600" },
              { label: "Vetting & Integrity Checks", color: "bg-indigo-600" },
              { label: "County Consultations", color: "bg-purple-600" },
              { label: "Electoral College Voting", color: "bg-teal-600" },
              { label: "Public Declaration of Nominees", color: "bg-emerald-600" },
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div
                  className={`w-11 h-11 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold ${step.color}`}
                >
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base font-medium">{step.label}</p>
              </div>
            ))}
          </div>

          {/* Why this system */}
          <div className="mt-10 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Why This System?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-sm sm:text-base text-gray-700">
              <li>Prevents imposition</li>
              <li>Encourages grassroots participation</li>
              <li>Promotes merit-based leadership</li>
              <li>Reduces chaos</li>
              <li>Enhances legitimacy</li>
            </ul>

            <p className="mt-6 text-sm sm:text-base text-gray-600 text-center">
              LDP uses a structured, transparent, and democratic Electoral College
              system to ensure fairness, grassroots participation, and integrity
              in leadership selection.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HORIZONTAL GRID SECTION ================= */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Explore Membership
          </h2>

          {/* ONE HORIZONTAL GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-white rounded-3xl shadow-lg p-6 sm:p-10">

            {/* WHY JOIN */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-700">
                Why Join Us
              </h3>
              <ul className="space-y-3 list-disc list-inside text-sm sm:text-base text-gray-700">
                <li>Non-tribal and inclusive</li>
                <li>Policy-driven leadership</li>
                <li>Transparent governance</li>
                <li>Youth-focused growth</li>
                <li>Women-inclusive participation</li>
                <li>Pro-business outlook</li>
                <li>Digital-first systems</li>
                <li>Ethical political culture</li>
              </ul>
            </div>

            {/* BENEFITS */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-700">
                Benefits of Membership
              </h3>
              <ul className="space-y-3 list-disc list-inside text-sm sm:text-base text-gray-700">
                <li>Vote in party processes</li>
                <li>Eligibility for nomination</li>
                <li>Leadership training access</li>
                <li>Policy forum participation</li>
                <li>Attend party conventions</li>
                <li>National political networking</li>
              </ul>
            </div>

            {/* PROGRAMMES */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-700">
                Programmes
              </h3>
              <ul className="space-y-3 list-disc list-inside text-sm sm:text-base text-gray-700">
                <li>Youth Innovation Lab</li>
                <li>Leadership, Academia & Political Mentorship</li>
                <li>Civic Education Program</li>
                <li>Digital Campaign Training</li>
                <li>Economic Empowerment</li>
                <li>Policy & Advocacy</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= REGISTRATION FORM ================= */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Become a Member
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Inputs */}
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm"
            />
            <input
              type="text"
              placeholder="County"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm"
            />

            {/* Select */}
            <select className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm sm:col-span-2">
              <option>Select Programme of Interest</option>
              <option>Youth Innovation Lab</option>
              <option>Leadership & Mentorship</option>
              <option>Civic Education</option>
              <option>Digital Campaign Training</option>
              <option>Economic Empowerment</option>
              <option>Policy & Advocacy</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="sm:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold transition transform hover:-translate-y-0.5"
            >
              Register
            </button>
          </form>
        </div>
      </section>

    </main>
  );
};

export default JoinUs;
