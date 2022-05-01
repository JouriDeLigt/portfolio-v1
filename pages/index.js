import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import AllProjects from "../components/AllProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home({ projects }) {
  var projectImages = projects.includes.Asset.map((item) => ({
    url: item.fields.file.url,
    id: item.sys.id,
  }));
  const navItems = [
    ["About", "#about"],
    ["Featured projects", "#featured-projects"],
    ["All projects", "#all-projects"],
    ["Contact", "#contact"],
  ];
  const socialItems = [
    ["Linkedin", "linkedin.png", "https://www.linkedin.com/in/jouri-de-ligt/"],
    ["Github", "github.png", "https://github.com/JouriDeLigt"],
    ["Twitter", "twitter.svg", "https://twitter.com/JourideLigt"],
  ];
  const skillItems = [
    "React",
    "Next.js",
    "Tailwindcss",
    "Wordpress",
    "Github",
    "DevOps",
    "DigitalOcean",
    "Vercel",
  ];
  const allProjectItems = [
    [
      "jouri-de-ligt-portfolio-v1",
      "Jouri de Ligt - Portfolio V1",
      "Portfolio V1 is a React.js/ Next.js based portfolio website powered by contentful CMS. Deployment is done using Vercel. Its my first portfolio built with something diferent then Wordpress.",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
      "https://jourideligt.dev",
      "https://github.com/JouriDeLigt/portfolio-v1",
    ],
    [
      "airbnb-clone",
      "Airbnb clone",
      "Airbnb-clone build based on a tutorial. Using React.js for the front-end, Next.js for server side functions and TailwindCSS for component based styling. Together with the Mapbox API for a seemless map integration.",
      [
        ["React", "https://reactjs.org/"],
        ["Next.js", "https://nextjs.org/"],
        ["Tailwindcss", "https://tailwindcss.com/"],
      ],
      "https://airbnb-jouri.vercel.app/",
      "https://github.com/JouriDeLigt/airbnb-jouri",
    ],
  ];
  return (
    <div className="page">
      <Head>
        <title>Jouri de ligt | Home</title>
        <meta
          name="description"
          content="Front-end developer portfolio from Jouri de Ligt build with React, Next.js, Tailwindcss and more!"
        />
      </Head>

      <Navbar navItems={navItems} socialItems={socialItems} />
      <main>
        <Hero socialItems={socialItems} />
        <About skillItems={skillItems} />
        <FeaturedProjects projects={projects} projectImages={projectImages} />
        <AllProjects allProjectItems={allProjectItems} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const results = await fetch(
    "https://cdn.contentful.com/spaces/homakvm13xkj/environments/master/entries?access_token=mNuXoWg7OLRCxJ-JHS0M0r2lcQA51pO7LyxxkqEwh_s&content_type=featuredProjects"
  ).then((res) => res.json());
  return {
    props: {
      projects: results,
    },
  };
}
