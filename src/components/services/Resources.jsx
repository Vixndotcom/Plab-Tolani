import React from 'react'
import styles from '../../style'
import BodyAni from '../BodyAni'

const Resources = () => {
  return (
    <section id='about'  className={`flex md:flex-row flex-col mt-36 md:mt-24 bg-service ${styles.paddingY} mb-5`}>

    
     <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4 `}>
     {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 "> */}

     <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 plab font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[84px] service">
            Services <br className="sm:block hidden" />{" "}
            
          </h1>
        </div>
     
        <p className={`${styles.paragraph} max-w-[348px] md:max-w-[470px] sm:max-w-[470px]  mt-5 service mt-5 sm:p-16 p-6 `}>
         Navigate Your Success: Embark on a seamless journey through our website, where clarity meets convenience. 
        </p>


        </div>
        </section>
  )
}

export default Resources