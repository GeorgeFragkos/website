import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import "./footer.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
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
            Logo
          </Flex>
          <Flex>
            <Text pt={3} px={10} fontSize={"sm"} textAlign={"left"}>
              © George Fragkos Software Developer
            </Text>
            <Spacer />
            <Spacer />
            <Stack direction={"row"} spacing={5} pr={5} pt={3}>
              <SocialIcon
                url="https://www.linkedin.com/in/george-fragkos-076304243/"
                style={{ height: 35, width: 35 }}
              />

              <SocialIcon
                url="https://discord.com/channels/GeorgeFragkos#6465"
                style={{ height: 35, width: 35 }}
              />

              <SocialIcon
                url="https://github.com/GeorgeFragkos"
                style={{ height: 35, width: 35 }}
              />
            </Stack>
          </Flex>
        </Box>
      </Box>
    </footer>
  );
}
