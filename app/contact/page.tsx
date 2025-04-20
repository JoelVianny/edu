"use client";
import { useState } from "react";

const data = {
  bachelor: {
    "Applied Mathematics & Artificial Intelligence": [
      "01.03.02 Applied Mathematics and Computer Science",
      "01.03.04 Applied Mathematics",
      "02.03.01 Mathematics and Computer Sciences",
      "02.03.02 Fundamental Computer Science and Information Technologies",
      "02.03.03 Mathematical Support and Administration of Information Systems",
      "09.03.01 Informatics and Computer Technology",
      "09.03.02 Information Systems and Technologies",
      "09.03.03 Applied Informatics",
      "09.03.04 Software Engineering",
    ],
    "Biology & Biotechnology": [
      "05.03.06 Environmental Studies and Natural Resources Management",
      "06.03.01 Biology",
      "12.03.04 Biotechnology Systems and Technologies",
    ],
    "Business & Management": ["38.03.02 Management", "38.03.06 Trade"],
    "Clinical Medicine & Public Health": [
      "31.03.01 General Medicine",
      "31.03.02 Dentistry",
      "31.03.03 Pediatrics",
      "31.03.04 Medical Prevention",
    ],
    "Computer & Data Science": [
      "01.03.02 Applied Mathematics and Computer Science",
      "01.03.04 Applied Mathematics",
      "02.03.01 Mathematics and Computer Sciences",
      "02.03.02 Fundamental Computer Science and Information Technologies",
      "02.03.03 Mathematical Support and Administration of Information Systems",
      "09.03.01 Informatics and Computer Technology",
      "09.03.02 Information Systems and Technologies",
      "09.03.03 Applied Informatics",
      "09.03.04 Software Engineering",
    ],
  },
  master: {
    "Applied Mathematics & Artificial Intelligence": [
      "01.04.02 Applied Mathematics",
      "09.04.01 Applied Informatics",
    ],
    "Biology & Biotechnology": ["06.04.01 Biology", "19.04.01 Biotechnology"],
    "Business & Management": [
      "38.04.01 Economics",
      "38.04.05 Business Informatics",
      "38.04.06 Trade",
      "38.04.08 Finance and Credit",
      "38.04.09 State Audit",
    ],
    "Clinical Medicine & Public Health": ["32.04.01 Public Health"],
    "Computer & Data Science": [
      "01.04.02 Applied Mathematics",
      "09.04.01 Applied Informatics",
    ],
  },
  doctorate: {
    "Applied Mathematics & Artificial Intelligence": [
      "5.13.1 Applied Mathematics",
      "5.13.2 Mathematical Modeling and Computational Mathematics",
      "5.13.3 Information Systems and Technologies",
    ],
    "Biology & Biotechnology": [
      "1.5.3 Molecular Biology",
      "1.5.6 Biotechnology",
      "1.5.7 Genetics",
      "1.5.10 Virology",
      "1.5.11 Microbiology",
      "1.5.15 Ecology",
      "1.5.22 Cell Biology",
    ],
    "Business & Management": [
      "5.2.1 Economic Theory",
      "5.2.2 Mathematical, Statistical, and Instrumental Methods in Economics",
      "5.2.3 Regional and Sectoral Economics",
      "5.2.4 Finance",
      "5.2.5 World Economy",
    ],
    "Clinical Medicine & Public Health": [
      "3.3.1 Anatomy and Anthropology",
      "3.3.3 Pathological Physiology",
      "3.3.2 Pathological Anatomy",
      "3.3.6 Pharmacology, Clinical Pharmacology",
      "1.5.5 Human and Animal Physiology",
      "3.1.30 Gastroenterology and Dietetics",
      "3.1.28 Hematology and Blood Transfusion",
      "3.1.29 Pulmonology",
      "3.1.20 Cardiology",
      "3.1.2 Maxillofacial Surgery",
      "3.1.7 Dentistry",
      "3.1.18 Internal Medicine",
      "3.1.32 Nephrology",
      "3.1.9 Surgery",
      "3.1.19 Endocrinology",
      "3.1.22 Infectious Diseases",
      "3.2.2 Epidemiology",
      "3.2.3 Public Health, Organization, and Sociology of Healthcare; Medical and Social Expertise",
    ],
    "Computer & Data Science": [
      "5.13.1 Applied Mathematics",
      "5.13.2 Mathematical Modeling and Computational Mathematics",
      "5.13.3 Information Systems and Technologies",
    ],
  },
};

export default function Contact() {
  const [level, setLevel] = useState<string>("");
  const [profile, setProfile] = useState<string>("");
  const [profiles, setProfiles] = useState<string[]>([]);
  const [topics, setTopics] = useState<string[]>([]);

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLevel = e.target.value;
    setLevel(selectedLevel);
    setProfiles(Object.keys(data[selectedLevel] || {}));
    setProfile("");
    setTopics([]);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            APPLY <span className="text-indigo-600">NOW</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            We are there to help you get and make your dream true.!
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
          <div className="mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
