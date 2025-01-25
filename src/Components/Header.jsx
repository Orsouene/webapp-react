import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul className="nav d-flex justify-content-center gap-5  ">
        <li>
          <NavLink to="/" className="headerNavLink major-mono-display-regular">
            Home Page
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
