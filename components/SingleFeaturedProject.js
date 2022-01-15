import Image from "next/image";
import Link from "next/link";

function SingleFeaturedProject({ slug, name, text, image, skills }) {
  return (
    <div className="group w-full flex even:flex-row-reverse gap-4">
      <div className="relative w-1/2">
        <Image
          src={"/assets/" + image}
          alt="Dummy image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="w-1/2 flex flex-col group-odd:items-start group-even:items-end">
        <p className="text-sm font-light leading-none text-black">
          Featured Project
        </p>
        <h3 className="text-3xl font-bold leading-none text-red-500">{name}</h3>
        <p className="text-md text-black font-light group-even:text-right bg-white p-12 drop-shadow-xl rounded-2xl mt-4 transform group-odd:-translate-x-12 group-even:translate-x-12 w-[calc(100%_+_3rem)]">
          {text}
        </p>
        <div className="w-full mt-4 flex group-odd:flex-row group-even:flex-row-reverse justify-between">
          <div className="flex gap-2">
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
          <div className="flex">
            <Link href={"/project/" + slug}>
              <a className="text-md text-red-500 font-bold flex items-center">
                View project
                <div className="relative w-5 h-5 ml-4 group-hover:ml-6 rounded-full border-2 border-solid border-red-500 transition-margin ease-in-out duration-200 flex items-center justify-center">
                  <Image
                    src="/assets/arrow.svg"
                    alt="Arrow"
                    width={15}
                    height={15}
                    className="text-red-500 fill-red-500"
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFeaturedProject;
