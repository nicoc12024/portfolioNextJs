import Image from "next/image";
import home from "../public/assets/img/home.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function HouseMarketplace() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="contain"
          src={home}
          alt="/"
        />
        <div className="absolute px-8 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">E-commerce with Redux</h2>
          <h3>
            React JS (vite) / React Redux / TypeScript / Tailwind / Node JS / Express JS /
            MySQL
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] px-8 mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="mb-2">Overview</h2>
          <p>
            Zone Clocker full-stack application designed to streamline employee schedule
            management and work zone assignments for companies. It provides a centralized
            platform for admins to manage employee schedules and work zones, with a focus
            on time tracking and location-based check-ins and check-outs.
          </p>
          <a
            href="https://github.com/nicoc12024/zone_clocker"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://github.com/nicoc12024/zone_clocker"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 min-w-fit shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="py-2 px-4">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React JS (vite)
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
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
