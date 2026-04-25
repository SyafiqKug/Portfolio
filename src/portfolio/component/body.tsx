import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosMail, IoIosMailUnread, IoLogoLinkedin } from "react-icons/io";
import {
  IoCallSharp,
  IoCodeSlashOutline,
  IoColorPaletteOutline,
  IoImagesOutline,
  IoLocationSharp,
  IoMailOpenOutline,
  IoPeopleOutline,
  IoPersonCircle,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { RiSpeakFill } from "react-icons/ri";
import SkillCloud from "@/component/skill";

const Body: React.FC = () => {
  const images = [
    "/images/saya1.jpg",
    "/images/saya2.jpg",
    "/images/saya3.jpg",
    "/images/saya4.jpg",
    "/images/saya5.jpg",
  ];

  const currentIdentityImages = [
    "/images/about/profile-1.jpg",
    "/images/about/workspace-1.jpg",
    "/images/about/ui-preview-1.jpg",
  ];

  const transitionImages = [
    "/archimage/archimage1.jpg",
    "/archimage/archimage2.jpg",
    "/archimage/archimage3.jpg",
    "/archimage/archimage4.jpg",
    "/archimage/archimage5.jpg",
    "/archimage/archimage6.jpg",
    "/archimage/archimage7.jpg",
    "/archimage/archimage8.1.jpg",
    "/archimage/archimage8.jpg",
    "/archimage/archimage9.jpg",
    "/archimage/archimage10.jpg",
    "/archimage/archimage11.jpg",
    "/archimage/archimage12.jpg",
    "/archimage/archimage13.jpg",
    "/archimage/archimage14.jpg",
    "/archimage/archimage15.jpg",
    "/archimage/archimage16.jpg",
    "/archimage/archimage17.jpg",
    "/archimage/archimage18.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const [copied, setCopied] = useState(false);
  const [aboutMe, setAboutMe] = useState(true);
  const [currentIdentity, setCurrentIdentity] = useState(0);
  const [transitionIndex, setTransitionIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const email = "syafiqrazak669@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleClick = (buttonName: string) => {
    if (buttonName === "aboutMe") {
      setAboutMe(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 9000); // change every 9 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPaused || currentIdentityImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIdentity((prev) => (prev + 1) % currentIdentityImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, currentIdentityImages.length]);

  useEffect(() => {
    if (isPaused || transitionImages.length <= 1) return;

    const interval = setInterval(() => {
      setTransitionIndex((prev) => (prev + 1) % transitionImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, transitionImages.length]);

  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
      <section
        id="home"
        className="relative snap-center h-full min-h-full w-screen bg-hero bg-no-repeat bg-cover bg-[position:90%_center] md:bg-center text-orange-200"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full w-full flex flex-col justify-end p-5 md:p-10 lg:pb-40 xl:pb-24">
          <div className="h-full flex flex-col justify-end bg-gradient-to-r from-amber-600 via-amber-300 to-amber-100 text-transparent bg-clip-text">
            <div className="text-2xl xl:text-5xl font-semibold leading-none">
              Hello!
            </div>

            <div className="text-xl md:text-4xl font-bold leading-none">
              I'm
            </div>

            <div className="w-full md:w-3/5 flex items-baseline gap-2 font-extrabold tracking-tighter md:tracking-tighter leading-none text-left">
              <div className="flex items-baseline font-extrabold tracking-tighter leading-none">
                <div className="text-9xl md:text-[clamp(3rem,35vw,20rem)] lg:text-[clamp(3rem,40vw,24rem)] leading-none">
                  S
                </div>
                <div className="text-8xl md:text-[clamp(3rem,25vw,8rem)] lg:text-[clamp(3rem,30vw,12rem)] leading-none tracking-tighter">
                  yafiq
                </div>
              </div>
              <div className="text-4xl md:text-[clamp(1rem,10vw,3rem)] font-extrabold leading-none">
                RAez
              </div>
            </div>

            <div className="min-w-x max-w-4xl xl:max-w-6xl text-sm text-white tracking-widest">
              This is my personal resume and portfolio, showcasing my journey as
              a Fullstack Developer and UI/UX Designer. It highlights my
              background, technical skills, and selected projects, reflecting my
              passion for building modern, efficient, and user-centered digital
              experiences.
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="snap-center min-h-full w-full flex flex-col md:flex-row overflow-hidden divide-x-4 divide-slate-700"
      >
        <div className="w-full md:w-1/4 flex flex-col items-center justify-start bg-sky-100 box-border gap-1 xl:gap-5 py-5">
          {/* Picture area */}
          <div className="relative flex flex-col items-center justify-center rounded-full overflow-hidden shadow-md shadow-gray-900">
            <Image
              src={images[currentImage]}
              width={400}
              height={400}
              alt="Profile"
              className="h-[clamp(3rem,20vw,6rem)] w-[clamp(3rem,20vw,6rem)] md:h-[clamp(5rem,20vw,10rem)] md:w-[clamp(5rem,20vw,10rem)] xl:h-[clamp(5rem,20vw,13rem)] xl:w-[clamp(5rem,20vw,13rem)] object-cover"
            />
            {/* Radio-style buttons */}
            <div className="absolute bottom-5 flex items-center gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`h-[clamp(0.4rem,1vw,0.7rem)] w-[clamp(0.4rem,1vw,0.7rem)] rounded-full border transition-all duration-300 ${
                    currentImage === index
                      ? "bg-sky-300 border-sky-500 scale-110 shadow-sm shadow-gray-900"
                      : "bg-white border-gray-400 hover:bg-sky-200 shadow-sm shadow-gray-500 "
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Detail area */}
          <div className="w-full flex flex-col sm:flex-row md:flex-col pl-5 gap-1 xl:gap-5">
            <div className="w-full sm:w-1/2 md:w-full flex flex-col gap-1 xl:gap-5">
              {/* Contact area */}
              <div className="w-full md:">
                <div className="text-[clamp(0.5rem,5vw,1.2rem)] font-bold tracking-tight uppercase leading-5 text-slate-700">
                  Contact
                </div>

                <div className="h-[5px] w-full bg-slate-700 rounded-l-full" />

                <div className="mt-1 xl:mt-3 space-y-1 text-[14px]">
                  <div className="flex items-center gap-2">
                    <div className="flex h-[clamp(0.5rem,5vw,1.6rem)] w-[clamp(0.5rem,5vw,1.6rem)] items-center justify-center rounded-full border border-slate-500 bg-slate-700 text-white">
                      <IoLocationSharp className="h-[clamp(0.5rem,5vw,1rem)] w-[clamp(0.5rem,5vw,1rem)]" />
                    </div>
                    <span className="text-[clamp(0.8rem,5vw,1rem)] font-medium tracking-tighter xl:tracking-widest">
                      Kajang, Selangor
                    </span>
                  </div>

                  <div className="w-full flex items-center justify-between gap-3 pr-5">
                    {/* Email Link */}
                    <a
                      href="mailto:syafiqrazak669@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Syafiq,%20I%20would%20like%20to%20connect%20with%20you."
                      className="flex items-center gap-2 group transition-all duration-300 hover:opacity-80 cursor-pointer"
                      aria-label="Send email to Syafiq"
                    >
                      <div className="flex h-[clamp(0.5rem,5vw,1.6rem)] w-[clamp(0.5rem,5vw,1.6rem)] items-center justify-center rounded-full border border-slate-500 bg-slate-700 text-white transition-all duration-300 group-hover:bg-slate-600">
                        <IoMailOpenOutline className="h-[clamp(0.5rem,5vw,1rem)] w-[clamp(0.5rem,5vw,1rem)]" />
                      </div>

                      <span className="text-[clamp(0.8rem,5vw,1rem)] font-medium tracking-tighter xl:tracking-widest underline-offset-4 group-hover:underline">
                        {email}
                      </span>
                    </a>

                    {/* Copy Button */}
                    <button
                      onClick={handleCopy}
                      className="text-xs px-2 py-1 rounded-md bg-slate-700 text-white hover:bg-slate-600 transition"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  <div className="flex items-center gap-2 group transition-all duration-300 hover:opacity-80 cursor-pointer">
                    <div className="flex h-[clamp(0.5rem,5vw,1.6rem)] w-[clamp(0.5rem,5vw,1.6rem)] items-center justify-center rounded-full border border-slate-500 bg-slate-700 text-white transition-all duration-300 group-hover:bg-slate-600">
                      <IoLogoLinkedin className="h-[clamp(0.5rem,5vw,1rem)] w-[clamp(0.5rem,5vw,1rem)]" />
                    </div>
                    <a
                      href="https://linkedin.com/in/syafiq-razak-088a2912a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-[clamp(0.8rem,5vw,1rem)] font-medium tracking-tighter xl:tracking-widest group"
                    >
                      syafiq-razak-088a2912a/
                    </a>
                  </div>

                  <div className="flex items-center gap-2 group transition-all duration-300 hover:opacity-80 cursor-pointer">
                    <div className="flex h-[clamp(0.5rem,5vw,1.6rem)] w-[clamp(0.5rem,5vw,1.6rem)] items-center justify-center rounded-full border border-slate-500 bg-slate-700 text-white transition-all duration-300 group-hover:bg-slate-600">
                      <FaGithub className="h-[clamp(0.5rem,5vw,1rem)] w-[clamp(0.5rem,5vw,1rem)]" />
                    </div>
                    <a
                      href="https://github.com/SyafiqKug"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-[clamp(0.8rem,5vw,1rem)] font-medium tracking-tighter xl:tracking-widest"
                    >
                      github.com/SyafiqKug
                    </a>
                  </div>
                </div>
              </div>
              {/* Language area */}
              <div className="w-full md:">
                <div className="text-[clamp(0.5rem,5vw,1.2rem)] font-bold tracking-tight uppercase leading-5 text-slate-700">
                  Language
                </div>

                <div className="h-[5px] w-full bg-slate-700 rounded-l-full" />

                <div className="mt-1 xl:mt-3 space-y-1 text-[14px]">
                  <div className="flex items-center gap-2">
                    <div className="flex h-[clamp(0.5rem,5vw,1.6rem)] w-[clamp(0.5rem,5vw,1.6rem)] items-center justify-center rounded-full border border-slate-500 bg-slate-700 text-white">
                      <RiSpeakFill className="h-[clamp(0.5rem,5vw,1rem)] w-[clamp(0.5rem,5vw,1rem)]" />
                    </div>
                    <span className="text-[clamp(0.8rem,5vw,1rem)] font-medium tracking-tighter xl:tracking-widest">
                      English – Intermediate
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex h-[clamp(0.5rem,5vw,1.6rem)] w-[clamp(0.5rem,5vw,1.6rem)] items-center justify-center rounded-full border border-slate-500 bg-slate-700 text-white">
                      <RiSpeakFill className="h-[clamp(0.5rem,5vw,1rem)] w-[clamp(0.5rem,5vw,1rem)]" />
                    </div>
                    <span className="text-[clamp(0.8rem,5vw,1rem)] font-medium tracking-tighter xl:tracking-widest">
                      Bahasa Melayu – Native
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Skill area */}
            <div className="w-full sm:w-1/2 sm:pl-5 md:w-full md:pl-0">
              <div className="text-[clamp(0.5rem,5vw,1.2rem)] font-bold tracking-tight uppercase leading-5 text-slate-700">
                Skill / Tools
              </div>

              <div className="h-[5px] w-full bg-slate-700 rounded-l-full" />

              <div className="space-y-1 text-[14px] pr-5 mt-1 xl:mt-3">
                <SkillCloud />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-3/4 flex flex-col items-center justify-start p-2 pt-4">
          <div className="absolute w-full flex flex-row items-center justify-center md:items-center md:justify-start px-10">
            <button
              onClick={() => handleClick("aboutMe")}
              name="aboutMe"
              className={`${aboutMe ? "bg-sky-900 text-orange-400 font-semibold" : "bg-sky-300 font-semibold"} hover:bg-sky-500 hover:text-black flex flex-row items-center justify-center py-1 px-3 rounded-full border-2 border-slate-700 gap-2`}
            >
              <IoPersonCircle className="h-5 md:h-6 w-5 md:w-6" />
              <div>About Me</div>
            </button>
          </div>

          <div className="h-full w-full border-2 border-slate-700 rounded-lg overflow-hidden mt-4">
            <div className="h-screen-10 sm:min-h-full w-full flex flex-col overflow-y-auto bg-[#ececec]">
              <div className="w-full flex flex-col p-1 md:p-2 md:pt-6 gap-2 bg-[#ececec]">
                {/* Title */}
                <div className="rounded-2xl border border-slate-300 bg-white px-5 py-5 shadow-sm">
                  <h2 className="text-[calc(5vh-5px)] font-bold tracking-wider text-slate-800">
                    Designing Beyond the Screen
                  </h2>
                  <p className="mt-2 w-full leading-tight text-slate-600 text-[calc(2.8vh-5px)]">
                    From architecture to digital systems, my journey has always
                    been rooted in structure, usability, and how people
                    experience what is built around them, shaping the way I
                    approach both design and development today.
                  </p>
                </div>

                {/* Core Highlights */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border border-slate-300 bg-white px-4 py-4 shadow-sm">
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className=" text-[calc(2.5vh-5px)] tracking-tight font-bold text-slate-800">
                        Design Thinking
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 border border-sky-500">
                        <IoColorPaletteOutline className="h-[calc(4vh-5px)] w-[calc(4vh-5px)] p-1" />
                      </div>
                    </div>
                    <p className="mt-1 text-[calc(2.2vh-5px)] leading-snug text-slate-600">
                      Strong foundation in structure, flow, and user-centered
                      design, focused on intuitive and clear user experiences.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-300 bg-white px-4 py-4 shadow-sm">
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className=" text-[calc(2.5vh-5px)] tracking-tight font-bold text-slate-800">
                        Fullstack Development
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 border border-orange-400">
                        <IoCodeSlashOutline className="h-[calc(4vh-5px)] w-[calc(4vh-5px)] p-1" />
                      </div>
                    </div>
                    <p className="mt-1 text-[calc(2.2vh-5px)] leading-snug text-slate-600">
                      Building practical and scalable systems with modern web
                      technologies, focused on performance and usability.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-300 bg-white px-4 py-4 shadow-sm">
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className=" text-[calc(2.5vh-5px)] tracking-tight font-bold text-slate-800">
                        UI/UX Focus
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-500">
                        <IoPhonePortraitOutline className="h-[calc(4vh-5px)] w-[calc(4vh-5px)] p-1" />
                      </div>
                    </div>
                    <p className="mt-1 text-[calc(2.2vh-5px)] leading-snug text-slate-600">
                      Turning complex workflows into clear, responsive, and
                      usable experiences for better user interaction.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-300 bg-white px-4 py-4 shadow-sm">
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className=" text-[calc(2.5vh-5px)] tracking-tight font-bold text-slate-800">
                        Leadership
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700 border border-violet-500">
                        <IoPeopleOutline className="h-[calc(4vh-5px)] w-[calc(4vh-5px)] p-1" />
                      </div>
                    </div>
                    <p className="mt-1 text-[calc(2.2vh-5px)] leading-snug text-slate-600">
                      Leading junior developers while working directly with
                      clients and project needs.
                    </p>
                  </div>
                </div>

                {/* Section 1 */}
                <div className="flex flex-col gap-2 lg:flex-row">
                  {/* Text */}
                  <div className="w-full sm:w-1/3 md:w-1/4 rounded-2xl border border-slate-300 bg-white px-5 py-5 shadow-sm">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                      Present
                    </p>
                    <h3 className="mb-3 text-[calc(3.5vh-5px)]  font-bold text-slate-800">
                      Current Identity
                    </h3>
                    <p className="text-[calc(2.5vh-5px)] leading-snug text-slate-700">
                      I am a Fullstack Developer with a design driven mindset,
                      focused on building systems that are intuitive, scalable,
                      and practical for real users. My work combines development
                      and UI/UX to create applications that are not only
                      functional, but also easier to understand and use across
                      different devices.
                    </p>
                  </div>

                  {/* Transition Picture 1 */}
                  <div className="w-full sm:w-2/3 md:w-3/4 rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-sm">
                    <div
                      className="relative w-full min-h-full overflow-hidden rounded-xl bg-slate-100"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      {currentIdentityImages &&
                      currentIdentityImages.length > 0 ? (
                        <>
                          {currentIdentityImages.map((img, index) => (
                            <img
                              key={`${img}-${index}`}
                              src={img}
                              alt="Current identity visual"
                              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                                index === currentIdentity
                                  ? "scale-100 opacity-100"
                                  : "scale-105 opacity-0"
                              }`}
                            />
                          ))}

                          {currentIdentityImages.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm">
                              {currentIdentityImages.map((_, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => setCurrentIdentity(index)}
                                  aria-label={`Go to current identity image ${index + 1}`}
                                  className={`h-2 rounded-full transition-all ${
                                    currentIdentity === index
                                      ? "w-5 bg-white"
                                      : "w-2 bg-white/60 hover:bg-white/80"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center text-center text-slate-500">
                          <IoImagesOutline className="mb-3 h-9 w-9" />
                          <p className="text-sm font-semibold">
                            Transition Picture 1
                          </p>
                          <p className="mt-1 max-w-xs text-xs leading-6">
                            Place your portrait, workspace, UI preview, or
                            personal visual here.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="rounded-2xl border border-slate-300 bg-white px-5 py-5 shadow-sm">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Foundation
                  </p>
                  <h3 className="mb-3 text-[calc(3.5vh-5px)] font-bold text-slate-800">
                    Background Before IT
                  </h3>
                  <p className="text-[calc(2.5vh-5px)] leading-snug text-slate-700">
                    Before moving into software, my background was in
                    architecture, Interior and design. That experience shaped how I think
                    about structure, clarity, and how people move through an
                    experience. It taught me that every element should serve a
                    purpose, and that good design is not only about appearance,
                    but also about how naturally something works for the user.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="w-full flex flex-col lg:flex-row gap-2">
                  {/* Transition Picture 2 */}
                  <div className="w-full sm:w-2/3 md:w-3/4 rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-sm">
                    <div
                      className="relative w-full min-h-full overflow-hidden rounded-xl bg-slate-100"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      {transitionImages && transitionImages.length > 0 ? (
                        <>
                          {transitionImages.map((img, index) => (
                            <img
                              key={`${img}-${index}`}
                              src={img}
                              alt="Transition visual"
                              // className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                              //   index === transitionIndex
                              //     ? "scale-100 opacity-100"
                              //     : "scale-105 opacity-0"
                              // }`}
                              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                                index === transitionIndex
                                  ? "opacity-100 animate-zoomSlow"
                                  : "opacity-0"
                              }`}
                            />
                          ))}

                          {transitionImages.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm">
                              {transitionImages.map((_, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => setTransitionIndex(index)}
                                  aria-label={`Go to transition image ${index + 1}`}
                                  className={`h-2 rounded-full transition-all ${
                                    transitionIndex === index
                                      ? "w-5 bg-white"
                                      : "w-2 bg-white/60 hover:bg-white/80"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center text-center text-slate-500">
                          <IoImagesOutline className="mb-3 h-9 w-9" />
                          <p className="text-sm font-semibold">
                            Transition Picture 2
                          </p>
                          <p className="mt-1 max-w-xs text-xs leading-6">
                            Place your architecture, Photoshop, coding, or
                            project transition visual here.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full sm:w-1/3 md:w-1/4 rounded-2xl border border-slate-300 bg-white px-5 py-5 shadow-sm">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                      Transition
                    </p>
                    <h3 className="mb-3 text-[calc(3.5vh-5px)] font-bold text-slate-800">
                      From Design Thinking to Digital Systems
                    </h3>
                    <p className="text-[calc(2.5vh-5px)] leading-snug text-slate-700">
                      Over time, that same design thinking naturally evolved
                      into digital work. I began applying the principles of
                      structure and user flow into interfaces, system design,
                      and fullstack development. Today, I work on real world
                      systems including healthcare platforms, national scale
                      water management solutions, and my own project, EzDrive.
                      My background across architecture, visual design, and
                      software development helps me approach problems from
                      technical, functional, and human perspectives.
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="rounded-2xl border border-slate-300 bg-gradient-to-r from-slate-800 to-slate-700 px-5 py-6 text-center shadow-sm">
                  <p className="text-[calc(4vh-6px)] font-semibold italic leading-8 tracking-wide text-white">
                    “Users shouldn’t have to think, the Design should already
                    understand them.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
