import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import Logo from "./Logo";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    try {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(true);
    } catch (e) {
      console.warn("ScrollSmoother init failed, will retry:", e);
    }

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (smoother && section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });
    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <Logo variant="dark-bg" className="navbar-logo" />
        </a>
        <a
          href="mailto:sahilahmedv6@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sahilahmedv6@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#landingDiv" href="#landingDiv">
              <HoverLinks text="Home" active={true} />
            </a>
          </li>
          <li>
            <a href="/about" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = "/about"; }}>
              <HoverLinks text="About Me" />
            </a>
          </li>
          <li>
            <a href="/service" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = "/service"; }}>
              <HoverLinks text="Our Service" />
            </a>
          </li>
          <li>
            <a href="/projects" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = "/projects"; }}>
              <HoverLinks text="Our Projects" />
            </a>
          </li>
          <li>
            <a data-href="#erp" href="#erp">
              <HoverLinks text="Our ERP Software" />
            </a>
          </li>
          <li>
            <a data-href="#reviews" href="#reviews">
              <HoverLinks text="More Brand" />
            </a>
          </li>
          <li>
            <a data-href="#contact-form" href="#contact-form">
              <HoverLinks text="Our Plans" />
            </a>
          </li>
          <li>
            <a href="/contact" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = "/contact"; }} className="cta-btn">
              Contact Me
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
