"use client";
import { useState } from "react";

const data = {
  bachelor: {
    "Applied Mathematics & AI": [
      "01.03.02 Applied Mathematics and Computer Science",
      "09.03.04 Software Engineering",
    ],
    "Biology & Biotechnology": [
      "06.03.01 Biology",
      "12.03.04 Biotechnology Systems",
    ],
    "Business & Management": ["38.03.02 Management", "38.03.06 Trade"],
  },
  master: {
    "Computer & Data Science": [
      "09.04.01 Applied Informatics",
      "01.04.02 Applied Mathematics",
    ],
    "Biology & Biotech": ["06.04.01 Biology", "19.04.01 Biotechnology"],
    "Economics & Management": ["38.04.01 Economics", "38.04.08 Finance"],
  },
  doctorate: {
    "Clinical Medicine": [
      "3.1.2 Maxillofacial Surgery",
      "3.1.7 Dentistry",
      "3.1.9 Surgery",
    ],
    "Computer & Math Sciences": [
      "5.13.1 Applied Mathematics",
      "5.13.3 Info Systems",
    ],
    "Biotech Research": [
      "1.5.3 Molecular Biology",
      "1.5.7 Genetics",
      "1.5.10 Virology",
    ],
  },
};

export default function Contact() {
  const [level, setLevel] = useState("");
  const [topic, setTopic] = useState("");
  const [profile, setProfile] = useState("");

  const topics = level ? Object.keys(data[level]) : [];
  const profiles = level && topic ? data[level][topic] : [];

  return (
    <div className="max-w-screen-lg mx-auto pt-10 p-5 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
        MAKE YOUR DREAM TRUE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            APPLY <span className="text-indigo-600">NOW</span>
          </h3>
          <p className="mt-4 text-gray-200">
            We are there to help you get and make your dream true!
          </p>
          <div className="mt-5 text-sm">Moscow, Russia</div>
          <div className="mt-2 text-sm">+93 749 99 65 50</div>
          <div className="mt-2 text-sm">24/7</div>
        </div>

        <form className="md:col-span-8 p-10 space-y-6">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              className="w-full bg-gray-200 p-3 rounded"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="w-full bg-gray-200 p-3 rounded"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              className="w-full bg-gray-200 p-3 rounded"
              placeholder="Phone Number"
              required
            />
            <input
              type="email"
              className="w-full bg-gray-200 p-3 rounded"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Always show Level, Topic, Profile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Level */}
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Level of Education
              </label>
              <select
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                  setTopic("");
                  setProfile("");
                }}
                className="w-full bg-gray-200 p-3 rounded"
              >
                <option value="">Select Level</option>
                {Object.keys(data).map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Topic */}
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Topic
              </label>
              <select
                value={topic}
                onChange={(e) => {
                  setTopic(e.target.value);
                  setProfile("");
                }}
                className="w-full bg-gray-200 p-3 rounded"
                disabled={!level}
              >
                <option value="">Select Topic</option>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Profile */}
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Profile
              </label>
              <select
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                className="w-full bg-gray-200 p-3 rounded"
                disabled={!level || !topic}
              >
                <option value="">Select Profile</option>
                {profiles.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">
              Your Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-gray-200 p-3 rounded"
              placeholder="Write something..."
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <label className="text-gray-600 text-sm">
              <input type="checkbox" className="mr-2" />
              Subscribe to our newsletter
            </label>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
