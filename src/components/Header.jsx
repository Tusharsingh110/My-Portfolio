import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  let localTheme = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : false
  const [theme, setTheme] = useState(localTheme);

  let themeImg = theme ? 'moon.png' : 'sun.png'
  
  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme)
  }
  
  React.useEffect(() => {
    if(!theme) {
      document.documentElement.classList.remove("dark")
    }
    else {
      document.documentElement.classList.add("dark")
    }
    const updatedTheme = JSON.stringify(theme)
    localStorage.setItem("theme",updatedTheme)
  },[theme])

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
    <div className='bg-[#2271ef] shadow-lg dark:bg-[#1d1f23] text-white p-4 z-50 w-full fixed duration-[500ms] h-17'>
      <div className='max-w-[1200px] py-1 flex justify-between items-center mx-auto'>
        <div className='text-4xl font-bold ml-5'>
          TS<span className='text-[#d62d20]'>.</span>
        </div>
        <div className="md:hidden flex items-center"><button className='mx-4' onClick={toggleTheme}> <img src={require(`../assets/images/${themeImg}`)} width={30} height={30} alt="theme" /> </button>
        {toggle ? (
          <AiOutlineClose onClick={handleToggle} className='text-3xl md:hidden block' />
        ) : (
          <AiOutlineMenu onClick={handleToggle} className='text-3xl md:hidden block' />
        )}
        </div>
        <ul className='hidden md:flex gap-10 items-center'>
          {menuItems.map((item) => (
            <li className='li' key={item.id}>
              {item.title}
            </li>
          ))}
          <div className='border-2 rounded-3xl font-bold p-2 border-white hover:bg-[#4285F4] ease-in-out'>
            <a href='https://www.linkedin.com/in/tusharsingh17/ ' target='_blank' rel='noreferrer'>
              <button>Let's Connect</button>
            </a>
          </div>

          <div className=""><button className='w-10 hover:rotate-360 transition-transform duration-500' onClick={toggleTheme}> <img src={require(`../assets/images/${themeImg}`)} alt="theme" /> </button></div>
          
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
