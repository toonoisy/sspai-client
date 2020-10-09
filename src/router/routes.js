import Series from "@/pages/Series/Series";
import My from "@/pages/Series/My/My.vue";
export default [
  {
    path: "/",
  },
  {
    path: "/series",
    component: Series,
    children: [
      {
        path: "my",
        component: My,
      },
    ],
  },
];
