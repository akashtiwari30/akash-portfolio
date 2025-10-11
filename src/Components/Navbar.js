import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "../Assets/Style/Style.css";
import "../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  // <-- lazy init from localStorage so initial render knows the theme
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch (e) {
      return "dark";
    }
  });

  const navItemsRef = useRef([]);
  const navBrandRef = useRef();
  const letterRefs = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Offcanvas title animation
    tl.from(navBrandRef.current, {
      delay: 1,
      duration: 0.5,
      opacity: 0,
      y: -50,
      ease: "power2.out",
    });

    // Letters animation
    tl.from(
      letterRefs.current,
      {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    ); // Overlap with previous animation

    // Nav items animation
    tl.from(navItemsRef.current, {
      delay: 0.2,
      duration: 0.5,
      opacity: 0,
      y: -50,
      stagger: -0.3,
      ease: "power2.out",
    });
  }, []);

  // Apply theme before paint and whenever it changes -> avoids flash
  useLayoutEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore storage errors
    }
  }, [theme]);

  return (
    <>
      <div id="por-navbar" className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" ref={navBrandRef}>
              <div className="accent-text-1">
                {["P", "o", "r", "t", "f", "o", "l", "i", "o"].map(
                  (letter, index) => (
                    <span
                      key={index}
                      ref={(el) => (letterRefs.current[index] = el)}
                      className={`accent-text-${(index % 4) + 1}`}
                    >
                      {letter}
                    </span>
                  )
                )}
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <i className="fa-solid fa-bars-staggered fs-3"></i>
            </button>

            {/* Theme toggle */}
            <button
              className="ms-2 theme-toggle pulse"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {theme === "dark" ? (
                <i key="sun" className="fa-solid fa-sun fs-4 text-warning"></i>
                
              ) : (
                <i key="moon" className="fa-solid fa-moon fs-4 text-dark"></i>
              )}
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <div>
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    <span className="accent-text-2">P</span>
                    <span className="accent-text-3">o</span>
                    <span className="accent-text-4">r</span>
                    <span className="accent-text-1">t</span>
                    <span className="accent-text-2">f</span>
                    <span className="accent-text-3">o</span>
                    <span className="accent-text-4">l</span>
                    <span className="accent-text-1">i</span>
                    <span className="accent-text-2">o</span>
                  </h5>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav  flex-grow-1">
                  {[
                    { label: "Home", href: "#hero" },
                    { label: "About Us", href: "#about" },
                    { label: "Skills", href: "#skills" },
                    { label: "Resume", href: "#resume" },
                    // { label: "Works", href: "#works" },
                    { label: "Services", href: "#services" },
                    {
                      label: "Let's Talk",
                      href: "#contactform",
                      isButton: true,
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`nav-item ${
                        activeIndex === index ? "active" : ""
                      }`}
                      ref={(el) => (navItemsRef.current[index] = el)}
                    >
                      <a
                        className={`nav-link ${
                          item.isButton ? "port-btns " : ""
                        }`}
                        href={item.href}
                        onClick={() => setActiveIndex(index)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
