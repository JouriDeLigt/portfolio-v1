import Image from "next/image";
import Link from "next/link";
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
        <div className="grid gap-4 grid-cols-3 mt-16">
          <div className="bg-white py-12 px-6 flex flex-col items-center rounded-2xl">
            <h3 className="text-lg text-red-500 text-center leading-tight">
              Name of project
            </h3>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              porttitor odio eu vulputate condimentum. Ut ullamcorper, velit et
              fringilla congue, ex urna porta velit, non sagittis felis sapien
              nec felis.Lorem ipsum dolor sit amet,{" "}
            </p>
            <div className="flex gap-2 mt-8">
              <Link href="#">
                <a
                  target="_blank"
                  className="text-sm hover:text-red-500 font-light underline transition ease-in-out duration-150"
                >
                  React
                </a>
              </Link>
              <Link href="#">
                <a
                  target="_blank"
                  className="text-sm hover:text-red-500 font-light underline transition ease-in-out duration-150"
                >
                  Next.js
                </a>
              </Link>
              <Link href="#">
                <a
                  target="_blank"
                  className="text-sm hover:text-red-500 font-light underline transition ease-in-out duration-150"
                >
                  Tailwindcss
                </a>
              </Link>
            </div>
            <div className="flex gap-2 mt-2">
              <Link href="#">
                <a target="_blank">
                  <Image
                    src="/assets/github.png"
                    alt="Github repo"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllProjects;
