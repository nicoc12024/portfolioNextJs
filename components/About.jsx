import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div className="w-full lg:h-screen py-20 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-6">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications. I’m
            passionate about learning new technologies and understand there is more than
            one way to accomplish a task. Though I am most proficient in building
            front-end applications using HTML, CSS, Javascript, and React, I am a quick
            learner and can pick up new tech stacks as needed. I believe that being a
            great developer is not using one specific language, but choosing the best tool
            for the job.
          </p>
          <p className="py-2 text-gray-600">
            I started web development in 2021 building multiple websites. I have
            experience working with a interdisciplinary team, delegating and mentoring
            less experienced devs and taking mock wireframes all the way to deployed
            applications.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="max-w-xs mx-auto mt-4 h-fit self-center shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl " alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
