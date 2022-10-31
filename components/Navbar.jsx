import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ProfileLogo from "../public/assets/profile.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]  bg-[#ecf0f3] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]  bg-[#ecf0f3]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-5 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              src={ProfileLogo}
              alt="/"
              width="100"
              height="100"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: "#1f2937" }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase">
              <Link href="/#projects">Projects</Link>
            </li>
                      <li className="ml-10 text-sm uppercase">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div style={{ color: "#1f2937" }} onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-200"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "overflow-y-auto flex flex-col fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-8 pb-3 ease-in duration-200"
              : "overflow-y-auto flex flex-col fixed left-[-150%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-8 pb-3 ease-in duration-200"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image src={ProfileLogo} width="100" height="100" alt="/" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 h-full flex flex-col justify-between">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/nicocabello/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/nicoc12024" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
