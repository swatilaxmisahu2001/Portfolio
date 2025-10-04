// src/components/Skills.tsx
import React, { useState } from "react";

// Type for a single skill
type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  percentage: number; // out of 100
};

// Type for a project
type Project = {
  name: string;
  image: string; // URL to project image
  link: string; // project link
};

// Type for an expertise area
type Expertise = {
  title: string;
  skills: Skill[];
  projects: Project[];
};

// All areas, skills, and projects
const expertiseAreas: Expertise[] = [
  {
    title: "Designer UI/UX",
    skills: [
      { name: "Figma", level: "Advanced", percentage: 90 },
      { name: "Adobe XD", level: "Intermediate", percentage: 70 },
      { name: "Wireframing", level: "Advanced", percentage: 85 },
    ],
    projects: [
      {
        name: "Portfolio Redesign",
        image: "https://via.placeholder.com/150",
        link: "#",
      },
      {
        name: "Mobile App UI",
        image: "https://via.placeholder.com/150",
        link: "#",
      },
    ],
  },
  {
    title: "Cloud Security",
    skills: [
      { name: "Azure Security", level: "Intermediate", percentage: 65 },
      { name: "IAM Policies", level: "Advanced", percentage: 80 },
      { name: "Compliance", level: "Intermediate", percentage: 60 },
    ],
    projects: [
      {
        name: "Cloud Audit",
        image: "https://via.placeholder.com/150",
        link: "#",
      },
      {
        name: "Secure Infrastructure",
        image: "https://via.placeholder.com/150",
        link: "#",
      },
    ],
  },
  {
    title: "Frontend Developer",
    skills: [
      { name: "React", level: "Advanced", percentage: 90 },
      { name: "TypeScript", level: "Intermediate", percentage: 75 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 85 },
    ],
    projects: [
      {
        name: "E-commerce App",
        image: "https://via.placeholder.com/150",
        link: "#",
      },
      {
        name: "Portfolio Website",
        image: "https://via.placeholder.com/150",
        link: "#",
      },
    ],
  },
  {
    title: "Firewall Security",
    skills: [
      { name: "Firewall Rules", level: "Advanced", percentage: 85 },
      { name: "Packet Filtering", level: "Intermediate", percentage: 70 },
      { name: "VPN Configurations", level: "Intermediate", percentage: 65 },
    ],
    projects: [
      {
        name: "Network Hardening",
        image: "https://via.placeholder.com/150",
        link: "#",
      },
      {
        name: "VPN Setup",
        image: "https://via.placeholder.com/150",
        link: "#",
      },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" flex flex-col items-center justify-start p-6 ">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        {expertiseAreas.map((area, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors
              ${
                activeIndex === index
                  ? "bg-[#9c4e23] text-white"
                  : "bg-white text-gray-700 hover:bg-indigo-100"
              }`}
            onClick={() => setActiveIndex(index)}
          >
            {area.title}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mb-8">
        {expertiseAreas[activeIndex].skills.map((skill, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="h-4 rounded-full bg-[#9c4e23] transition-all duration-500"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Display */}
      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {expertiseAreas[activeIndex].projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-2 text-center font-medium">{project.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
