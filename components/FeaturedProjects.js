import SingleFeaturedProject from "./SingleFeaturedProject";

function FeaturedProjects({ projects, projectImages }) {
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
        <div className="flex flex-col gap-16 mt-16">
          {projects.items.map((item, i) => (
            <SingleFeaturedProject
              key={item.fields.slug}
              slug={item.fields.slug}
              name={item.fields.title}
              text={item.fields.excerpt}
              image={item.fields.thumbnail.sys.id}
              skillName={item.fields.skillName}
              skillUrl={item.fields.skillUrl}
              projectImages={projectImages}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
