import React from "react";

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
        <div className="h-full w-2/5 flex flex-col bg-gray-500"></div>
        <div className="h-full w-3/5 container mx-auto px-6 lg:px-20 py-12 ">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Details */}
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Hi, I am a passionate and versatile professional with a
                background in both architecture and software development. I have
                successfully transitioned from designing physical spaces to
                building modern, responsive, and scalable digital solutions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I am currently working as a Software Developer at Rayatech Sdn.
                Bhd., where I design and implement solutions based on client
                requirements. My role involves crafting intuitive user
                experiences and developing robust full-stack applications.
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Skills
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <strong>Programming:</strong> HTML, CSS, JavaScript,
                  TypeScript
                </li>
                <li>
                  <strong>Frameworks:</strong> Next.js, Tailwind CSS
                </li>
                <li>
                  <strong>UI/UX Design Tools:</strong> Adobe Photoshop, InDesign
                  (Basic)
                </li>
                <li>
                  <strong>Database Management:</strong> MySQL
                </li>
                <li>
                  <strong>Hosting & Deployment:</strong> AWS for prototypes
                </li>
                <li>
                  <strong>Additional Skills:</strong> Responsive Design for BYOD
                  compatibility
                </li>
              </ul>
            </div>
          </div>

          {/* Career Journey */}
          {/* <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Career Journey
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Software Developer</strong> at Rayatech Sdn. Bhd. (Mar
                2023 - Present):
                <p>
                  Designing and implementing client-based solutions with a focus
                  on responsive UI/UX and scalable backend systems.
                </p>
              </li>
              <li>
                <strong>Interior Designer</strong> at Ezkay Sdn. Bhd. (Oct 2021
                - Sep 2022):
                <p>
                  Designed innovative and functional interior spaces, combining
                  aesthetics with practicality.
                </p>
              </li>
            </ul>
          </div> */}

          {/* Education Section */}
          {/* <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Education
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Diploma in Software Development</strong> - Code
                Institute (2020-2021): Focused on HTML, CSS, JavaScript, and
                Python.
              </li>
              <li>
                <strong>Bachelor of Science in Architectural Studies</strong> -
                Limkokwing University (2016-2018): Graduated with a CGPA of 3.34
                and represented the university in the Malaysian Timber Award
                Competition.
              </li>
              <li>
                <strong>Diploma in Architecture</strong> - Politeknik Port
                Dickson (2012-2015): Graduated with a CGPA of 3.01.
              </li>
              <li>
                <strong>SPM</strong> - SMK Sultan Abdul Aziz Shah (2009-2011).
              </li>
            </ul>
          </div> */}

          {/* Personal Philosophy */}
          {/* <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              My Philosophy
            </h3>
            <p className="text-lg text-gray-700">
              As a fast learner and problem solver, I thrive in challenging
              environments. My goal is to design and develop user-friendly
              solutions that empower people to work seamlessly, anytime and
              anywhere.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Body;
