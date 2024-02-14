import React, { useEffect, useRef } from 'react'
import styles from '../../style';
import { medic, menu, shake, up } from '../../assets';
import gsap, { Power3 } from 'gsap';
import { Power2 } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import BodyAni from '../BodyAni';

const Recruitment = () => {
  let pictureRef = useRef(null);
let containerr = useRef(null);

let imageReveal = CSSRulePlugin.getRule('.clip');

let tl = gsap.timeline();


useEffect(() =>{
// const picture = pictureRef.current;


tl.to(containerr, 2, {css: {visibility: 'visible'} }).to(
  imageReveal, 1.4, {width: '100%', ease: Power3.easeInOut})

});


return(
    <section className={`${styles.flexCenter} flex flex-col flex flex-row mt-10 mb-20  ` }>
 <div className='about  md:max-w-[60%] md:text-[36px]  justify-content-center xl:px-0  p-2 ' > 

      <BodyAni>
 <div className=' flex flex  flex-col borderr containerr' ref={el => (containerr = el)}>
        <img src={up} alt="" className='w-[16%] p-2 mx-2  '/>

       <div className='clip '>
      <img src={ shake} alt="star" className="  middle  object-contain clip " ref={el => (pictureRef = el)} />
    
    </div>
    </div>

    <div className="flex-1 flex flex-col text-center ml-3 ">
    
    <div className=' flex-row flex  justify-start mb-2 text-start borderr  '>
  {/* <img src={steth} className='w-[10%] text-start  ' />  */}
      <h4 className="light font-normal  text-[24px] leading-[23.4px]  head-text  mt-3 p-6 mx-1 ">
      Recruitment Acumen
      </h4>
      </div>

      <p className="light font-normal text-[20px] text mb-10 text-start  max-w-[470px] md:max-w-[520px]  mx-6">
      We were just like you once, so we know just what you need to land your desired jobs in record time. 


      </p>









</div>
</BodyAni> 
</div>



</section>
  )};


export default Recruitment