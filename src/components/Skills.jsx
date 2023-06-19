import React from 'react';
// import { Circle } from 'rc-progress';

export default function Skills() {
  return (
    <div className='bg-[#2271ef] w-full py-10'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='text-center text-white py-10 text-[20px] font-bold md:text-4xl'>I have worked with these technologies </div>
        <div className='md:text-xl sm:text-[25px] text-white text-center grid lg:gap-5 md:gap-3 lg:grid-cols-5 sm:grid-cols-3'>
          {/* <SkillCard percent={90} label='React' />
          <SkillCard percent={90} label='HTML5' />
          <SkillCard percent={75} label='CSS' />
          <SkillCard percent={40} label='Tailwind CSS' />
          <SkillCard percent={10} label='Gituhb' />
          <SkillCard percent={10} label='NPM' />
          <SkillCard percent={10} label='NodeJS' /> 
          
           
  
          
          */}

            <SkillCard  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"  label="React"/>
            <SkillCard  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"   label="HTML 5"/>
            <SkillCard  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"  label="CSS 3"/>
            <SkillCard  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"  label="Twilwind CSS"/>
            <SkillCard  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  label="GitHub"/>
            <SkillCard  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"  label="NPM"/>
            <SkillCard  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"  label="Node JS"/> 
            <SkillCard  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"  label="C++"/> 

        </div>
      </div>
    </div>
  );
}



function SkillCard({source, label}) {
  return (
    <div className=' h-[150px] p-4 rounded-2xl shadow-xl w-[150px] mx-auto my-2 hover:scale-105 hover:duration-700'><img src={source} label={label} alt="" /></div>
  )
}