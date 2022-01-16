import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <Image
        src="/static/images/gradient-w.png"
        alt="gradient"
        layout="fill"
        objectFit="contain"
        className="absolute inset-0 opacity-50"
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
        <Link href="#featured-projects">
          <a className="bg-red-500 text-white px-4 py-2 text-lg w-fit rounded-lg mt-6">
            &lt;View work&#47;&gt;
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
