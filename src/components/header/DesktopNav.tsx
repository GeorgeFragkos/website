import {
  Box,
  Flex,
  Link,
  Popover,
  PopoverTrigger,
  Spacer,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  scrollToAboutSection,
  scrollToPortfolioSection,
  scrollToContactSection,
} from "../../functions/ScrollToFunctions";

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={8}>
      <Spacer />
      <Box>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Flex>
              <Link
                pr={10}
                pt={"60px"}
                fontWeight={500}
                fontSize="2xl"
                onClick={scrollToAboutSection}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                About
              </Link>
              <Link
                pr={10}
                pt={"60px"}
                fontWeight={500}
                fontSize="2xl"
                color={linkColor}
                onClick={scrollToPortfolioSection}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                Portfolio
              </Link>
              <Link
                pr={7}
                pt={"60px"}
                onClick={scrollToContactSection}
                fontWeight={500}
                fontSize="2xl"
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                Contact
              </Link>
            </Flex>
          </PopoverTrigger>
        </Popover>
      </Box>
    </Stack>
  );
};

export default DesktopNav;
