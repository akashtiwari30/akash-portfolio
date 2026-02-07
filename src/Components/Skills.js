import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from "gsap";

function Skills() {
  // Create an array of refs
  const cardRefs = useRef([]);

  useGSAP(() => {
    // Apply animation to each card
    cardRefs.current.forEach((carde) => {
      gsap.to(carde, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: carde,
          start: "top 15%",
          end: "bottom 15%",
          scrub: 1,
        },
      });
    });
  });

  const skillsList = [
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', color: '#3178C6' },
    { name: 'React.js', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'Next.js', icon: 'fa-solid fa-n', color: '#000000' },
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fa-brands fa-css', color: '#1572B6' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952B3' },
    { name: 'Tailwind CSS', icon: 'bx bxl-tailwind-css', color: '#0ef' },
    { name: 'Sass / SCSS', icon: 'bx bxl-sass', color: '#CC6699' },
    { name: 'REST APIs', icon: 'fa-solid fa-plug', color: '#6C63FF' },
    { name: 'Axios / Fetch API', icon: 'fa-solid fa-cloud-arrow-down', color: '#5A29E4' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
    { name: 'GitHub', icon: 'fa-brands fa-github', color: '#000000' },
    { name: 'VS Code', icon: 'fa-solid fa-code', color: '#007ACC' },
    
      { name: 'AOS Animation', icon: 'fa-solid fa-wand-magic-sparkles', color: '#4B32C3' },
      { name: 'GSAP Animation', icon: 'fa-solid fa-bolt', color: '#88CE02' },
    
    { name: 'WordPress', icon: 'fa-brands fa-wordpress', color: '#0ef' },
    // { name: 'Vtiger UI', icon: 'fa-solid fa-g', color: '#4B32C3' },
  ];
  return (
    <div id="skills" className='my-2 my-sm-3 my-md-3 my-lg-5'>


      <div className="mb-3 text-center">
        <h2 className="section-title position-stick">My Skills</h2>
        <p className='mb-1'>Things I’m good at</p>
      </div>
      <div className="container-fluid  w-100 d-flex flex-column align-items-center justify-content-center" style={{
        paddingTop: "2rem"
      }}>

        {skillsList.map((skill, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            className="cardd algorithm-card"
            style={{ position: "sticky", top: "7.5rem" }}
          >
            <div className="geometric-shape">
              <i className={skill.icon} style={{ color: skill.color }}></i>
            </div>

            <p className="card-title">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
