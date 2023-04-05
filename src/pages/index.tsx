import Head from "next/head";
import Image from "next/image";
import { Inter, Playfair_Display, Raleway } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Stack } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { HomeHero } from "@/components/HomeHero";
import Waves from "@/components/Waves";
import { useState } from "react";

export const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [portfolio, setPortfolio] = useState(false);

  return (
    <>
      <Head>
        <title>Joaquin Lopez</title>
        <meta
          name="description"
          content="Joaquin Lopez is a motivated, hard working Software Engineer based out of Indianapolis, IN."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {portfolio ? <Nav withLinks={true} /> : <Nav />}
        <HomeHero />
        <Waves />

        <span className="color color--blue color-styles" data-value="1"></span>
        <span className="color color--orange color-styles" data-value="1"></span>
        <span className="color color--green color-styles" data-value="1"></span>
        <span className="color color--white color-styles" data-value="1"></span>
      </main>
    </>
  );
}
