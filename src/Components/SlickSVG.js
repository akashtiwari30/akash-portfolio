import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from "gsap";
function SlickSVG() {
    useGSAP(()=>{
        var initialpath = `M 10 100 Q 500 100 1000 100`;
        var finalpath = `M 10 100 Q 500 100 1000 100`;
        
        var string = document.querySelector("#string");
        
        string.addEventListener("mousemove",function(dets){
            initialpath = `M 10 100 Q ${dets.x} ${dets.y} 1000 100`;
            // finalpath = `M 10 100 Q 500 ${dets.clientY} 1000 100`;
            gsap.to("svg path",{
                attr:{
                    d: initialpath
                },
                duration: 0.2,
                ease: "power3.Out"
            })
        })
        
        string.addEventListener("mouseleave",function(){
            gsap.to("svg path",{
                attr:{
                    d: finalpath
                },
                duration:2,
                ease: "elastic.out(1,0.2)"
            })
        })
        
        
        
    })
  return (
    <div className='container-fluid'>
       <div>
        
          <div id="string">
            <svg width="100%" height="200" viewBox="0 0 1000 220">
                <path d="M 10 100 Q 500 100 1000 100" stroke="white" stroke-width="2" fill="transparent"/>
            </svg>
        </div>
    </div>
    </div>
  )
}

export default SlickSVG
