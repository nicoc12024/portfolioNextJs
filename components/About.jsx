import Image from "next/image";
import Link from "next/link";
import avatar4 from "../public/assets/avatar4.jpeg";

function About() {
  return (
    <div id="about" className="w-full lg:h-screen py-20 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-6">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile-responsive front-end UI applications and have
            a passion for learning new technologies. With a strong foundation in HTML,
            CSS, JavaScript, and React JS, I understand that there is more than one way to
            accomplish a task and am always open to discovering the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            My web development journey began in 2021, and since then, I have built
            multiple websites and recently completed a 3-month internship at a start-up.
            During my internship, I gained valuable experience working within an
            interdisciplinary team, and enhanced my skills in HTML, CSS, Tailwind, React,
            Python, Django, and Git.
          </p>
          <p className="py-2 text-gray-600">
            I am a quick learner, highly adaptable, and proficient in building front-end
            applications. I am fluent in both Spanish and English and am currently
            learning Swedish to further enhance my communication skills.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="max-w-xs mx-auto mt-4 h-fit self-center shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-150">
          <Image src={avatar4} className="rounded-xl " alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
