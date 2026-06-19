import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactMeHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-hero-content > *",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-hero" ref={heroRef}>
      <div className="contact-hero-bg"></div>
      <div className="contact-hero-glow"></div>
      <div className="contact-hero-content">
        <span className="contact-eyebrow">Get In Touch</span>
        <h1>Let's Work Together.</h1>
        <h2>Whether you have a project in mind or a job opportunity — I would love to hear from you.</h2>
      </div>
    </div>
  );
};

export default ContactMeHero;
