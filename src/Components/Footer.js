import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer py-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left side */}
        <p className="mb-0">Copyright &copy; {year} <span className="copy-name">Akash Tiwari</span> |  All rights reserved.</p>
        {/* Right side: Back to Top button */}
        <button
          onClick={scrollToTop}
          className="port-btns up-arrow"
        >
         <i class="fa-solid fa-angle-up"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
