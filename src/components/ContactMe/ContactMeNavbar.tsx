import { Link } from "react-router-dom";
import HoverLinks from "../HoverLinks";
import Logo from "../Logo";
import NavMenuButton from "../NavMenuButton";
import { useMobileNav } from "../../hooks/useMobileNav";
import "../styles/Navbar.css";

const ContactMeNavbar = () => {
  const { menuOpen, toggleMenu, closeMenu } = useMobileNav();

  return (
    <>
      <div className={`header${menuOpen ? " nav-open" : ""}`} style={{ opacity: 1 }}>
        <Link to="/" className="navbar-title" data-cursor="disable">
          <Logo variant="dark-bg" className="navbar-logo" />
        </Link>
        <a
          href="mailto:sahilahmedv6@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sahilahmedv6@gmail.com
        </a>
        <NavMenuButton isOpen={menuOpen} onToggle={toggleMenu} />
        <ul onClick={closeMenu}>
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
              <HoverLinks text="Our Projects" />
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
            <Link to="/contact">
              <HoverLinks text="Contact Me" active={true} />
            </Link>
          </li>
        </ul>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="nav-overlay"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />
      )}
    </>
  );
};

export default ContactMeNavbar;
