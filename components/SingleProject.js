import Image from "next/image";
import Link from "next/link";
function SingleProject({ slug, name, text, skills, url, repo }) {
  return (
    <div className="bg-white py-12 px-6 flex flex-col items-center rounded-2xl">
      <h3 className="text-lg text-red-500 text-center leading-tight">{name}</h3>
      <p className="text-sm text-center">{text}</p>
      <div className="flex gap-2 mt-8">
        {skills.map(([name, url]) => (
          <Link key={name} href={url}>
            <a
              target="_blank"
              className="text-sm hover:text-red-500 font-light underline transition ease-in-out duration-150"
            >
              {name}
            </a>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <Link href={repo}>
          <a target="_blank">
            <Image
              src="/static/images/github.png"
              alt="Github repo"
              width={25}
              height={25}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SingleProject;
