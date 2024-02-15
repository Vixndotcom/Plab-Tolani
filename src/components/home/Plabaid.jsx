import React from 'react'
import styles from '../../style'
import { Link } from 'react-router-dom'
import { side } from '../../assets'
import { useIntersection } from 'react-use'
import FadeIn from './FadeIn'


 


const Plabaid = () => {
  return (

    <section id="home" className={`flex md:flex-row text-start mx-auto mt-10
    ${styles.paddingY}`} >

<div className='bg-opac p-4 md:p-8 mb-2'>
    
      <h2 className={`${styles.heading2} text-white light p-2 mt-20 text-[28px] ` }> 
      <FadeIn>
          Welcome to Plabaid!
          </FadeIn>
          </h2>
        

       
       <p className={`${styles.paragraph}  text-white p-2 `}>
       <FadeIn>
          Your last lap for a successful UK career. You have come this far, why stop now? 
       Congratulations on conquering the PLAB journey! Now, let's embark on the next chapter of your medical career
       together. At  <span className='plab font-bold text-gradient'>PLABAID,</span> we specialize in sculpting standout CVs for ambitious doctors like you, ensuring your
          professional brilliance shines through every line.
          </FadeIn>
            </p>

          
            <FadeIn>
            <h3 className=' p-2 flex underline mt-5 text-blue-700'>
            Learn More
            <Link to='/about'> <img src={side} className='w-[10%] ml-5'/></Link>
           </h3>
          

             </FadeIn>

             {/* </ FadeIn > */}
             </div>

    </section>
  
  )
}

export default Plabaid