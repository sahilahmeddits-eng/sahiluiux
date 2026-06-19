import { useEffect } from "react";
import Cursor from "../components/Cursor";
import ContactMeNavbar from "../components/ContactMe/ContactMeNavbar";
import ContactMeHero from "../components/ContactMe/ContactMeHero";
import ContactInfoCards from "../components/ContactMe/ContactInfoCards";
import ContactMeForm from "../components/ContactMe/ContactMeForm";
import Contact from "../components/Contact";
import "../components/styles/ContactMe.css";

const ContactMePage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    document.body.style.overflowY = "auto";
    document.body.style.overflow = "auto";

    // Fade in the page
    const main = document.querySelector(".main-body") as HTMLElement;
    if (main) {
      main.classList.add("main-active");
    }

    return () => {
      document.body.style.overflowY = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="contact-me-page">
      <Cursor />
      <ContactMeNavbar />

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade" style={{ opacity: 1 }}></div>

      {/* Section 1: Hero Banner */}
      <ContactMeHero />

      {/* Section 2: Contact Info Cards */}
      <ContactInfoCards />

      {/* Section 3: Contact Form Switcher */}
      <div style={{ width: "var(--cWidth)", maxWidth: "1100px", margin: "140px auto 0" }}>
        <ContactMeForm />
      </div>

      {/* Section 4: Footer */}
      <div
        className="section-container"
        style={{ margin: "auto" }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default ContactMePage;
