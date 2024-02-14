import React, {useState} from 'react'
import styles from '../../style'

import { sideform } from '../../assets';
import { arrowform } from '../../assets';
import Hidden from '../home/Hidden';




const GoogleForm = () => {
      const [showForm, setShowForm] = useState(false);

 const toggleForm = () => {
 setShowForm (!showForm)
 };



  return (
    <section id='contact ' className='mb-20'>
  <div className='sm:px-16 px-4'>


    <div className='p-4 '>
      
    <p className={`${styles.paragraph} text-black light font-normal text-[32px] leading-[31.4px] mt-3   head-text  pb-6 `}>
        
        To Book Our Services
  </p>
{/* 
  <img src={navList ? close : menu } alt='menu' className='w-[50px] h-[48px] cursor-pointer 
        object-contain'
   onClick={() => setNavList((prev) => !prev)}/> */}
   <Hidden>


   <button onClick={toggleForm} className='light font-normal text-[20px] flex'> <span className='mt-4 mr-4'>Please Fill Form </span>
   <img src={showForm ? arrowform : sideform } className='' />
   </button> 

   </Hidden>
  </div>


  {showForm && (

    <div className={`${styles.flexCenter} justify-content-center mt-10 mb-5 `}>
      <div className='mx-auto text-center '>
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScZvO2LWkH-2hPvRqdnTrcXgZlSw6WDT4xBg6Wze646tjG99g/viewform?embedded=true" width="640" height="1275" frameborder="0"
       marginheight="0" marginwidth="0" className='forms'>Loading…</iframe> */}
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSHzjLdoicTX1ZOEfGmRkK_zW3s-4-q3cpzGDdg-E9R1egHw/viewform?embedded=true" width="640" height="1280" frameborder="0" marginheight="0" marginwidth="0"
className='forms'>Loading…</iframe>
      </div>
    </div>


  )}
    </div>
    </section>

  )
}

export default GoogleForm




// const GoogleForm = () => {
//   return (
//     <div className={`${styles.flexCenter} justify-content-center mt-20 mb-5 `}>
//       <div className='mx-auto text-center'>
//       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScZvO2LWkH-2hPvRqdnTrcXgZlSw6WDT4xBg6Wze646tjG99g/viewform?embedded=true" width="640" height="1275" frameborder="0"
//        marginheight="0" marginwidth="0" className='forms'>Loading…</iframe>


//       </div>
//     </div>
//   )
// }

// export default GoogleForm