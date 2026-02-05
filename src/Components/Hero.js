import React from "react";
import "../Assets/Style/Style.css";
import "../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Animation for "Hello, I'm"
    tl.from(".hero-content .hello-text", {
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      y: -30,
      ease: "power2.out",
    });
    // Animation for first part of the name
    tl.from(".name-first", {
      duration: 0.6,
      opacity: 0,
      x: -50,
      ease: "power2.out",
    });
    // Animation for last name (highlighted part)
    tl.from(".highlight span", {
      duration: 0.6,
      opacity: 0,
      y: 10,
      stagger: 0.1, // This will animate each letter one after another
      ease: "power2.out",
    });

    // Animation for role title
    tl.from(".design-role", {
      duration: 0.5,
      opacity: 0,
      y: 10,
      ease: "power2.out",
    });
    // Animation for description
    tl.from(".description", {
      duration: 0.5,
      opacity: 0,
      y: 10,
      ease: "power2.out",
    });
    // Animation for button
    tl.from(".download-button", {
      duration: 0.5,
      opacity: 0,
      y: 10,
      ease: "power2.out",
    });
    // Add this to your timeline animations
    tl.from(".social-icons", {
      duration: 0.5,
      opacity: 0,
      y: 30,
      ease: "power2.out",
    });

    // Animation for i-flip
    // tl.to(".i-flip1", {
    //   delay: 1.4,
    //   duration: 4.3,
    //   opacity: 0,
    //   rotateX: 180,
    //   repeat: -1, // it is use to repeat the animation infinite times.
    //   yoyo: true, // it is use to repeat the animation in reverse.
    //   ease: "power6.out",
    // });
    // tl.to(".i-flip2", {
    //   delay: 0.8,
    //   duration: 2.3,
    //   opacity: 0,
    //   rotateX: 180,
    //   repeat: -1, // it is use to repeat the animation infinite times.
    //   yoyo: true, // it is use to repeat the animation in reverse.
    //   ease: "power4.out",
    // });

    // Geometric container animations
    gsap.from(".geometric-container", {
      opacity: 0,
      duration: 1,
    });
    gsap.from(".circle", {
      delay: 3,
      scale: 0,
      opacity: 0,
      rotation: -180,
      xPercent: -100,
      yPercent: -100,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
    });
    gsap.from(
      ".square",
      {
        delay: 0.4,
        scale: 0,
        opacity: 0,
        rotation: 180,
        xPercent: 100,
        yPercent: 100,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)",
      },
      "-=0.8"
    );
    gsap.from(
      ".text",
      {
        delay: 0.4,
        opacity: 0,
        xPercent: -150,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );
    gsap.from(
      ".text-bottom",
      {
        delay: 0.4,
        opacity: 0,
        xPercent: 150,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.8"
    );

    // Continuous floating animation
    gsap.to([".circle", ".square"], {
      y: "15px",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      stagger: {
        each: 0.5,
      },
    });

    // Hover animations
    const geometricElements = document.querySelector(".geometric-container");

    geometricElements.addEventListener("mouseenter", () => {
      gsap.to(".circle", {
        scale: 1.2,
        rotation: 90,
        xPercent: -20,
        duration: 0.4,
      });
      gsap.to(".square", {
        scale: 0.8,
        rotation: -90,
        xPercent: 20,
        duration: 0.4,
      });
      gsap.to(".text", {
        xPercent: -30,
        scale: 1.1,
        duration: 0.4,
      });
      gsap.to(".text-bottom", {
        xPercent: 30,
        scale: 1.1,
        duration: 0.4,
      });
    });

    geometricElements.addEventListener("mouseleave", () => {
      gsap.to([".circle", ".square", ".text", ".text-bottom"], {
        scale: 1,
        rotation: 0,
        xPercent: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  });

  return (
    <section className="container-fluid" id="hero">
      <div className="row">
        <div className="col-lg-8">
          <h3 className="hello-text">
            Hello, <span className="accent-text-1">I'm</span>
          </h3>
          <div className="ms-0 ms-md-0 ms-lg-3">
            <h1 className="letter-spacing ">
              <span className="name-first">Akash</span>{" "}
              <span className="highlight">
                <span>T</span>
                <span className="i-flip1">i</span>
                <span>w</span>
                <span>a</span>
                <span>r</span>
                <span className="i-flip2">i</span>
              </span>
            </h1>
            <h3 className="mt-2 design-role">Frontend <span className="developer">Developer</span></h3>
            {/* <p className="mt-4 description">
              I create beautiful and functional websites with modern
              technologies, and user-friendly websites With a keen eye for
              design.
            </p> */}
            <p className="mt-4 description">I develop <strong>scalable, responsive, user-friendly web applications</strong> using modern frontend technologies, with a strong focus on performance, usability, and clean UI implementation.</p>

            <div className="row align-items-center">
              <div className="col-lg-4">
                {/*<a
                  href="https://drive.google.com/file/d/1wGQsEuYZT3QYCmpLFcsnQbzPbCI7qwBH/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="download-button mt-3">View Resume</button>
                </a>*/}
                <a
                  href="https://drive.google.com/file/d/1GzIMC6U0cgqTK9G2Bfdemv1sQm9GaZo7/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="download-button mt-3">View Resume</button>
                </a>
              </div>
              <div className="col-lg-8 social-icons mt-4">
                <div className="horizontal-line"></div>
                <a
                  href="https://wa.me/917247464732"
                  title="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/akash-tiwari-b79198233"
                  title="Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  href="tel:+917247464732"
                  title="Call me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-solid fa-phone"></i>
                </a>
                <a
                  href="mailto:akashtiwari201923@gmail.com"
                  title="Send me mail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-solid fa-envelope"></i>
                </a>

                <div className="horizontal-line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <section className="hero-section-image">
            <div className="geometric-container">
              <div className="circle"></div>
              <div className="text">Port</div>
              <div className="text-bottom">folio</div>
              <div className="square"></div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
