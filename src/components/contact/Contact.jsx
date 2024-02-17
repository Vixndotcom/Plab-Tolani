import React, { useEffect, useState } from 'react'
import styles from '../../style'
import GoogleForm from './GoogleForm'
import  HeadContact  from './HeadContact'
import Email from './Email'
import Loaderr from '../Loaderr'



const Contact = () => {



  return (
 
    <>
     <div className='w-full overflow-hidden  '> 


     <div className={`${styles.flexStart} bg-write`}>
        <div className={`${styles.boxWidth} `}>
        < HeadContact />
    </div>
    </div>

     <div className={`${styles.flexStart}  `}>
        <div className={`${styles.boxWidth} `}>
        < Email />
    </div>
    </div>
  

     <div className={`${styles.flexStart} `}>
        <div className={`${styles.boxWidth} `}>
        < GoogleForm />
    </div>
    </div>

    </div>
    </>


  );
};

export default Contact