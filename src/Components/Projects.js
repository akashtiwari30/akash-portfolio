import React, { useState } from "react";
import { Modal as BootstrapModal } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import placeholder from "../Assets/Images/placeholder.png"; // fallback image

const projects = [
  {
    title: "Ramaiah Ayurveda",
    type: "Healthcare System",
    tech: "React.js, Redux, Material-UI",
    website: "https://demo.ramaiahayurveda.com/",
    description:
      "Optimized healthcare platform with responsive UI and real-time analytics.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftB3Tt7yHS9_I8PUlyGI_8HjBpYLZiTxbYw&s",
  },
  {
    title: "Zuwara",
    type: "Clinical Trials Portal",
    tech: "React.js, TypeScript, AWS Cognito",
    website: "https://zuwara.net/",
    description: "Secure clinical trials portal with RBAC & HIPAA compliance.",
    img: "",
  },
  {
    title: "Food Delivery App",
    type: "Delivery Application",
    tech: "React.js, Node.js, MongoDB",
    website: "https://food-delivery-appsui.netlify.app",
    description:
      "Full-stack food delivery platform with order tracking & payments.",
    img: "",
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
<p>What i’ve been up to</p>
      </div>
      
      {/* Project Cards */}
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 d-flex" key={index}>
            <div
              className="card projects-card overflow-hidden shadow-sm flex-fill position-relative"
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

      {/* Modal */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg rounded-4">
            {/* Modal Header */}
            <div className="modal-header project-modal-header rounded-top p-3">
              <h5 className="modal-title">{selectedProject?.title}</h5>
              <button
                type="button"
                className="btn-close port-btns"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body p-4">
              <div className="row">
                {/* Image */}
                <div className="col-md-5 mb-3 mb-md-0">
                  <img
                    src={selectedProject?.img || placeholder}
                    alt={selectedProject?.title}
                    className="img-fluid rounded shadow-sm modal-img"
                  />
                </div>

                {/* Info */}
                <div className="col-md-7 d-flex flex-column justify-content-center">
                  <h5 className="mb-2">{selectedProject?.type}</h5>
                  <p className="mb-3 text-color-2 fs-6">{selectedProject?.description}</p>
                  <p className="mb-3 fw-semibold">
                    Tech Stack:{" "}
                    <span className="fs-6 blue-color">{selectedProject?.tech}</span>
                  </p>
                  <div>
                  <a
                    href={selectedProject?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-btns text-ceneter btn-sm mt-auto"
                  >
                    Visit Project
                  </a>
                  </div>
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
