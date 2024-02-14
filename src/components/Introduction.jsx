import React from 'react'
import styles, { layout } from '../assets'
import Button from './Button'
import  { features } from '../constants'

const FeatureCard = ({img, title, content, index, }) => (
  <div className={`flex flex-col p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card border bg-white shadow`}>
       <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-purple-200 text-center middle  `}>
      <img src={img} alt="star" className="w-[75%] h-[75%] object-contain align-items-center" />
    </div>
    <br />
    <div className="flex-1 flex flex-col text-center">
      <h4 className="font-poppins font-semibold text-red-900 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-red-700 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>


);



const Introduction = () => {
  return (
    <section id="features" className={layout.section}> 
        <div className={layout.sectionInfo} >
          
        <h2 className={`${styles.heading2} text-red-600` }> 
        Welcome to PLABAID!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10 text-red-900`}>
        Your last lap for a successful UK career. You have come this far, why stop now? 
     Congratulations on conquering the PLAB journey! Now, let's embark on the next chapter of your medical career
     together. At  <span className='font-bold'>PLABAID </span>, we specialize in sculpting standout CVs for ambitious doctors like you, ensuring your
        professional brilliance shines through every line.

          </p>


          <h2 className={`${styles.heading2} text-red-600` }> 
          Why Choose Us <br />
        Today!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-red-900`}>
      A guaranteed and hassle-free solution of tailored insights, just for you.
      </p>
     

      <Button styles={`mt-10 mb-10`} />
    </div> 
     
     {/* cards? */}
     <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
     {/* cards? */}


      
    
    
    
    </section>
  )
}

export default Introduction
