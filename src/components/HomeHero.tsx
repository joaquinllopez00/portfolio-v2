import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import JoaquinPortfolio from "../../public/joaquin-portfolio.svg";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";

import Waves from "./Waves";
import ViewPortfolioButton from "./ViewPortfolioButton";
import { useState } from "react";

export function HomeHero() {
  const [fontSmall, setFontSmall] = useState<boolean>(false);

  //Set a timeout for 3 seconds change fontSmall to true
  setTimeout(() => {
    setFontSmall(true);
  }, 2000);

  return (
    <Container maxW="container.xl" h="80vh" display="flex">
      <Flex direction="row" alignItems="center" gap={20}>
        <Flex w="80%" direction="column" justify="space-between">
          <Flex direction="column">
            <Heading
              as="h1"
              transition="0.8s cubic-bezier(0.01, 1.69, 0.99, 0.94)"
              size={fontSmall ? "3xl" : "6xl"}
              className="animate__animated animate__fadeInLeft"
            >
              Hello,
            </Heading>
            <Heading
              as="h1"
              size={fontSmall ? "3xl" : "6xl"}
              transition=" 0.8s cubic-bezier(0.01, 1.69, 0.99, 0.94)"
              className="animate__animated animate__fadeInRight animate__delay-1s"
              ml={55}
            >
              I&#39;m <span style={{ color: "#2E5B6F" }}>Joaquin</span>
            </Heading>
          </Flex>
          <Text className="animate__animated animate__fadeIn animate__delay-2s animate__slower" mt={4} fontSize={25}>
            <b>Fullstack Software Engineer</b>
          </Text>
          <Text className="animate__animated animate__fadeIn animate__delay-2s animate__slower" mt={4}>
            A high-energy, motivated Full Stack Engineer who specializes in creating scalable, data-intensive web
            applications. With experience in all stages of the software development life cycle, seeking to create
            responsive, performant applications that create an abstraction layer to make difficult & time consuming
            tasks efficient and enjoyable.
          </Text>
          <Flex mt={4}>
            <Flex gap={4} className="animate__animated animate__fadeIn animate__delay-2s animate__slower">
              <Image src={github} alt="Github" width={35} height={35} />
              <Image src={linkedin} alt="Linkedin" width={35} height={35} />
            </Flex>
            <ViewPortfolioButton />
          </Flex>
        </Flex>
        <Flex
          w="80%"
          direction="column"
          justify="space-between"
          className="animate__animated animate__fadeInRight animate__delay-2s"
        >
          <Image src={JoaquinPortfolio} alt="Joaquin Lopez" width={1000} height={1000} />
        </Flex>
      </Flex>
    </Container>
  );
}
