import React from 'react'
import styles from '../../style'
import Hidden from '../home/Hidden';
import { go, up, upp } from '../../assets';

const Email = () => {
   const emailAddress = 'contact.plabaid@gmail.com';
 const phoneNumber = '447831677219'
 
 const openWhatsapp = () => {
  window.open(`https://wa.me/${phoneNumber}`);
 };

  return (
    <section className='mt-20 mb-5 ' >
        <div className='sm:px-16 px-4 '>
      
      <p className={`${styles.paragraph} text-black light font-normal text-[32px] leading-[31.4px]  head-text  mt-3 p-4 mx-1 `}>      
            For Inquires 
      </p>
   

      <Hidden>
      <p className={`${styles.paragraph} text-black flex light font-normal text-[20px] p-4 mx-1 cursor-pointer`}  >
        
          <a href={`mailto:${emailAddress}`}>{emailAddress}<img src={upp} alt="" className='w-[8%] mt-1' /> </a>
          
      </p>

      </Hidden>
      <Hidden>
      <p className={`${styles.paragraph} text-black light font-normal text-[20px] p-4 mx-1 cursor-pointer`} onClick={openWhatsapp} >
        
       Chat on Whatsapp <span><img src={upp} alt="" className='w-[8%]' onClick={openWhatsapp} /></span>
      </p>
      

      </Hidden>
      </div >
    </section>
  )
}

export default Email;