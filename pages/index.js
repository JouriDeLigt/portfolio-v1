import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import AllProjects from "../components/AllProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const navItems = [
    ["About", "#about"],
    ["Featured projects", "#featured-projects"],
    ["All projects", "#all-projects"],
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
  const allProjectItems = [
    [
      "airbnb-clone",
      "Airbnb clone",
      "Curabitur tempus nunc quis arcu hendrerit, sit amet faucibus justo elementum. Etiam sagittis nisl a laoreet interdum. Phasellus imperdiet libero sit amet rutrum ultrices. Duis id libero blandit, finibus urna finibus, viverra leo.",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
      "https://airbnb-jouri.vercel.app/",
      "https://github.com/JouriDeLigt/airbnb-jouri",
    ],
    [
      "name-of-project2",
      "Name of project",
      "Curabitur tempus nunc quis arcu hendrerit, sit amet faucibus justo elementum. Etiam sagittis nisl a laoreet interdum. Phasellus imperdiet libero sit amet rutrum ultrices. Duis id libero blandit, finibus urna finibus, viverra leo.",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
      "",
      "https://github.com/JouriDeLigt/portfolio-v1",
    ],
    [
      "name-of-project3",
      "Name of project",
      "Curabitur tempus nunc quis arcu hendrerit, sit amet faucibus justo elementum. Etiam sagittis nisl a laoreet interdum. Phasellus imperdiet libero sit amet rutrum ultrices. Duis id libero blandit, finibus urna finibus, viverra leo.",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
      "",
      "https://github.com/JouriDeLigt/portfolio-v1",
    ],
    [
      "name-of-project4",
      "Name of project",
      "Curabitur tempus nunc quis arcu hendrerit, sit amet faucibus justo elementum. Etiam sagittis nisl a laoreet interdum. Phasellus imperdiet libero sit amet rutrum ultrices. Duis id libero blandit, finibus urna finibus, viverra leo.",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
      "",
      "https://github.com/JouriDeLigt/portfolio-v1",
    ],
    [
      "name-of-project5",
      "Name of project",
      "Curabitur tempus nunc quis arcu hendrerit, sit amet faucibus justo elementum. Etiam sagittis nisl a laoreet interdum. Phasellus imperdiet libero sit amet rutrum ultrices. Duis id libero blandit, finibus urna finibus, viverra leo.",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
      "",
      "https://github.com/JouriDeLigt/portfolio-v1",
    ],
    [
      "name-of-project6",
      "Name of project",
      "Curabitur tempus nunc quis arcu hendrerit, sit amet faucibus justo elementum. Etiam sagittis nisl a laoreet interdum. Phasellus imperdiet libero sit amet rutrum ultrices. Duis id libero blandit, finibus urna finibus, viverra leo.",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
      "",
      "https://github.com/JouriDeLigt/portfolio-v1",
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
        <link rel="icon" href="/static/images/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar navItems={navItems} />
      <main>
        <Hero socialItems={socialItems} />
        <About skillItems={skillItems} />
        <FeaturedProjects projectItems={projectItems} />
        <AllProjects allProjectItems={allProjectItems} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
