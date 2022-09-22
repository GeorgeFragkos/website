import { Heading } from "@chakra-ui/react";

const HEADER_TEXT = "Get in Touch";

function ContactHeader() {
  return (
    <Heading
      fontSize={{
        base: "4xl",
        md: "5xl",
      }}
    >
      {HEADER_TEXT}
    </Heading>
  );
}

export default ContactHeader;
