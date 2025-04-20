"use client";
import { useState } from "react";

const data = {
  bachelor: {
    "Applied Mathematics & AI": [
      "01.03.02 Applied Mathematics and Computer Science",
      "09.03.01 Informatics and Computer Technology",
    ],
    "Biology & Biotechnology": [
      "06.03.01 Biology",
      "12.03.04 Biotechnology Systems and Technologies",
    ],
    "Business & Management": ["38.03.02 Management", "38.03.06 Trade"],
  },
  master: {
    "Computer & Data Science": [
      "01.04.02 Applied Mathematics",
      "09.04.01 Applied Informatics",
    ],
    "Biology & Biotech": ["06.04.01 Biology", "19.04.01 Biotechnology"],
    "Economics & Management": [
      "38.04.05 Business Informatics",
      "38.04.08 Finance and Credit",
    ],
  },
  doctorate: {
    "Applied Mathematics & AI": [
      "5.13.1 Applied Mathematics",
      "5.13.3 Information Systems and Technologies",
    ],
    "Clinical Medicine": [
      "3.3.6 Pharmacology",
      "3.1.20 Cardiology",
      "3.1.9 Surgery",
    ],
  },
} as const;

type Level = keyof typeof data;
type Topic = keyof (typeof data)[Level];

export default function Contact() {
  const [level, setLevel] = useState<Level | "">("");
  const [topic, setTopic] = useState<string>("");
  const [profile, setProfile] = useState<string>("");

  const topics = level ? Object.keys(data[level]) : [];
  const profiles = level && topic ? data[level][topic as Topic] : [];

  return (
    <div className="max-w-screen-lg mx-auto pt-10 p-5 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
        MAKE YOUR DREAM TRUE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            APPLY <span className="text-indigo-600">NOW</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            We are there to help you get and make your dream true.!
          </p>
          <div className="flex items-center mt-5 text-sm">
            <span>Moscou, Russian</span>
          </div>
          <div className="flex items-center mt-5 text-sm">
            <span>+93 749 99 65 50</span>
          </div>
          <div className="flex items-center mt-5 text-sm">
            <span>24/7</span>
          </div>
        </div>

        <form className="md:col-span-8 p-10 space-y-6">
          {/* First and Last Name */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <input
                className="w-full bg-gray-200 rounded py-3 px-4"
                type="text"
                placeholder="Jane"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <input
                className="w-full bg-gray-200 rounded py-3 px-4"
                type="text"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <input
                className="w-full bg-gray-200 rounded py-3 px-4"
                type="text"
                placeholder="+93..."
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input
                className="w-full bg-gray-200 rounded py-3 px-4"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Education Level */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Level of Education</label>
            <select
              className="w-full bg-gray-200 rounded py-3 px-4"
              value={level}
              onChange={(e) => {
                setLevel(e.target.value as Level);
                setTopic("");
                setProfile("");
              }}
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
            <label className="block text-gray-700 text-sm font-bold mb-2">Topic</label>
            <select
              className="w-full bg-gray-200 rounded py-3 px-4"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                setProfile("");
              }}
              disabled={!topics.length}
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
            <label className="block text-gray-700 text-sm font-bold mb-2">Profile</label>
            <select
              className="w-full bg-gray-200 rounded py-3 px-4"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              disabled={!profiles.length}
            >
              <option value="">Select Profile</option>
              {profiles.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
            <textarea
              rows={3}
              className="w-full bg-gray-200 rounded py-3 px-4"
              placeholder="Tell us more..."
            />
          </div>

          {/* Newsletter & Submit */}
          <div className="flex justify-between items-center">
            <label className="text-gray-600 text-sm">
              <input type="checkbox" className="mr-2" />
              Send me your newsletter!
            </label>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
