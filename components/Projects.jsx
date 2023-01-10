import ecommerce from "../public/assets/img/ecommerce.png";
import housemarketplace from "../public/assets/img/housemarketplace.png";
import moviedatabase from "../public/assets/img/moviedatabase.png";
import travelmockup from "../public/assets/img/travelmockup.png";
import portfolio from "../public/assets/img/portfolio.png";
import ecommerceRedux from "../public/assets/img/ecommerce-redux.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio!"
            backgroundImg={portfolio}
            projectUrl="/portfolio"
            tech="Next JS | React JS | Tailwind"
          />
          <ProjectItem
            title="House Marketplace Context API!"
            backgroundImg={housemarketplace}
            projectUrl="/house-marketplace"
            tech="React JS | JavaScript | Firebase | CSS"
          />
          <ProjectItem
            title="Movie Data Base Context API!"
            backgroundImg={moviedatabase}
            projectUrl="/movie-data-base"
            tech="React JS | JavaScript | CSS | API"
          />
          <ProjectItem
            title="E-commerce with Context API!"
            backgroundImg={ecommerce}
            projectUrl="/e-commerce"
            tech="React JS | JavaScript | Firebase | CSS"
          />
          <ProjectItem
            title="Travel Website"
            backgroundImg={travelmockup}
            projectUrl="/travel-website-mockup!"
            tech="React JS | JavaScript | CSS"
          />
          <ProjectItem
            title="E-commerce with Redux!"
            backgroundImg={ecommerceRedux}
            projectUrl="/e-commerce-redux"
            tech="React JS | React Redux | JavaScript | Tailwind"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
