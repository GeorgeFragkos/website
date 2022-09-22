import { Box, Flex, Stack } from "@chakra-ui/react";
import AboutHeader from "./AboutHeader";
import AboutCard from "../cards/AboutCard";
import { MotionBox, MotionFlex } from "../home/motion";

const ANIMATION_DURATION = 0.5;

function About() {
  return (
    <>
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
        <AboutHeader />
      </MotionBox>

      <Box>
        <Stack align={"center"} justify={"center"}>
          <Flex mt={-20}>
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
              <AboutCard />
            </MotionFlex>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default About;
