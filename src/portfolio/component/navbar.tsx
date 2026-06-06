import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isClickedAboutMe, setIsClickedAboutMe] = useState(false);
  const [isClickedResume, setIsClickedResume] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToHome = () => {
    const homeSection = document.getElementById("home");
    setIsMobileMenuOpen(false);

    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
      setIsClickedAboutMe(false);
    }
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    setIsMobileMenuOpen(false);

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      setIsClickedAboutMe(true);
    }
  };

  const handleToDownloadResume = () => {
    setIsClickedResume(true);
    setIsMobileMenuOpen(false);

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
          setIsClickedAboutMe(entry.isIntersecting);
        });
      },
      { threshold: 0.5 },
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
        isClickedAboutMe
          ? "fixed bg-gray-800 shadow-md shadow-gray-700"
          : "absolute bg-gradient-to-b from-black from-20% to-transparent"
      } top-0 left-0 z-50 w-full transition-all duration-300`}
    >
      <div className="flex w-full items-center justify-between px-6 py-2 sm:px-6 lg:px-10">
        {/* Logo / Name */}
        <Button
          onClick={handleScrollToHome}
          className="bg-transparent p-0 text-left font-medium tracking-wider text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white"
        >
          <span className="whitespace-nowrap text-lg sm:text-xl xl:text-3xl">
            Syafiq RAez
          </span>
        </Button>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex lg:gap-12">
          <Button
            onClick={handleScrollToAbout}
            className={`bg-transparent p-0 text-base font-medium hover:bg-transparent focus:bg-transparent lg:text-sm ${
              isClickedAboutMe
                ? "font-bold text-orange-400 hover:text-orange-600 focus:text-orange-400"
                : "text-orange-700 hover:text-orange-600 focus:text-orange-400"
            }`}
          >
            About Me
          </Button>

          <Button
            onClick={handleToDownloadResume}
            className={`bg-transparent p-0 text-base font-medium hover:bg-transparent focus:bg-transparent lg:text-sm ${
              isClickedResume
                ? "font-bold text-orange-400 hover:text-orange-600 focus:text-orange-400"
                : "text-orange-700 hover:text-orange-600 focus:text-orange-400"
            }`}
          >
            <span
              className={`transition-all duration-300 ${
                isClickedResume ? "animate-bounce text-orange-400" : ""
              }`}
            >
              Resume
            </span>
          </Button>
        </div>

        {/* Mobile Burger Button */}
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-transparent p-0 text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white lg:hidden"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col gap-4 bg-gray-900/95 px-6 pb-5 pt-2 backdrop-blur-md lg:hidden">
          <Button
            onClick={handleScrollToAbout}
            className={`justify-start bg-transparent p-0 text-base font-medium hover:bg-transparent focus:bg-transparent ${
              isClickedAboutMe ? "font-bold text-orange-400" : "text-orange-500"
            }`}
          >
            About Me
          </Button>

          <Button
            onClick={handleToDownloadResume}
            className={`justify-start bg-transparent p-0 text-base font-medium hover:bg-transparent focus:bg-transparent ${
              isClickedResume ? "font-bold text-orange-400" : "text-orange-500"
            }`}
          >
            Resume
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
