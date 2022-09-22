import {
  Box,
  Center,
  Flex,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";

const technologies = [
  {
    technology: "react",
    src: "https://res.cloudinary.com/distgtnid/image/upload/v1663686985/GeorgeFragkos/584830f5cef1014c0b5e4aa1_t17kcf.png",
  },
  {
    technology: "js",
    src: "https://res.cloudinary.com/distgtnid/image/upload/v1663685775/GeorgeFragkos/javascript-39410_omteln.png",
  },
  {
    technology: "ts",
    src: "https://res.cloudinary.com/distgtnid/image/upload/v1663685777/GeorgeFragkos/typescript_original_logo_icon_146317_cqnbli.png",
  },
  {
    technology: "html",
    src: "https://res.cloudinary.com/distgtnid/image/upload/v1663685768/GeorgeFragkos/html5-logo-31813_qjr4g6.png",
  },
  {
    technology: "css",
    src: "https://res.cloudinary.com/distgtnid/image/upload/v1663685773/GeorgeFragkos/html5-logo-31822_wxhq0y.png",
  },
  {
    technology: "c#",
    src: "https://res.cloudinary.com/distgtnid/image/upload/v1663685761/GeorgeFragkos/c-logo-icon-28402_t2ites.png",
  },
];

let isMobile = false;

export default function AboutCard() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    isMobile = window.innerWidth < 768 ? true : false;
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

  const mobileViewIcons = (index: number) => {
    if (index <= technologies.length) return 1;
    return 0;
  };

  return (
    <Center py={6}>
      <Box
        mt={-1}
        maxW={"510px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"left"}
      >
        <Text fontSize={20}>
          An individual with a vast interest in the development of computer
          software. Currently, a 5th year student in the University of Serres,
          majoring in Computer Informatics and Telecommunication Engineering. A
          self-motivated character, passionate for intricate projects.
          Comfortable under pressure, open to constructive criticism for
          self-reflection. Favorable attributes include traits of extraversion
          and effective time management.
        </Text>
        <br />
        <Text fontSize={30}>Education :</Text>
        <Text fontSize={20}>
          Undergraduate, Computer Science at Technological Educational Institute
          of Central Macedonia.
        </Text>
        <br />
        <Text fontSize={20}>Professional High School(EPAL) ARNAIAS</Text>
        <br />
        <Text fontSize={30}>Technologies I use and learn :</Text>
        <Box>
          {" "}
          {!isMobile && <AboutCardTechnologies />}
          {isMobile && <AboutCardTechnologiesMobile />}
        </Box>
      </Box>
    </Center>
  );
}

const AboutCardTechnologies = () => {
  return (
    <Flex direction={"row"}>
      {technologies.map((tech) => (
        <Image src={tech.src} key={tech.technology} height={55} />
      ))}
    </Flex>
  );
};

const AboutCardTechnologiesMobile = () => {
  const arrayToFirstRow = technologies.slice(technologies.length / 2);
  const arrayToSecRow = technologies.slice(0, technologies.length / 2);

  return (
    <>
      <Flex direction={"row"}>
        {arrayToFirstRow.map((tech) => (
          <Image src={tech.src} key={tech.technology} height={55} />
        ))}
      </Flex>
      <Flex direction={"row"}>
        {arrayToSecRow.map((tech) => (
          <Image src={tech.src} key={tech.technology} height={55} />
        ))}
      </Flex>
    </>
  );
};
