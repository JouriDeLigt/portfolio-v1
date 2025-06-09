import Image from "next/image";
import Link from "next/link";

function Hero(props) {
  const socialItems = props.socialItems;
  const title = props.title;
  const subtext = props.subtext;
  const url = props.url;

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <Image
        src="/static/images/gradient-w.png"
        alt="gradient"
        layout="fill"
        objectFit="contain"
        className="absolute inset-0 opacity-50"
      />
      <div className="container z-10 flex flex-col">
        {title?.length > 0 ? (
          <h1 className="text-[36px] sm:text-[40px] xl:text-[48px] 2xl:text-[60px] font-bold leading-tight text-jl_black">
            {title}
          </h1>
        ) : (
          <h1 className="text-[36px] sm:text-[40px] xl:text-[48px] 2xl:text-[60px] font-bold leading-tight text-jl_black">
            Hey there i&apos;m{" "}
            <span className="text-jl_red underline">Jouri</span>,
            <br /> a front-end{" "}
            <span className="text-jl_red underline">developer</span> based in{" "}
            <br />
            <span className="text-jl_red underline">The Netherlands</span>
          </h1>
        )}
        {subtext?.length > 0 ? (
          <p className="text-lg xl:text-2xl mt-8 leading-tight">{subtext}</p>
        ) : (
          <p className="text-lg xl:text-2xl mt-8 leading-tight">
            Currently building out{" "}
            <Link href="https://hoort.dev/">
              <a
                target="_blank"
                rel="noopener"
                className="text-jl_red underline"
              >
                Hoort
              </a>
            </Link>
            . A web development company focussed on building{" "}
            <span className="text-jl_red underline">custom</span> websites,
            webshops and internal systems.
          </p>
        )}
        {url?.length > 0 ? (
          <Link href={url}>
            <a
              className="bg-jl_red text-white px-4 py-2 text-lg w-fit rounded-lg mt-6"
              target="_blank"
              rel="noopener"
            >
              &lt;View Website&#47;&gt;
            </a>
          </Link>
        ) : (
          <Link href="#featured-projects">
            <a className="bg-jl_red text-white px-4 py-2 text-lg w-fit rounded-lg mt-6">
              &lt;View work&#47;&gt;
            </a>
          </Link>
        )}

        <div className="lg:hidden mt-16">
          <span className="text-lg sm:text-2xl leading-none font-bold flex items-center">
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
  );
}

export default Hero;
