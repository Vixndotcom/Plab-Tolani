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
import { giff, strategy, study, } from '../../assets'






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
  

{/* hero section */}

<Parallax

 strength={1000}>
   
   

   <Background>
   
    <img  src={giff}   style={{ margin: '60px auto'}} className='bg'/> 

       
   </Background> 




   <div className={`${styles.flexStart} `} >
        <div className={`${styles.boxWidth} `}>
          
           < Hero />
          
   
    </div>
    </div>
            
</Parallax>
{/* )} */}
    

    {/* </div> */}
    <Parallax strength={1000}>
    <Background>
   <img src={giff} alt=""  className='bg'/>

       
   </Background> 


    <div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth}  `}>

   

         
           < Plabaid />
          
        </div>
        </div>
        
        </Parallax>
   
    <Parallax strength={1000} >
       
       <Background>
    <img src={giff} alt=""  className='bg'/>

       
    </Background> 
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Card />
          
        </div>
        </div>
        
     

     </Parallax>
 
    <Parallax strength={1000} >
       
       <Background>
    <img src={giff} alt=""  className='bg'/>

       
    </Background> 
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Misson />
          
        </div>
        </div>
        
     

     </Parallax>
 
 
    <Parallax strength={1000} >
       
       <Background>
    <img src={giff} alt=""  className='bg'/>

       
    </Background> 
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Steps />
          
        </div>
        </div>
        
     

     </Parallax>
 







  
   


 </> 

)}

</div>


 );

};

export default Home