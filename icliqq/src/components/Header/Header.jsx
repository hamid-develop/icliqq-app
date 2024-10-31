import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <section className="col-12">
          <nav className="nav justify-content-center flex-column flex-sm-row ">
            <Link className="nav-item nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/features">
              Features
            </Link>
            <Link className="nav-item nav-link" to="/downloads">
              Downloads
            </Link>
            <Link className="nav-item nav-link" to="/partners">
              Business Partners
            </Link>
            <Link className="nav-item nav-link" to="/gallery">
              Gallery
            </Link>
            <Link className="nav-item nav-link" to="/about-us">
              About-us
            </Link>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Header;
