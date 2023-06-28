import React from 'react';
import data from './Projectdata';
import Cards from './Cards'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const projdata = data.map(curproj => {

  return (
    <Cards
      key={curproj.id}
      {...curproj}
    />
  )

})


export default function Projects() {
  return (
    <div className="dark:bg-[#33373f] py-10  ">
    <div className='max-w-[1300px] mx-auto my-10'>
      <div className='text-center text-[#2271ef] py-8 text-[20px] md:text-4xl font-bold dark:text-white'>Projects</div>
      <div className="bg-[#EDF3FD] dark:bg-[#262626]  rounded-lg">
        <Carousel className='m-auto py-6' responsive={responsive} autoPlay={true} autoPlaySpeed={3000}  transitionDuration={500} infinite = {true}>
        {projdata}
        </Carousel>
      </div>
    </div>
    </div>
  );
}
