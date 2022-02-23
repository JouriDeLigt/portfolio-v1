import Image from "next/image";
import Link from "next/link";

function SingleFeaturedProject({
  slug,
  name,
  text,
  image,
  skills,
  availableSkills,
}) {
  var skills = skills.map((item) => item.sys.id);
  // console.log(availableSkills);
  // var jema = availableSkills.filter((a) => a.id == skills);
  // console.log(jema);
  return (
    <div className="group w-full flex flex-col xl:flex-row xl:even:flex-row-reverse xl:gap-4">
      <div className="relative w-full h-[300px] xl:w-1/2 xl:h-auto">
        <Image
          src={"/static/images/" + image}
          alt="Dummy image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="-mt-8 xl:mt-0 w-full xl:w-1/2 flex flex-col group-odd:items-start group-even:items-end">
        <p className="hidden xl:block text-sm font-light leading-none text-black">
          Featured Project
        </p>
        <h3 className="hidden xl:block text-3xl font-bold leading-none text-red-500">
          {name}
        </h3>
        <div className="text-center xl:group-odd:text-left xl:group-even:text-right bg-white p-12 drop-shadow-xl rounded-2xl xl:mt-4 transform xl:group-odd:-translate-x-12 xl:group-even:translate-x-12 xl:w-[calc(100%_+_3rem)]">
          <p className="xl:hidden text-sm font-light leading-none text-black">
            Featured Project
          </p>
          <h3 className="xl:hidden mb-2 text-3xl font-bold leading-none text-red-500">
            {name}
          </h3>
          <p className="text-md text-black font-light">{text}</p>
        </div>
        <div className="w-full mt-4 flex group-odd:flex-row group-even:flex-row-reverse justify-between">
          <div className="flex gap-2">
            {/* {skills.map(([name, url]) => (
              <Link key={name} href={url}>
                <a
                  target="_blank"
                  className="text-sm hover:text-red-500 font-light underline transition ease-in-out duration-150"
                >
                  {name}
                </a>
              </Link>
            ))} */}
          </div>
          <div className="flex">
            <Link href={"/project/" + slug}>
              <a className="text-md text-red-500 font-bold flex items-center">
                View project
                <div className="relative w-5 h-5 ml-4 group-hover:ml-6 rounded-full border-2 border-solid border-red-500 transition-margin ease-in-out duration-200 flex items-center justify-center">
                  <Image
                    src="/static/images/arrow.svg"
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
