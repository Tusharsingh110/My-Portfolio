import React from 'react';
import imge from "../assets/images/rb.png";
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='py-[80px] w-full'>
      <div className="md:flex max-w-[1200px] mx-auto md:text-[25px] lg:text-[35px] md:p-[24px]">
        <div className="info-container mx-auto my-auto px-8 md:w-[35%] text-center md:text-left">
          <div className='mt-6'>Hii</div>
          <div className='mt-6'>I am <span className='mt-6'>Tushar Singh</span></div>
          <div className='my-6'>
            <Typed
              className='font-bold'
              strings={['Web Developer...', 'Student at IIIT BH...', 'Freelancer...','Photographer...']}
              typeSpeed={80}
              backSpeed={50}
              loop={true}
            />
          </div>
          
        </div>
        <div className='text-center md:w-[50%]'>
          <img src={imge} alt="" className='inline' />
        </div>
      </div>
    </div>
  );
}
