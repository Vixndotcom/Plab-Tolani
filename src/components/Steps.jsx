import React, { useState } from 'react'
import styles from '../style'
import { arrowform, arrowside, purple, side } from '../assets';
import Hidden from './home/Hidden';
import FadeIn from './home/FadeIn';
import { Link } from 'react-router-dom';


arrowform

const Steps = () => {
    const [showItem, setShowItem] = useState(false);

const toggleItem = () => {
    setShowItem(!showItem)
};
    const [showItemm, setShowItemm] = useState(false);

const toggleItemm = () => {
    setShowItemm(!showItemm)
};
    const [showItemmm, setShowItemmm] = useState(false);

const toggleItemmm = () => {
    setShowItemmm(!showItemmm,)
};



  return (
    <section className={`${styles.flexCenter} flex flex-col flex flex-row mt-20 mb-20 ` }>
        <div className='mb-20 max-w-[470px] mx-auto mt-5'>
      <FadeIn>
     <div className='border-work p-4 '>
 <h2 className='text-white text-[24px]  light text-center' >
    <span > How it works</span>
     

 </h2>
 </div>   
 </FadeIn>
{/* 1 card */}
<div className='text-center align-items-center mx-auto justify-content-center'>
<Hidden>
    <div className={`${styles.flexCenter} flex `}> 
    <div className='border-step p-4 mx-auto'>
        <button onClick={toggleItem} className='flex text-[20px]'><span className='text-white light mt-2 mr-32  '>Step 1</span>
            <img src={showItem ? arrowside : purple} className='ml-28  w-[14%]'/>
        </button>
        </div>
    </div>
{showItem  && (
    <div>
        <p className='light text-[16px] text-white max-w-[320px] mt-5 text-center mx-auto'>
            Be intentional about your medical career
        </p>
    </div>
 
 )}
 </Hidden>
{/* 1 card */}
{/* 1 card */}
<Hidden >
<div className={`${styles.flexCenter} flex mt-5`}> 
    <div className='border-step p-4 mx-auto'>
        <button onClick={toggleItemm} className='flex text-[20px]'><span className='text-white light mt-2 mr-32'>Step 2</span>
            <img src={showItemm ? arrowside : purple} className='ml-28 w-[14%]'/>
        </button>
        </div>
    </div>
{showItemm  && (
    <div>
        <p className='light text-[16px] text-white max-w-[320px] mt-5 text-center mx-auto   '>
            Fill form on contact page <Link to='/contact' className='text-center mt-2'> <img src={side} className='w-[10%] mx-auto'/></Link>
        </p>
    </div>
 
 )}</Hidden>

{/* 1 card */}
{/* 1 card */}
<Hidden>
<div className={`${styles.flexCenter} flex mt-5`}> 
    <div className='border-step p-4 mx-auto'>
        <button onClick={toggleItemmm} className='flex text-[20px]'><span className='text-white light mt-2 mr-32'>Step 3</span>
            <img src={showItemmm ? arrowside : purple} className='ml-28 w-[14%]'/>
        </button>
        </div>
    </div>
{showItemmm  && (
    <div className=''>
        <p className='light text-[16px] text-white max-w-[320px] mt-5 text-center mx-auto'>
            With our writing skills, we will help you reach all requirements to land you the employment
        </p>
    </div>
 
 )}</Hidden>

{/* 1 card */}

</div>
</div>
    </section>
  )
}

export default Steps