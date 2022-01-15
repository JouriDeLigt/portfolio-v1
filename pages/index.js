import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  const navContent = [
    ["About", "#about"],
    ["Featured projects", "#featured-projects"],
    ["View work", "#view-work"],
    ["Contact", "#contact"],
  ];
  return (
    <div className="page">
      <Head>
        <title>Jouri de ligt | Front-end developer</title>
        <meta
          name="description"
          content="Front-end developer portfolio from Jouri de Ligt build with React, Next.js, Tailwindcss and more!"
        />
        <link rel="icon" href="/assets/favicon.jpg" />
      </Head>

      <Navbar navItems={navContent} />
      <main></main>

      <footer>
        <p>Hey</p>
      </footer>
    </div>
  );
}
