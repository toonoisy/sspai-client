// const Home = () => import('@/pages/Home')
const Test = () => import('@/pages/Test')
import Pistore from '../pages/Pistore/index.vue'
import AllCategories from '../pages/Pistore/AllCategories/index.vue'
import Detail from '../pages/Pistore/detail/index.vue'
import Home from '@/pages/Home'

export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/test',
    component: Test,
  },
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
    redirect: '/home',
  },
]
