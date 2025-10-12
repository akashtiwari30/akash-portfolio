import React, { useState } from "react";
import { Modal as BootstrapModal } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// ✅ Your images
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
    title: "CRM Doctor Website",
    type: "CRM Doctor",
    tech: "HTML, CSS, JavaScript, Tailwind CSS",
    website: "https://green-lobster-463551.hostingersite.com/",
    description:
      "CRM Doctor Website showcasing multiple dashboard variations for cloning.",
    img: crmdoctor,
  },
  {
    title: "CRM Dashboard",
    type: "Vtiger CRM",
    tech: "HTML, CSS, JavaScript",
    website: "https://central.crm-doctor.com/uistaging/",
    description: "Optimized CRM dashboard with an enhanced UI experience.",
    img: crmdashboard,
  },
  {
    title: "Biz Infra",
    type: "Facility Management",
    tech: "HTML, CSS, JavaScript, Bootstrap",
    website: "https://bizinfratech.in/",
    description:
      "Professional facility management services website for Biz Infra group.",
    img: bizinfra,
  },
  {
    title: "Dream Sparks Foundation",
    type: "NGO Organization",
    tech: "WordPress",
    website: "https://dreamsparkfoundation.org/",
    description:
      "Non-profit organization working for education and healthcare of the underprivileged.",
    img: dreamsparks,
  },
  {
    title: "Tech Refurb Yard",
    type: "Laptop Repair & Sales",
    tech: "WordPress",
    website: "https://techrefurbyard.com/",
    description:
      "Exclusive laptop repair and sales center delivering value and quality service.",
    img: techrefurbyard,
  },
  {
    title: "Angadi’s Foundation",
    type: "Education & Healthcare NGO",
    tech: "WordPress",
    website: "https://olivedrab-owl-923080.hostingersite.com/",
    description:
      "Empowering rural education and providing healthcare services to senior citizens.",
    img: angadi,
  },
  {
    title: "Testy Food",
    type: "Food Delivery App",
    tech: "HTML, CSS, Tailwind CSS, React.js",
    website: "https://testy-food-xi.vercel.app/",
    description:
      "Food delivery platform with Add-to-cart and Meal filtering features.",
    img: testyfood,
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
                onClick={() => handleProjectClick(project)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={project.img || placeholder}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h5 className="text-center">{project.title}</h5>
                  <p className="text-center mb-3">{project.type}</p>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btns"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
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
          onClick={() => handleProjectClick(project)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={project.img || placeholder}
            className="card-img-top"
            alt={project.title}
          />
          <div className="overlay d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-center">{project.title}</h5>
            <p className="text-center mb-3">{project.type}</p>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="port-btns"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
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

            <div className="modal-body p-4">
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
                  <a
                    href={selectedProject?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btns text-center btn-sm mt-auto"
                  >
                    Visit Project
                  </a>
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
