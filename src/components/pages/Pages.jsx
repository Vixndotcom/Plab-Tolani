import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "../Navbar";
import styles from "../../style";
import  Hero  from "../Hero";
import Home from "../home/Home";
import Footer from "../Footer";
import AboutUs from "../about/AboutUs";
import Services from "../services/Services";
import Contact from "../contact/Contact"
import Scroll from "../home/Scroll";




 


const Pages = () => {
  return (
    <>
      <Router>

      <div className={` ${styles.paddingX} ${styles.flexCenter} w-full overflow-hidden text-white`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

        <Routes>
    
         <Route exact path ='/' element={<Home />} />  
         <Route path ='/about' element={<AboutUs />} />
         <Route path ='/services' element={<Services />} />
         <Route path ='/contact' element={<Contact/>} />
         

        </Routes>
           <div className={`${styles.boxWidth} mr-8px`}>
            < Scroll />
           </div>

        <div className={`bg-black  ${styles.paddingX} ${styles.flexStart} bottom-0`}>
        <div className={`${styles.boxWidth}`}>
          
    
           < Footer/> 
      
        </div>
      </div> 


          
      </Router>
    </>
  )
}

export default Pages
