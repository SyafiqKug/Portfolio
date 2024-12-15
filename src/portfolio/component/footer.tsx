import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto text-center">
        <div className="text-xs">© {new Date().getFullYear()} Muhammad Syafiq Bin Abd Razak. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
