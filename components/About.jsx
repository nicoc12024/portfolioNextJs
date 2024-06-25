import Image from "next/image";
import Link from "next/link";
import avatar4 from "../public/assets/avatar4.jpeg";

function About() {
  return (
    <div id="about" className="w-full lg:h-screen py-20 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-6">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">Acerca de mi</p>
          <h2 className="py-4">Quién soy?</h2>
          <p className="py-2 text-gray-600">
            Soy un Desarrollador de Software de Argentina con más de 1 año de experiencia
            en el desarrollo de soluciones que mejoran la experiencia del usuario. Tengo
            experiencia en entornos dinámicos y de ritmo rápido, incluyendo una startup
            sueca y trabajos freelance. Con un gran ojo para los detalles y una fuerte
            mentalidad de resolución de problemas, estoy dedicado a entregar soluciones de
            alta calidad.
          </p>
          <p className="py-2 text-gray-600">
            He utilizado diferentes lenguajes y herramientas para construir aplicaciones
            web como Php, Laravel, JavaScript, TypeScript, Node JS, Express JS, React JS,
            Tailwind, Material-UI, pruebas unitarias, Firebase y Amazon S3. Lo que más
            disfruto es aprender y usar tecnologías para construir aplicaciones tanto de
            frontend como de backend.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Mirá de mis últimos proyectos.
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
