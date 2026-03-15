import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosMail, IoIosMailUnread, IoLogoLinkedin } from "react-icons/io";
import {
  IoCallSharp,
  IoLocationSharp,
  IoMailOpenOutline,
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
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const [copied, setCopied] = useState(false);

  const email = "syafiqrazak669@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 9000); // change every 9 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
      <section
        id="home"
        className="relative snap-center h-full min-h-full w-full bg-hero bg-no-repeat bg-cover bg-[position:90%_center] md:bg-center text-orange-200"
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
              Fullstack Developer and UI/UX Designer with a passion for creating
              modern, efficient, and scalable digital solutions. Experienced in
              building responsive and user-friendly applications, focusing on
              clean interfaces, performance, and seamless experiences across all
              devices.
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="snap-center min-h-full w-full flex flex-col md:flex-row overflow-hidden"
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
          <div className="w-full flex flex-col pl-5 gap-1">
            {/* Contact area */}
            <div className="w-full">
              <div className="text-[clamp(0.5rem,5vw,1.2rem)] font-bold tracking-tight uppercase leading-8 text-slate-700">
                Contact
              </div>

              <div className="h-[5px] w-full bg-slate-700" />

              <div className="mt-3 space-y-1 text-[14px]">
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
                    href="https://linkedin.com/in/syafiq-muhammad-088a2912a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[clamp(0.8rem,5vw,1rem)] font-medium tracking-tighter xl:tracking-widest group"
                  >
                    syafiq-muhammad-088a2912a
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
            <div className="w-full">
              <div className="text-[clamp(0.5rem,5vw,1.2rem)] font-bold tracking-tight uppercase leading-8 text-slate-700">
                Language
              </div>

              <div className="h-[5px] w-full bg-slate-700" />

              <div className="mt-3 space-y-1 text-[14px]">
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
            {/* Skill area */}
            <div className="w-full">
              <div className="text-[clamp(0.5rem,5vw,1.2rem)] font-bold tracking-tight uppercase leading-8 text-slate-700">
                Skill / Tools
              </div>

              <div className="h-[5px] w-full bg-slate-700" />

              <div className="space-y-1 text-[14px] pr-5">
                <SkillCloud />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* </div> */}
      {/* <div className="h-full w-4/6 md:w-4/5 p-5">
          <div className="h-full w-full flex flex-col overflow-y-auto border-2 border-gray-500 rounded-lg overflow-hidden">
            <div className="h-full w-full flex flex-col">
              <div className="w-full text-xl font-bold text-gray-800">
                About Me
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-tiny text-gray-700 tracking-tighter leading-tight">
                  Hi, I am a passionate and versatile professional with a
                  background in both architecture and software development. I
                  have successfully transitioned from designing physical spaces
                  to building modern, responsive, and scalable digital
                  solutions. I am currently working as a Software Developer ,
                  where I design and implement solutions based on client
                  requirements. My role involves crafting intuitive user
                  experiences and developing robust full-stack applications.
                </div>
              </div>
              <div className="h-full w-full flex flex-row gap-2">
                <div className="h-full w-full flex flex-col gap-3">
                  <div className="h-auto w-full">
                    <div className="text-base lg:text-xl font-semibold text-gray-800">
                      Career Journey
                    </div>
                    <div className=" text-gray-700">
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Software Developer</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          <div className="font-bold">
                            Rayatech Sdn. Bhd. (Mar 2023 - Present)
                          </div>
                          <div className="">
                            Designing and implementing client-based solutions
                            with a focus on responsive UI/UX and scalable
                            backend systems.
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Interior Designer</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          <div className="font-bold">
                            Ezkay Sdn. Bhd. (Oct 2021 - Sep 2022)
                          </div>
                          <div className="">
                            Designed innovative and functional interior spaces,
                            combining aesthetics with practicality.
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Assistant Architect</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          <div className="font-bold">
                            Iryas Incorporation (Jan 2021 - Oct 2021)
                          </div>
                          <div className="">
                            Designed functional building spaces with
                            practicality.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto w-full">
                    <div className="text-base lg:text-xl font-semibold text-gray-800">
                      Technical Skills
                    </div>
                    <div className=" text-gray-700">
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Programming</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          HTML, CSS, JavaScript, TypeScript, Tailwind, Bootstrap
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Frameworks</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">Next.js, Tailwind CSS</div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">UI/UX Design Tools</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          Adobe Photoshop, InDesign (Basic)
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Database Management</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">MySQL</div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Hosting & Deployment</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">AWS for prototypes</div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Additional Skills</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          Responsive Design for BYOD compatibility
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto w-full">
                    <div className="text-base lg:text-xl font-semibold text-gray-800">
                      Education
                    </div>
                    <div className="w-full flex flex-col text-gray-700 gap-2">
                      <div className="w-full flex flex-col lg:flex-row lg:gap-2">
                        <div className="w-full lg:w-1/3 flex flex-row justify-between font-bold">
                          <div className="">
                            Diploma in Software Development
                          </div>
                          <div className="">-</div>
                        </div>
                        <div className="w-full lg:w-2/3">
                          Code Institute (2020-2021): Focused on HTML, CSS,
                          JavaScript, and Python.
                        </div>
                      </div>
                      <div className="w-full flex flex-col lg:flex-row lg:gap-2">
                        <div className="w-full lg:w-1/3 flex flex-row justify-between font-bold">
                          <div className="">
                            Bachelor of Science in Architectural Studies
                          </div>
                          <div className="">-</div>
                        </div>
                        <div className="w-full lg:w-2/3">
                          Limkokwing University (2016-2018): Graduated with a
                          CGPA of 3.34.
                        </div>
                      </div>
                      <div className="w-full flex flex-col lg:flex-row lg:gap-2">
                        <div className="w-full lg:w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Diploma in Architecture</div>
                          <div className="">-</div>
                        </div>
                        <div className="w-full lg:w-2/3">
                          Politeknik Port Dickson (2012-2015): Graduated with a
                          CGPA of 3.01.
                        </div>
                      </div>
                      <div className="w-full flex flex-col lg:flex-row lg:gap-2">
                        <div className="w-full lg:w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Sijil Pelajaran Malaysia (SPM)</div>
                          <div className="">-</div>
                        </div>
                        <div className="w-full lg:w-2/3">
                          SMK Sultan Abdul Aziz Shah (2009-2011)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </section> */}
    </div>
  );
};

export default Body;
