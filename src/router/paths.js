import NotFound from "../components/error/NotFound";
import HomeProject from "../views/HomeProject/Home";

export default [
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/",
    name: "HomeProject",
    component: HomeProject
  },
  {
    path: "/",
    name: "Root",
    redirect: {
      name: "HomeProject"
    }
  }
];
