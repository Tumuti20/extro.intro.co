import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TbBasket, TbUserCircle } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (
    <>
      <header className="max-padd-container w-full z-50 fixed top-0 left-0 right-0 bg-white ">
        <div className="flexBetween py-3">
          {/* logo left side */}
          <Link to={"/"} className="flex flex-1">
            <div className="bold-32">
              Extro<span className="text-secondary">.Intro</span>
            </div>
          </Link>

          {/* navbar  */}
          <div className="flex-1">
            <Navbar
              containerStyles={`transition-all duration-300 ${
                menuOpened || window.innerWidth >= 1280 // Keep menu visible on large screens
                  ? "opacity-100 scale-100 flex items-start flex-col xl:flex-row gap-y-8 xl:gap-x-10 fixed xl:relative top-16 right-6 xl:top-auto xl:right-auto p-5 xl:p-1 bg-white rounded-xl xl:rounded-full  w-52 xl:w-auto ring-1 ring-slate-900/5 z-50"
                  : "opacity-100 scale-95 hidden"
              }`}
              closeMenu={toggleMenu}
            />
          </div>

          {/* buttons right side  */}
          <div className="flex-1 flex items-center justify-end gap-x-2 xs:gap-x-8">
            {/* menu toggle  */}
            <FaBarsStaggered
              onClick={toggleMenu}
              className="xl:hidden cursor-pointer text-xl"
            />
            {/* cart  */}
            <Link to={"/cart"} className="flex relative">
              <TbBasket className="text-[27px]" />
              <span className="bg-secondary text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md">
                {getCartCount()}
              </span>
            </Link>
            {/* user profile  */}
            <div className="group relative">
              <div>
                {token ? (
                  <div>
                    <TbUserCircle className="text-[29px] cursor-pointer" />
                  </div>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="btn-light flexCenter gap-x-2"
                  >
                    Login
                    <RiUserLine className="text-xl" />
                  </button>
                )}
              </div>
              {/* dropdown  */}
              {token && (
                <ul className="bg-white p-2 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-7 hidden group-hover:flex flex-col regular-14 shadow-md z-50">
                  <li
                    onClick={() => navigate("/orders")}
                    className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer"
                  >
                    Orders
                  </li>
                  <li
                    onClick={logout}
                    className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer"
                  >
                    LogOut
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Prevent content from being hidden behind the fixed header */}
      <div className="mt-16"></div>
    </>
  );
};

export default Header;
