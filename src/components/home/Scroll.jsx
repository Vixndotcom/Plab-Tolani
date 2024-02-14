import React, { useEffect, useState } from 'react'
import { sideform, top } from '../../assets';

const Scroll = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 300);
    };
    window.addEventListener('scroll', handleScroll);


    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

   }, []);

   const scrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
   };




  return (

    <button className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick= {scrollToTop}>
        <img src={top} alt="" className='w-[64px]'/>
    </button>
  );
};

export default Scroll