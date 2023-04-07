import { Flex, Heading, Box } from "@chakra-ui/react";
import React, { useState } from "react";

export function PortfolioHeroAnimation() {
  const [transitioned, setTransitioned] = useState<boolean>(false);

  // This is the animation that will be used for the portfolio page.
  // It will be a SVG animation that will be used as the hero for the portfolio page.

  //Set a timeout for 3 seconds toggle state
  setTimeout(() => {
    setTransitioned(true);
  }, 5000);

  return (
    <Flex
      className="container"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      transition="all 1.5s ease-in-out"
    >
      <Box
        className="portfolio-styles animate__animated animate__fadeIn animate__delay-2s animate__slower"
        position="absolute"
        top="75px"
      >
        <Heading
          as="h1"
          fontSize={transitioned ? "4rem" : "10em"}
          textAlign={"center"}
          transition=" 0.6s cubic-bezier(0.01, 1.69, 0.99, 0.94)"
          fontWeight={400}
        >
          <span style={{ color: "#2E5B6F" }}>Portfolio</span>
        </Heading>
      </Box>
      <svg className="portfolio-styles animate__animated animate__fadeOut animate__delay-3s" viewBox="0 0 960 300">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="80%">
            Portfolio
          </text>
        </symbol>
        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
        </g>
      </svg>
    </Flex>
  );
}
