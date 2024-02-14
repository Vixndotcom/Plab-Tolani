import React from 'react'
import styles from '../../style'
import Hidden from '../home/Hidden'




 const HeadContact = () => {
  return (
    <section id='contact'  className={`flex md:flex-row flex-col md:mt-24  mt-36  ${styles.paddingY}  mb-5`}>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 px-4 sm:px-16 `}>

  <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 plab font-bold ss:text-[72px] text-[52px] contact-text ss:leading-[100.8px] leading-[84px]">
            Contact Us <br className="sm:block hidden" />{" "}
            
          </h1>

        </div>

    <Hidden>
        <p className={`${styles.paragraph} max-w-[348px] md:max-w-[470px] sm:max-w-[470px] mt-5 sm:p-16 p-6 text-gray-500 bg-white`}>
        
      We will reach out to you very soon. Get ready to embark on this exciting journey with us. You have come this far, why stop now? 

        </p>

</Hidden>


  </div>
 
 </section>

  )
}
export default HeadContact;