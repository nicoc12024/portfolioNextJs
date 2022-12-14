import { IoLogoSass } from "react-icons/io";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiRedux,
  SiSequelize,
} from "react-icons/si";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { GrNode, GrMysql } from "react-icons/gr";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen px-6 py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <AiFillHtml5 size="64px" />
              </div>
              <div>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <DiCss3 size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <IoLogoSass size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Sass</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <SiTailwindcss size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <BsFillBootstrapFill size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <SiJavascript size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <FaReact size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <SiRedux size="64px" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h3>React Redux</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <SiNextdotjs size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <SiFirebase size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <AiFillGithub size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <FaGitAlt size="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <SiTypescript size="64px" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h3>TypeScript (soon)</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <GrNode size="64px" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h3>Node JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <SiExpress size="64px" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h3>Express JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <GrMysql size="64px" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="m-auto">
                <SiSequelize size="64px" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h3>SiSequelize</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
