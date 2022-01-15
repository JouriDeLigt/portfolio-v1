import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  const navItems = [
    ["About", "#about"],
    ["Featured projects", "#featured-projects"],
    ["View work", "#view-work"],
    ["Contact", "#contact"],
  ];
  const socialItems = [
    ["Linkedin", "linkedin.png", "https://www.linkedin.com/in/jouri-de-ligt/"],
    ["Github", "github.png", "https://github.com/JouriDeLigt"],
    ["Instagram", "instagram.png", "https://www.instagram.com/jouri.ligt/"],
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

      <Navbar navItems={navItems} />
      <main>
        <Hero socialItems={socialItems} />
      </main>

      <footer>
        <p>Hey</p>
      </footer>
    </div>
  );
}
