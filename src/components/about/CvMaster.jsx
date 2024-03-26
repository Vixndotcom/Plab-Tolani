import React, { useEffect, useRef } from 'react'
import { strategy,  up} from '../../assets';
import styles from '../../style';
import gsap, { Power3 } from 'gsap';
import { Power2 } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import BodyAni from '../BodyAni';

const CvMaster  =() => {
let pictureRef = useRef(null);
let containerr = useRef(null);

let imageReveal = CSSRulePlugin.getRule('.clip');

let tl = gsap.timeline();


useEffect(() =>{
// const picture = pictureRef.current;


tl.to(containerr, 2, {css: {visibility: 'visible'} }).to(
  imageReveal, 1.4, {width: '100%', ease: Power3.easeInOut})

});






return (
  <section className={`${styles.flexCenter} flex flex-col flex flex-row mt-10 mb-10  ` }>

    <div className='about md:max-w-[60%] md:text-[36px]  justify-content-center xl:px-0 p-2  ' >  
{/* first card */}

       <BodyAni>
      <div className=' flex flex  flex-col borderr containerr ' ref={el => (containerr = el)}>
        <img src={up} alt="" className='w-[64px] h-[64px] p-2 mx-2 mb-1 '/>

       <div className='mt-2 '>
      <img src={strategy} alt="star" className="  middle  object-contain clip " ref={el => (pictureRef = el)} />
    
    </div>
    </div>

<div className="flex-1 flex flex-col text-center ml-3 ">
  
  <div className=' flex-row flex  justify-start mb-2 text-start borderr  '>
  {/* <img src={steth} className='w-[10%] text-start  ' />  */}
      <h4 className="light font-normal  text-[24px] leading-[23.4px]  head-text  mt-3 p-6 mx-1 ">
      CV Mastery
      </h4>
      </div>

      <p className="light font-normal text-[20px] text mb-5 text-start  max-w-[470px] md:max-w-[520px]   mx-6">
      Our team are not just doctors; we have CV experts. Armed with industry-specific knowledge, we craft documents that resonate with recruiters, ensuring that your qualifications and aspirations shine through every line
   </p>
    </div>
    </BodyAni>

    </div>

{/* first card */}
        
    </section>
  )};




export default CvMaster
