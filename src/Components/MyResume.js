import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const resumeData = {
  jobExperience: [
    {
      title: "Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "CRM Doctor",
      projectType: "CRM Doctor",
      website: "crm-doctor.com",
      period: "03/2024 - Present",
      description:
        "CRM Doctor Website showcasing multiple dashboard variations for cloning.",
    },
    {
      title: "Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "Vtiger CRM Dashboard",
      projectType: "Vtiger CRM",
      website: "https://central.crm-doctor.com/uistaging/",
      period: "09/2023 - 02/2024",
      description:
        "Optimized CRM dashboard with an enhanced UI experience.",
    },
    {
      title: "Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "Biz Infra",
      projectType: "Facility Management",
      website: "https://bizinfratech.in/",
      period: "09/2023 - 02/2024",
      description:
        "Professional facility management services website for Biz Infra group.",
    },
    {
      title: "Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "Dream Sparks Foundation",
      projectType: "NGO Organization",
      website: "https://dreamsparkfoundation.org/",
      period: "09/2023 - 02/2024",
      description:
        "Non-profit organization working for education and healthcare of the underprivileged.",
    },
    {
      title: "Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "Tech Refurb Yard",
      projectType: "Laptop Repair & Sales",
      website: "https://techrefurbyard.com/",
      period: "09/2023 - 02/2024",
      description:
        "Exclusive laptop repair and sales center delivering value and quality service.",
    },
    {
      title: "Frontend Developer",
      organization: "Biztechnosys Infotech Pvt Ltd",
      projectName: "Angadi’s Foundation",
      projectType: "Education & Healthcare NGO",
      website: "https://olivedrab-owl-923080.hostingersite.com/",
      period: "09/2023 - 02/2024",
      description:
        "Empowering rural education and providing healthcare services to senior citizens.",
    },
     {
      title: "Frontend Developer",
      organization: "Self-Developed",
      projectName: "Testy Food",
      projectType: "Food Delivery Application",
      website: "https://testy-food-xi.vercel.app/",
      period: "2024",
      description:
        "Food delivery platform with Add-to-cart and Meal filtering features.",
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
      institution: "Sri Vigyan H S School, Laundi, Chhatarpur(M.P.)",
      period: "2018-2019",
      // description: "Core focus on programming fundamentals, data structures, and web development."
    },
    {
      title: "10th Standard",
      institution: "Sri Vigyan H S School, Laundi, Chhatarpur(M.P.)",
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
        start: "top 70%",
        end: "bottom 20%",
        scrub: 1,
        // markers: true,
        // pin: true,
      },
    });
  });

 

  return (
    <>
      <div className="container-fluid" id="resume">
        <h2 className="section-titl text-center my-4 mb-2 mb-md-4" style={{ top: "4.5rem" }}>
          My Resume
        </h2>

        <div className="row section-padding">
          <div className="col-md-6 d-none">
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
                  <div className="card-text">
                    <h6 className="mb-1 me-2">ProjectName : </h6><p className="mb-1">{job.projectName}</p>
                  </div>
                  {/* <p className="card-text"> <strong>Organization : </strong> {job.organization}</p>
                  <p className="card-text"> <strong>ProjectType : </strong> {job.projectType}</p> */}
                  {/* <p className="card-text">Website : <a href={job.website} target="_blank" rel="noopener noreferrer" className="card-text">{job.website}</a></p>
                  <p className="card-text">{job.period}</p>
                  <p className="card-text">{job.description}</p> */}
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-12">
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
