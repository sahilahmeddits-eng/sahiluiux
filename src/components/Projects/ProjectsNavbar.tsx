import { Link } from "react-router-dom";
import HoverLinks from "../HoverLinks";
import "../styles/Navbar.css";

const ProjectsNavbar = () => {
  return (
    <>
      <div className="header" style={{ opacity: 1 }}>
        <Link to="/" className="navbar-title" data-cursor="disable">
          Sahil
        </Link>
        <a
          href="mailto:sahilahmedv6@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sahilahmedv6@gmail.com
        </a>
        <ul>
          <li>
            <Link to="/">
              <HoverLinks text="Home" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <HoverLinks text="About Me" />
            </Link>
          </li>
          <li>
            <Link to="/service">
              <HoverLinks text="Our Service" />
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <HoverLinks text="Our Projects" active={true} />
            </Link>
          </li>
          <li>
            <Link to="/#erp">
              <HoverLinks text="Our ERP Software" />
            </Link>
          </li>
          <li>
            <Link to="/#reviews">
              <HoverLinks text="More Brand" />
            </Link>
          </li>
          <li>
            <Link to="/#contact-form">
              <HoverLinks text="Our Plans" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="cta-btn">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectsNavbar;
