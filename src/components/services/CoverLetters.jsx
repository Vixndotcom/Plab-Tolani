import React from 'react'
import { hand, up } from '../../assets'
import styles from '../../style'
import BodyAni from '../BodyAni'

const CoverLetters = () => 
    (
        <section className= {`${styles.flexCenter}  sm:px-16 px-2 mx-auto  `}>
           {/* <div className={`${styles.flexCenter} flex flex-row p-6 rounded-[20px] justify-content-center mt-20 mb-5 ` }>  */}
    
           <BodyAni>
            <div className='flex flex-row  md:p-8  justify-content-center mt-20 mb-5 border-service     '>  
         
          {/* left */}
          <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue  `}>
          <img src={up} alt="" className="w-[60%] mx-2 "/>
          </div>
          {/* left */}
           
           {/* right */}
           <div className="flex-1 flex flex-col md:mx-20 mx-2 ">
           <img src={hand} alt="" className="max-w-[100%] ml-5" />
           {/* text */}
           <h4 className="light font-normal text-[24px] leading-[23.4px]  head-text  mt-3 p-6  ">
           Cover Letters
          </h4>
          <p className="light font-normal text-[20px] text mb-5 text-start  md:max-w-[520px] mx-6">
          We design tailored cover letters that suit the job you are applying for.
          </p>
    
    
           {/* right */}
          </div>
    
          </div>
      
       
       
          </BodyAni>
       
       
        </section>
      )

export default CoverLetters