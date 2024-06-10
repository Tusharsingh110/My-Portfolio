import React from 'react'
import {ReactComponent as Linkedsvg } from "../assets/images/Linkedsvg.svg"
import {ReactComponent as Facebook } from "../assets/images/Facebook.svg"
import {ReactComponent as Instagram } from "../assets/images/Instagram.svg"
import {ReactComponent as Twitter } from "../assets/images/Twitter.svg"


export default function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <>  
            <div className='bg-[#2271ef]  w-full h-[fit-content] md:text-l text-white  mx-auto pt-8 px-2  dark:bg-[#1d1f23] dark:text-white duration-[150ms]'>
                <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 border border-t-0 border-l-0 border-r-0  border-b-[#9ebaff] dark:border-b-[#5f6674] md:grid-cols-4 '>

                <div className='h-[fit-content] p-4 m-2 '> 
                <p className='text-center pb-4 font-bold border border-t-0 border-l-0 border-r-0  border-b-[#9ebaff] dark:border-b-[#5f6674] '>Quick links</p>
                    <ul className='flex md:flex-col justify-evenly gap-2 pt-4'>

                        {/* <li>Home</li> */}
                        <li>To be updated soon...</li>
                        {/* <li>Skills</li>
                        <li>Projects</li>
                        <li>Resume</li> */}

                    </ul>



                  </div>
                <div className='h-[200px] p-4 m-2 col-span-2 space-y-4'>
                    
                    <p className='text-center pb-4 font-bold border border-t-0 border-l-0 border-r-0  border-b-[#9ebaff] dark:border-b-[#5f6674] '>Social Handles</p>

                    <ul className='flex justify-evenly'>

                    <li><a href="https://www.facebook.com/prince221001/" target='_blank' rel='noreferrer'>  <Facebook  className='w-14 hover:-translate-y-1 duration-[400ms]'/> </a></li>
                    <li><a href="https://www.instagram.com/_ig_tushar_/" target='_blank' rel='noreferrer'> <Instagram className='w-14 hover:-translate-y-1 duration-[400ms]'/></a></li>
                    <li> <a href="https://twitter.com/tusharsingh6t?t=ryjoCREL6c3w-zAcgMSGow&s=09" target='_blank' rel='noreferrer'><Twitter   className='w-14 hover:-translate-y-1 duration-[400ms]'/></a></li>
                    <li> <a href="https://www.linkedin.com/in/tusharsingh17/" target='_blank' rel='noreferrer'><Linkedsvg className='w-14 hover:-translate-y-1 duration-[400ms]'/></a></li>

                    </ul>
                    
                    <p className='text-center text-xs pt-2'> Icons by <a className='font-bold italic' href="https://icons8.com" target='_blank' rel='noreferrer'>Icons8</a></p>
                    
                    </div>
                <div className='h-[fit-content] p-4 m-2 col-span-1 '> 

                <p className='text-center pb-4 font-bold border border-t-0 border-l-0 border-r-0  border-b-[#9ebaff] dark:border-b-[#5f6674] '>Contact</p>
                
                <ul className='text-center space-y-2 pt-4'>

                    <li>Tushar Singh</li>
                    <li>+91 6388409329</li>
                    <li><a href="mailto:tusharsingh6t@gmail.com">tusharsingh6t@gmail.com</a></li>

                </ul>


                  </div>
                {/* <div className='h-[200px] p-4 m-2 border border-black'>   </div> */}


                </div>
                <p className='text-white w-[fit-content] pt-2 pb-2 mx-auto '>Copyright © {currentYear} TS. All rights reserved</p>
                
              
            </div>
        </>
    )
}