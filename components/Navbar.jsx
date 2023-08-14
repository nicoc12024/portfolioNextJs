import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ProfileLogo from "../public/assets/profile.png";
import { HiOutlineMail } from "react-icons/hi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleShadow = () => {
    setShadow(window.scrollY >= 90);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const navLinks = ["/", "/#about", "/#skills", "/#projects", "/"];
  const socialLinksMobile = [
    {
      href: "https://www.linkedin.com/in/nicocabello/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/nicoc12024",
      icon: <FaGithub />,
    },
    {
      href: "mailto:nicoc12024@gmail.com",
      icon: <HiOutlineMail />,
    },
  ];
  return (
    <div
      className={`fixed w-full h-20 z-[100] bg-[#ecf0f3] ${
        shadow ? "shadow-xl ease-in-out duration-300" : ""
      }`}
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
          {/* Desktop Menu */}
          <ul style={{ color: "#1f2937" }} className="hidden md:flex">
            {navItems.map((item, index) => (
              <li key={index} className="ml-10 text-sm uppercase">
                <Link href={navLinks[index]}>{item}</Link>
              </li>
            ))}
          </ul>
          {/* Burger menu button visible only mobile */}
          <div style={{ color: "#1f2937" }} onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-200">
          <div className="overflow-y-auto flex flex-col fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-8 pb-3 ease-in duration-200">
            <div className="flex w-full items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <a>
                  <Image src={ProfileLogo} width="100" height="100" alt="/" />
                </a>
              </Link>
              {/* Close mobile menu button */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
            <div className="py-4 h-full flex flex-col justify-between">
              {/* Mobile navItems */}
              <ul className="uppercase">
                {navItems.map((item, index) => (
                  <Link key={index} href={navLinks[index]}>
                    <li onClick={handleNav} className="py-4 text-sm">
                      {item}
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                {/* Mobile Social Links */}
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  {socialLinksMobile.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noreferrer">
                      <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        {link.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
