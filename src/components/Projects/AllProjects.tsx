import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { allProjectsData } from "../../data/projects";

const categories = ["All", "Website Project", "App Project"];

const CARDS_PER_PAGE = 6;

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter projects
  const filteredProjects = activeCategory === "All" 
    ? allProjectsData 
    : allProjectsData.filter(p => p.category === activeCategory);

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
          <div className="project-card" key={project.id} data-category={project.category}>
            <div className="project-card-image-wrap">
              <img src={project.image} alt={project.name} className="project-card-img" />
              <span className="project-category-badge">{project.category}</span>
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
