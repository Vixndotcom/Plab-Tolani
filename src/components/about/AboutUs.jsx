import React, { useEffect, useState } from "react";
import styles from '../../style'
import Medicals from "./Medicals";
import CvMaster from "./CvMaster";
import Medic from './Medic';
import Recruitment from "./Recruitment";
import Loaderr from "../Loaderr";


const AboutUs = () => {




  return (




    <>
    <div className="w-full overflow-hidden">

      <div className={`${styles.flexStart} bg-brainn  `}>
        <div className={`${styles.boxWidth}`}>
        < Medicals />
        </div>
      </div>
<div className="">


      <div   className={`${styles.flexCenter} bg-bodyy `}>
        <div  className={`${styles.boxWidth}  `}>
        < Medic />
        </div>
      </div>
   
      <div    className={`${styles.flexCenter} bg-white`}>
        <div     className={`${styles.boxWidth}   `}>
        < CvMaster />
        </div>
      </div>

      <div   className={`${styles.flexCenter} bg-bodyy`}>
        <div   className={`${styles.boxWidth}  `}>
        < Recruitment />
        </div>
      </div>

   </div>


  </div>

  
  </>



  )
}

export default AboutUs