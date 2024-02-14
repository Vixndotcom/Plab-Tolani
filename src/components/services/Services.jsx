import React, { useEffect, useState } from 'react'
import Resources from './Resources'
import styles from '../../style'
import CvWriting from './CvWriting'
import CoverLetters from './CoverLetters'
import Job from './Job'



const Services = () => {


  return (


    <>
    <div className='w-full overflow-hidden'>
    

    <div className={`${styles.flexStart} bg-purple-900`}>
        <div className={`${styles.boxWidth}`}>
         < Resources />
        </div>
    </div>

     
    <div className={`${styles.flexCenter} bg-purple`} >
        <div className={`${styles.boxWidth}`}>
        < CvWriting />
        </div>
      </div>  


    <div className={`${styles.flexCenter} bg-purple`}>
        <div className={`${styles.boxWidth}`}>
        < CoverLetters/>
        </div>
      </div>    

    <div className={`${styles.flexCenter} bg-purple`}>
        <div className={`${styles.boxWidth}`}>
        < Job/>
        </div>
      </div>    

    </div>
     



    </>



  );
};

export default Services