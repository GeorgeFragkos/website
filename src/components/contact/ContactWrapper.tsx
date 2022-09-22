import { Box, Flex } from "@chakra-ui/react";

type Props = {
  children: JSX.Element;
};

function ContactWrapper({ children }: Props) {
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        {children}
      </Box>
    </Flex>
  );
}

export default ContactWrapper;
