import { Button, useClipboard } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";

const PHONE_NUMBER = "+306988307459";
const EMAIL_ADDRESS = "fragkosgeorge4@gmail.com";
function ContactButtons() {
  const [value, setValue] = useState(PHONE_NUMBER);
  const { hasCopied, onCopy } = useClipboard(value);
  const emailAddressButtonHandler = () => {
    window.location.assign(`mailto:${EMAIL_ADDRESS}`);
  };

  return (
    <>
      <Button
        size="md"
        height="48px"
        width="250px"
        border="2px"
        borderColor="blue.700"
        onClick={onCopy}
      >
        {hasCopied ? (
          <>
            Copied &nbsp;
            <CheckIcon />
          </>
        ) : (
          <>
            <PhoneIcon mt={1} mr={1} />
            {`${PHONE_NUMBER}`}
          </>
        )}
      </Button>
      <Button
        size="md"
        height="48px"
        width="250px"
        border="2px"
        borderColor="blue.700"
        onClick={emailAddressButtonHandler}
      >
        <>
          <EmailIcon mt={1} mr={1} />
          {`${EMAIL_ADDRESS}`}
        </>
      </Button>
    </>
  );
}

export default ContactButtons;
