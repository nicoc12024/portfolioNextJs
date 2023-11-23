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
            I am a Frontend Developer from Argentina based in Portugal. I have almost 2
            years of experience developing solutions that enhance user experiences. With a
            keen eye for detail and a strong problem-solving mindset, I am dedicated to
            delivering high-quality solutions.
          </p>
          <p className="py-2 text-gray-600">
            I have used different languages and tools to build web applications such
            JavaScript, TypeScript, React JS, Tailwind, Material-UI, NodeJS, Express JS,
            MySQL, Unit Testing, Firebase and Amazon S3. What I enjoy most is to learn and
            use new technologies to build either frontend or backend applications.
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
