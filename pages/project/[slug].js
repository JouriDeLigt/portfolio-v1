import Head from "next/head";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import Hero from "/components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <section className="relative w-full min-h-screen pt-16 flex flex-col items-start justify-center">
          <div className="container relative z-10 ">
            <div className="p-8 flex flex-col bg-white rounded-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="w-full col-span-1">
                  <img
                    src="/static/images/hrpp-services.png"
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                  />
                </div>
                <div className="w-full col-span-1">
                  <img
                    src="/static/images/hrpp-careers.png"
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                  />
                </div>
                <div className="w-full max-h-[300px] col-span-2">
                  <img
                    src="/static/images/hrpp-home.png"
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                  />
                </div>
              </div>
              <p className="mt-4">
                nascetur ridiculus mus. Cras ex justo, fringilla sed nisl sit
                amet, ultrices ultrices diam. Proin sollicitudin molestie augue
                eleifend congue. Nunc at elementum mi. Sed lorem turpis, commodo
                et eros aliquet, aliquet hendrerit massa. Donec ullamcorper
                risus eu neque ornare, in accumsan nisi suscipit. Cras ligula
                risus, sodales sed dolor vitae, sollicitudin efficitur elit.
                Etiam eu sodales risus, ac tincidunt nibh.
              </p>
            </div>
            <div className="mt-20 p-8 flex flex-col bg-white rounded-2xl">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                centeredSlides={true}
                loop={true}
                className="w-full"
              >
                <SwiperSlide>
                  <img
                    src="/static/images/hrpp-mobile-home.png"
                    className="w-full h-full rounded-2xl shadow-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/static/images/hrpp-mobile-about.png"
                    className="w-full h-full rounded-2xl shadow-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/static/images/hrpp-mobile-services.png"
                    className="w-full h-full rounded-2xl shadow-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/static/images/hrpp-mobile-careers.png"
                    className="w-full h-full rounded-2xl shadow-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/static/images/hrpp-mobile-vacancy.png"
                    className="w-full h-full rounded-2xl shadow-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/static/images/hrpp-mobile-contact.png"
                    className="w-full h-full rounded-2xl shadow-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/static/images/hrpp-mobile-menu.png"
                    className="w-full h-full rounded-2xl shadow-md"
                  />
                </SwiperSlide>
              </Swiper>
              <p className="mt-4">
                nascetur ridiculus mus. Cras ex justo, fringilla sed nisl sit
                amet, ultrices ultrices diam. Proin sollicitudin molestie augue
                eleifend congue. Nunc at elementum mi. Sed lorem turpis, commodo
                et eros aliquet, aliquet hendrerit massa. Donec ullamcorper
                risus eu neque ornare, in accumsan nisi suscipit. Cras ligula
                risus, sodales sed dolor vitae, sollicitudin efficitur elit.
                Etiam eu sodales risus, ac tincidunt nibh.
              </p>
            </div>
          </div>
        </section>
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
