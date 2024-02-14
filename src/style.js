const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "light font-semibold xs:text-[48px] text-[40px] head-text xs:leading-[76.8px] leading-[66.8px] w-full text-white",
    paragraph: "light font-normal  text-[18px] leading-[30.8px] text",
    paragraphh: "light font-normal  text-[18px] leading-[30.8px] ",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingXx: "sm:px-20 px-8",
    paddingY: "sm:py-16 py-6",
    paddingYx: "sm:py-6 py-2",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    heading3: "text-[18px] font-semibold  text-blue-900 flex-col",
    heading4: "text-[18px] fauna-thin  text-white flex-col",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionn: `flex md:flex-row flex-col ${styles.paddingYx}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
  