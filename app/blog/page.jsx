"use client";
import { useState } from "react";

const scholarshipData = {
  bachelor: {
    title: "Bachelor",
    description:
      "Russia has adopted the Bologna Process, which is a three-cycle educational system consisting of an undergraduate degree (4 years) and a master's degree (2 years). During their bachelor's degree, students gain a broad understanding of their chosen specialty...",
    fullDescription:
      "Russia has adopted the Bologna Process, which is a three-cycle educational system consisting of an undergraduate degree (4 years) and a master's degree (2 years). During their bachelor's degree, students gain a broad understanding of their chosen specialty, with the opportunity to explore various areas of interest. Graduates with a bachelor's degree can immediately begin working in their chosen profession, or they can continue their studies at the next level. Additionally, some universities still offer specialist programs, a level that only exists in Russia. Specialist programs provide a more focused education over 5–6 years that emphasizes practical skills.",
    imageUrl: "https://readymadeui.com/cardImg.webp",
  },
  master: {
    title: "Master",
    description:
      "The master's degree is the second stage of higher education in the Bologna Process. To be admitted into a master's program, applicants must have a bachelor's or specialist's degree. These programs are generally more research-oriented...",
    fullDescription:
      "The master's degree is the second stage of higher education in the Bologna Process. To be admitted into a master's program, applicants must have a bachelor's or specialist's degree. These programs are generally more research-oriented, providing students with an in-depth understanding of their chosen subject. Master's programs usually last two years and focus mainly on the student's ability to independently grasp the material.",
    imageUrl: "https://readymadeui.com/prediction.webp",
  },
  doctor: {
    title: "Doctoral",
    description:
      "Doctoral programs are mainly for training research and teaching personnel. To be admitted into a postgraduate program, applicants must have a master's or specialist's degree. These programs include educational aspects, pedagogical and practical work...",
    fullDescription:
      "Doctoral programs are mainly for training research and teaching personnel. To be admitted into a postgraduate program, applicants must have a master's or specialist's degree. These programs include educational aspects, pedagogical and practical work, and research. Graduate students must choose a scientific area and research topic for their dissertation. In-person, full-time programs are at least 3 years, while part-time programs are at least 4. At the end of the program, successful candidates receive a postgraduate diploma with a qualification ('Researcher', 'Research Teacher').",
    imageUrl: "https://readymadeui.com/team-image.webp",
  },
};

type ScholarshipKey = keyof typeof scholarshipData;

export default function Blog() {
  const [expanded, setExpanded] = useState<ScholarshipKey | null>(null);

  const toggleDescription = (key: ScholarshipKey) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <div className="bg-gray-100 px-4 py-12">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto justify-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          SCHOLARSHIP
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {Object.keys(scholarshipData).map((key) => {
            const scholarshipKey = key as ScholarshipKey;
            const { title, description, fullDescription, imageUrl } =
              scholarshipData[scholarshipKey];
            return (
              <div
                key={key}
                className="bg-white rounded overflow-hidden shadow-md"
              >
                <img
                  src={imageUrl}
                  alt={`Blog Post ${title}`}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl text-justify font-semibold text-slate-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {expanded === scholarshipKey
                      ? fullDescription
                      : description}
                  </p>
                  <button
                    onClick={() => toggleDescription(scholarshipKey)}
                    className="mt-6 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium"
                  >
                    {expanded === scholarshipKey ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
