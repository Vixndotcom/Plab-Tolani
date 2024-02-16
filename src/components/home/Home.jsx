import React, { useEffect, useState } from 'react'
import styles from '../../style'
import Hero from '../Hero'
import Card from '../Card'
import Button from '../Button'
import Phone from './Phone'
import Plabaid from './Plabaid'
import Misson from '../about/Misson'
import Scroll from './Scroll'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import Loader from '../Loader'
import Steps from '../Steps'



const Home = () => {
const [loading, setLoading] = useState(true);

useEffect(() =>{
   const timeout = setTimeout(() =>{
      setLoading(false);

   }, 3000);

   return () => clearTimeout(timeout);
}, []);

  return (


<div>
{loading ? ( <Loader/> )  : (

    <>
  

{/* 
hero section */}
    {/* <div > */}
   <div className='bg-body'>
   <div className={`${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
          <div className='boxx'>
           < Hero />
          
    </div>
    </div>
    </div>
    
    {/* </div> */}
   
    <div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth}  `}>
         <div className='boxx'>
           < Plabaid />
          
        </div>
        </div>
        
    </div>       
   
    
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         <div className='boxx'>
           < Card />
          
        </div>
        </div>
        
    </div>  
    <div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth} `}>
           < Misson />
          
        </div>
        
    </div>  

    <div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth} `}>
           < Steps />
          
        </div>
        
    </div>   
    </div>   
   
  


 
 </> 

)}

</div>
 );

};

export default Home