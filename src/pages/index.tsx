import Head from "next/head";

import { Nav } from "@/components/Nav";
import { HomeHero } from "@/components/HomeHero";
import Waves from "@/components/Waves";
import { useState } from "react";
import ViewPortfolioButton from "../components/ViewPortfolioButton";
import { Porfolio } from "@/components/Portfolio";

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
      <main className="overflow">
        {portfolio ? <Nav withLinks={true} /> : <Nav />}
        {portfolio ? (
          <>
            <Porfolio />
          </>
        ) : (
          <>
            <HomeHero setPortfolio={setPortfolio} />
            <Waves flipped={false} />
          </>
        )}

        {/* Spans for ViewPortfolioButton */}
        <span className="color color--darkBlue color-styles" data-value="1"></span>
        <span className="color color--darkBlue-low-opacity color-styles" data-value="1"></span>
        <span className="color color--lightGrayBlue color-styles" data-value="1"></span>
        <span className="color color--white color-styles" data-value="1"></span>
      </main>
    </>
  );
}
