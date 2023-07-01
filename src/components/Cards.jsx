import React from 'react';

export default function Cards(props) {
  return (
    <div>
      <div className='bg-[#fff] dark:bg-[#33373f] h-[400px] w-[300px] mx-auto shadow hover:shadow-2xl hover:scale-105 duration-[500ms] '>
        <img src={props.image} className='h-[70%] object-cover' alt="" />
        
        <div className='h-[30%] dark:bg-[#33373f] dark:text-white flex flex-col text-center justify-evenly '>
          <div>{props.pname}</div>
          <div>
            <span>
              {/* <hr className='pt-4 ' /> */}
              <a href={props.llink} target='_blank' rel='noreferrer'>
                <button className='w-[80px] h-[35px] mx-2  hover:bg-[#639dfa] bg-[#4285F4] text-[white] md:text-md rounded-2xl'>
                  Live
                </button>
              </a>
            </span>
            <span>
              <a href={props.rlink} target='_blank' rel='noreferrer'>
                <button className='w-[80px] h-[35px] mx-2 hover:bg-[#639dfa] bg-[#4285F4] text-[white] md:text-md rounded-2xl'>
                  Code
                </button>
              </a>
            </span> 
          </div>
        </div>
      </div></div>
  );
}
