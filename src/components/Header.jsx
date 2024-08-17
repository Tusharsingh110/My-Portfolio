import React, { useState, useEffect } from "react";
import LoginModal from "./common/modal/LoginModal";
import LogoutModal from "./common/modal/LogoutModal";
import SignupModal from "./common/modal/SignupModal";
import { useToast } from "../hooks/useToast";
import { getUserData } from "../services/api.service";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../features/user/user.slice";

export default function Header() {
  const toast = useToast();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  // const usermail = localStorage.getItem("usermail");
  const {usermail} = useSelector(state => state.auth);

  let localTheme = localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : false;
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(localTheme);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  let themeImg = theme ? "moon.png" : "sun.png";

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    if (!theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    const updatedTheme = JSON.stringify(theme);
    localStorage.setItem("theme", updatedTheme);
  }, [theme]);

  const fetchUserData = async () => {
    try {
      const response = await getUserData();
      dispatch(logIn({name:response.data.name, mail:response.data.mail, isAdmin:response.data.isAdmin}));
    } catch (error) {
      toast("error", error.message);
    }
  };

  useEffect(() => {
    if(token)
      fetchUserData();
  }, []);

  const menuItems = [
    // { id: 1, title: 'Home' },
    // { id: 2, title: 'About' },
    // { id: 3, title: 'Contact' },
    // { id: 4, title: 'Projects' },
  ];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-[#2271ef] shadow-lg dark:bg-[#1d1f23] text-white p-2 z-50 w-full fixed duration-[500ms] h-17">
      <div className="max-w-[1400px] py-1 flex justify-between items-center mx-auto">
        <a href="https://Tusharsingh110.github.io/My-Portfolio">
          <div className="text-4xl font-bold ml-5">
            TS<span className="text-[#d62d20]">.</span>
          </div>
        </a>
        <div className="md:hidden flex items-center">
          <button
            className="mx-4 hover:rotate-360 transition-transform duration-500"
            onClick={toggleTheme}
          >
            {" "}
            <img
              src={require(`../assets/images/${themeImg}`)}
              width={30}
              height={30}
              alt="theme"
            />{" "}
          </button>
          {/* {toggle ? (
          <AiOutlineClose onClick={handleToggle} className='text-3xl md:hidden block' />
        ) : (
          <AiOutlineMenu onClick={handleToggle} className='text-3xl md:hidden block' />
        )} */}
        </div>
        <ul className="hidden md:flex gap-10 items-center">
          {menuItems.map((item) => (
            <li className="li" key={item.id}>
              {item.title}
            </li>
          ))}
          <div className="rounded-3xl duration-[100ms] font-bold p-2  ease-in-out hover:bg-white hover:text-[#2271ef] border-[1px] border-white hover:border-[#2271ef]">
            <a
              href="https://www.linkedin.com/in/tusharsingh17/ "
              target="_blank"
              rel="noreferrer"
            >
              <button>Let's Connect</button>
            </a>
          </div>

          <div className="">
            <button
              className="w-10 hover:rotate-360 transition-transform duration-500"
              onClick={toggleTheme}
            >
              {" "}
              <img
                src={require(`../assets/images/${themeImg}`)}
                alt="theme"
              />{" "}
            </button>
          </div>
          {[null, undefined, " ", ""].includes(token) ? (
            <div className="flex gap-4">
              <button
                className="font-bold"
                onClick={() => {
                  setShowLoginModal(true);
                }}
              >
                Login
              </button>
              {!token && (
                <button
                  className="font-bold"
                  onClick={() => {
                    setShowSignupModal(true);
                  }}
                >
                  Signup
                </button>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <p>Hi {usermail?.split("@")[0] ?? "user"}, Not you?</p>
              <button
                className="font-bold"
                onClick={() => {
                  setShowLogoutModal(true);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </ul>
        <ul
          className={`duration-300 md:hidden w-full h-screen fixed bg-black top-[80px] ${
            toggle ? "left-[0]" : "left-[-100%]"
          }`}
        >
          {menuItems.map((item) => (
            <li className="p-5" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        fetchUserData={fetchUserData}
      />
      <LogoutModal
        showLogoutModal={showLogoutModal}
        setShowLogoutModal={setShowLogoutModal}
      />
      <SignupModal
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
      />
    </div>
  );
}
