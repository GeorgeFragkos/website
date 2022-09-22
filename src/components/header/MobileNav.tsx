import {
  Button,
  Flex,
  Stack,
  useColorModeValue,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";
import ResumeButton from "./ResumeButton";

import {
  scrollToAboutSection,
  scrollToPortfolioSection,
  scrollToContactSection,
} from "../../functions/ScrollToFunctions";

const MobileNav = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <Stack spacing={4} onClick={onToggle}>
        <Flex
          py={2}
          as={Link}
          justify={"space-between"}
          align={"center"}
          onClick={scrollToAboutSection}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            About
          </Text>
        </Flex>
        <Flex
          py={2}
          as={Link}
          justify={"space-between"}
          onClick={scrollToPortfolioSection}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            Portfolio
          </Text>
        </Flex>
        <Flex
          py={2}
          as={Link}
          justify={"space-between"}
          onClick={scrollToContactSection}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            Contact
          </Text>
        </Flex>
        <ResumeButton
          isMobile={false}
          size={"md"}
          height={"48px"}
          width={"80px"}
          left={-2}
        />
      </Stack>
    </Stack>
  );
};

export default MobileNav;
