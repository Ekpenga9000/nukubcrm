"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <header className="relative">
      <nav className="flex justify-between items-center p-2 md:p-8 bg-zinc-100 rounded shadow">
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-4">
            <div className="hidden md:block lg:hidden cursor-pointer" onClick={()=> setIsActive(prev => !prev)}>
              {!isActive ? <HiOutlineMenuAlt2 /> : <MdClose />}
            </div>
            <h3 className="md:text-2xl logo">
              <span className="font-semibold text-primary">Kubi</span>
              <span className="text-secondary">Force</span>
            </h3>
          </div>
          <ul className="hidden lg:flex items-center gap-4 font-semibold text-sm">
            <li className="menu-items">Products</li>
            <li className="menu-items">Learning</li>
            <li className="menu-items">Support</li>
            <li className="menu-items">Company</li>
            <li className="menu-items">Pricing</li>
          </ul>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-semibold">
          <li className="hidden lg:block">
            <div className="text-center text-sm">
              <p className="text-secondary">Contact us</p>
              <hr />
              <p className="flex items-center gap-1 mt-2">
                <span>
                  <FaPhoneAlt />
                </span>{" "}
                <span>+1 437 559 4221</span>
              </p>
            </div>
          </li>
          <li className="flex items-center gap-1 text-sm ms-7 login-btn">
            <span className="text-secondary">
              <FaUser />
            </span>{" "}
            Login
          </li>
          <li className="signup text-sm">Try for free</li>
        </ul>
        <div className="md:hidden cursor-pointer" onClick={()=> setIsActive(prev => !prev)}>
        {!isActive ? <HiOutlineMenuAlt3 /> : <MdClose />}
        </div>
      </nav>
      {isActive && <section className="lg:hidden absolute w-screen shadow-md pb-4 bg-white">
        <ul className="flex flex-col items-center gap-3 py-4 text-sm font-semibold">
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Learning</li>
          <li className="cursor-pointer">Support</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>
        <div className="text-center text-sm">
          <hr />
          <p className="text-secondary">Contact</p>
          <p className="flex items-center justify-center gap-1 mt-2">
            <span>
              <FaPhoneAlt />
            </span>{" "}
            <span>+1 437 559 4221</span>
          </p>
        </div>
        <ul className="flex items-center justify-center gap-2 mt-8 md:hidden">
          <li className="flex items-center justify-center gap-1 text-sm login-btn">
            <span className="text-secondary">
              <FaUser />
            </span>{" "}
            Login
          </li>
          <li className="signup text-sm">Try for free</li>
        </ul>
      </section>}
    </header>
  );
};

export default NavBar;
