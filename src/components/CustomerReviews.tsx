import "./styles/CustomerReviews.css";

const reviews = [
  {
    name: "Arjun Mehta",
    role: "CEO, TechNova Solutions",
    text: "Sahil delivered an exceptional UI/UX for our SaaS platform. His attention to detail and understanding of user flow made a huge difference in our product launch.",
    stars: 5,
    initial: "A",
  },
  {
    name: "Priya Sharma",
    role: "Founder, EduConnect",
    text: "Working with Sahil was a great experience. He designed our school management system with clarity and professionalism. Highly recommended!",
    stars: 5,
    initial: "P",
  },
  {
    name: "Rahul Gupta",
    role: "CTO, HealthFirst",
    text: "The hospital management dashboard Sahil created is intuitive and powerful. Our staff found it easy to adopt from day one. Outstanding work!",
    stars: 5,
    initial: "R",
  },
  {
    name: "Neha Banerjee",
    role: "Marketing Head, Sylvanply",
    text: "Sahil built our plywood calculator tool with a clean, modern design. He understood our business requirements perfectly and delivered on time.",
    stars: 4,
    initial: "N",
  },
  {
    name: "Vikram Singh",
    role: "Product Manager, FoodRush",
    text: "The food delivery app design was spot on. Sahil's prototyping skills and UI decisions helped us raise our next round of funding successfully.",
    stars: 5,
    initial: "V",
  },
  {
    name: "Ananya Roy",
    role: "Director, DigiGrowth Agency",
    text: "Sahil's prompt engineering and AI design skills are top-notch. He automated several of our internal processes and saved us hours every week.",
    stars: 5,
    initial: "A",
  },
  {
    name: "Saurabh Das",
    role: "Freelance Developer",
    text: "Excellent collaboration! Sahil handled the complete UI/UX for our client's e-commerce platform. Clean, modern, and user-focused. Will work again.",
    stars: 4,
    initial: "S",
  },
  {
    name: "Meera Joshi",
    role: "HR Manager, CoreStaff Inc.",
    text: "The HR management system Sahil designed streamlined our entire hiring process. Beautiful interface with smart automation features built in.",
    stars: 5,
    initial: "M",
  },
];

const StarIcon = () => <span>★</span>;

const CustomerReviews = () => {
  // Duplicate for seamless infinite scroll
  const duplicated = [...reviews, ...reviews];

  return (
    <div className="reviews-section" id="reviews">
      <h2>
        What <span>Clients Say</span>
      </h2>
      <p className="reviews-subtitle">
        Trusted by businesses and startups across India
      </p>
      <div className="reviews-track-wrapper">
        <div className="reviews-track">
          {duplicated.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-stars">
                {[...Array(review.stars)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="review-avatar">{review.initial}</div>
                <div className="review-author-info">
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
