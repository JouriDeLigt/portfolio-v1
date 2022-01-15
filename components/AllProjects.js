import Image from "next/image";
function AllProjects() {
  return (
    <section
      className="relative w-full min-h-screen pt-16 flex items-start justify-center"
      id="all-projects"
    >
      <Image
        src="/assets/gradient-w.png"
        alt="gradient"
        layout="fill"
        objectFit="contain"
        className="absolute inset-0 opacity-50"
      />
      <div className="z-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold capitalize">
          &lt;All projects &#47;&gt;
        </h2>
      </div>
    </section>
  );
}

export default AllProjects;
