import React from 'react';
import imge from "../assets/images/LeetCode.jpeg";
// import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='w-full dark:bg-[#33373f] dark:text-white pt-36 pb-12 duration-[500ms]' >
      
      <div className="flex flex-col sm:flex-row text-[22px] md:text-[30px] lg:text-[35px] items-center justify-center">
        
        <div className="px-8 md:w-[35%] md:text-left text-center">
          <div className='mt-6'>Hii</div>
          <div className='mt-6'>I am <span className='mt-6'>Tushar Singh</span></div>
          <div className='my-6'>
            {/* <Typed
              className='font-bold drop-shadow-md'
              strings={['Web Developer...', 'Student at IIIT BH...', 'Freelancer...','Photographer...']}
              typeSpeed={80}
              backSpeed={50}
              loop={true}
            /> */}
          </div>
          
        </div>
        <div className='h-[500px] flex justify-center rounded-md bg-[#2271ef] bg-opacity-15 w-[400px]'>
          <img src={imge} alt="" className='h-[inherit]    shadow transition duration-500 hover:shadow-2xl inline' />
        </div>
      </div>
    </div>
  );
}
