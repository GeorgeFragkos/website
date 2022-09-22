import {
  Box,
  Center,
  Heading,
  useColorModeValue,
  Text,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MotionBox } from "../home/motion";
import { SocialIcon } from "react-social-icons";

type Props = {
  header: string;
  url: string;
  text: string;
  technologies: string[];
};

function ProjectCard({ header, url, text, technologies }: Props) {
  return (
    <Center py={6}>
      <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
        <Box
          width={"300px"}
          height={"400px"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"left"}
        >
          <Stack direction={"row"}>
            <StarIcon style={{ height: 25, width: 35 }} />
            <Spacer />
            <SocialIcon url={url} style={{ height: 35, width: 35 }} />
          </Stack>
          <Heading size={"lg"}>{header}</Heading>
          <br />
          <Text>{text}</Text>
          <br />
          <Stack direction={"row"}>
            {technologies.map((item, index) => (
              <Text fontSize={"xs"} key={index}>
                {item}
              </Text>
            ))}
          </Stack>
        </Box>
      </MotionBox>
    </Center>
  );
}

export default ProjectCard;
