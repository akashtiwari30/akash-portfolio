import React from "react";
import "../Assets/Style/Style.css";
import "../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    // Animation for the title
    gsap.from(".section-title", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animation for the horizontal line
    gsap.from(".horizontal-line", {
      width: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".horizontal-line",
        start: "top 68%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animation for the paragraph
    gsap.from(".about-text", {
      opacity: 0,
      x: 80,
      duration: 1,
      delay: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      <div className="container-fluid my-4" id="about">
        <h2 className="section-title text-center">About Me</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-top">
              <div className="horizontal-line"></div>
              <div>
                {/* <p className="about-text">
                  I’m a Frontend Developer with 2 years of hands-on experience in
                  building responsive, high-performance web applications using
                  React.js, JavaScript, HTML, CSS, Bootstrap, Tailwind, WordPress. I
                  have delivered 5+ projects that improved web performance by
                  35% and load times by 40%. Skilled in tools like VS Code, Git,
                  GitHub, and Spline, I’m passionate about enhancing UI/UX,
                  ensuring cross-browser compatibility, and following modern
                  design practices. I’ve also contributed to improving the
                  Vtiger CRM UI, optimizing its user experience and overall
                  visual consistency. I thrive in agile environments and focus
                  on creating clean, efficient, and user-centered interfaces.
                </p> */}
                <p className="about-text">
                  <strong>results-driven Frontend Web Developer</strong> with nearly 2 years of hands-on experience in developing modern web interfaces. I have successfully delivered <strong>5+ production-ready projects,</strong> improving <strong>web performance by 35%</strong> and reducing <strong>page load times by 40%</strong> through optimized React architecture, efficient state management, and clean UI implementation.
                </p>
                <p className="about-text">I have contributed to <strong>Vtiger CRM UI enhancements,</strong> focusing on visual consistency, usability improvements, and responsive layouts. I enjoy transforming complex requirements into intuitive user experiences while following <strong>modern UI/UX principles, agile methodologies, and best coding practices.</strong></p>
                <p className="about-text">I’m passionate about writing <strong>maintainable code,</strong> collaborating with teams, and continuously learning new frontend technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
