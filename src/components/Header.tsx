import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed right-0 left-0 w-full z-50 px-10 md:px-30 lg:px-40 ">
      <nav
        aria-label="Global"
        className="mx-auto flex  items-center justify-between "
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 px-1.5">
            <img alt="" src={logo} className="h-20 w-auto" />
          </a>
        </div>

        <div className=" flex lg:flex-1 lg:justify-end ">
          <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 px-1.5   w-auto"
          >
            made by Swati Laxmi Sahu <span aria-hidden="true">©</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
