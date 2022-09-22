import { Flex, Box, Container } from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import "./style.css";
import { image } from "../../data/HomeData";
const ANIMATION_DURATION = 0.5;

const IntroSection = () => {
  const color = "blue.400";

  return (
    <Container maxW="5xl" p={{ base: 5, md: 12 }} className="home">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <img src={image} width="150" height="150" />
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Box position="relative">
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={color}
                mt={0}
                cursor="pointer"
                width="max-content"
              >
                Hey!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={3} textAlign="left">
            {" "}
            My name is <strong>George</strong> and I&apos;m a Undergraduate
            student focused on web development from Greece
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            This is my personal site, where I write about the things I&apos;m
            working on and share what I&apos;ve learned. 😊
          </Box>
        </MotionFlex>
      </Flex>
    </Container>
  );
};

export default IntroSection;
