import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import JoaquinPortfolio from "../../public/joaquin-portfolio.svg";

export function HomeHero() {
  return (
    <Container maxW="container.xl" h="100vh" display="flex">
      <Flex direction="row" alignItems="center" gap={20}>
        <Flex w="80%" direction="column" justify="space-between">
          <Flex direction="column">
            <Heading as="h1" size="3xl" className="animate__animated animate__fadeInLeft animate__delay-1s">
              Hello,
            </Heading>
            <Heading as="h1" size="3xl" className="animate__animated animate__fadeInRight animate__delay-1s" ml={55}>
              I'm <span style={{ color: "#2E5B6F" }}>Joaquin</span>
            </Heading>
          </Flex>
          <Text className="animate__animated animate__fadeIn animate__delay-2s" mt={4} fontSize={25}>
            <b>Fullstack Software Engineer</b>
          </Text>
          <Text className="animate__animated animate__fadeIn animate__delay-3s" mt={4}>
            A high-energy, motivated Full Stack Engineer who specializes in creating scalable, data-intensive web
            applications. With experience in all stages of the software development life cycle, seeking to create
            responsive, performant applications that create an abstraction layer to make difficult & time consuming
            tasks efficient and enjoyable.
          </Text>
        </Flex>
        <Flex
          w="80%"
          direction="column"
          justify="space-between"
          className="animate__animated animate__bounceIn animate__delay-2s"
        >
          <Image src={JoaquinPortfolio} alt="Joaquin Lopez" width={1000} height={1000} />
        </Flex>
      </Flex>
    </Container>
  );
}
