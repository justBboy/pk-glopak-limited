import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdAccountCircle } from "react-icons/md";
import {IoIosArrowBack} from "react-icons/io";
import { useStore } from "../store/store";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [{ page }, dipatch] = useStore();
  useEffect(function () {
    const mounted = true;
    if (mounted) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 0) setIsScrolled(true);
        else setIsScrolled(false);
      });
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div
      className={`navbar transition-shadow duration-300 ease-in z-50 pl-5 pr-5 md:pl-0 md:pr-0 ${
        isScrolled || page.includes("auth/")
          ? "fixed shadow-sm shadow-black/60 bg-white w-full pl-5 pr-5"
          : ""
      } py-5`}
    >
      <div
        className={`container mx-auto flex items-center justify-between lg:px-20`}
      >
          {
              page.includes("auth/") &&
              <Link href="/">
                <button type="button" className="flex items-center">
                    <IoIosArrowBack className="text-4xl font-bold text-lighter" />
                    <h2 className={`font-extrabold text-sm sm:text-lg text-light antialiased ${page.includes("auth/") ? 'mr-auto' : ''} inline`}>
                        Pk Glopak LTD
                    </h2>
                </button>
              </Link>
          }
          {
              page == "home"
              &&
            <h2 className={`font-extrabold text-sm sm:text-lg text-light antialiased ${page.includes("auth/") ? 'mr-auto' : ''}`}>
            Pk Glopak LTD
            </h2>
          }
        {page == "home" && (
          <ul className="hidden md:flex justify-center items-center">
            <motion.li
              initial={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 2.2,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="relative"
            >
              <Link href="/">
                <a className="text-sm outline-none hover:text-lighter focus:text-lighter font-black antialiased text-light-gray after:content-[''] after:w-1/3 after:h-1 after:bg-lighter after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:hover:absolute after:focus:absolute">
                  Home
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 2.3,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="ml-10 relative"
            >
              <Link href="/">
                <a className="text-sm outline-none hover:text-lighter focus:text-lighter font-bold antialiased text-light-gray after:content-[''] after:w-1/3 after:h-1 after:bg-lighter after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:hover:absolute after:focus:absolute">
                  About
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 2.4,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="ml-10 relative"
            >
              <Link href="/">
                <a className="text-sm outline-none hover:text-lighter focus:text-lighter font-bold antialiased text-light-gray after:content-[''] after:w-1/3 after:h-1 after:bg-lighter after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:hover:absolute after:focus:absolute">
                  Services
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 2.5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="ml-10 relative"
            >
              <Link href="/">
                <a className="text-sm outline-none hover:text-lighter focus:text-lighter font-bold antialiased text-light-gray after:content-[''] after:w-1/3 after:h-1 after:bg-lighter after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:hover:absolute after:focus:absolute">
                  Testimonials
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 2.6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="ml-10 relative"
            >
              <Link href="/">
                <a className="text-sm outline-none hover:text-lighter focus:text-lighter transition-colors- font-bold antialiased text-light-gray after:content-[''] after:w-1/3 after:h-1 after:bg-lighter after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:hover:absolute after:focus:absolute">
                  Contact
                </a>
              </Link>
            </motion.li>
          </ul>
        )}
        {
            !page.includes("auth/") 
            &&
            <div className="flex">
            <Link href="/auth/Login">
                <button className="border px-3 py-2 rounded-lg outline-none border-none bg-primary text-white font-bold text-xs flex items-center">
                <span className="mr-3">Log In </span>
                <MdAccountCircle className="text-xl" />
                </button>
            </Link>
            </div>
        }
           {
                page == "auth/login"
                &&
                <div className="flex items-center">
                    <h3 className="text-text-light pr-3 ">Don't have an account? </h3>
                    <Link href="/auth/Register">
                        <button className="border px-3 py-2 rounded-lg outline-none border-none bg-primary text-white font-bold text-xs flex items-center">
                        <span className="mr-3">Register</span>
                        <MdAccountCircle className="text-xl" />
                        </button>
                    </Link>
                </div>
           } 
           {
               page == "auth/register"
               &&
                <div className="flex items-center">
                    <h3 className="text-text-light pr-3 ">Already have an account? </h3>
                    <Link href="/auth/Login">
                        <button className="border px-3 py-2 rounded-lg outline-none border-none bg-primary text-white font-bold text-xs flex items-center">
                        <span className="mr-3">Login</span>
                        <MdAccountCircle className="text-xl" />
                        </button>
                    </Link>
                </div>
           }
      </div>
    </div>
  );
}
