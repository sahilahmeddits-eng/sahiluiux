import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
      onToggle: (self) => {
        const workEl = document.querySelector(".work-section") as HTMLElement;
        if (!workEl) return;
        if (self.isActive) {
          workEl.style.zIndex = "10";
          if (workEl.parentElement) {
            workEl.parentElement.style.zIndex = "10";
            workEl.parentElement.style.position = "relative";
          }
        } else {
          workEl.style.zIndex = "";
          if (workEl.parentElement) {
            workEl.parentElement.style.zIndex = "";
            workEl.parentElement.style.position = "";
          }
        }
      },
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { name: "School Management System", category: "Web & Mobile App", tools: "UI/UX, Client: Central Model School" },
            { name: "E-commerce Website", category: "Web Platform", tools: "UI/UX, Client: Duckback Company" },
            { name: "HR Management System", category: "Android / iOS App", tools: "Mobile App Design, Automation" },
            { name: "Food Delivery App", category: "Android / iOS App", tools: "UI/UX Design, Prototyping" },
            { name: "Plywood Calculator", category: "System & Website", tools: "SaaS Model Design, Client: Sylvanply" },
            { name: "BJP Bengal Website", category: "Website Redesign", tools: "UI/UX Design, Prompt Engineering" }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
