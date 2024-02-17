import React from 'react'
import styles from '../../style';
import { star } from '../../assets';
import FadeIn from '../home/FadeIn'




const Misson = () => (

 <section className={`${styles.flexCenter} flex flex-col flex flex-row mt-10 mb-20 ` }>
    <div className='mb-10 mt-10'>
   <div className='max-w-[470px] border-book   '>

    <div>
    <h4 className="light font-normal text-[24px] leading-[23.4px]  head-text text-center  mt-3 p-6 mx-1 ">
      Our Mission
      </h4>
      <img src={star} alt="" className='text-center w-[50%] mx-auto' />
      </div>

      <div className='light'>
      <p  className='text-center text-[18px] p-6 text-white mt-20'>
        <FadeIn >
        To guide aspiring Doctors fulfil their career goals by connecting them with the right catalysts 
        to kickstart their ambitions.
        </FadeIn>
     
      </p>
 
       </div>

    
   </div>
   </div>
{/* <br  className='mb-10'/> */}


   {/* our vision */}
   <div className='max-w-[470px] border-book '>

<div>
<h4 className="light font-normal text-[24px] leading-[23.4px]  head-text text-center  mt-3 p-6 mx-1 ">
  Our Vision
  </h4>
  <img src={star} alt="" className='text-center w-[50%] mx-auto' />
  </div>

  <div className='light'>
  <p  className='text-center text-[18px] p-6 mt-20 text-white '>
    <FadeIn>
   
    To be a global brand in PLAB CV building, aiding as many as possible to fulfil dreams together. We aim for accessibility to all and ultimate satisfaction with our quality.
    </FadeIn>
  
  </p>



   </div>


</div>


   {/* our vision */}

    </section >


);
export default Misson