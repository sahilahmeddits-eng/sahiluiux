import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "B.Tech Engineering",
    institution: "Maulana Abul Kalam Azad University",
    year: "2025",
    description:
      "Completed Bachelor of Technology with a strong foundation in engineering principles, problem-solving, and technical thinking that complements creative design work.",
  },
  {
    degree: "UI/UX Designer Certification",
    institution: "Webskitters Academy",
    year: "2024",
    description:
      "Specialized training in user interface and user experience design, covering wireframing, prototyping, usability testing, design systems, and modern design tools.",
  },
  {
    degree: "AI Prompt Engineering — Advanced",
    institution: "Google & IBM",
    year: "2024",
    description:
      "Advanced certification in AI prompt engineering, mastering techniques for effective human-AI collaboration, content generation, and AI-powered design workflows.",
  },
];

const AboutEducation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aboutme-edu-item",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="aboutme-education" ref={sectionRef}>
      <div className="aboutme-section-header">
        <h2>
          Education <span>Background</span>
        </h2>
        <p>Academic foundation and professional certifications</p>
      </div>

      <div className="aboutme-edu-timeline">
        {educationData.map((edu, index) => (
          <div className="aboutme-edu-item" key={index}>
            <span className="aboutme-edu-year">{edu.year}</span>
            <h3>{edu.degree}</h3>
            <div className="aboutme-edu-institution">🏛️ {edu.institution}</div>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;
