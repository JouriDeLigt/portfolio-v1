import Link from "next/link";
function Footer() {
  return (
    <footer className="relative w-full pt-16 pb-8 flex items-start justify-center">
      <div className="bg-white py-8 px-8 rounded-2xl relative w-full max-w-5xl flex flex-col items-center">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <Link href="#" alt="Terms of service">
              <a className="text-sm text-gray-400 hover:text-red-500 font-light underline transition ease-in-out duration-150">
                Terms of service
              </a>
            </Link>
            <Link href="#" alt="Terms of service">
              <a className="text-sm text-gray-400 hover:text-red-500 font-light underline transition ease-in-out duration-150">
                Cookie policy
              </a>
            </Link>
            <Link href="#" alt="Terms of service">
              <a className="text-sm text-gray-400 hover:text-red-500 font-light underline transition ease-in-out duration-150">
                Privacy policy
              </a>
            </Link>
          </div>
          <p className="font-bold">
            Website designed by{" "}
            <Link
              href="https://twitter.com/VisualsbyFabi"
              alt="Visuals by Fabi"
            >
              <a target="_blank" className="text-red-500 font-bold">
                @VisualsbyFabi
              </a>
            </Link>{" "}
            and built by{" "}
            <Link
              href="https://twitter.com/JourideLigt"
              alt="Jouri de Ligt | Front-end developer"
            >
              <a target="_blank" className="text-red-500 font-bold">
                @JaayLight
              </a>
            </Link>
          </p>
          <p className="text-black text-center font-bold">
            Copyright © {new Date().getFullYear()} Jouri de Ligt. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
