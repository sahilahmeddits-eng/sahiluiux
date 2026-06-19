import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "🌐",
    title: "Website Design & Development",
    description:
      "Modern, responsive websites built with clean UI/UX that drive engagement and conversions for your business.",
  },
  {
    icon: "📱",
    title: "Mobile App Design & Development",
    description:
      "Intuitive mobile applications for iOS and Android with seamless user experiences and stunning interfaces.",
  },
  {
    icon: "⚙️",
    title: "ERP Software Solutions",
    description:
      "Enterprise resource planning systems for hospitals, schools, HR, finance, and custom business workflows.",
  },
  {
    icon: "🤖",
    title: "AI Automation",
    description:
      "AI-powered solutions including prompt engineering, chatbots, workflow automation, and intelligent design systems.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User-centered design solutions covering wireframes, prototypes, design systems, usability testing, and visual design.",
  },
  {
    icon: "💼",
    title: "Business Digital Solutions",
    description:
      "Complete digital transformation including branding, SaaS design, product strategy, and custom IT support.",
  },
];

const AboutFreelance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aboutme-service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".aboutme-services-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="aboutme-freelance" ref={sectionRef}>
      <div className="aboutme-section-header">
        <h2>
          What I <span>Offer</span>
        </h2>
        <p>Complete IT solutions for businesses and clients worldwide</p>
      </div>

      <div className="aboutme-freelance-intro">
        <p>
          We provide end-to-end digital solutions — from design and development
          to AI automation and enterprise software — helping brands and
          businesses scale with confidence.
        </p>
      </div>

      <div className="aboutme-services-grid">
        {services.map((service, index) => (
          <div className="aboutme-service-card" key={index}>
            <div className="aboutme-service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFreelance;
