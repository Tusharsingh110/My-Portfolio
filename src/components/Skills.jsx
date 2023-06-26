import React from 'react';
import skillsdata from "./SkillsData"


export default function Skills() {

  const allSkills = skillsdata.map(skill => (
    // key=skill.id,
    <SkillCard key={skill.id} source={skill.imgsrc}  label={skill.label}/>
  ) )

  return (
    <div className='bg-[#2271ef] w-full py-10'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='text-center text-[#fff] py-10 text-[20px] font-bold md:text-4xl'>I have worked with these technologies </div>
        <div className='md:text-xl sm:text-[25px] text-white text-center grid lg:gap-5 md:gap-3 lg:grid-cols-5 sm:grid-cols-3'>

          {allSkills}

        </div>
      </div>
    </div>
  );
}



function SkillCard({source, label}) {
  return (
    <div className=' h-[150px] bg-[#EDF3FD] p-4 rounded-2xl shadow-xl w-[150px] mx-auto my-2 hover:scale-105 duration-[300ms]'><img src={source} label={label} alt="" /></div>
  )
}