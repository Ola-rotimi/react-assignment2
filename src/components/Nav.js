import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav--bar">
        <h1 className="logo"><Link to="/">AltSchool Assignment</Link></h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
