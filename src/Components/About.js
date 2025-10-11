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
        <h2 className="section-title">About Me</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-top">
              <div className="horizontal-line"></div>
              <div>
                <p className="about-text">
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
                </p>
                {/* <p className="about-text">
                  Frontend Developer with close to 2 years of experience in
                  designing, developing, and deploying responsive and
                  interactive web applications. Delivered 5+ projects using
                  React Js, HTML, CSS, JavaScript, Bootstrap, Tailwind,
                  WordPress, Vtiger; Tools used:- VS Code, Spline, Git, Git Hub;
                  optimized web performance by 35%, improved load times by 40%,
                  and enhanced accessibility across devices. Strong expertise in
                  UI/UX improvements, cross-browser compatibility, version
                  control, and agile delivery.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
