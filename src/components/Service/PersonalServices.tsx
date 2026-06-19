import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdDesignServices, MdDashboard, MdWeb, MdAppShortcut } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { SiFramer } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const personalServices = [
  {
    icon: <MdDesignServices />,
    title: "UI/UX Design",
    desc: "Crafting intuitive and engaging user experiences tailored for your audience.",
  },
  {
    icon: <MdWeb />,
    title: "Websites",
    desc: "Designing responsive and modern websites that convert visitors into customers.",
  },
  {
    icon: <MdAppShortcut />,
    title: "Mobile Apps",
    desc: "Building seamless app designs for both iOS and Android platforms.",
  },
  {
    icon: <MdDashboard />,
    title: "SaaS & Dashboards",
    desc: "Creating complex enterprise interfaces that simplify data management.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Creative Design",
    desc: "Delivering stunning visual assets that represent your brand perfectly.",
  },
  {
    icon: <SiFramer />,
    title: "Prototyping & User Flows",
    desc: "Interactive prototypes to validate ideas before development.",
  },
];

const PersonalServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="service-personal" ref={sectionRef}>
      <div className="service-section-header">
        <h2>Personal <span>Expertise</span></h2>
        <p style={{ color: "rgba(234, 229, 236, 0.5)", fontSize: "16px" }}>
          Showcasing my specialized skills and direct contributions.
        </p>
      </div>
      <div className="service-grid">
        {personalServices.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalServices;
