import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="headertitle">
      <h1 className="logo">MUT TECH CLUB</h1>
      <nav className="navheader">
        <ol className="nav-list">
          <li className="nav-list-item">
            <Link to="/">home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/leadership">leadership</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/tracks">tracks</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/events">events</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};
export default Header;
