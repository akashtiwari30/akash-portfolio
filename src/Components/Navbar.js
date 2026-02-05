import React, { useRef, useState, useEffect, useLayoutEffect, useMemo } from "react";
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
      delay: 0.3,
      duration: 0.3,
      opacity: 0,
      y: -50,
      ease: "power2.out",
    });

    // Letters animation
    tl.from(
      letterRefs.current,
      {
        duration: 0.3,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    ); // Overlap with previous animation

    // Nav items animation
    tl.from(navItemsRef.current, {
      delay: 0.1,
      duration: 0.3,
      opacity: 0,
      y: -20,
      stagger: -0.1,
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


  const navItems = useMemo(() => [
    { label: "Home", id: "hero" },
    { label: "About Us", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Resume", id: "resume" },
    { label: "Let's Talk", id: "contactform" },
  ], []);
  

useEffect(() => {
  
  const sections = navItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex(
            (item) => item.id === entry.target.id
          );
          if (index !== -1) setActiveIndex(index);
        }
      });
    },
    {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // 🔥 key fix
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, [navItems]);



  return (
    <>
      <div id="por-navbar" className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#hero" ref={navBrandRef}>
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
              <i className="fa-solid fa-bars-staggered fs-6"></i>
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
                <i key="sun" className="fa-solid fa-sun text-warning"></i>

              ) : (
                <i key="moon" className="fa-solid fa-moon text-light"></i>
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
                <ul className="navbar-nav flex-grow-1">
                  {navItems.map((item, index) => (
                    <li
                      className={`nav-item ${activeIndex === index ? "active" : ""}`}
                      ref={(el) => (navItemsRef.current[index] = el)}
                    >
                      <a
                        className={`nav-link ${item.isButton ? "port-btns" : ""}`}
                        href={`#${item.id}`}
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
