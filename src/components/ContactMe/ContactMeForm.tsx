import { useState } from "react";

const ContactMeForm = () => {
  const [activeTab, setActiveTab] = useState<"job" | "project">("job");

  return (
    <div className="contact-form-section">
      <div className="contact-form-header">
        <h2>Send Me a Message</h2>
        <p>Fill out the form and I will get back to you within 24 hours.</p>
      </div>

      <div className="tab-switcher-container">
        <div className="tab-switcher">
          <button
            className={`tab-btn ${activeTab === "job" ? "active" : ""}`}
            onClick={() => setActiveTab("job")}
          >
            Hire Me For Job
          </button>
          <button
            className={`tab-btn ${activeTab === "project" ? "active" : ""}`}
            onClick={() => setActiveTab("project")}
          >
            Let's Build Your Project
          </button>
        </div>
      </div>

      <div className="form-container">
        {activeTab === "job" ? (
          <form className="contact-form tab-fade-in" key="job">
            <div className="input-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-row">
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Job Title or Position (e.g. UI/UX Designer)" required />
            </div>
            <input type="text" placeholder="Company Name" required />
            <textarea placeholder="Tell me about the role and opportunity" rows={5} required></textarea>
            <button type="submit" className="submit-btn">Send Application</button>
          </form>
        ) : (
          <form className="contact-form tab-fade-in" key="project">
            <div className="input-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-row">
              <input type="tel" placeholder="Phone Number" required />
              <select required defaultValue="" className="form-select">
                <option value="" disabled>Select Project Type</option>
                <option value="Website Design">Website Design</option>
                <option value="App Design">App Design</option>
                <option value="SaaS Design">SaaS Design</option>
                <option value="Dashboard Design">Dashboard Design</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Branding">Branding</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <select required defaultValue="" className="form-select">
              <option value="" disabled>Select Project Budget</option>
              <option value="Under $500">Under $500</option>
              <option value="$500-$1000">$500-$1000</option>
              <option value="$1000-$3000">$1000-$3000</option>
              <option value="$3000-$5000">$3000-$5000</option>
              <option value="$5000+">$5000+</option>
            </select>
            <textarea placeholder="Describe your project goals and timeline" rows={5} required></textarea>
            <button type="submit" className="submit-btn">Send Project Brief</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactMeForm;
