import veganpals from "./images/veganpals.png";
import techblog from "./images/techblog.png";
import workouttracker from "./images/workouttracker.png";

const projects = [
  {
    title: "Vegan Pals",
    description:
      "Vegan Pals is a full-stack web application that aims to help people find vegan recipes and connect with others to cook those recipes with.",
    image: veganpals,
    imageAlt: "Vegan pals",
    githubLink: "https://github.com/misha244/vegan-pals",
    deployedLink: "https://stormy-stream-13655.herokuapp.com/",
  },

  {
    title: "Workout Tracker",
    description:
      "Workout Tracker allows the user to view, create and track their daily workouts. They can add exercises to compile their workout via a variety of parameters.",
    image: workouttracker,
    imageAlt: "Workout Tracker",
    githubLink: "https://github.com/misha244/workout-tracker",
    deployedLink: "http://tranquil-savannah-09253.herokuapp.com/",
  },

  {
    title: "The Tech Blog",
    description:
      "The Tech Blog is a full-stack MVC application that allows users to create an account, login and logout, create, view and delete posts, and add comments to posts. ",
    image: techblog,
    imageAlt: "Tech Blog",
    githubLink: "https://github.com/misha244/mvc-tech-blog",
    deployedLink: "https://young-meadow-09572.herokuapp.com/",
  },
];

export default projects;
