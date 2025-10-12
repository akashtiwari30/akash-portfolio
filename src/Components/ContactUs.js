import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
  // Add refs for animation targets
  const formRef = useRef(null);
  const infoRef = useRef(null);

  // Add GSAP animations
  useGSAP(() => {
    // Animate contact info boxes
    gsap.from(".info-item i , .info-item p", {
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    // Animate form elements
    gsap.from(".contact-form .form-control", {
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    // Animate submit button
    gsap.from(".kave-btn", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: formRef.current,
        start: "center 80%",
        end: "bottom 90%",
        scrub: 1,
      },
    });
  }, []);

  // ✅ Step 1: JSON data
  const contactData = [
    {
      icon: "fa-brands fa-linkedin-in",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akash-tiwari-b79198233",
      target: "_blank",
    },
    {
      icon: "fa-solid fa-phone",
      label: "+91 7247464732",
      href: "tel:7247464732",
    },
    {
      icon: "fa-solid fa-envelope",
      label: "akashtiwari201923@gmail.com",
      href: "mailto:akashtiwari201923@gmail.com",
    },
    {
      icon: "fa-brands fa-whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/7247464732",
      target: "_blank",
    },
  ];

  const getLink = (item) => {
    switch (item.type) {
      case "link":
        return item.value;
      case "mailto":
        return `mailto:${item.value}`;
      case "text":
      default:
        return null;
    }
  };

  return (
    <>
      <div id="contactform" className="container-fluid py-3 py-md-5 mb-5">
        <h2 className="text-center mb-4">Contact With Me</h2>
        <div className="row">
          <div className="col-lg-3" ref={infoRef}>
            <div className="contact-info-box">
              {contactData.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.target || "_self"}
                  rel={item.target ? "noopener noreferrer" : ""}
                  className="info-item mb-3 text-decoration-none"
                >
                  <i className={item.icon}></i>
                  <p className="mb-0">{item.label}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-9" ref={formRef}>
            <form className="contact-form">
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Your Phone"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Subject"
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="9"
                  placeholder="Type Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="kave-btn">
                  <span className="kave-line"></span>
                  Send Message <i className="fa-brands fa-telegram"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
