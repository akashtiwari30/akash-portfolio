import React, { useRef } from 'react'
import "../Assets/Style/Style.css";
import "../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Works() {
    const worksRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        // Check if screen width is or larger (typically > 768px)
        const isLargeScreen = window.innerWidth > 600;

        if (isLargeScreen) {
            // Main section animation
            gsap.to(worksRef.current, {
                transform: "translateX(-50%)",
                scrollTrigger: {
                    trigger: "#works",
                    start: "top 10%",
                    end: "top -160%",
                    scrub: 2,
                    pin: true,
                    // markers: true
                }
            });

            // Create timeline for card animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#works",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Add card animations to timeline
            cardsRef.current.forEach((card, index) => {
                tl.from(card, {
                    opacity: 0,
                    y: 50,
                    rotation: -10,
                    delay: 1.5,
                    duration: 3,
                    ease: "back.out(1.7)",
                }, index * 0.2);

                // Add hover animation
                card.addEventListener("mouseenter", () => {
                    gsap.to(card, {
                        scale: 1.1,
                        rotation: 0,
                        duration: 0.3,
                        backgroundColor: "#ff4c60",
                        ease: "power2.out"
                    });
                });

                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        scale: 1,
                        rotation: 0,
                        duration: 0.3,
                        backgroundColor: "#0a0a1b48",
                        ease: "power2.in"
                    });
                });
            });
        }

        // Add window resize listener
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Kill all animations on small screens
                ScrollTrigger.getAll().forEach(st => st.kill());
                gsap.set(worksRef.current, { clearProps: "all" });
                cardsRef.current.forEach(card => {
                    gsap.set(card, { clearProps: "all" });
                });
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const worksList = [
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#E34F26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
        { name: 'React-js', icon: 'fa-brands fa-react', color: '#61DAFB' },
        { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952B3' },
        { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
        { name: 'Gsap', icon: 'fa-solid fa-g', color: '#4B32C3' },
    ];

    return (
        <div id='works'>
            <h2 className="work-section-title">My Works</h2>    
            <div className="container-fluid mt-5">
                <div className="works-grid">
                    {worksList.map((work, index) => (
                        <div 
                            key={index} 
                            className="work-card  m-3"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <i className={work.icon} style={{ color: work.color }}></i>
                            <p className="work-name">{work.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Works
