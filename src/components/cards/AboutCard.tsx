import {
  Box,
  Center,
  Flex,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MotionBox } from "../home/motion";
import { technologies, text } from "../../data/AboutData";
import WindowSize from "../../hooks/windowSize";

export default function AboutCard() {
  let isMobile = WindowSize();

  return (
    <Center py={6}>
      <MotionBox whileHover={{ scale: 1.1 }} rounded="full" shadow="lg">
        <Box
          maxW={"520px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"left"}
        >
          <Text fontSize={20}>{text}</Text>
          <br />
          <Text fontSize={30}>Education :</Text>
          <Text fontSize={20}>
            Undergraduate, Computer Science at Technological Educational
            Institute of Central Macedonia.
          </Text>
          <br />
          <Text fontSize={20}>Professional High School(EPAL) ARNAIAS</Text>
          <br />
          <Text fontSize={30}>Technologies I use and learn :</Text>
          <Box>
            {!isMobile && <AboutCardTechnologies />}
            {isMobile && <AboutCardTechnologiesMobile />}
          </Box>
        </Box>
      </MotionBox>
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
