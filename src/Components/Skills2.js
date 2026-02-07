import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills2() {
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  const skillsList = [
    { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "React.js", icon: "fa-brands fa-react", color: "#61DAFB" },
    { name: "Next.js", icon: "fa-solid fa-n" },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952B3" },
    { name: "Tailwind CSS", icon: "bx bxl-tailwind-css", color: "#0ef" },
    { name: "Sass / SCSS", icon: "bx bxl-sass", color: "#CC6699" },
    { name: "REST APIs", icon: "fa-solid fa-plug", color: "#6C63FF" },
    { name: "Axios / Fetch API", icon: "fa-solid fa-cloud-arrow-down", color: "#5A29E4" },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
    { name: "GitHub", icon: "fa-brands fa-github" },
    { name: "VS Code", icon: "fa-solid fa-code", color: "#007ACC" },
    { name: "AOS Animation", icon: "fa-solid fa-wand-magic-sparkles", color: "#4B32C3" },
    { name: "GSAP Animation", icon: "fa-solid fa-bolt", color: "#88CE02" },
    { name: "WordPress", icon: "fa-brands fa-wordpress", color: "#0ef" },
  ];

  return (
    <section id="skills2" className="skills-section">
      <div className="container-fluid">
        <div className="text-center mb-5">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="col"
            >
              <div className="skill-card h-100">
                <div className="icon-wrapper">
                  <i className={skill.icon} style={{ color: skill.color }} />
                </div>
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills2;
