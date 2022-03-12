import SingleFeaturedProject from "./SingleFeaturedProject";

function FeaturedProjects({ projects }) {
  const projectItems = projects;

  return (
    <section
      className="relative w-full min-h-screen pt-16 flex items-start justify-center"
      id="featured-projects"
    >
      <img
        src="/static/images/gradient-w.png"
        alt="gradient"
        className="absolute inset-0 opacity-50 object-contain"
      />
      <div className="container z-10">
        <h2 className="text-2xl lg:text-4xl font-bold capitalize">
          &lt;Featured projects &#47;&gt;
        </h2>
        <div className="flex flex-col gap-16 xl:gap-8 mt-16">
          {projectItems.items.map((item, i) => (
            <SingleFeaturedProject
              key={item.fields.slug}
              slug={item.fields.slug}
              name={item.fields.title}
              text={item.fields.excerpt}
              image="hrpp-home.png"
              skillName={item.fields.skillName}
              skillUrl={item.fields.skillUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
