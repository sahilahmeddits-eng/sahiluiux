import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfoCards = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".info-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".info-cards-container",
            start: "top 80%",
          },
        }
      );
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="info-cards-container" ref={cardsRef}>
      <a href="tel:+1234567890" className="info-card">
        <div className="info-icon">
          <FiPhone size={28} />
        </div>
        <div className="info-content">
          <h3>Phone</h3>
          <p>+1 234 567 890</p>
        </div>
      </a>

      <a href="mailto:sahilahmedv6@gmail.com" className="info-card">
        <div className="info-icon">
          <FiMail size={28} />
        </div>
        <div className="info-content">
          <h3>Email</h3>
          <p>sahilahmedv6@gmail.com</p>
        </div>
      </a>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="info-card"
      >
        <div className="info-icon whatsapp">
          <FaWhatsapp size={28} />
        </div>
        <div className="info-content">
          <h3>WhatsApp</h3>
          <p>Chat with me on WhatsApp</p>
        </div>
      </a>
    </div>
  );
};

export default ContactInfoCards;
