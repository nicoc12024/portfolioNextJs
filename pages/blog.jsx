import Image from "next/image";
import blog from "../public/assets/img/blog.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function HouseMarketplace() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 top-5"
          layout="fill"
          objectFit="contain"
          src={blog}
          alt="/"
        />
        <div className="absolute px-8 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Blog FullStack</h2>
          <h3>
            SCSS / Material-UI / React JS / TypesScript / Node JS / Express JS / MySQL /
            Unit Testing
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] px-8 mx-auto grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="mb-2">Overview</h2>
          <p>
            A blogging platform built with React, TypeScript, Node.js and tested with Unit
            Testing using Jest and RTL. This application allows users to create an
            account, write blog posts, edit or delete their own posts, and view posts from
            other users. It features infinite scrolling, category filtering, and JWT
            authentication. Non users can use the platform, but they cannot create posts
            or edit/delete posts.
          </p>
          <a href="https://github.com/nicoc12024/blog" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="https://github.com/nicoc12024/blog" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 min-w-fit shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="py-2 px-4">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 text-sm sm:text-base">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material-UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JWT
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Unit Testing
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default HouseMarketplace;
