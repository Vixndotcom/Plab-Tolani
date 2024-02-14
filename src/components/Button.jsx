import React from "react";


const Button = ({ styles }) => (
  <button type="button" className={`py-2 px-20 font-poppins font-medium text-[18px] text-white button shadow
    rounded-[24px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;