import { useState } from "react";
import "./styles/ContactForm.css";

type FormMode = "hire" | "build" | null;

const ContactForm = () => {
  const [mode, setMode] = useState<FormMode>(null);

  const handleToggle = (selected: FormMode) => {
    setMode((prev) => (prev === selected ? null : selected));
  };

  return (
    <div className="contactform-section" id="contact-form">
      <h2>
        Let's <span>Work Together</span>
      </h2>
      <p className="contactform-subtitle">
        Choose how you'd like to connect with me
      </p>

      <div className="contactform-ctas">
        <button
          className={`contactform-cta-btn ${mode === "hire" ? "active" : ""}`}
          onClick={() => handleToggle("hire")}
        >
          🏢 Hire Me
        </button>
        <button
          className={`contactform-cta-btn ${mode === "build" ? "active" : ""}`}
          onClick={() => handleToggle("build")}
        >
          🚀 Build Your Software
        </button>
      </div>

      {/* Hire Me Form */}
      <div className={`contactform-panel ${mode === "hire" ? "active" : ""}`}>
        <form
          className="contactform-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="contactform-field">
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="contactform-field">
            <label>Company Name</label>
            <input type="text" placeholder="Acme Inc." />
          </div>
          <div className="contactform-field">
            <label>Email Address</label>
            <input type="email" placeholder="john@company.com" />
          </div>
          <div className="contactform-field">
            <label>Position / Role</label>
            <input type="text" placeholder="UI/UX Designer" />
          </div>
          <div className="contactform-field full-width">
            <label>Message</label>
            <textarea placeholder="Tell me about the role and your team..." />
          </div>
          <div className="contactform-submit">
            <button type="submit">Send Application →</button>
          </div>
        </form>
      </div>

      {/* Build Your Software Form */}
      <div className={`contactform-panel ${mode === "build" ? "active" : ""}`}>
        <form
          className="contactform-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="contactform-field">
            <label>Your Name</label>
            <input type="text" placeholder="Your full name" />
          </div>
          <div className="contactform-field">
            <label>Email Address</label>
            <input type="email" placeholder="you@email.com" />
          </div>
          <div className="contactform-field">
            <label>Project Type</label>
            <select defaultValue="">
              <option value="" disabled>
                Select project type
              </option>
              <option>Website Design</option>
              <option>Mobile App Design</option>
              <option>SaaS / Dashboard</option>
              <option>ERP Software</option>
              <option>Branding & Graphics</option>
              <option>AI / Automation Solution</option>
              <option>Other</option>
            </select>
          </div>
          <div className="contactform-field">
            <label>Budget Range</label>
            <select defaultValue="">
              <option value="" disabled>
                Select budget range
              </option>
              <option>₹10,000 – ₹25,000</option>
              <option>₹25,000 – ₹50,000</option>
              <option>₹50,000 – ₹1,00,000</option>
              <option>₹1,00,000+</option>
              <option>Let's discuss</option>
            </select>
          </div>
          <div className="contactform-field full-width">
            <label>Project Description</label>
            <textarea placeholder="Describe your project idea, goals, and timeline..." />
          </div>
          <div className="contactform-submit">
            <button type="submit">Send Inquiry →</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
