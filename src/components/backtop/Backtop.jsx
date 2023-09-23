import React, { useState } from "react";
import { backtop } from "../../assets";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <a
      href="grkjkj"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 100000000,
        display: visible ? "inline" : "none",
      }}
    >
      <img src={backtop} alt="Eror" />
    </a>
  );
};

export default ScrollButton;
