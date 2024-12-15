import React from "react";

const Body: React.FC = () => {
  return (
    <div className="h-full w-full bg-hero bg-no-repeat bg-cover bg-right text-orange-200 text-center">
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
    </div>
  );
};

export default Body;
