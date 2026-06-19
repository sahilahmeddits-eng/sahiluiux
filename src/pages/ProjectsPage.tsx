import { useEffect } from "react";
import Cursor from "../components/Cursor";
import ProjectsNavbar from "../components/Projects/ProjectsNavbar";
import ProjectsHero from "../components/Projects/ProjectsHero";
import AllProjects from "../components/Projects/AllProjects";
import CustomerReviews from "../components/CustomerReviews";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";
import "../components/styles/Projects.css";

const ProjectsPage = () => {
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
    <div className="projects-page">
      <Cursor />
      <ProjectsNavbar />

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade" style={{ opacity: 1 }}></div>

      {/* Section 1: Hero Banner */}
      <ProjectsHero />

      {/* Section 2: All Projects (Filtering & Pagination) */}
      <AllProjects />

      {/* Section 3: Client Reviews */}
      <CustomerReviews />

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

export default ProjectsPage;
