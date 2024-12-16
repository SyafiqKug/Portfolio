import Body from "@/portfolio/component/body";
import Footer from "@/portfolio/component/footer";
import Navbar from "@/portfolio/component/navbar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-between">
      <div className="">
        <Navbar />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <Body />
      </div>

      {/* <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-center">
          I am a passionate software developer with experience in building
          responsive and user-friendly applications.
        </p>
      </div> */}
      {/* <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">My Projects</h2>
        </div>
      </section> */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
