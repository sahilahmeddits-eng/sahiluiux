import { useEffect } from "react";
import Cursor from "../components/Cursor";
import ServiceNavbar from "../components/Service/ServiceNavbar";
import ServiceHero from "../components/Service/ServiceHero";
import PersonalServices from "../components/Service/PersonalServices";
import FreelanceServices from "../components/Service/FreelanceServices";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";
import "../components/styles/Service.css";

const ServicePage = () => {
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
    <div className="service-page">
      <Cursor />
      <ServiceNavbar />

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade" style={{ opacity: 1 }}></div>

      {/* Section 1: Banner */}
      <ServiceHero />

      {/* Section 2: Personal Services */}
      <PersonalServices />

      {/* Section 3: Freelance Services */}
      <FreelanceServices />

      {/* Section 4: Contact Form */}
      <div style={{ width: "var(--cWidth)", maxWidth: "1100px", margin: "140px auto 0" }}>
        <ContactForm />
      </div>

      {/* Section 5: Footer */}
      <div
        className="section-container"
        style={{ margin: "auto" }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default ServicePage;
