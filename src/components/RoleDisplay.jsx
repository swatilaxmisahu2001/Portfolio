import React, { useState } from "react";

const roles = [
  {
    id: 1,
    title: "Developer",
    description: "Responsible for writing and maintaining Frontend code.",
  },
  {
    id: 2,
    title: "Designer",
    description: "Creates UI/UX designs and visuals.",
  },
  {
    id: 3,
    title: "Cloud",
    description: "Cloud Security Incident response",
  },
  {
    id: 4,
    title: "Firewall",
    description: "Woking on Operations",
  },
];

export default function RoleDisplay() {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <div className="flex justify-center items-center  gap-12">
      {/* Left Side */}
      <div className="flex flex-col gap-4">
        {roles.slice(0, 2).map((role) => (
          <div
            key={role.id}
            className="bg-white px-4 py-2 rounded shadow cursor-pointer hover:bg-[#77AFD8] hover:text-white transition-colors"
            onMouseEnter={() => setActiveRole(role)}
          >
            {role.title}
          </div>
        ))}
      </div>

      {/* Center */}
      <div className="max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">{activeRole.title}</h2>
        <p className="text-gray-700">{activeRole.description}</p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4">
        {roles.slice(2).map((role) => (
          <div
            key={role.id}
            className="bg-white px-4 py-2 rounded shadow cursor-pointer hover:bg-[#77AFD8] hover:text-white transition-colors"
            onMouseEnter={() => setActiveRole(role)}
          >
            {role.title}
          </div>
        ))}
      </div>
    </div>
  );
}
