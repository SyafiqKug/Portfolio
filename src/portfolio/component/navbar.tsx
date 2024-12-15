import React from "react";
import { Button } from "./button";

const Navbar: React.FC = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center text-white bg-black bg-opacity-70 py-2 px-5">
      <div className="w-1/3 text-xl tracking-wider font-medium">
        Syafiq RAez
      </div>
      <div className="w-1/3 flex flex-row justify-end gap-5">
        <Button>About</Button>
        <Button>Projects</Button>
        <Button>Contact</Button>
      </div>
    </div>
  );
};

export default Navbar;
