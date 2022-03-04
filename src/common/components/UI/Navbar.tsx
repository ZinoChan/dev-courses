import Link from "next/link";
import { LoginOutlined } from "@ant-design/icons";

const Navbar = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "FAQ", link: "/" },
  ];

  return (
    <header>
      <nav className="max-w-screen-lg mx-auto p-2 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-primary font-bold uppercase text-primary-100">
            logo
          </h1>
        </div>
        <ul className="flex space-x-4 items-center">
          {navLinks.map(({ name, link }, index) => (
            <li key={`${name}-${index}`}>
              <Link href={link}>
                <a className="text-primary-dark-200 capitalize font-bold hover:text-primary-200">
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <button className="rounded-full px-4 py-1 flex items-center space-x-3 border border-primary-dark-200 text-primary-dark-200">
          <LoginOutlined />
          <span>Login</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
