import React, { useEffect, useState } from "react";
import { Button } from "./button";

const Navbar: React.FC = () => {
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
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
        //   isClicked
        //     ?""
        //     :
        isClicked
          ? "relative w-full shadow-gray-700 shadow-lg flex flex-row justify-between items-center text-white bg-black py-2 px-5" // Solid background and relative positioning
          : "absolute w-full shadow-gray-700 shadow-lg flex flex-row justify-between items-center text-white bg-black bg-opacity-70 py-2 px-5" // Semi-transparent background
      } w-full py-4 px-6 transition-all duration-300`}
    >
      <Button
        onClick={handleScrollToHome}
        className="w-1/3 text-xl tracking-wider font-medium bg-transparent hover:bg-transparent text-white focus:bg-transparent hover:text-white focus:text-white"
      >
        Syafiq RAez
      </Button>
      <div className="w-1/3 flex flex-row justify-end gap-2">
        <Button
          onClick={handleScrollToAbout}
          className="bg-transparent text-sm hover:bg-transparent text-orange-800 font-semibold shadow-md hover:shadow-gray-100 hover:text-orange-500"
        >
          About
        </Button>
        <Button className="bg-transparent text-sm hover:bg-transparent text-orange-800 font-semibold shadow-md hover:shadow-gray-100 hover:text-orange-500">
          Projects
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
