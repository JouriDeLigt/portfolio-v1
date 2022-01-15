import Image from "next/image";
import SingleFeaturedProject from "./SingleFeaturedProject";

function FeaturedProjects(props) {
  const projectItems = props.projectItems;
  return (
    <section
      className="relative w-full min-h-screen pt-16 flex items-start justify-center"
      id="featured-projects"
    >
      <Image
        src="/static/images/gradient-w.png"
        alt="gradient"
        layout="fill"
        objectFit="contain"
        className="absolute inset-0 opacity-50"
      />
      <div className="z-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold capitalize">
          &lt;Featured projects &#47;&gt;
        </h2>
        <div className="flex flex-col gap-8 mt-16">
          {projectItems.map(([slug, name, text, image, skills]) => (
            <SingleFeaturedProject
              key={slug}
              slug={slug}
              name={name}
              text={text}
              image={image}
              skills={skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
