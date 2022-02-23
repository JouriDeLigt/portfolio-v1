import Image from "next/image";
import Link from "next/link";
import SingleProject from "./SingleProject";
function AllProjects(props) {
  const allProjectItems = props.allProjectItems;
  return (
    <section
      className="relative w-full min-h-screen pt-16 flex items-start justify-center"
      id="all-projects"
    >
      <Image
        src="/static/images/gradient-w.png"
        alt="gradient"
        layout="fill"
        objectFit="contain"
        className="absolute inset-0 opacity-50"
      />
      <div className="container z-10">
        <h2 className="text-2xl lg:text-4xl font-bold capitalize">
          &lt;All projects &#47;&gt;
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mt-16">
          {allProjectItems.map(([slug, name, text, skills, url, repo]) => (
            <SingleProject
              key={slug}
              name={name}
              text={text}
              skills={skills}
              url={url}
              repo={repo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProjects;
