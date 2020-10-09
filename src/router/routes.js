import Matrix from "@/pages/Matrix";

export default [
  {
    path: "/matrix",
    component: Matrix
  },
  {
    path: "/",
    redirect: '/matrix'
  }
];
