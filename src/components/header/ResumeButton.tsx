import { Button } from "@chakra-ui/react";

const ResumePath =
  "https://res.cloudinary.com/distgtnid/raw/upload/v1663258949/Resume/Resume_aq81nf.docx";

type Props = {
  isMobile: boolean;
  size: string;
  width: string;
  height: string;
  left: number;
};

function ResumeButton({ isMobile, size, width, height, left }: Props) {
  return (
    <>
      {!isMobile && (
        <a href={`${ResumePath}`} download>
          {" "}
          <Button
            size={size}
            height={height}
            width={width}
            left={left}
            border="2px"
            borderColor="blue.700"
          >
            Resume
          </Button>
        </a>
      )}
    </>
  );
}

export default ResumeButton;
