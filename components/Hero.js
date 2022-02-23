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
          <h1 className="text-[36px] sm:text-[40px] xl:text-[48px] 2xl:text-[60px] font-bold leading-tight">
            {title}
          </h1>
        ) : (
          <h1 className="text-[36px] sm:text-[40px] xl:text-[48px] 2xl:text-[60px] font-bold leading-tight">
            Hey there i&apos;m{" "}
            <span className="text-red-500 underline">Jouri</span>,
            <br /> a junior front-end{" "}
            <span className="text-red-500 underline">developer</span> based in{" "}
            <span className="text-red-500 underline">The Netherlands</span>
          </h1>
        )}
        {subtext?.length > 0 ? (
          <p className="text-lg xl:text-2xl mt-8 leading-tight">{subtext}</p>
        ) : (
          <p className="text-lg xl:text-2xl mt-8 leading-tight">
            Cras et aliquet diam. Aliquam lacinia ex eros, vel{" "}
            <span className="text-red-500 underline">mollis ex varius</span>{" "}
            vel. Maecenas a orci vitae orci sollicitudin rhoncus.
          </p>
        )}
        {url?.length > 0 ? (
          <Link href={url}>
            <a
              className="bg-red-500 text-white px-4 py-2 text-lg w-fit rounded-lg mt-6"
              target="_blank"
              rel="noopener"
            >
              &lt;View Website&#47;&gt;
            </a>
          </Link>
        ) : (
          <Link href="#featured-projects">
            <a className="bg-red-500 text-white px-4 py-2 text-lg w-fit rounded-lg mt-6">
              &lt;View work&#47;&gt;
            </a>
          </Link>
        )}

        <div className="lg:hidden mt-16">
          <span className="text-2xl leading-none font-bold flex">
            &lt;img src=&quot;
            <div className="flex space-x-4 px-4">
              {socialItems.map(([name, icon, url]) => (
                <Link href={url} key={name}>
                  <a target="_blank" rel="noopener">
                    <Image
                      src={"/static/images/" + icon}
                      alt={name}
                      width={25}
                      height={25}
                      priority
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
