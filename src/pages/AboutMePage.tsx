import { useEffect } from "react";
import Cursor from "../components/Cursor";
import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import AboutEducation from "../components/About/AboutEducation";
import AboutExperience from "../components/About/AboutExperience";
import AboutTools from "../components/About/AboutTools";
import AboutFreelance from "../components/About/AboutFreelance";
import AboutStats from "../components/About/AboutStats";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";
import AboutNavbar from "../components/About/AboutNavbar";
import "../components/styles/AboutMe.css";

const AboutMePage = () => {
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
    <div className="aboutme-page">
      <Cursor />
      <AboutNavbar />

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade" style={{ opacity: 1 }}></div>

      <AboutHero />

      <div className="aboutme-divider"></div>
      <AboutIntro />

      <div className="aboutme-divider"></div>
      <AboutEducation />

      <div className="aboutme-divider"></div>
      <AboutExperience />

      <AboutTools />

      <div className="aboutme-divider"></div>
      <AboutFreelance />

      <div className="aboutme-divider"></div>
      <AboutStats />

      <div className="aboutme-divider"></div>
      <div style={{ width: "var(--cWidth)", maxWidth: "1100px", margin: "0 auto" }}>
        <ContactForm />
      </div>

      <div
        className="section-container"
        style={{ margin: "auto" }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default AboutMePage;
