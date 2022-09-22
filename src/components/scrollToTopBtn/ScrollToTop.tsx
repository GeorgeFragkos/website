import { Flex, Spacer } from "@chakra-ui/react";
import { FaAngleUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./style.css";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Flex>
      <Spacer />
      {showTopBtn && (
        <div className="top-to-btm">
          <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
        </div>
      )}
    </Flex>
  );
}

export default ScrollToTop;
