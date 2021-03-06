import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function thankyou() {
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
  return (
    <div className="page">
      <Head>
        <title>Jouri de ligt | Thankyou</title>
        <meta
          name="description"
          content="Front-end developer portfolio from Jouri de Ligt build with React, Next.js, Tailwindcss and more!"
        />
      </Head>
      <Navbar socialItems={socialItems} />
      <section className="relative w-full h-screen flex items-center justify-center">
        <img
          src="/static/images/gradient-w.png"
          alt="gradient"
          className="absolute inset-0 transform -scale-x-100 opacity-50 object-contain"
        />
        <div className="container z-10 flex flex-col">
          <h1 className="text-[40px] sm:text-[100px] font-bold leading-none text-jl_black">
            Thanks!
          </h1>
          <p className="text-lg xl:text-2xl mt-4 leading-tight">
            Thanks for reaching out! There will be an confirmation email sent
            out to you in the next couple of minutes. If you have any further
            questions don&apos;t hesitate to make contact through{" "}
            <Link href="mailto:hello@jourideligt.dev" alt="Email">
              <a className="text-jl_red font-bold">email</a>
            </Link>{" "}
            or{" "}
            <Link
              href="https://twitter.com/JourideLigt"
              alt="Twitter - Jouri de Ligt"
            >
              <a
                target="_blank"
                rel="noopener"
                className="text-jl_red font-bold"
              >
                Twitter
              </a>
            </Link>
            .
          </p>
          <Link href="/">
            <a className="bg-jl_red text-white px-4 py-2 text-lg w-fit rounded-lg mt-6">
              &lt;Back to home&#47;&gt;
            </a>
          </Link>

          <div className="lg:hidden mt-16">
            <span className="text-2xl leading-none font-bold flex">
              &lt;img src=&quot;
              <div className="flex space-x-4 px-4">
                {socialItems.map(([name, icon, url]) => (
                  <Link href={url} key={name}>
                    <a target="_blank" rel="noopener">
                      <img
                        src={"/static/icons/" + icon}
                        alt={name}
                        width={25}
                        height={25}
                      />
                    </a>
                  </Link>
                ))}
              </div>
              &quot;&#47;&gt;
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
