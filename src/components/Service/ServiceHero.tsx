import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ServiceHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-hero-content > *",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="service-hero" ref={heroRef}>
      <div className="service-hero-bg"></div>
      <div className="service-hero-glow"></div>
      <div className="service-hero-content">
        <h1>Digital Solutions & Services</h1>
        <p>
          Delivering premium UI/UX design, custom web development, and enterprise digital solutions designed to elevate your brand.
        </p>
      </div>
    </div>
  );
};

export default ServiceHero;
