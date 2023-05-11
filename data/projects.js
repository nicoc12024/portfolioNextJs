import ecommerce from "../public/assets/img/ecommerce.png";
import housemarketplace from "../public/assets/img/housemarketplace.png";
import moviedatabase from "../public/assets/img/moviedatabase.png";
import travelmockup from "../public/assets/img/travelmockup.png";
import ecommerceRedux from "../public/assets/img/ecommerce-redux.png";
import socialhub from "../public/assets/img/socialhub.png";
import portfolio from "../public/assets/img/portfolio.png";

export const projects = [
  {
    id: 0,
    title: "Social Hub - FullStack",
    backgroundImg: socialhub,
    projectUrl: "/social-hub",
    tech: "React Js | Tailwind | Firebase | Django | SQLite",
  },
  {
    id: 1,
    title: "Portfolio",
    backgroundImg: portfolio,
    projectUrl: "/portfolio",
    tech: "Next JS | React JS | Tailwind",
  },
  {
    id: 2,
    title: "House Marketplace Context API",
    backgroundImg: housemarketplace,
    projectUrl: "/house-marketplace",
    tech: "React JS | Firebase | CSS",
  },
  {
    id: 3,
    title: "Ecommerce Redux",
    backgroundImg: ecommerceRedux,
    projectUrl: "/e-commerce-redux",
    tech: "React JS | React Redux | Tailwind",
  },
  {
    id: 4,
    title: "Movie Data Base Context API",
    backgroundImg: moviedatabase,
    projectUrl: "/movie-data-base",
    tech: "React JS | CSS | API",
  },
  {
    id: 5,
    title: "Travel Mockup",
    backgroundImg: travelmockup,
    projectUrl: "/travel-website-mockup",
    tech: "React JS | CSS",
  },
];
