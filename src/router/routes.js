// const Home = () => import('@/pages/Home')
const Test = () => import('@/pages/Test')

import Home from '@/pages/Home'

export default [
  {
<<<<<<< HEAD
    path: '',
  },
]
=======
    path: '/home',
    component: Home,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '/',
    redirect: '/home',
  },
]
>>>>>>> hudonglong
