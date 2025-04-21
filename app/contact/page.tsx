"use client";

import { useState } from "react";

const educationProfiles = {
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

type Level = keyof typeof data;
type Topic = keyof (typeof data)[Level];

export default function Contact() {
  const [level, setLevel] = useState("");
  const [profile, setProfile] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [topics, setTopics] = useState([]);

  const handleLevelChange = (e) => {
    const selectedLevel = e.target.value;
    setLevel(selectedLevel);
    setProfiles(Object.keys(data[selectedLevel] || {}));
    setProfile("");
    setTopics([]);
  };

  const handleProfileChange = (e) => {
    const selectedProfile = e.target.value;
    setProfile(selectedProfile);
    setTopics(data[level]?.[selectedProfile] || []);
  };

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
          <div className="flex items-center mt-5 text-sm">
            <span>Moscou ,Russian .</span>
          </div>
          <div className="flex items-center mt-5 text-sm">
            <span>+93 749 99 65 50</span>
          </div>
          <div className="flex items-center mt-5 text-sm">
            <span>24/7</span>
          </div>
        </div>
        <form className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Jane"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="+93..."
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                type="email"
                required
              />
            </div>
          </div>

          {/* Level of Education */}
          <div className="mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Level of Education
            </label>
            <select
              value={level}
              onChange={handleLevelChange}
              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="">Select Level</option>
              {Object.keys(data).map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Profile */}
          {profiles.length > 0 && (
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Profile
              </label>
              <select
                value={profile}
                onChange={handleProfileChange}
                className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              >
                <option value="">Select Profile</option>
                {profiles.map((prof) => (
                  <option key={prof} value={prof}>
                    {prof}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Topic */}
          {topics.length > 0 && (
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Topic
              </label>
              <select className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                <option value="">Select Topic</option>
                {topics.map((topic) => (
                  <option key={topic}>{topic}</option>
                ))}
              </select>
            </div>
          )}

          {/* Message */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">
              Your Message
            </label>
            <textarea
              rows={3}
              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <label className="text-gray-500 text-sm">
              <input type="checkbox" className="mr-2" />
              Send me your newsletter!
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
