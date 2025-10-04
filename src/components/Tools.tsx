// src/components/Tools.tsx
import React from "react";

const tools: string[] = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Adobe XD",
  "Azure",
  "CrowdStrike",
  "Proofpoint",
  "Sentinel",
  "Splunk",
  "Git",
  "VS Code",
  "Next.js",
  "Node.js",
  "Express",
  "Docker",
];

const Tools: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-20 absolute">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {tools.concat(tools).map((tool: string, index: number) => {
          const offset: number = Math.floor(Math.random() * 40); // 0-40px vertical offset
          const size: number = Math.floor(Math.random() * 12) + 16; // font size 16-28px

          return (
            <span
              key={index}
              style={{ top: `${offset}px`, fontSize: `${size}px` }}
              className="relative text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors duration-300"
            >
              {tool}
            </span>
          );
        })}
      </div>

      {/* Inline CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Tools;
