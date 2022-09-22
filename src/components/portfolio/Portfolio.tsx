import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import PortfolioHeader from "./PortfolioHeader";

import PortfolioData from "../../data/PortfolioData";

let directionRow = false;

function Portfolio() {
  const [width, setWidth] = useState(window.innerWidth);
  const firstThreeProjects = PortfolioData().slice(0, 3);
  const lastProjects = PortfolioData().slice(3, PortfolioData().length);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    directionRow = window.innerWidth < 970 ? true : false;
  };

  // call your useEffect
  useEffect(() => {
    //At the first execution
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <PortfolioHeader />

      <Stack
        direction={!directionRow ? "row" : "column"}
        align={"center"}
        justify={"center"}
        gap={5}
      >
        {firstThreeProjects.map((item, index) => (
          <ProjectCard
            key={index}
            header={item.header}
            url={item.url}
            text={item.text}
            technologies={item.technologies}
          />
        ))}
      </Stack>
      <Stack
        direction={!directionRow ? "row" : "column"}
        align={"center"}
        justify={"center"}
        gap={5}
      >
        {lastProjects.map((item, index) => (
          <ProjectCard
            key={index}
            header={item.header}
            url={item.url}
            text={item.text}
            technologies={item.technologies}
          />
        ))}
      </Stack>
    </>
  );
}

export default Portfolio;
