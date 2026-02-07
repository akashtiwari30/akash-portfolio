import React, { useState } from "react";
import { Modal as BootstrapModal } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import placeholder from "../Assets/Images/placeholder.png";
import testyfood from "../Assets/Images/testy-food.png";
import crmdashboard from "../Assets/Images/crm-dashboard.png";
import crmdoctor from "../Assets/Images/crm-doctor.png";
import bizinfra from "../Assets/Images/biz-infra.png";
import dreamsparks from "../Assets/Images/dream-spark-foundation.png";
import techrefurbyard from "../Assets/Images/techrefurbyard.png";
import angadi from "../Assets/Images/angadi.png";

const projects = [
  {
    title: "Honda Mideast & UAE Website",
    type: "Enterprise-level regional corporate website for Honda Motor Co. (Middle East & Africa).",
    tech: "HTML, CSS, React.js, Next.js, TypeScript, Sitecore XM Cloud (JSS)",
    website: "#",
    description:
      "Developed enterprise-level, CMS-driven web components using React.js, Next.js, and Sitecore XM Cloud Headless (JSS). Implemented multilingual support, optimized performance, and resolved complex rendering issues across environments.",
    img: '',
    live: 'Not Live',
    projectType: ''
  },
  {
    title: "CRM Doctor Website",
    type: "Customer-Facing Web Application",
    tech: "HTML, CSS, JavaScript, Tailwind CSS",
    website: "https://crm-doctor.com/",
    description:
      "Developed and enhanced responsive UI components for a customer-facing platform, focusing on usability, visual consistency, and performance improvements.",
    img: crmdoctor,
    live: 'live',
    projectType: ''
  },
  {
    title: "Vtiger CRM Dashboard",
    type: "CRM Platform UI",
    tech: "HTML, CSS, JavaScript",
    website: "https://central.crm-doctor.com/uistaging/",
    description:
      "Customized and optimized CRM dashboard UI to improve responsiveness, usability, and overall application stability.",
    img: crmdashboard,
    live: 'live',
    projectType: ''
  },
  {
    title: "Biz Infra",
    type: "Facility Management Website",
    tech: "HTML, CSS, JavaScript, Bootstrap",
    website: "https://bizinfratech.in/",
    description:
      "Built responsive, cross-browser compatible web pages and integrated frontend components with CMS-driven content updates.",
    img: bizinfra,
    live: 'live',
    projectType: ''
  },
  {
    title: "Dream Sparks Foundation",
    type: "NGO Website",
    tech: "WordPress",
    website: "https://dreamsparkfoundation.org/",
    description:
      "Developed an NGO website with clear navigation, accessible forms, and improved content structure to enhance user engagement.",
    img: dreamsparks,
    live: 'live',
    projectType: ''
  },
  {
    title: "Tech Refurb Yard",
    type: "Service Business Website",
    tech: "WordPress",
    website: "https://techrefurbyard.com/",
    description:
      "Delivered a responsive business website focusing on usability, performance, and content presentation.",
    img: techrefurbyard,
    live: 'Not Live',
    projectType: ''
  },
  {
    title: "Angadi’s Foundation",
    type: "Education & Healthcare NGO",
    tech: "WordPress",
    website: "https://olivedrab-owl-923080.hostingersite.com/",
    description:
      "Created a content-driven NGO website supporting education and healthcare initiatives with improved layout and accessibility.",
    img: angadi,
    live: 'Not Live',
projectType: ''
  },
  {
    title: "Testy Food",
    type: "Food Ordering Web Application",
    tech: "HTML, CSS, Tailwind CSS, React.js",
    website: "https://testy-food-xi.vercel.app/",
    description:
      "Built a React-based food ordering application with add-to-cart functionality and meal filtering features.",
    img: testyfood,
    live: 'live',
    projectType: 'Personal Project'
  },
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    const modal = new BootstrapModal(document.getElementById("projectModal"));
    modal.show();
  };

  return (
    <section className="container-fluid my-4" id="projects">
      <div className="mb-4 text-center">
        <h2 className="text-center">Latest Projects</h2>
        <p>What I’ve been up to</p>
      </div>

      {/* ✅ Desktop Grid */}
      <div className="d-none d-md-block">
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 d-flex" key={index}>
              <div
                className="card projects-card overflow-hidden flex-fill position-relative"
              >
                <img
                  src={project.img || placeholder}
                  className="card-img-top"
                  alt={project.title}
                />
                <p className="project-live">{project.live}</p>
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h5 className="text-center">{project.title}</h5>
                  <p className="text-center mb-3">{project.type}</p>
                  {/* <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btns"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                  </a> */}
                  <button
                    className="port-btns"
                    onClick={() => handleProjectClick(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Mobile Slider with Arrows */}
      <div className="d-md-none position-relative">
        <Swiper
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false, // keeps autoplay after user swipes
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          className="projectSwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="card projects-card overflow-hidden flex-fill position-relative"
              >
                <img
                  src={project.img || placeholder}
                  className="card-img-top"
                  alt={project.title}
                />
                <p className="project-live">{project.live}</p>
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h5 className="text-center">{project.title}</h5>
                  <p className="text-center mb-3">{project.type}</p>
                  <button
                    className="port-btns"
                    onClick={() => handleProjectClick(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrow Buttons */}
        <div className="swiper-button-prev custom-swiper-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="swiper-button-next custom-swiper-btn">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      {/* ✅ Modal Section */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 rounded-4">
            <div className="modal-header project-modal-header rounded-top px-3 py-2">
              <h5 className="modal-title">{selectedProject?.title}</h5>
              <button
                type="button"
                className="btn-close port-btns"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body py-4 px-0">
              <div className="row">
                <div className="col-md-5 mb-3 mb-md-0">
                  <img
                    src={selectedProject?.img || placeholder}
                    alt={selectedProject?.title}
                    className="img-fluid rounded shadow-sm modal-img"
                  />
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-center">
                  <h5 className="mb-2">{selectedProject?.type}</h5>
                  <p className="mb-3 text-color-2 fs-6">
                    {selectedProject?.description}
                  </p>
                  <p className="mb-3 fw-semibold">
                    Tech Stack:{" "}
                    <span className="fs-6 blue-color">
                      {selectedProject?.tech}
                    </span>
                  </p>
                  {/* <a
                    href={selectedProject?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btns text-center btn-sm mt-auto"
                  >
                    Visit Project
                  </a> */}

                  {selectedProject?.projectType && selectedProject.projectType !== "#" && (
                    <div

                      className="project-type"
                    >
                      <p className="mb-3 fw-semibold">
                        Project Type:{" "}
                        <span className="fs-6 blue-color">
                          {selectedProject?.projectType}
                        </span>
                      </p>
                    </div>
                  )}
                  {selectedProject?.website && selectedProject.website !== "#" && (
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="port-btns text-center btn-sm mt-auto"
                    >
                      Visit Project
                    </a>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
