import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { IoPersonCircle } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";

type NavbarProps = {
  aboutMe: boolean;
  setAboutMe: (value: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ aboutMe, setAboutMe }) => {
  const [isClickedAboutMe, setIsClickedAboutMe] = useState(false);
  const [isClickedResume, setIsClickedResume] = useState(false);

  const handleScrollToHome = () => {
    const aboutSection = document.getElementById("home");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      setIsClickedAboutMe(false);
    }
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      setIsClickedAboutMe(true);
    }
  };

  const handleToDownloadResume = () => {
    setIsClickedResume(true);

    const link = document.createElement("a");
    link.href = "/resume/Muhammad%20Syafiq%20Latest%20Resume%202026%20(C).pdf";
    link.setAttribute("download", "Muhammad_Syafiq_Resume_2026.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsClickedResume(false);
    }, 1000);
  };

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsClickedAboutMe(entry.isIntersecting); // Update state based on visibility
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the section is visible
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <div
      className={`${isClickedAboutMe
          ? "relative w-full shadow-gray-700 shadow-md flex flex-row justify-between items-center text-white bg-gray-800 py-2 px-5" // Solid background and relative positioning
          : "absolute w-full flex flex-row justify-between items-center text-white bg-gradient-to-b from-black from-20% to-transparent py-2 px-5" // Semi-transparent background
        } w-full py-2 px-5 transition-all duration-300 z-50`}
    >
      <Button
        onClick={handleScrollToHome}
        className="text-base lg:text-xl tracking-wider font-medium bg-transparent hover:bg-transparent text-white focus:bg-transparent hover:text-white focus:text-white"
      >
        Syafiq RAez
      </Button>
      <div className="flex flex-row justify-end gap-2">
        <Button
          onClick={handleScrollToAbout}
          className={`flex flex-row gap-1 bg-transparent text-[clamp(1.2rem,1vw,1.5rem)] focus:bg-transparent hover:bg-transparent font-medium ${isClickedAboutMe
              ? "text-orange-400 hover:text-orange-600 focus:text-orange-400 font-bold"
              : "text-orange-700 hover:text-orange-600 focus:text-orange-400"
            }`}
        >
          <div className="">About Me</div>
          {/* <div className="">
            <IoPersonCircle className="h-[clamp(1.6rem,1vw,1rem)] w-[clamp(1.6rem,1vw,1rem)]" />
          </div> */}
        </Button>
        <Button
          onClick={handleToDownloadResume}
          className={`flex flex-row gap-1 bg-transparent text-[clamp(1.2rem,1vw,1.5rem)] focus:bg-transparent hover:bg-transparent font-medium ${isClickedResume
              ? "text-orange-400 hover:text-orange-600 focus:text-orange-400 font-bold"
              : "text-orange-700 hover:text-orange-600 focus:text-orange-400"
            }`}
        >
          <div className={` transition-all duration-300 ${isClickedResume ? "animate-bounce text-orange-400" : ""
            }`}>
            Resume
          </div>
          {/* <div>
            <MdDownloadForOffline
              className={`h-[clamp(1.6rem,1vw,1rem)] w-[clamp(1.6rem,1vw,1rem)] transition-all duration-300 ${isClickedResume ? "animate-bounce text-orange-400" : ""
                }`}
            />
          </div> */}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
