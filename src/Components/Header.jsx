import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul className="nav d-flex justify-content-center gap-5  ">
        <li>
          <NavLink to="/" className="myList major-mono-display-regular">
            Homepage
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
