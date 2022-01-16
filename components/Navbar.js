import Image from "next/image";
import Link from "next/link";
import logo from "/public/static/images/logo-mark-black.png";

function Navbar(props) {
  const navItems = props.navItems;
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
    </header>
  );
}

export default Navbar;
