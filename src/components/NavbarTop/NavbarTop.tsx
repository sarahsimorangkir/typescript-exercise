import "./navbarTop.css";
import { Link } from "react-router-dom";

const NavbarTop = () => {

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link className="app__navbar-title"  to="/">
         <h2>Giphyeyy<span>.</span></h2> 
        </Link>
      </div>
      <ul className="app__navbar-links">
          <Link  to="/trending" className="app__navbar-item">
             Trending
          </Link>
      </ul>

    </nav>
  );
};

export default NavbarTop;
