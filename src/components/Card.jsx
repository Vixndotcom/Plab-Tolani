import React from 'react';
import styles, {layout} from '../style';
import {features}from '../constants';
import { Link } from 'react-router-dom';
import { side } from '../assets';
import FadeIn from './home/FadeIn';
import Hidden from './home/Hidden';


const FeatureCard = ({img, title, content, index}) => (
 
  
<Hidden>
  <div className= { ` flex rounded-t-[20px] flex-row p-6 ${index !== features.length - 1 ? "mb-6" : "mb-0" } bg-card  max-w-[470px] max-h-[132px] ` }>
   
     <div className={`w-[64px] h-[64px] ${styles.flexCenter}`}>
       <img src={img} alt="icon" className='w-[100%] h-[100%]  object-contain'/>
     </div>
      
      <div className='flex-1 flex flex-col ml-5 '>
        <h4 className='plab text-white font-medium'>
          {title}
        </h4>
        <p className='light text-dimWhite mt-2'>
          {content}
        </p>
      </div>
     

  </div>
  </Hidden>
)





const Card = () => {
   
  return (
    <section id='features' className={`${layout.section} `}>
       <div className={`${layout.sectionInfo} bg-opac p-4 md:p-8 mb-2`}>
      
        <h2 className={`${styles.heading2} light p-2 mt-20`}> 
        <FadeIn >

         Why choose us <br className='sm:block hidden' /> Today!  
         </FadeIn>

        </h2>
      


      
        <p className={`${styles.paragraph} text-white max-w-[520px] p-2`}>  
        <FadeIn >
          We are committed to your success; delivering quality and well-structured materials. A guaranteed and hassle-free solution with tailored insights, just for you.
         </FadeIn >
        </p>


{/* link */}
   <FadeIn >
       <h3 className=' p-2 flex underline mt-5 text-blue-700'>
        Learn More
        <Link to='/services'> <img src={side} className='w-[10%] ml-5'/></Link>
       </h3>
       </FadeIn > 
       </div>
{/* link */}



        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature,index) =>   (
           <FeatureCard key= {feature.id} {...feature} index={index} /> 
          ))}
        </div>


    </section>
  )
} 

export default Card