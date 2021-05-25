import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <h1>
        <Link>
          <i className="fab fa-dev" /> DevConnector
        </Link>
      </h1>
      <ul>
        <li>Developers</li>
        <li>Register</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Header;
