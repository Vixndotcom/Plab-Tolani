
import React from 'react'
import styles from '../style'
import { footerLinks } from '../constants'
import { Link } from 'react-router-dom';
import {  iconplab, side } from '../assets';


const Footer = () => {


  const emailAddress = 'contact.plabaid@gmail.com';

  return (

    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col  `}>
        <div className={`${styles.flexStart}  flex-row mb-8 w-full `}>
       <div className='flex-1 flex flex-col justify-start'>
        <h1 className='font-normal text-[32px] md:mt-4 plab mt-14 text-gradient'>PLAbAiD</h1>

     <p className={`${styles.paragraph}mt-10 max-w-[310px] text-white  text-[20px] light mb-4 `}>
     Your last lap!
     </p>
     <img src={iconplab} alt="" className='max-w-[33%]' />

     <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
       
       <h4 className="light text-[24px] leading-[27px] text-white mt-10 mb-5">

    Contact Us
       </h4>
       <ul>

             <p className={`${styles.paragraph} text-white light font-normal text-[18px] hover:text-blue-500    
             cursor-pointer`}  >
        
        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>

       </p>

          <Link to='/contact'>
            <img src={side} alt=""  className='w-[16%] mt-4'/>
          </Link>
       </ul>
      </div>


     
       </div>

       <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-2 mt-0 md:ml-0 ml-4'>
       {footerLinks.map((footerLinks) => (

    //    new
    <div key={footerLinks.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
    <h4 className="light text-[24px] leading-[27px] text-white mt-12 mb-4 md:mt-20 sm:mt-20">
      {footerLinks.title}
    </h4>
        <ul>

        <li className='light text-white text-[18px] '>
        <h2 className='mt-2 mb-2 hover:text-blue-500'>
          <Link to='/home'>Home</Link>
      
        </h2>
        <h2 className='mt-2 mb-2 hover:text-blue-500 '>
          
          <Link to='/about'>About</Link>
          
        </h2>
        <h2 className='hover:text-blue-500' >
         
          <Link to='/services'>Services</Link>
        </h2>

        </li>


        </ul>

     


      </div>


  

           



       ))};






       </div>

        </div>


        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">

        <p className="plab text-center text-[12px]  text-white">
       2024 ViXn.com. All Rights Reserved.
      </p>
        </div>
    </section>
  )
       };

export default Footer