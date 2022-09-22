import { Box, Flex, Heading } from "@chakra-ui/react";

const HEADER_TEXT = "About me";

function AboutHeader() {
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundAttachment: "fixed",
      }}
      id="about"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Heading
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}
        >
          {HEADER_TEXT}
        </Heading>
      </Box>
    </Flex>
  );
}

export default AboutHeader;
