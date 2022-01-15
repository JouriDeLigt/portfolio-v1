import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";

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
  const skillItems = [
    "React",
    "Next.js",
    "Tailwindcss",
    "Wordpress",
    "Github",
    "DevOps",
    "DigitalOcean",
  ];
  const projectItems = [
    [
      "name-of-project",
      "Name of project",
      "Curabitur tempus nunc quis arcu hendrerit, sit amet faucibus justo elementum. Etiam sagittis nisl a laoreet interdum. Phasellus imperdiet libero sit amet rutrum ultrices. Duis id libero blandit, finibus urna finibus, viverra leo.",
      "dummy-image.jpeg",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
    ],
    [
      "name-of-project2",
      "Name of project",
      "Curabitur tempus nunc quis arcu hendrerit, sit amet faucibus justo elementum. Etiam sagittis nisl a laoreet interdum. Phasellus imperdiet libero sit amet rutrum ultrices. Duis id libero blandit, finibus urna finibus, viverra leo.",
      "dummy-image.jpeg",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
    ],
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
        <About skillItems={skillItems} />
        <FeaturedProjects projectItems={projectItems} />
      </main>

      <footer>
        <p>Hey</p>
      </footer>
    </div>
  );
}
