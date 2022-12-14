import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import ResumeButton from "./ResumeButton";
import MobileNav from "./MobileNav";
import WindowSize from "../../hooks/windowSize";
import { logoDark, logoLight } from "../../data/FooterData";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  let isMobile = WindowSize();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        height={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={4}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
          >
            {colorMode === "dark" ? (
              <Image width="150px" height="150px" src={logoDark} />
            ) : (
              <Image width="150px" height="150px" src={logoLight} />
            )}
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ResumeButton
            isMobile={isMobile}
            size={"md"}
            height={"48px"}
            width={"200px"}
            left={0}
          />
          <Stack direction={"row"} spacing={7} pt={1}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
