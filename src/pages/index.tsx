import Head from "next/head";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Stack } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";

export const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <Nav />
      </main>
    </>
  );
}
