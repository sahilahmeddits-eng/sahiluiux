import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    role: "Assistant Software Engineer — Lead Design Team",
    company: "Devant IT Solutions Pvt. Ltd.",
    location: "Kolkata, West Bengal, India",
    year: "NOW",
    duration: "Present",
    isCurrent: true,
    description:
      "Leading the design team, handling client meetings, managing cross-functional teams, and leveraging UI/UX design, automation, and prompt engineering to deliver polished digital products from concept to final delivery.",
    tags: [
      "Team Leadership",
      "Client Management",
      "UI/UX Design",
      "Prompt Engineering",
      "Product Design",
    ],
  },
  {
    role: "Junior UI/UX Designer",
    company: "Carney Technologies Services",
    location: "Kolkata, India",
    year: "2025",
    duration: "May 2025 — Sep 2025",
    isCurrent: false,
    description:
      "Created comprehensive UI/UX solutions for web and mobile platforms, managed client projects end-to-end, and contributed to building design systems that improved team efficiency.",
    tags: [
      "UI/UX Design",
      "Mobile App Design",
      "Client Projects",
      "Design Systems",
    ],
  },
  {
    role: "UI/UX Designer Intern",
    company: "Webskitters Technology Solutions Pvt. Ltd.",
    location: "Kolkata, India",
    year: "2024",
    duration: "Apr 2024 — Mar 2025",
    isCurrent: false,
    description:
      "Worked on diverse design tasks across websites, dashboards, and mobile applications. Learned to implement modern, user-friendly digital products and gained hands-on experience with industry-standard tools and workflows.",
    tags: [
      "Web Design",
      "Dashboard Design",
      "Prototyping",
      "UX Research",
      "Figma",
    ],
  },
];

const AboutExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aboutme-exp-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".aboutme-exp-container",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="aboutme-experience" ref={sectionRef}>
      <div className="aboutme-section-header">
        <h2>
          Work <span>Experience</span>
        </h2>
        <p>My professional journey in design and technology</p>
      </div>

      <div className="aboutme-exp-container">
        {experienceData.map((exp, index) => (
          <div className="aboutme-exp-card" key={index}>
            <div className="aboutme-exp-period">
              <span className="aboutme-exp-year">{exp.year}</span>
              <span className="aboutme-exp-duration">{exp.duration}</span>
              {exp.isCurrent && (
                <span className="aboutme-exp-status">Active</span>
              )}
            </div>

            <div className="aboutme-exp-details">
              <h3>{exp.role}</h3>
              <div className="aboutme-exp-company">🏢 {exp.company}</div>
              <div className="aboutme-exp-location">📍 {exp.location}</div>
              <p>{exp.description}</p>

              <div className="aboutme-exp-tags">
                {exp.tags.map((tag, i) => (
                  <span className="aboutme-exp-tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutExperience;
