import Image from "next/image";
import Link from "next/link";

function Hero(props) {
  const socialItems = props.socialItems;
  return (
    <section className="relative z-0 w-full h-screen flex items-center justify-center">
      <Image
        src="/assets/gradient-w.png"
        alt="gradient"
        layout="fill"
        className="absolute inset-0 object-contain"
      />
      <div className="z-10 w-full max-w-5xl flex flex-col">
        <h1 className="text-[60px] font-bold leading-tight">
          Lorem ipsum dolor{" "}
          <span className="text-red-500 underline">sit amet</span>,
          <br /> consectetur adipiscing elit.
          <br /> <span className="text-red-500 underline">Aenean</span> urna
          elit
        </h1>
        <p className="text-2xl mt-8 leading-tight">
          Cras et aliquet diam. Aliquam lacinia ex eros, vel{" "}
          <span className="text-red-500 underline">mollis ex varius</span> vel.
          Maecenas a orci vitae orci sollicitudin rhoncus.
        </p>
        <Link href="#work">
          <a className="bg-red-500 text-white px-8 py-4 text-xl w-fit rounded-lg mt-6">
            &lt;View work&#47;&gt;
          </a>
        </Link>
      </div>
      <div className="absolute left-8 bottom-8">
        <span className="text-2xl leading-none font-bold flex transform -rotate-90 origin-bottom-left ml-[30px]">
          &lt;img src=&quot;
          <div className="flex space-x-4 px-4">
            {socialItems.map(([name, icon, url]) => (
              <Link href={url} key={name}>
                <a target="_blank" rel={name} className="transform rotate-90">
                  <Image
                    src={"/assets/" + icon}
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
    </section>
  );
}

export default Hero;
