import Body from "@/portfolio/component/body";
import Footer from "@/portfolio/component/footer";
import Navbar from "@/portfolio/component/navbar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col">
      <Navbar />
      <div className="h-full w-full flex-1 flex items-center justify-center">
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
