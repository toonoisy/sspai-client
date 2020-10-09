import Pistore from '../pages/Pistore/index.vue'
import AllCategories from '../pages/Pistore/AllCategories/index.vue'
import Detail from '../pages/Pistore/detail/index.vue'
export default [
  {
    path: '/pistore',
    component: Pistore,
  },
  {
    path: '/allcategories',
    component: AllCategories,
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '/',
    redirect: '/pistore',
  },
]
