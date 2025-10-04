import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

export default function ContactList() {
  return (
    <ul className="flex flex-col items-start gap-4 p-6 list-none">
      {/* GitHub */}
      <li className="flex items-center ml-[-10px]">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" // replace with your GitHub logo path
          alt="GitHub"
          className="w-full h-6"
        />
        <a
          href="https://github.com/swatilaxmisahu2001/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors"
        >
          GitHub
        </a>
      </li>

      {/* Phone */}
      <li className="flex items-center gap-2">
        <FiPhone className="w-6 h-6" />
        +91 7583941408
      </li>

      {/* Email */}
      <li className="flex items-center gap-2">
        <FiMail className="w-6 h-6" />
        swatisahu13209@gmail.com
      </li>
    </ul>
  );
}
