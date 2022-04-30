function About(props) {
  const skillItems = props.skillItems;
  return (
    <section
      className="relative w-full min-h-screen pt-16 flex items-start justify-center"
      id="about"
    >
      <img
        src="/static/images/gradient-w.png"
        alt="gradient"
        className="absolute inset-0 transform -scale-x-100 opacity-50 object-contain"
      />
      <div className="container relative z-10 flex flex-col">
        <h2 className="text-2xl lg:text-4xl font-bold capitalize">
          &lt;About me &#47;&gt;
        </h2>
        <img
          src="/static/images/dummy-image.jpeg"
          alt="Dummy image"
          className="w-full h-96 mt-16 object-cover rounded-2xl"
        />
        <p className="text-lg lg:text-md mt-8 leading-tight">
          As a Front-end developer its my job to ensure your website looks and
          feels amazing in every aspect. How do i achieve that you may ask? I
          try to keep up with the latest and greatest of technologies out there
          to help you get the website you desire. Down below are some of my
          favourite technologies i use to build modern day applications.
        </p>
        <div className="mt-8 flex flex-wrap justify-between gap-4">
          {skillItems.map((skill) => (
            <p
              key={skill}
              className="bg-jl_red text-white text-center px-16 py-2 text-base xl:text-md w-fit rounded-lg flex-grow"
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
