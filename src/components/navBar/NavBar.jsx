import "@/components/navBar/nav-bar.css";

import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link className="nav-bar-link" href="/">
        home
      </Link>
      <Link className="nav-bar-link" href="/about">
        about me
      </Link>
    </nav>
  );
};
