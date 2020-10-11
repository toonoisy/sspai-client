import Series from "@/pages/Series/Series";
import My from "@/pages/Series/My/My";
import Tron from "@/pages/Tron/Tron";

export default [
  {
    path: "/",
  },
  {
    path: "/series",
    component: Series,
    name: 'Series',
    children: [
      {
        path: "my",
        component: My,
        name: 'My',
      },
    ],
  },
  {
    path: '/page/tron',
    component: Tron,
    name: 'Tron',
  }
];
