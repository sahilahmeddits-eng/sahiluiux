import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ProjectsHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-hero-content > *",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleExploreClick = () => {
    const section = document.getElementById("all-projects-section");
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="projects-hero" ref={heroRef}>
      <div className="projects-hero-bg"></div>
      <div className="projects-hero-glow"></div>
      <div className="projects-hero-content">
        <span className="projects-eyebrow">Our Work</span>
        <h1>Every Project Tells a Story.</h1>
        <h2>Explore our work across design, development, and digital marketing.</h2>
        <p>
          We pride ourselves on crafting high-quality digital solutions. Browse our portfolio to see how we help businesses transform their ideas into reality with engaging experiences and robust platforms.
        </p>
        <button className="projects-cta" onClick={handleExploreClick}>
          Explore Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectsHero;
