import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiFigma, SiFramer, SiSketch, SiMiro } from "react-icons/si";
import { TbBrandAdobeXd } from "react-icons/tb";
import { MdRocketLaunch } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const softwareSkills = [
  { icon: <SiFigma />, label: "Figma" },
  { icon: <TbBrandAdobeXd />, label: "XD" },
  { icon: <SiFramer />, label: "Framer" },
  { icon: <MdRocketLaunch />, label: "Antigravity" },
  { icon: <SiSketch />, label: "Sketch" },
  { icon: <SiMiro />, label: "Miro" },
];

const AboutIntro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aboutme-ref-left",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".aboutme-ref-right",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="aboutme-ref-section" ref={sectionRef}>
      <div className="aboutme-ref-container">
        
        {/* LEFT COLUMN: Portrait & Name */}
        <div className="aboutme-ref-left">
          <div className="aboutme-ref-image-wrapper" style={{ minHeight: '500px' }}>
          </div>
        </div>

        {/* RIGHT COLUMN: Info */}
        <div className="aboutme-ref-right">
          <div className="aboutme-ref-block">
            <h3 className="aboutme-ref-heading">ABOUT ME</h3>
            <p className="aboutme-ref-desc">
              HI, I'M SAHIL AHMED. I AM A UI/UX DESIGNER, PROMPT ENGINEER, GRAPHIC DESIGNER, AND AUTOMATION SPECIALIST WITH 1.5+ YEARS OF EXPERIENCE. I CREATE MODERN AND USER-FOCUSED DIGITAL PRODUCTS. AS A TEAM LEADER AT DEVANT IT SOLUTIONS, I HANDLE CLIENT MEETINGS, MANAGE TEAMS, AND LEAD PROJECTS FROM IDEA TO FINAL DELIVERY.
            </p>
          </div>

          <div className="aboutme-ref-block">
            <h3 className="aboutme-ref-heading">SOFTWARE SKILLS</h3>
            <div className="aboutme-ref-skills-row">
              {softwareSkills.map((skill, i) => (
                <div className="aboutme-ref-skill-icon" key={i} title={skill.label}>
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="aboutme-ref-grid-2col">
            <div className="aboutme-ref-block">
              <h3 className="aboutme-ref-heading">EXPERIENCE & PROJECTS</h3>
              <ul className="aboutme-ref-list">
                <li>
                  <span className="ref-list-dot"></span>
                  <strong>1.5+ YEARS</strong>
                  <span>UI/UX Design Experience</span>
                </li>
                <li>
                  <span className="ref-list-dot"></span>
                  <strong>100+ PROJECTS</strong>
                  <span>Live client projects delivered</span>
                </li>
              </ul>
            </div>

            <div className="aboutme-ref-block">
              <h3 className="aboutme-ref-heading">SOFTWARE DELIVERED</h3>
              <ul className="aboutme-ref-list">
                <li>
                  <strong>5+ ERP SOFTWARE</strong>
                  <span>Complex enterprise solutions</span>
                </li>
                <li>
                  <strong>50+ WEBSITES</strong>
                  <span>Modern, user-friendly platforms</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '40px' }}>
            <a href="#contact" className="aboutme-btn-primary">Contact Me</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
