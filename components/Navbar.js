import Image from "next/image";
import Link from "next/link";
import logo from "/public/static/images/logo-mark-black.png";

function Navbar(props) {
  const navItems = props.navItems;
  const socialItems = props.socialItems;
  return (
    <header className="fixed z-10 top-0 left-0 w-full">
      <div className="flex justify-between p-8">
        <Link href="/">
          <a>
            <Image
              src="/static/images/logo-mark-black.png"
              alt="Jouri de Ligt logo"
              width={59}
              height={39}
            />
          </a>
        </Link>
        <nav className="flex flex-col items-center space-y-4">
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
      </div>
      <div className="fixed left-8 bottom-8">
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
                  <Image
                    src={"/static/images/" + icon}
                    alt={name}
                    width={25}
                    height={25}
                    priority
                  />
                </a>
              </Link>
            ))}
          </div>
          &quot;&#47;&gt;
        </span>
      </div>
    </header>
  );
}

export default Navbar;
