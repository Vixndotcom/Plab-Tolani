import React from 'react'
import styles from '../../style'
import Hidden from '../home/Hidden';

const Email = () => {
   const emailAddress = 'contact.plabaid@gmail.com';



  return (
    <section className='mt-20 mb-5 ' >
        <div className='sm:px-16 px-4 '>
      
      <p className={`${styles.paragraph} text-black light font-normal text-[32px] leading-[31.4px]  head-text  mt-3 p-4 mx-1 `}>      
            For Inquires 
      </p>
   

      <Hidden>
      <p className={`${styles.paragraph} text-black light font-normal text-[20px] p-4 mx-1 cursor-pointer`}  >
        
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>

      </p>

      </Hidden>
      </div >
    </section>
  )
}

export default Email;