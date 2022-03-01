import Link from "next/link";
import { useState } from "react";

function Navbar(props) {
  const navItems = props.navItems;
  const socialItems = props.socialItems;

  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header className="fixed z-50 top-0 left-0 w-full">
      <div className="flex items-start justify-between px-[10px] sm:px-[35px] lg:px-8 py-4 sm:py-8">
        <Link href="/">
          <a>
            <img
              src="/static/images/logo-mark-black.png"
              alt="Jouri de Ligt logo"
              width={59}
              height={39}
            />
          </a>
        </Link>
        <nav className="hidden lg:flex flex-col items-center space-y-4">
          {navItems.map(([title, url]) => (
            <Link href={url} key={url}>
              <a className="group capitalize">
                <span className="group-hover:text-red-500 transition duration-300 ease-in-out">
                  &lt;
                </span>
                {title}
                <span className="group-hover:text-red-500 transition duration-300 ease-in-out">
                  &#47;&gt;
                </span>
              </a>
            </Link>
          ))}
        </nav>
        <div
          className="lg:hidden relative w-[42px] h-[27px]"
          onClick={() => (navIsOpen ? setNavIsOpen(false) : setNavIsOpen(true))}
        >
          <div className="absolute top-0 w-full h-[5px] bg-[#08080F] rounded-full"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[5px] bg-[#08080F] rounded-full"></div>
          <div className="absolute top-full trasnform -translate-y-full w-full h-[5px] bg-[#08080F] rounded-full"></div>
        </div>
      </div>
      <div className="hidden lg:block fixed left-8 bottom-8">
        <span className="text-2xl leading-none font-bold flex transform -rotate-90 origin-bottom-left ml-[30px]">
          &lt;img src=&quot;
          <div className="flex space-x-4 px-4">
            {socialItems.map(([name, icon, url]) => (
              <Link href={url} key={name}>
                <a
                  target="_blank"
                  rel="noopener"
                  className="transform rotate-90"
                >
                  <img
                    src={"/static/images/" + icon}
                    alt={name}
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            ))}
          </div>
          &quot;&#47;&gt;
        </span>
      </div>
      <div
        className={`fixed flex justify-center items-center w-4/5 h-full top-0 right-0 transform bg-white transition duration-500 ease ${
          navIsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute top-4 left-4 w-[40px] h-[40px]"
          onClick={() => (navIsOpen ? setNavIsOpen(false) : setNavIsOpen(true))}
        >
          <div className="absolute top-1/2 transform -translate-y-1/2 rotate-45 w-full h-[5px] bg-red-500 rounded-full"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 -rotate-45 w-full h-[5px] bg-red-500 rounded-full"></div>
        </div>
        <nav className="flex flex-col items-center space-y-4">
          {navItems.map(([title, url]) => (
            <Link href={url} key={url}>
              <a
                className="group capitalize"
                onClick={() =>
                  navIsOpen ? setNavIsOpen(false) : setNavIsOpen(true)
                }
              >
                <span className="group-hover:text-red-500 transition duration-300 ease-in-out">
                  &lt;
                </span>
                {title}
                <span className="group-hover:text-red-500 transition duration-300 ease-in-out">
                  &#47;&gt;
                </span>
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
