import gsap, { Power3 } from 'gsap'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

const FadeIn = ({ children }) => {
    const elementRef= useRef(null);
    const intersection = useIntersection(elementRef,{
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

 const fadeScroll= (fadeOut) => {
    gsap.to(elementRef.current, {
        opacity: fadeOut ? 1 : 0,
         y: fadeOut ?  -60 : -60,
        duration: 2,
        ease: Power3.easeInOut,
    
        stagger:  {
            amount: 0.6
        }
    });
 };


   


 useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0) {
        fadeScroll(true);

    } else {
        fadeScroll(false);
    }

 }, [intersection]);

 return <div ref = {elementRef} style={{opacity: 0}}> {children}

 </div>
}


export default FadeIn