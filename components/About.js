import Image from "next/image";
function About(props) {
  const skillItems = props.skillItems;
  return (
    <section
      className="relative w-full min-h-screen pt-16 flex items-start justify-center"
      id="about"
    >
      <Image
        src="/static/images/gradient-w.png"
        alt="gradient"
        layout="fill"
        objectFit="contain"
        className="absolute inset-0 transform -scale-x-100 opacity-50"
      />
      <div className="relative z-10 w-full max-w-5xl flex flex-col">
        <h2 className="text-4xl font-bold capitalize">
          &lt;About me &#47;&gt;
        </h2>
        <div className="relative h-96 mt-16">
          <Image
            src="/static/images/dummy-image.jpeg"
            alt="Dummy image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <p className="text-2xl mt-8 leading-tight">
          Nullam pretium et dui porta mollis. Nulla suscipit sagittis sem, quis
          posuere mauris placerat in. Maecenas ac dui feugiat, faucibus quam ut,
          lobortis mauris. Phasellus porttitor risus quam, a vehicula justo
          ultricies vitae. Proin tincidunt, metus in Maecenas vitae vehicula
          nunc. Vestibulum rhoncus vitae metus non sagittis.
        </p>
        <div className="mt-8 flex flex-wrap justify-between gap-4">
          {skillItems.map((skill) => (
            <p
              key={skill}
              className="bg-red-500 text-white text-center px-16 py-2 text-lg w-fit rounded-lg flex-grow"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
