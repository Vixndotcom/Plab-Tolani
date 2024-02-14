import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'



const Text = ({text}) => {
const textRef = useRef (null);
const intersction = useIntersection(textRef, {
    root: null,
    rootMargin : '0px',
    threshold: 0.5,

});
 useEffect(() =>{
    if (intersction && intersction.intersectionRatio > 0){
        gsap.to(textRef.current, {
            opacity: 1,
            duration: 1,
            ease: 'power4.out',

        })
    }
 }, [intersction]);
 
 return <div ref={textRef} style={{opacity:0}} >{text}

 </div>



}

export default Text