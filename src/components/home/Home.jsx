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
  


    <div className='w-full overflow-hidden parallex-con  '> 
    <div className='bg-body'>
    <div className='content'>
  
   {/* hero section */}
   <div >
   <div className={`${styles.flexStart} `}>
        <div className={`${styles.boxWidth} `}>
           < Hero />
    </div>
    </div>
    
    </div>
    
    <div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth} `}>
           < Plabaid />
          
        </div>
        
    </div>       
   
    
    <div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth} `}>
           < Card />
          
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
    </div>
    </div>

 
 </> 

)}

</div>
 );

};

export default Home