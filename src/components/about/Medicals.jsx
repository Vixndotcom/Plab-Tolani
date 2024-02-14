import React from 'react';
import styles from '../../style';






const Medicals = () => {
  return (
    <section id='about'  className={`flex md:flex-row flex-col md:mt-24  mt-36  ${styles.paddingY} bg-brain mb-5`}>
     <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 px-4 sm:px-16 `}>
     {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 "> */}
     

   
     <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 plab font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[84px]">
            About Us <br className="sm:block hidden" />{" "}
            
          </h1>
        </div>
     
        <p className={`${styles.paragraph} max-w-[348px] md:max-w-[470px] sm:max-w-[470px] mt-5 sm:p-16 p-6 text-white`}>
        Unleash Your Potential: Our mission is to propel your career to new heights by crafting bespoke CVs tailored to the unique demands 
        of the UK healthcare market. We understand the balance between your skills, experiences, and the expectations of prospective employers. 
        </p>
        

        </div>

        </section>
  )
}

export default Medicals