import React, { useState } from "react";

// Types
type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  percentage: number;
};

type Project = {
  name: string;
  image: string;
  link: string;
};

// Skill data only
const cloudSkills: Skill[] = [
  { name: "Azure Security", level: "Intermediate", percentage: 65 },
  { name: "IAM Policies", level: "Advanced", percentage: 80 },
  { name: "Compliance", level: "Intermediate", percentage: 60 },
];

const firewallSkills: Skill[] = [
  { name: "Firewall Rules", level: "Advanced", percentage: 85 },
  { name: "Packet Filtering", level: "Intermediate", percentage: 70 },
  { name: "VPN Configurations", level: "Intermediate", percentage: 65 },
];

// All projects (not tied to departments)
const allProjects: Project[] = [
  { name: "Cloud Audit", image: "https://via.placeholder.com/150", link: "#" },
  {
    name: "Secure Infrastructure",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    name: "Network Hardening",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  { name: "VPN Setup", image: "https://via.placeholder.com/150", link: "#" },
];

const tabTitles = ["Cloud Security", "Firewall Security", "Projects"];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const currentSkills = activeTab === 0 ? cloudSkills : firewallSkills;

  return (
    <div className="flex mb-[17rem] lg:mb-[1rem] md:mb-[1rem] flex-col items-center justify-start p-6 w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabTitles.map((title, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeTab === index
                ? "bg-[#9c4e23] text-white"
                : "bg-white text-gray-700 hover:bg-indigo-100"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Skills Section */}
      {activeTab < 2 && (
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mb-8">
          {currentSkills.map((skill, idx) => (
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
      )}

      {/* Projects Section */}
      {activeTab === 2 && (
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {allProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-2 text-center font-medium">{project.name}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
