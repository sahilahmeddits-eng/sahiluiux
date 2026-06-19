import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const categories = ["All", "Website Project", "App Project", "ERP Project", "Graphic Design", "Freelance Project"];

const allProjectsData = [
  { id: 1, name: "E-Commerce Dashboard", cat: "Website Project", desc: "A full-featured admin panel for managing online stores.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=E-Commerce+Dashboard" },
  { id: 2, name: "Portfolio Website", cat: "Website Project", desc: "Minimal personal portfolio for a UI/UX designer.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Portfolio+Website" },
  { id: 3, name: "SaaS Landing Page", cat: "Website Project", desc: "High-converting landing page for a B2B SaaS product.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=SaaS+Landing+Page" },
  { id: 4, name: "Restaurant Booking Site", cat: "Website Project", desc: "Modern website with table reservation functionality.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Restaurant+Booking+Site" },
  { id: 5, name: "Corporate Website Redesign", cat: "Website Project", desc: "Full redesign of a corporate services website.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Corporate+Website" },
  { id: 6, name: "Food Delivery App UI", cat: "App Project", desc: "Mobile app design for a food ordering platform.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Food+Delivery+App" },
  { id: 7, name: "Fitness Tracker App", cat: "App Project", desc: "Health and workout tracking app for iOS and Android.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Fitness+Tracker+App" },
  { id: 8, name: "Travel Booking App", cat: "App Project", desc: "End-to-end travel booking app with search and filters.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Travel+Booking+App" },
  { id: 9, name: "Banking App Redesign", cat: "App Project", desc: "Modern redesign of a personal banking mobile app.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Banking+App" },
  { id: 10, name: "ERP Inventory System", cat: "ERP Project", desc: "Full ERP module for warehouse inventory management.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=ERP+Inventory" },
  { id: 11, name: "ERP HR Management", cat: "ERP Project", desc: "Human resources and payroll management ERP module.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=ERP+HR" },
  { id: 12, name: "ERP Sales CRM", cat: "ERP Project", desc: "CRM and sales pipeline ERP system for small businesses.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=ERP+Sales" },
  { id: 13, name: "Brand Identity", cat: "Graphic Design", desc: "Complete brand kit with logo, colors, typography, and business cards.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Brand+Identity" },
  { id: 14, name: "Social Media Kit", cat: "Graphic Design", desc: "30-piece post and story template kit for Instagram.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Social+Media+Kit" },
  { id: 15, name: "Product Packaging Design", cat: "Graphic Design", desc: "Label and box packaging design for a skincare brand.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Packaging+Design" },
  { id: 16, name: "Event Poster Series", cat: "Graphic Design", desc: "Series of promotional posters for a music festival.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Event+Posters" },
  { id: 17, name: "Blog Website", cat: "Freelance Project", desc: "WordPress blog with custom theme and SEO setup.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Blog+Website" },
  { id: 18, name: "Digital Marketing Campaign", cat: "Freelance Project", desc: "6-month SEO and social media campaign for a client.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Marketing+Campaign" },
  { id: 19, name: "Logo Design", cat: "Freelance Project", desc: "Logo and brand identity for a startup company.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Logo+Design" },
  { id: 20, name: "Mobile App UI", cat: "Freelance Project", desc: "Full mobile UI/UX design for a logistics startup.", img: "https://via.placeholder.com/800x600/1e293b/ffffff?text=Mobile+App+UI" }
];

const CARDS_PER_PAGE = 6;

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter projects
  const filteredProjects = activeCategory === "All" 
    ? allProjectsData 
    : allProjectsData.filter(p => p.cat === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentCards = filteredProjects.slice(startIndex, startIndex + CARDS_PER_PAGE);

  // Handlers
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // GSAP Animation whenever displayed cards change
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", clearProps: "all" }
      );
    }
  }, [activeCategory, currentPage]);

  return (
    <div className="all-projects-section" id="all-projects-section">
      {/* Part A: Header */}
      <div className="projects-section-header">
        <h3>Our Projects</h3>
        <p>Filtered by category. Click any tab to explore.</p>
      </div>

      {/* Part B: Filter Bar */}
      <div className="projects-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Part C: Cards Grid */}
      <div className="projects-grid" ref={gridRef}>
        {currentCards.map((project) => (
          <div className="project-card" key={project.id} data-category={project.cat}>
            <div className="project-card-image-wrap">
              <img src={project.img} alt={project.name} className="project-card-img" />
              <span className="project-category-badge">{project.cat}</span>
            </div>
            <div className="project-card-content">
              <h4>{project.name}</h4>
              <p>{project.desc}</p>
              <button className="project-card-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Part D: Pagination */}
      {totalPages > 1 && (
        <div className="projects-pagination">
          <button 
            className="page-btn page-nav-btn" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                className={`page-btn ${currentPage === pageNum ? "active" : ""}`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}

          <button 
            className="page-btn page-nav-btn" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
