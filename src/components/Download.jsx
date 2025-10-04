import React from "react";
import { FiDownload } from "react-icons/fi";
import SEResume from "../assets/Resume_SE.pdf"; // or CSResume

export default function Download() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = SEResume; // or use CSResume
    link.download = "SwatiSahu_SE_Resume.pdf"; // or "SwatiSahu_CS_Resume.pdf"
    link.click();
  };

  return (
    <div className="inline-block text-left">
      <button
        onClick={handleDownload}
        className="inline-flex items-center  rounded-md px-1 py-2 text-sm font-semibold text-gray-900 hover:rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        <FiDownload className="text-gray-600 text-[4rem]" />
      </button>
    </div>
  );
}
