// import Topics from '@/pages/Topics'
// import Detail from '@/pages/Detail'
// const Home = () => import('@/pages/Home')
const Test = () => import('@/pages/Test')
import Pistore from '../pages/Pistore/index.vue'
import AllCategories from '../pages/Pistore/AllCategories/index.vue'
import shiDetail from '../pages/Pistore/detail/index.vue'
import Home from '@/pages/Home'
const Topics = () => import('@/pages/Topics')
const Detail = () => import('@/pages/Detail')
import Matrix from '@/pages/Matrix'
import Series from '@/pages/Series/Series'
import My from '@/pages/Series/My/My'
import Tron from '@/pages/Tron/Tron'

export default [
  {
    path: '/detail/:id?',
    component: Detail,
  },
  {
    path: '/topics',
    component: Topics,
  },
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
    path: '/shidetail',
    component: shiDetail,
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/matrix',
    component: Matrix,
  },
  {
    path: '/series',
    component: Series,
    name: 'Series',
    children: [
      {
        path: 'my',
        component: My,
        name: 'My',
      },
    ],
  },
  {
    path: '/page/tron',
    component: Tron,
    name: 'Tron',
  },
]
