import ecommerce from "../public/assets/img/ecommerce.png";
import housemarketplace from "../public/assets/img/housemarketplace.png";
import moviedatabase from "../public/assets/img/moviedatabase.png";
import travelmockup from "../public/assets/img/travelmockup.png";
import ecommerceRedux from "../public/assets/img/ecommerce-redux.png";
import socialapp from "../public/assets/img/socialapp.png";
import portfolio from "../public/assets/img/portfolio.png";

export const projects = [
  {
    id: 0,
    title: "Social App - FullStack",
    backgroundImg: socialapp,
    projectUrl: "/social-app",
    tech: "React Js | Tailwind | Material-UI | Node JS | Express JS | MySQL",
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
];
