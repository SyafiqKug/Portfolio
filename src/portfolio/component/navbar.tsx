import React, { useEffect, useState } from "react";
import { Button } from "./button";

type NavbarProps = {
  aboutMe: boolean;
  setAboutMe: (value: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ aboutMe, setAboutMe }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleScrollToHome = () => {
    const aboutSection = document.getElementById("home");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      setIsClicked(false);
    }
  };
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      setIsClicked(true);
    }
  };

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsClicked(entry.isIntersecting); // Update state based on visibility
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
      className={`${
        isClicked
          ? "relative w-full shadow-gray-700 shadow-md flex flex-row justify-between items-center text-white bg-gray-800 py-2 px-5" // Solid background and relative positioning
          : "absolute w-full shadow-gray-700 shadow-md flex flex-row justify-between items-center text-white bg-black bg-opacity-70 py-2 px-5" // Semi-transparent background
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
          className={`bg-transparent text-[clamp(1.5rem,1vw,1.5rem)] focus:bg-transparent hover:bg-transparent font-bold ${
            isClicked
              ? "text-orange-400 hover:text-orange-600 focus:text-orange-400"
              : "text-orange-700 hover:text-orange-600 focus:text-orange-400"
          }`}
        >
          About Me
        </Button>
        {/* <Button className="bg-transparent text-sm hover:bg-transparent text-orange-800 font-semibold shadow-md hover:shadow-gray-100 hover:text-orange-500">
          Projects
        </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
