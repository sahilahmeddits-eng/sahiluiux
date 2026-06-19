import "./styles/ERPSoftware.css";

const erpProducts = [
  {
    name: "Hospital Management System",
    tagline: "Complete healthcare administration & patient management",
    icon: "🏥",
    tag: "Healthcare",
  },
  {
    name: "School Management System",
    tagline: "Student records, attendance, fees & academic management",
    icon: "🎓",
    tag: "Education",
  },
  {
    name: "HR Management System",
    tagline: "Employee lifecycle, payroll & performance tracking",
    icon: "👥",
    tag: "Enterprise",
  },
  {
    name: "Doctor Management System",
    tagline: "Appointment scheduling & clinic operations for doctors",
    icon: "👨‍⚕️",
    tag: "App",
  },
  {
    name: "Library Management System",
    tagline: "Book cataloging, issue tracking & digital library operations",
    icon: "📚",
    tag: "App",
  },
  {
    name: "Finance Management App",
    tagline: "Budget tracking, invoicing & financial reporting tools",
    icon: "💰",
    tag: "Finance",
  },
];

const ERPSoftware = () => {
  return (
    <div className="erp-section" id="erp">
      <h2>
        Our <span>ERP Software</span>
      </h2>
      <p className="erp-subtitle">
        Enterprise solutions designed for real-world business needs
      </p>
      <div className="erp-grid">
        {erpProducts.map((product, index) => (
          <div className="erp-card" key={index}>
            <div className="erp-card-image">{product.icon}</div>
            <div className="erp-card-info">
              <h3>{product.name}</h3>
              <p>{product.tagline}</p>
              <span className="erp-card-tag">{product.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ERPSoftware;
