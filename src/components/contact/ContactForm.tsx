import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function ContactForm() {
  const form = useRef(null);
  const emailServiceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const emailTemplateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(emailServiceID!, emailTemplateID!, form.current!, publicKey)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="lg"
      border="2px"
      borderColor="blue.700"
      p={8}
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
      shadow="base"
    >
      <VStack spacing={5}>
        <form ref={form} onSubmit={sendEmail}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>

            <InputGroup>
              <InputLeftElement children={<BsPerson />} />
              <Input type="text" name="name" placeholder="Your Name" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>

            <InputGroup>
              <InputLeftElement children={<MdOutlineEmail />} />
              <Input type="email" name="email" placeholder="Your Email" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Message</FormLabel>

            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              resize="none"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            bg="blue.400"
            color="white"
            _hover={{
              bg: "blue.500",
            }}
          >
            Send Message
          </Button>
        </form>
      </VStack>
    </Box>
  );
}

export default ContactForm;
