
import styles from '../style'
import React from 'react'
import { side, up } from '../assets'
import { Link } from 'react-router-dom'
import FadeIn from './home/FadeIn'
import Hidden from './home/Hidden'


const hero = () => {


  return (
    <section id="home" className={`flex md:flex-row flex- md:mt-36  mt-36  mb-10 text-center mx-auto spin
      ${styles.paddingY} `} >
        
    
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 mt-24`}>



    {/* heading */}
 <div className={`${styles.flexCenter} flex flex-col  items-center w-full ` }>
 <h1 className="flex light text-bold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] items-center text-center ">
     <FadeIn>
     Welcome to <br /> 
     </FadeIn>
  </h1>
    <FadeIn >
      <div className='text-center border-white mx-auto  flex justify-center items-center mr-1 '>
    <h1 className=' plab font-medium text-blue-800  ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] items-center justify-center text-center   text-gradient  p-4 ss:p-2  mx-auto  '>
   
        PLABAID
     
    </h1>
    </div>
    </FadeIn>
   
{/* button */}
 <div className='ss:flex hidden md:mr-4 mr-0'>
 
 </div>

{/* button */}

 </div>
    {/* heading */}

    {/* paragraph */}
    <FadeIn>
    <h1 className="light ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-center w-full">
    Your Last Lap!
    </h1>
    </FadeIn> 

    <Hidden>
    <p className={`${styles.paragraphh} modern-squared sm:max-w-[470px] max-w-[292px]  text-dimWhite font-medium tracking-wide  text-center glass mb-10 p-4  rounded-[10px] mt-5  `}>
          We specialize in designing standout CVs specifically for your <span className='font-semibold text-[20px]'>PLAB</span>   journey.
        
        </p>
        </Hidden>
      

<Hidden>
<div className=' flex-row flex text-center items-center justify-center mx-auto border-bookk p-2  '>
       <div className='mx-auto'>
     
      <p className="light text-[24px] leading-[23.4px]  mr-2 text-white  ">
      Book our Services
      </p>
      </div>
      <Link to = '/contact' className='w-[12%] ss:w-[10%] text-center mr-4 cursor-pointer' > <img src={side}/> </Link>

      </div>
      
      </Hidden>
  </div>
  

    
    </section>
  )
}

export default hero
