import { useEffect, useRef, useState } from "react";

import Body from "@/portfolio/component/body";
import Footer from "@/portfolio/component/footer";
import Navbar from "@/portfolio/component/navbar";

const Home: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const handleScroll = () => {
    // Show scrollbar
    setIsScrolling(true);

    // Reset the previous timer
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Hide scrollbar 800ms after scrolling stops
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <Navbar />

      <div
        onScroll={handleScroll}
        className={`portfolio-scroll min-h-0 w-full flex-1 overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory ${
          isScrolling ? "is-scrolling" : ""
        }`}
      >
        <Body />
      </div>

      <Footer />
    </div>
  );
};

export default Home;