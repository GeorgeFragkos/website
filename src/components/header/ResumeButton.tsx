import { Button } from "@chakra-ui/react";

const ResumePath =
  "https://res.cloudinary.com/distgtnid/raw/upload/v1664117954/Resume/Resume_u76hzf.docx";

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
