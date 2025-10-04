// src/components/Work.tsx
import React from "react";

type WorkExperience = {
  year: string;
  company: string;
  designation: string;
  bgColor?: string; // optional background color
};

const experiences: WorkExperience[] = [
  {
    year: "2023",
    company: "Providence",
    designation: "Frontend Developer",
    bgColor: "white",
  },
  {
    year: "2023",
    company: "Providence",
    designation: "UI/UX Designer",
    bgColor: "white",
  },
  {
    year: "2024",
    company: "Providence",
    designation: "Cloud Security Analyst",
    bgColor: "white",
  },
  {
    year: "2025",
    company: "Providence",
    designation: "Firewall Secuirty Operations",
    bgColor: "white",
  },
];

const Work: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 w-full max-w-6xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 cursor-pointer ${exp.bgColor}`}
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{exp.company}</h2>
              <p className="text-gray-700">{exp.designation}</p>
            </div>

            {/* Year at the bottom */}
            <div className="absolute bottom-4 right-4 text-5xl font-bold text-gray-300 opacity-50 select-none">
              {exp.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
