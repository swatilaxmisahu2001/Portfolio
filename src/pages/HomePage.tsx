import React, { useState, useEffect, useRef } from "react";
import "../styles/HomePage.css";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import RoleDisplay from "../components/RoleDisplay";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Tools from "../components/Tools";
import Download from "../components/Download";
import Contact from "../components/Contact";

export default function HomePage() {
  const [scrollStage, setScrollStage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Colors for each stage
  const bgColors = [
    "bg-[#cfe8ff]",
    "bg-[#fff58c]",
    "bg-[#c4ffb2]",
    "bg-[#D3DAE2]",
  ];

  const textColors = [
    "text-[#77AFD8]",
    "text-[#9c4e23]",
    "text-[#164c3b]",
    "text-[#5440AB]",
  ];

  useEffect(() => {
    const div = scrollRef.current;
    if (!div) return;

    // Redirect vertical scroll to horizontal
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        div.scrollLeft += e.deltaY;
      }
    };

    // Track scroll position to update stage
    const handleScroll = () => {
      const scrollLeft = div.scrollLeft;
      const sectionWidth = div.clientWidth;
      const stage = Math.round(scrollLeft / sectionWidth);

      if (stage !== scrollStage) {
        setScrollStage(stage);
      }
    };

    div.addEventListener("wheel", handleWheel, { passive: false });
    div.addEventListener("scroll", handleScroll);

    return () => {
      div.removeEventListener("wheel", handleWheel);
      div.removeEventListener("scroll", handleScroll);
    };
  }, [scrollStage]);

  return (
    <div
      ref={scrollRef}
      className={`flex overflow-x-auto overflow-y-hidden h-screen touch-pan-x  transition-colors duration-500 ${bgColors[scrollStage]} 
      [background-image:linear-gradient(to_right,white_0.5px,transparent_0.5px),linear-gradient(to_bottom,white_0.5px,transparent_0.5px)] [background-size:10px_10px]`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(244,244,245,0.9)_30%,rgba(244,244,245,0.5)_50%,transparent_100%)] z-3 pointer-events-none"></div>

      {/* Section 1 */}
      <section
        ref={sectionRefs[0]}
        className="w-screen h-screen flex-shrink-0 px-[2rem] py-[2rem] flex flex-col relative z-20"
      >
        <Header />
        <div className=" flex-shrink-0 grid grid-cols-3 gap-5 ">
          <div className="col-span-3 "></div>

          {/* Main Heading with scroll-based text color */}
          <div
            className={`lg:text-[13rem] md:text-[12rem] text-[5rem]  font-thin col-span-3 lg:my-[-4rem] md:my-[-3rem]  font-bright transition-colors duration-500 ${textColors[scrollStage]}`}
          >
            SwatiSahu's
          </div>

          {/* Empty divs for spacing */}
          <div></div>
          <div></div>

          {/* Portfolio text with handwritten font */}
          <div className="font-handwritten italic pb-[5rem] md:text-3xl text-xl lg:text-5xl  ">
            Portfolio
          </div>

          {/* Additional content */}
        </div>
        <div className="flex flex-col md:flex-row  ">
          <div className="md:w-1/2 p-4 mt-[-3rem] ">
            <Intro />
          </div>
          <div className="md:w-3/4 p-4  ">
            <About />
          </div>
          <div className=" md:w-3/4 p-4 relative hidden md:hidden lg:block ">
            <RoleDisplay />
          </div>
          <svg
            className="absolute hidden md:hidden lg:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            width="400"
            height="150"
            viewBox="0 0 400 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 130 C150 10, 250 10, 380 130"
              stroke="#4B5563"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#4B5563" />
              </marker>
            </defs>
          </svg>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={sectionRefs[1]}
        className="w-screen h-screen flex-shrink-0 flex items-center justify-start relative z-20"
      >
        <div className="flex flex-col md:flex-row justify-between w-full h-full">
          <div className="md:w-3/4 left-0 min-h-screen flex items-center justify-center">
            <h1
              className={`lg:text-[10rem] lg:leading-[8rem] leading-[4rem] md:text-[5rem] text-[5rem] font-normal transition-colors duration-500 ${textColors[scrollStage]}`}
            >
              Skills & <span className="block">Projects</span>
            </h1>
          </div>
          <div className="md:w-3/4 p-[2rem] right-0 min-h-screen flex items-center justify-center">
            <Skills />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        ref={sectionRefs[2]}
        className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative z-20"
      >
        <div className="flex flex-col w-full items-center justify-center h-full">
          {/* First row */}
          <div className="w-full flex items-center justify-center">
            <h1
              className={`lg:text-[10rem] lg:leading-[8rem] leading-[4rem] md:text-[5rem] text-[5rem] font-normal transition-colors duration-500 ${textColors[scrollStage]}`}
            >
              Work & Tools
            </h1>
          </div>

          {/* Second row */}
          <div className="w-full flex items-center justify-center p-6">
            <Work />
          </div>

          {/* Third row */}
          <div className="w-full flex items-center justify-center">
            <Tools />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      {/* Section 4 */}
      <section
        ref={sectionRefs[3]}
        className="w-screen  flex-shrink-0 flex  z-20"
      >
        <div className="flex flex-col w-full items-center justify-center relative pb-32">
          {/* Content rows */}
          <div className="flex w-full h-full">
            <div className="w-full flex items-center justify-start">
              <div className="p-20">
                <Contact />
              </div>
              <h1
                className={`absolute  bottom-4 right-4 pb-20 lg:text-[10rem] lg:leading-[8rem] leading-[4rem] md:text-[5rem] text-[5rem] font-normal transition-colors duration-500 ${textColors[scrollStage]}`}
              >
                Download{" "}
                <span className="block">
                  Resume <Download />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Nav Bar */}
      <div className="fixed bottom-10 left-0 w-full z-50 flex justify-center items-end space-x-6 h-20 bg-transparent">
        {["Home", "Skills", "Experience", "Resume"].map((label, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <button
              onClick={() =>
                sectionRefs[index].current?.scrollIntoView({
                  behavior: "smooth",
                  inline: "start",
                })
              }
              className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              {label}
            </button>
            <div
              className={`h-1 w-10 rounded-full transition-all duration-300 ${
                scrollStage === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
