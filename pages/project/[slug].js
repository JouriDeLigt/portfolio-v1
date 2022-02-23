import Head from "next/head";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import Hero from "/components/Hero";

export default function Project({ project }) {
  const navItems = [["Back to main page", "/"]];
  const socialItems = [
    ["Linkedin", "linkedin.png", "https://www.linkedin.com/in/jouri-de-ligt/"],
    ["Github", "github.png", "https://github.com/JouriDeLigt"],
    ["Instagram", "instagram.png", "https://www.instagram.com/jouri.ligt/"],
  ];
  console.log(project);
  return (
    <div className="page">
      <Head>
        <title>Jouri de ligt | Front-end developer</title>
        <meta
          name="description"
          content="Front-end developer portfolio from Jouri de Ligt build with React, Next.js, Tailwindcss and more!"
        />
      </Head>

      <Navbar navItems={navItems} socialItems={socialItems} />
      <main>
        <Hero
          title={project.fields.title}
          subtext={project.fields.excerpt}
          url={project.fields.websiteUrl}
          socialItems={socialItems}
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const projects = await fetch(
    "https://cdn.contentful.com/spaces/homakvm13xkj/environments/master/entries?access_token=mNuXoWg7OLRCxJ-JHS0M0r2lcQA51pO7LyxxkqEwh_s&content_type=featuredProjects"
  ).then((res) => res.json());
  return {
    paths: projects.items.map((project) => {
      const slug = project.fields.slug;
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const results = await fetch(
    `https://cdn.contentful.com/spaces/homakvm13xkj/environments/master/entries?access_token=mNuXoWg7OLRCxJ-JHS0M0r2lcQA51pO7LyxxkqEwh_s&content_type=featuredProjects&fields.slug=${slug}`
  ).then((res) => res.json());
  return {
    props: {
      project: results.items[0],
    },
  };
}

// export async function getServerSideProps() {
//   const results = await fetch(
//     "https://cdn.contentful.com/spaces/homakvm13xkj/environments/master/entries?access_token=mNuXoWg7OLRCxJ-JHS0M0r2lcQA51pO7LyxxkqEwh_s&content_type=featuredProjects"
//   ).then((res) => res.json());
//   return {
//     props: {
//       project: results.items[0],
//     },
//   };
// }
