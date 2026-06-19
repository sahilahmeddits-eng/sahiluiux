import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Statistics.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: "📋", value: 100, suffix: "+", label: "Client Projects" },
  { icon: "🖥️", value: 5, suffix: "+", label: "ERP Software" },
  { icon: "📱", value: 15, suffix: "+", label: "Apps Created" },
  { icon: "🌐", value: 50, suffix: "+", label: "Websites Created" },
];

const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, index) => {
        const el = numberRefs.current[index];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString();
          },
        });
      });

      // Fade-in cards
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
    <div className="statistics-section" id="statistics" ref={sectionRef}>
      <h2>
        My <span>Achievements</span>
      </h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <span className="stat-icon">{stat.icon}</span>
            <div className="stat-number">
              <span ref={(el) => (numberRefs.current[index] = el)}>0</span>
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
