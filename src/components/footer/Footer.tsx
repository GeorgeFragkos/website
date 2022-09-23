import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Spacer,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import "./footer.css";
import { SocialIcon } from "react-social-icons";
import {
  linkedIn,
  discord,
  github,
  text,
  logoDark,
  logoLight,
} from "../../data/FooterData";

export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <footer>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Box py={8}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "3px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "3px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            {colorMode === "dark" ? (
              <Image width="100px" height="100px" src={logoDark} />
            ) : (
              <Image width="100px" height="100px" src={logoLight} />
            )}
          </Flex>
          <Flex>
            <Text pt={3} px={10} fontSize={"sm"} textAlign={"left"}>
              {text}
            </Text>
            <Spacer />
            <Spacer />
            <Stack direction={"row"} spacing={5} pr={5} pt={3}>
              <SocialIcon url={linkedIn} style={{ height: 35, width: 35 }} />
              <SocialIcon url={github} style={{ height: 35, width: 35 }} />
              <SocialIcon url={discord} style={{ height: 35, width: 35 }} />
            </Stack>
          </Flex>
        </Box>
      </Box>
    </footer>
  );
}
