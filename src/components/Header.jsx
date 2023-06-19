import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [toggle, setToggle] = useState(false);



  const menuItems = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'About' },
    { id: 3, title: 'Contact' },
    { id: 4, title: 'Projects' },
  ];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='bg-[#2271ef] text-white p-4'>
      <div className='max-w-[1200px] py-1 flex justify-between items-center mx-auto'>
        <div className='text-4xl font-bold ml-5'>
          TS<span className='text-[#d62d20]'>.</span>
        </div>
        {toggle ? (
          <AiOutlineClose onClick={handleToggle} className='text-3xl md:hidden block' />
        ) : (
          <AiOutlineMenu onClick={handleToggle} className='text-3xl md:hidden block' />
        )}
        <ul className='hidden md:flex gap-10 items-center'>
          {menuItems.map((item) => (
            <li className='li' key={item.id}>
              {item.title}
            </li>
          ))}
          <div className='border-2 rounded-3xl font-bold p-2 border-white hover:bg-[#4285F4] ease-in-out'>
            <a href='https://www.linkedin.com/in/tusharsingh17/'>
              <button>Let's Connect</button>
            </a>
          </div>
        </ul>
        <ul
          className={`duration-300 md:hidden w-full h-screen fixed bg-black top-[80px] ${
            toggle ? 'left-[0]' : 'left-[-100%]'
          }`}
        >
          {menuItems.map((item) => (
            <li className='p-5' key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
