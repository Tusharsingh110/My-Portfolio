import React from 'react'
import {ReactComponent as Leetcode} from "../assets/images/leetcode.svg"
import {ReactComponent as Github} from "../assets/images/github.svg"
import {ReactComponent as Linkedin} from "../assets/images/linkedin.svg"








export default function Resume() {
  return (
    <div className='max-w-[1300px] mx-auto py-8 my-8 px-10'>

<div className='text-center bg-[#2271ef] text-white  py-8 text-[20px] md:text-4xl font-bold'>Resume</div>
<div className='shadow-2xl p-2'>

    <div className='text-center md:text-2xl p-4'>
    <p className='py-1'>Tushar Singh</p>
    <div className='md:flex justify-center'>
    <p>tusharsingh6t@gmail.com </p>
    <p className='py-1'> +91 6388 409 329</p>
    </div>
    </div>
    <div className='md:flex h-full md:w-full border-2 border-t-[#d3d3d3] border-b-0 border-l-0 border-r-0'>









{/*left side*/ }
<div className='md:w-[50%] mx-auto px-4 md:py-2 md:border md:border-t-0 md:border-b-0 md:border-l-0 md:border-r-[#d3d3d3] my-4'>


  <div className='bg-[#f8f8f8] p-4 my-2 rounded-2xl shadow transition duration-500 hover:shadow-xl'>
    <div className='md:text-2xl text-xl md:font-thin'>EDUCATION</div>
    <div className='text-[16px] md:text-sm'>
      <p className='py-2 font-semibold'>| INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, BHAGALPUR</p>
      <p className='p-1'>B.TECH | COMPUTER SCIENCE AND ENGINEERING</p>
      <p className='p-1'>CGPA | 8.44</p>
    </div>
  </div>

  <div className='bg-[#f8f8f8] p-4 my-2 rounded-2xl shadow transition duration-500 hover:shadow-xl'>
    <div className='md:text-2xl text-xl md:font-thin pb-2'>SOCIAL & CODING PROFILES</div>
    <div className='text-base md:text-base flex flex-col md:flex-row md:justify-start'>
      <a href="https://github.com/Tusharsingh110"><button><p className='flex p-1 md:pl-4'> <Github className='w-6 mr-2'/> Github</p></button></a>
      <a href="https://www.linkedin.com/in/tusharsingh17/"><button><p className='flex p-1 md:pl-4'> <Linkedin className='w-6 h-6 mr-2'/> LinkedIn</p></button></a>
      <a href="https://leetcode.com/Tusharsingh110/"> <button><p className='flex p-1 md:pl-4'> <Leetcode className='w-6 mr-2'/> Leetcode</p></button></a>
    </div>
  </div>

  <div className='bg-[#f8f8f8] p-4 my-2 rounded-2xl shadow transition duration-500 hover:shadow-xl'>
    <div className='md:text-2xl text-xl md:font-thin'>COURSEWORK</div>
    <div className='text-[16px] md:text-[14px]'>
      <p className='py-2 font-semibold'>| UNDERGRADUATE</p>
      <ul className='marker:text-[#2271ef] list-disc pl-5 space-y-3'>
        <div className='md:flex md:justify-around'>
          <div className='space-y-1 px-2'>
            <li><p>Data Structure and Algorithms</p></li>
            <li><p>Design and Analysis of Algorithms</p></li>
            <li><p>Operating Systems</p></li>
            <li><p>Computer Networks</p></li>
          </div>
          <div className='space-y-1 px-2'>
            <li><p>Database Management Systems</p></li>
            <li><p>Software Engineering</p></li>
            <li><p>AI and ML</p></li>
          </div>
        </div>
      </ul>
    </div>
  </div>

  <div className='bg-[#f8f8f8] p-4 my-2 rounded-2xl shadow transition duration-500 hover:shadow-xl'>
    <div className='md:text-2xl text-xl md:font-thin'>SKILLS</div>
    <p className='py-2 font-semibold'>| PROGRAMMING AND TOOLS</p>
    <div className='md:flex md:justify-around text-[16px] md:text-[14px]'>
      <div>
        <p className='py-2 font-semibold'>Languages</p>
        <ul className='marker:text-[#2271ef] list-disc pl-5 space-y-1'>
          <li><p>C/C++</p></li>
          <li><p>Python</p></li>
        </ul>
      </div>
      <div>
        <p className='py-2 font-semibold'>Web Development</p>
        <ul className='marker:text-[#2271ef] list-disc pl-5 space-y-1'>
          <li><p>HTML + ReactJS</p></li>
          <li><p>Tailwind CSS</p></li>
        </ul>
      </div>
      <div>
        <p className='py-2 font-semibold'>Libraries and Frameworks</p>
        <ul className='marker:text-[#2271ef] list-disc pl-5 space-y-1'>
          <li><p>React JS</p></li>
          <li><p>Tailwind CSS</p></li>
          <li><p>Node JS</p></li>
        </ul>
      </div>
    </div>
  </div>


</div>












{/*right side*/ }

<div className=' md:w-[50%] mx-auto px-4 md:py-2  border-r-[#d3d3d3] my-4'>


    <div className='bg-[#f8f8f8] p-4 my-2 rounded-2xl shadow transition duration-500 hover:shadow-xl'>
    <div className='md:text-2xl text:xl md:font-thin'>EXPERIENCE</div>
    <div className='text-[16px] md:text-[14px]'>
        <p className='py-2 font-semibold'>|CHEGG INC |SUBJECT MATTER EXPERT</p>
        <p className='pb-2 font-semibold text-slate-500'>|MAR 2022 - Present | Freelance</p>
        <ul className="marker:text-[#2271ef] list-disc pl-5 space-y-3">
        <div className=''>
            <div className='space-y-1 px-2'>
            <li><p>Solved doubts of more than 300 students.</p></li>
            <li><p>Critical thinking</p></li>
            <li><p>Problem Solving</p></li>
            </div>
        </div>
        </ul>
    </div>
    </div>

    <div className='bg-[#f8f8f8] p-4 my-2 rounded-2xl shadow transition duration-500 hover:shadow-xl'>
    <div className='md:text-2xl text:xl md:font-thin'>PROJECTS</div>
    <div className='text-[16px] md:text-[14px]'>
        <p className='py-2 font-semibold'>|PORTFOLIO |WEB DEVELOPMENT</p>
        <p className='pb-2 font-semibold text-slate-500'>HTML | CSS | JAVASCRIPT | REACT JS | TAILWIND CSS</p>
        <ul className="marker:text-[#2271ef] list-disc pl-5 space-y-3">
        <div className=''>
            <div className='space-y-1 px-2'>
            <li><p>To showcase several mini projects completed during the course.</p></li>
            <li><p>React JS and Tailwind CSS</p></li>
            <li><p>Professional/Personal Details</p></li>
            </div>
        </div>
        </ul>
    </div>
    </div>

    <div className='bg-[#f8f8f8] p-4 my-2 rounded-2xl shadow transition duration-500 hover:shadow-xl'>
    <div className='md:text-2xl text:xl md:font-thin'>ACHIEVEMENTS</div>
    <div className='text-[16px] md:text-[14px]'>
        <p className='py-2 font-semibold'>|PERSONAL & PROFESSIONAL ACHIEVEMENTS</p>
        <ul className="marker:text-[#2271ef] list-disc pl-5 space-y-3">
        <div className=''>
            <div className='space-y-3 px-2'>
            <li>
                <p>
                Ranked <span className='font-semibold'>3rd in CODELOOP</span> Coding contest by competing against 1000 participants hosted by IIIT Bhagalpur under the banner of <span className='font-semibold'>ENYUGMA 2022</span>, the techno-cultural fest of <span className='font-semibold'>IIIT BHAGALPUR.</span>
                </p>
            </li>
            <li>
                <p>
                Secured a position in the <span className='font-semibold'>Top 5</span> participants of the <span className='font-semibold'>GFG chapter</span> hosted by <span className='font-semibold'>GFG at IIIT Bhagalpur in 2022</span>, demonstrating my exceptional skills and expertise.
                </p>
            </li>
            <li>
                <p>
                Secured the <span className='font-semibold'>6th position</span> out of <span className='font-semibold'>250 participants</span> in the <span className='font-semibold'>CodeRush 2023</span> coding competition held at <span className='font-semibold'>IIIT Bhagalpur</span>, organized by <span className='font-semibold'>Algo University</span>.
                </p>
            </li>
            <li>
                <p>
                <span className='font-semibold'>400+ days streak on LeetCode</span> with <span className='font-semibold'>500+ questions</span> solved, currently in <span className='font-semibold'>Top 13.8% worldwide</span>.
                </p>
            </li>
            </div>
        </div>
        </ul>
    </div>
    </div>

    <div className='bg-[#f8f8f8] p-4 my-2 rounded-2xl shadow transition duration-500 hover:shadow-xl'>
    <div className='md:text-2xl text:xl md:font-thin'>ROLES AND RESPONSIBILITIES</div>
    <div className='text-[16px] md:text-[14px]'>
        <p className='py-2 font-semibold'>|PyC INCHARGE |CODING CLUB, IIIT BHAGALPUR</p>
        <p className='pb-2 font-semibold text-slate-500'>|JAN 2023 - PRESENT</p>
        <ul className="marker:text-[#2271ef] list-disc pl-5 space-y-3">
        <div className=''>
            <div className='space-y-1 px-2'>
            <li>
                <p>
                Increased productivity by <span className='font-semibold'>60%</span> through effective management and organization of coding activities.
                </p>
            </li>
            </div>
        </div>
        </ul>
        <p className='py-2 font-semibold'>|EVENT MANAGER |ENYUGMA TECHNO-CULTURAL FEST, IIIT BHAGALPUR</p>
        <p className='pb-2 font-semibold text-slate-500'>|AUG 2021 - DEC 2021</p>
        <ul className="marker:text-[#2271ef] list-disc pl-5 space-y-3">
        <div className=''>
            <div className='space-y-1 px-2'>
            <li>
                <p>
                Brought <span className='font-semibold'>200+ participants</span> from across India for various photography events and workshops held under <span className='font-semibold'>Reflection -The official Photography Club of IIIT BHAGALPUR</span>.
                </p>
            </li>
            </div>
        </div>
        </ul>
    </div>
    </div>






    </div>
    </div>
    </div>
    </div>
  )
}
