import { Box, Stack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ContactButtons from "./ContactButtons";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactWrapper from "./ContactWrapper";

let isMobile = false;
export default function Contact() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    isMobile = window.innerWidth < 768 ? true : false;
  };
  useEffect(() => {
    //At the first execution
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <ContactWrapper>
      <Box>
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
          <ContactHeader />
          <Stack direction={isMobile ? "column" : "row"} spacing={5}>
            <ContactButtons />
          </Stack>
          <Stack
            spacing={{ base: 4, md: 8, lg: 20 }}
            direction={{ base: "column", md: "row" }}
          >
            <ContactForm />
          </Stack>
        </VStack>
      </Box>
    </ContactWrapper>
  );
}
