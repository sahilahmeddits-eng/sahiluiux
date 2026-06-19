import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    emoji: "🚀",
    value: 20,
    suffix: "+",
    label: "Freelance Projects",
  },
  {
    emoji: "📋",
    value: 100,
    suffix: "+",
    label: "Total Projects",
  },
  {
    emoji: "⚡",
    value: 2,
    suffix: "",
    label: "Running Projects",
  },
  {
    emoji: "🌍",
    value: 0,
    suffix: "",
    label: "Worldwide Service",
    isText: true,
  },
];

const AboutStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      statsData.forEach((stat, index) => {
        if (stat.isText) return;

        const el = numberRefs.current[index];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString();
          },
        });
      });

      // Card fade-in
      gsap.fromTo(
        ".aboutme-stat-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".aboutme-stats-numbers",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Visual card
      gsap.fromTo(
        ".aboutme-stats-visual",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
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
    <div className="aboutme-stats" ref={sectionRef}>
      <div className="aboutme-section-header">
        <h2>
          My <span>Achievements</span>
        </h2>
        <p>Numbers that reflect my journey and impact</p>
      </div>

      <div className="aboutme-stats-grid">
        {/* Left: Visual Card */}
        <div className="aboutme-stats-visual">
          <div className="aboutme-stats-visual-inner">
            <span className="aboutme-stats-visual-icon">🏆</span>
            <h3>Trusted Globally</h3>
            <p>
              Delivering premium digital solutions to clients across multiple
              countries
            </p>
          </div>
        </div>

        {/* Right: Numbers */}
        <div className="aboutme-stats-numbers">
          {statsData.map((stat, index) => (
            <div className="aboutme-stat-item" key={index}>
              <span className="aboutme-stat-emoji">{stat.emoji}</span>
              {stat.isText ? (
                <span className="aboutme-stat-number">🌐</span>
              ) : (
                <span className="aboutme-stat-number">
                  <span ref={(el) => (numberRefs.current[index] = el)}>0</span>
                  <span className="aboutme-stat-suffix">{stat.suffix}</span>
                </span>
              )}
              <span className="aboutme-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
