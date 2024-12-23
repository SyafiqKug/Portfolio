import React from "react";
import Image from "next/image";
import { IoIosMail, IoIosMailUnread } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";

const Body: React.FC = () => {
  return (
    <div className="h-screen-50 sm:min-h-full w-full overflow-y-auto snap-mandatory snap-y">
      <section
        id="home"
        className=" snap-center h-full w-full bg-hero bg-no-repeat bg-cover bg-right text-orange-200 text-center"
      >
        {/* <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 text-center"> */}
        <div className="h-full w-full flex flex-col items-start justify-end mx-auto bg-black bg-opacity-50 p-10 pb-40">
          <div className="h-full w-full flex flex-col items-start justify-end mx-auto gap-5 font-extrabold bg-gradient-to-r from-amber-600 via-amber-300 to-amber-100 text-transparent bg-clip-text ">
            <div className="text-5xl font-bold">Hello !!!</div>
            <div className="w-full flex flex-row gap-5 self-baseline">
              <div className="flex items-end justify-end text-8xl font-extrabold tracking-wide">
                I&apos;m Syafiq RAez
              </div>
            </div>
            <div className="w-full flex flex-col items-start text-sm text-white font-normal tracking-widest">
              <div className="">
                A Fullstack Developer and UI/UX Designer, I am a passionate
                software developer
              </div>
              <div className="">
                with experience in building responsive and user-friendly
                applications.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="snap-center h-full w-full flex flex-row items-start justify-end  bg-gray-100"
      >
        <div className="h-full w-2/6 md:w-1/5 flex flex-col bg-gray-400 p-5 divide-y-2 divide-gray-600 gap-10">
          <div className="h-1/4 w-full flex items-center justify-center">
            <div className="h-48 w-48 flex items-center justify-end rounded-full overflow-hidden shadow-lg shadow-gray-900">
              <Image
                src="/images/saya2.jpg"
                width={400}
                height={200}
                alt=""
                className="h-52 w-52"
              />
            </div>
          </div>
          <div className="h-3/4 flex flex-col gap-3">
            <div className="h-1/2 flex flex-col gap-3">
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <IoIosMail className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 font-medium tracking-widest">
                  syafiq_razak@hotmail.com
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <IoCallSharp className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 font-medium tracking-widest">
                  012-3245341
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <FaLinkedin className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 tracking-tight font-medium">
                  http://linkedin.com/in/syafiq­muhammad-088a2912a
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <FaLocationDot className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 font-medium tracking-widest">
                  Kajang, Selangor
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <FaGithub className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 font-medium tracking-widest">
                  SyafiqKug
                </div>
              </div>
            </div>
            <div className="h-1/2 flex flex-col bg-white rounded-md p-2 divide-y divide-gray-500">
              <div className="w-full flex flex-row items-center justify-evenly text-sm gap-3">
                <div className="text-base lg:text-tiny font-bold lg:font-medium tracking-widest">
                  Personal Skill
                </div>
                <div className="">
                  <GiSkills className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-start text-sm gap-3 pt-5">
                <div className="w-full text-center font-medium tracking-widest">
                  Leadership
                </div>
                <div className="w-full text-center font-medium tracking-widest">
                  Teamwork
                </div>
                <div className="w-full text-center font-medium tracking-widest">
                  Multi-Tasking
                </div>
                <div className="w-full text-center font-medium tracking-widest">
                  Fast Learner
                </div>
                <div className="w-full text-center font-medium tracking-widest">
                  Perfectionist
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-4/6 md:w-4/5 p-5">
          <div className="h-screen-40 sm:min-h-full w-full flex flex-col overflow-y-auto container border-2 border-gray-500 rounded-lg overflow-hidden p-2">
            <div className="w-full text-2xl font-bold text-gray-800">
              About Me
            </div>
            <div className="h-full w-full flex flex-col gap-5">
              {/* Personal Details */}
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
                      My Philosophy
                    </div>
                    <div className=" text-gray-700">
                      <div className="w-full flex flex-row gap-2 tracking-tighter leading-tight text-tiny">
                        As a fast learner and problem solver, I thrive in
                        challenging environments. My goal is to design and
                        develop user-friendly solutions that empower people to
                        work seamlessly, anytime and anywhere.
                      </div>
                    </div>
                  </div>
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
        </div>
      </section>
    </div>
  );
};

export default Body;
