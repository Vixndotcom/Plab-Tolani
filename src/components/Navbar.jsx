import { close, iconplab, menu } from '../assets';
import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../constants'
import styles from '../style';

const Navbar = () => {
  const [navList, setNavList] = useState (false) ;
   const [active, setActive] = useState("Home");


   const handleSelection =() => {
    setNavList(false);

   };








return ( 
  <>
  <navbar className='nav-section md:w-[92%] xl:w-[50%]  body'>
  <div className='w-full flex py-4 justify-between
      items-center navbar bg-transparent '>

       {/* logo */}
        <div className='logo flex flex-row'>
        <img src={iconplab} className='w-[71.2px] h-[65.2px] shadow-text' />
        <h4 className='plab mt-5 mx-2 shadow-text'>PLAbAiD</h4>
        </div>
      {/* logo */}


      {/* items */}
   <div>
   <div className='mr-12'>
          
            <ul className='sm:flex list-none hidden justify-between mr-16 flex-1'> 
          {nav.map((list, index) => (
            <li key= {index} className={`light font-normal cursor-pointer  text-[20px] ${active === list.text ? "text-white plab" : "text-dimWhite "} 
             ${index === nav.length - 1 ? 'mr-4' : 'mr-8'} `} onClick={() => setActive(list.text)} >
            <Link to={list.path}>{list.text}</Link>
            </li>
          )
           
          
          
          )}
         </ul>
         </div>

{/* toogle */}
 
 <div className='sm:hidden flex flex-1 mr-10 '>
 <img src={navList ? close : menu } alt='menu' className='w-[50px] h-[48px] cursor-pointer 
        object-contain'
    onClick={() => setNavList((prev) => !prev)}/>
   

<div className={` ${navList ? 'flex' : 'hidden'} p-12 glass-nav light
            absolute top-16 mt-10 right-0 mx-2 my-2 w-full h-screen rounded-xl sidebar mr-2 z-[6]`}>


<ul className=' list-none justify-center items-center flex-1 '> 
  {nav.map (( list, index) => (

<li key={list.path} className={`font-normal shadow-text p-6 disc 
 
 ${index === nav.length - 1 ? 'mr-0' : 'mb-5'}`} onClick={handleSelection}    > 

<Link to={list.path}>{list.text}</Link>
</li>



  )
       
 
 
 )}   


</ul>


            </div>






 </div>
{/* toogle */}

   </div>
 {/* items */}
</div>
  </navbar>
  </>
)


}
 export default Navbar