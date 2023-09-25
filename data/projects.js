import blog from "../public/assets/img/blog.png";
import moviedatabase from "../public/assets/img/moviedatabase.png";
import ecommerceRedux from "../public/assets/img/ecommerce-redux.png";
import socialapp from "../public/assets/img/socialapp.png";

export const projects = [
  {
    id: 0,
    title: "Social App - FullStack",
    backgroundImg: socialapp,
    projectUrl: "/social-app",
    tech: "React JS | Tailwind | Material-UI | Node JS | Express JS | MySQL | Unit Testing",
  },
  {
    id: 2,
    title: "Blog - FullStack",
    backgroundImg: blog,
    projectUrl: "/blog",
    tech: "SCSS | Material-UI | React JS | TypeScript | Node JS | Express JS | MySQL | Unit Testing",
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
