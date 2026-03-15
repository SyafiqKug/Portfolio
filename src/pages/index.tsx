import Body from "@/portfolio/component/body";
import Footer from "@/portfolio/component/footer";
import Navbar from "@/portfolio/component/navbar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden">
      <Navbar />
      <div className="w-full flex-1 overflow-hidden">
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
