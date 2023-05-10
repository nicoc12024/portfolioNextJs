import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto px-4 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Nicolas</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I'm dedicated to building innovative solutions with a modern technology stack.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/nicocabello/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="mailto:nicoc12024@gmail.com" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineMail />
              </div>
            </a>
            <a href="https://github.com/nicoc12024" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
