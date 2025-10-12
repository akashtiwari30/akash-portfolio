import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Modal } from "bootstrap";
gsap.registerPlugin(ScrollTrigger);

const resumeData = {
  jobExperience: [
    {
      title: "Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "Ramaiah Ayurveda",
      projectType: "Healthcare Management System",
      website: "https://demo.ramaiahayurveda.com/",
      period: "03/2024 - Present",
      description:
        "Led healthcare platform development. Optimized performance by 40%. Implemented responsive design and real-time analytics. Tech: React.js, Redux, Material-UI, REST APIs.",
    },
    {
      title: "Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "Zuwara",
      projectType: "Clinical Trials Portal",
      website: "https://zuwara.net/",
      period: "09/2023 - 02/2024",
      description:
        "Built secure clinical trials portal. Implemented RBAC and HIPAA-compliant features. Enhanced data entry efficiency by 60%. Tech: React.js, TypeScript, AWS Cognito.",
    },
    {
      title: "Junior Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "Dr Klinisch",
      projectType: "Patient Engagement Platform",
      website: "https://drklinisch.us/home",
      period: "06/2023 - 08/2023",
      description:
        "Developed patient platform serving 10K+ users. Built responsive UI and telehealth features. 95% user satisfaction. Tech: React.js, Tailwind CSS, WebRTC.",
    },
    {
      title: "Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "Dreamspark Foundation",
      projectType: "NGO Management System",
      website: "https://dreamsparkfoundation.org/",
      period: "03/2023 - 05/2023",
      description:
        "Created donor management system. Implemented tracking and reporting features. Increased engagement by 45%. Tech: React.js, Chart.js, Firebase.",
    },
    {
      title: "Frontend Developer",
      organization: "Self-Developed",
      projectName: "Food Delivery Application",
      projectType: "Food Delivery Application",
      website: "https://food-delivery-appsui.netlify.app",
      period: "2024",
      description:
        "Built full-stack food delivery platform. Features: order tracking, payments, route optimization. 1000+ downloads, 4.5/5 rating. Tech: React.js, Node.js, MongoDB.",
    },
  ],
  education: [
    {
      title:
        "Bachelor of Technology in Electronics and Electronics Engineering",
      institution: "Bansal Institute Of Research & Technology College, Bhopal",
      period: "2019-2023",
      // description: "Specialized in Web Technologies and Software Engineering. Graduated with honors."
    },
    {
      title: "12th Standard",
      institution: "Shri Vigyan Hr Sec School, Lovkush Nagar",
      period: "2018-2019",
      // description: "Core focus on programming fundamentals, data structures, and web development."
    },
    {
      title: "10th Standard",
      institution: "Shri Vigyan Hr Sec School, Lovkush Nagar",
      period: "2016-2017",
      // description: "Intensive 12-week program covering full-stack web development fundamentals."
    },
  ],
};

function MyResume() {
  // Add refs for animation targets
  const leftTimelineRef = useRef(null);
  const rightTimelineRef = useRef(null);
  const mainResumeRef = useRef(null);
  const [selectedJob, setSelectedJob] = useState(null);

  // Add GSAP animation
  useGSAP(() => {
    const leftCards = leftTimelineRef.current.querySelectorAll(".card");
    const rightCards = rightTimelineRef.current.querySelectorAll(".card");

    gsap.from(mainResumeRef.current, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#resume",
        start: "top 5%",
        end: "bottom 70%",
        scrub: 1,
        // markers: true,
        pin: true,
      },
    });
    gsap.from(leftCards, {
      x: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#resume",
        start: "top 20%",
        end: "bottom 20%",
        scrub: 1,
        // markers: true,
        // pin: true,
      },
    });

    gsap.from(rightCards, {
      x: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#resume",
        start: "top 20%",
        end: "bottom 20%",
        scrub: 1,
        // markers: true,
        // pin: true,
      },
    });
  });

  // Add modal handling
  const handleJobClick = (job) => {
    setSelectedJob(job);
    const modal = new Modal(document.getElementById("jobModal"));
    modal.show();
  };

  return (
    <>
      <div className="container-fluid" id="resume">
        <h2 className="section-titl text-center my-4 mb-2 mb-md-4" style={{ top: "4.5rem" }}>
          My Resume
        </h2>

        <div className="row section-padding">
          <div className="col-md-6">
            <div className="section-title">Job Experience</div>
            <div
              className="timeline custom-tooltip"
              ref={leftTimelineRef}
              title="Click on the card to view the details"
            >
              {resumeData.jobExperience.map((job, index) => (
                <div
                  className="card p-3 mb-4"
                  key={index}
                  // onClick={() => handleJobClick(job)} // for open the popup
                  // style={{ cursor: "pointer" }}
                >
                  {/* <h5 className="card-title">{job.title}</h5> */}
                  <p className="card-text">
                    <strong>ProjectName : </strong> {job.projectName}
                  </p>
                  {/* <p className="card-text"> <strong>Organization : </strong> {job.organization}</p>
                  <p className="card-text"> <strong>ProjectType : </strong> {job.projectType}</p> */}
                  {/* <p className="card-text">Website : <a href={job.website} target="_blank" rel="noopener noreferrer" className="card-text">{job.website}</a></p>
                  <p className="card-text">{job.period}</p>
                  <p className="card-text">{job.description}</p> */}
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div className="section-title">Education Quality</div>
            <div className="timeline" ref={rightTimelineRef}>
              {resumeData.education.map((edu, index) => (
                <div className="card p-3 mb-4 education-section" key={index}>
                  <h6 className="card-title">{edu.title}</h6>
                  <p className="card-text">{edu.institution}</p>
                  <p className="card-text">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      <div
        className="modal fade"
        id="jobModal"
        tabIndex="-1"
        aria-labelledby="jobModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="jobModalLabel">
                {selectedJob?.title}
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body jobmodal-body">
              {selectedJob && (
                <>
                  <div className="d-flex justify-content-between">
                    <h6>Organization:</h6>
                    <p>{selectedJob.organization}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ProjectName:</h6>
                    <p>{selectedJob.projectName}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ProjectType:</h6>
                    <p>{selectedJob.projectType}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Website:</h6>
                    <p>
                      <a
                        href={selectedJob.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selectedJob.website}
                      </a>
                    </p>
                  </div>
                  <h6>Description:</h6>
                  <p>{selectedJob.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyResume;
