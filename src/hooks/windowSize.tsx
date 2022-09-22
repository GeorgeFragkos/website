import { useState, useEffect } from "react";

let isMobile = false;
function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    isMobile = window.innerWidth < 768 ? true : false;
  };
  useEffect(() => {
    //At the first execution
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return isMobile;
}

export default WindowSize;
