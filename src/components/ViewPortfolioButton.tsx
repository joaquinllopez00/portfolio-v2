import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function ViewPortfolioButton() {
  const [spans, setSpans] = useState<any>(null);

  const viewPortfolioButton = useRef(null);

  //Set a timeout for 10 seconds to apply classname to button

  useEffect(() => {
    const button: any = viewPortfolioButton.current;
    setTimeout(() => {
      //Remove animate__fadeIn class
      button.classList.remove("animate__fadeIn", "animate__animated", "animate__delay-4s");
      //Add animate__rubberBand class
      button.classList.add("animate__animated", "animate__rubberBand");
    }, 8000);
  }, []);

  function viewPortfolioClick(e: any) {
    const button: any = viewPortfolioButton.current;
    e.preventDefault();
    button.classList.add("btn--clicked");
    document.querySelectorAll("span").forEach((element: any) => {
      element.classList.add("expanded");
    });

    //Set Box to z-index: 1

    setTimeout(() => {
      button.classList.remove("btn--clicked");
    }, 3500);
    setTimeout(() => {
      document.querySelectorAll("span").forEach((element) => {
        element.classList.remove("expanded");
      });
    }, 1700);
  }

  return (
    <>
      <Box>
        <Button
          ml={4}
          bg={"brand.darkBlue"}
          color="white"
          className="animate__animated animate__fadeIn animate__delay-4s btn"
          onClick={(e) => viewPortfolioClick(e)}
          ref={viewPortfolioButton}
          transition={"0.6s cubic-bezier(0.01, 1.69, 0.99, 0.94);"}
        >
          View Portfolio
        </Button>
      </Box>
    </>
  );
}
