import Body from "@/portfolio/component/body";
import Footer from "@/portfolio/component/footer";
import Navbar from "@/portfolio/component/navbar";
import React, { useState } from "react";

const Home: React.FC = () => {

  const [aboutMe, setAboutMe] = useState(false);
  
  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden">
      <Navbar aboutMe={aboutMe} setAboutMe={setAboutMe} />
      <div className="w-full flex-1 overflow-hidden">
        <Body  />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
