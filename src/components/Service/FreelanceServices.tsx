import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUsers } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const freelanceTags = [
  "Full-Stack Development",
  "Digital Marketing",
  "SEO Optimization",
  "App Development",
  "Enterprise Solutions",
  "Cloud Architecture",
  "E-Commerce Solutions",
  "Brand Strategy",
];

const FreelanceServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-freelance-content > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".service-tag",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".service-freelance-tags",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="service-freelance" ref={sectionRef}>
      <div className="service-freelance-content">
        <div className="service-team-badge">
          <FaUsers /> Total Team of 20 Members
        </div>
        <h2>Comprehensive Freelance Solutions</h2>
        <p>
          Beyond personal expertise, we operate as a full-scale agency. With a dedicated team of 20 professionals, we provide complete end-to-end solutions covering all types of development, digital marketing, and business scaling.
        </p>
        <div className="service-freelance-tags">
          {freelanceTags.map((tag, idx) => (
            <div className="service-tag" key={idx}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelanceServices;
