import ecommerce from "../public/assets/img/ecommerce.png";
import housemarketplace from "../public/assets/img/housemarketplace.png";
import landing from "../public/assets/img/landing.png";
import moviedatabase from "../public/assets/img/moviedatabase.png";
import travelmockup from "../public/assets/img/travelmockup.png";
import portfolio from "../public/assets/img/portfolio.png";
import comingsoon from "../public/assets/img/comingsoon.jpg";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio"
            backgroundImg={portfolio}
            projectUrl="/property"
            tech="Next JS | Tailwind"
          />
          <ProjectItem
            title="House Marketplace"
            backgroundImg={housemarketplace}
            projectUrl="/property"
            tech="React JS | Firebase | CSS"
          />
          <ProjectItem
            title="Movie Data Base"
            backgroundImg={moviedatabase}
            projectUrl="/crypto"
            tech="React JS | Firebase | CSS"
          />
          <ProjectItem
            title="E-commerce"
            backgroundImg={ecommerce}
            projectUrl="/netflix"
            tech="React JS | Firebase | CSS"
          />
          <ProjectItem
            title="Travel Website"
            backgroundImg={travelmockup}
            projectUrl="/twitch"
            tech="React JS | Firebase | CSS"
          />
          <ProjectItem
            title="Shoe Landing Page"
            backgroundImg={landing}
            projectUrl="/twitch"
            tech="JavaScript | CSS"
          />
          <ProjectItem
            title="E-commerce coming soon!"
            backgroundImg={comingsoon}
            projectUrl="/twitch"
            tech="React | Tailwind | NodeJs | Express | MongoDB"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
