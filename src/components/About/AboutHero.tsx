import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aboutme-hero-badge",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".aboutme-hero h1",
        { opacity: 0, y: 50, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          delay: 0.4,
        }
      );
      gsap.fromTo(
        ".aboutme-hero-subtitle",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.6 }
      );
      gsap.fromTo(
        ".aboutme-hero-desc",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.75 }
      );
      gsap.fromTo(
        ".aboutme-hero-ctas",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.9 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="aboutme-hero" ref={heroRef}>
      <div className="aboutme-hero-bg">
        <img
          src="/images/about-banner-new.png"
          alt="Sahil Ahmed — UI/UX Designer"
        />
      </div>
      <div className="aboutme-hero-overlay"></div>
      <div className="aboutme-hero-glow aboutme-hero-glow-1"></div>
      <div className="aboutme-hero-glow aboutme-hero-glow-2"></div>

      <div className="aboutme-hero-content">
        <div className="aboutme-hero-badge">About Me</div>

        <h1>
          Hello, I am
          <br />
          Sahil Ahmed.
        </h1>

        <p className="aboutme-hero-subtitle">
          I'm a UI/UX Designer and Freelancer passionate about building modern,
          user-centered digital experiences that are both beautiful and
          functional.
        </p>

        <p className="aboutme-hero-desc">
          I help brands, startups, and businesses transform ideas into impactful
          websites, apps, and digital products through strategy-driven design and
          clean user experiences.
        </p>

        <div className="aboutme-hero-ctas">
          <a href="#" className="aboutme-btn-primary" data-cursor="disable">
            Download CV →
          </a>
          <a
            href="#contact"
            className="aboutme-btn-secondary"
            data-cursor="disable"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
