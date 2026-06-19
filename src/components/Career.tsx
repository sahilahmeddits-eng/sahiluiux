import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer Intern</h4>
                <h5>Webskitters Technology Solutions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on various design tasks and learned to implement modern, user-friendly digital products from April 2024 to March 2025.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior UI/UX Designer</h4>
                <h5>Carney Technologies Services</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Created UI/UX solutions and managed projects from May 2025 to September 2025.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Software Engineer — Lead Design Team</h4>
                <h5>Devant IT Solutions Pvt. Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading the design team, handling client meetings, and leveraging UI/UX, automation, and prompt engineering to deliver final digital products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
