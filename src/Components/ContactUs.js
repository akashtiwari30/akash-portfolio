import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
  // Add refs for animation targets
  const formRef = useRef(null);
  const infoRef = useRef(null);


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_56st1pc",
        "template_a4f8tjf",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "8NwQPook4mjIu491d"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        sendWhatsAppFallback(); // 👇 fallback
      });
  };
  const sendWhatsAppFallback = () => {
    const phoneNumber = "917247464732"; // country code + number (no +, no spaces)
    const text = `Hello Akash,%0A
      Name: ${formData.name}%0A
      Phone: ${formData.phone}%0A
      Email: ${formData.email}%0A
      Subject: ${formData.subject}%0A
      Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };



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
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">

                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Enter Your Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="9"
                  placeholder="Type Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button className="kave-btn" type="submit" disabled={loading}>
                  <span className="kave-line"></span>
                  {loading ? "Sending..." : "Send Message"}
                  <i className="fa-brands fa-telegram"></i>
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
