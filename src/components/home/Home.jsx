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
import { Background, Parallax } from 'react-parallax'
import {  med, strategy, study, symbol, transparent, } from '../../assets'





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
  
<div className='bg-body by-blackk'>


{/* hero section */}

   <Parallax strength={1000}  bgImage={transparent} height={400} content='firstSection'> 


   <div className={`${styles.flexStart} `} >
        <div className={`${styles.boxWidth} `}  >
        
           < Hero />
          
         
    </div>
    </div>
    </Parallax>

{/* )} */}
    

    {/* </div> */}


    <Parallax strength={1000}   >
        
        
      
    <Background  style={{width:'100vw'}} className='celll mt-10'  >
         <img src={med} alt=""  />
  
        

      </Background>
     <div className={` ${styles.paddingX} ${styles.flexStart}  `}>
      
        <div className={`${styles.boxWidth}  `}> 
   


        < Plabaid />
     
      
         
         
          
        </div>
        </div> 
        
        </Parallax>
   
        <Parallax strength={1000}  >
        <Background  style={{width:'100vw'}} className='celll mt-20'  >
         <img src={symbol} alt=""  />
  
        

      </Background>


     <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
         
          <Card />
        </div>
        </div> 
    
     
     </Parallax>
 
    <Parallax strength={1000} >
       
       <Background>
    <img  alt=""  className='bg'/>

       
    </Background> 
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Misson />
          
        </div>
        </div>
        
     

     </Parallax>
 
 
    <Parallax strength={1000} >
       
       <Background>
    <img  alt=""  className='bg'/>

       
    </Background> 
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Steps />
          
        </div>
        </div>
        
     

     </Parallax>
 







  
   
</div>

 </> 

)}

</div>


 );

};

export default Home