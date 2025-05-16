import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../App.css"; // create this CSS file or add in App.css

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <div className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    )
  );
};

export default BackToTop;
