
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use';


const BodyAni = ({children}) => {
const elementRef = useRef(null);
const intersection = useIntersection(elementRef,{
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
});
useEffect(() => {
    if(intersection && intersection.intersectionRatio > 0 ) {
        elementRef.current.classList.add('activee');
    }
        
} ,  [intersection]);
return <div ref={elementRef} className='dormant'>{children}

</div>

}

export default BodyAni