import { Box, Stack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ContactButtons from "./ContactButtons";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactWrapper from "./ContactWrapper";
import WindowSize from "../../hooks/windowSize";

export default function Contact() {
  let isMobile = WindowSize();
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
