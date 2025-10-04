import { useState } from "react";
import swati from "../assets/Swati.jpg";

export default function Intro() {
  return (
    <div>
      <div className="w-[13rem] h-[13rem] md:w-[20rem] md:h-[15rem]  lg:ml-[6.5rem] md:ml-[6.5rem]">
        <a href="#" className="">
          <img
            alt=""
            src={swati}
            className=" object-cover w-full h-full rounded-lg"
          />
        </a>
      </div>
    </div>
  );
}
