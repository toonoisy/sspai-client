import Topics from '@/pages/Topics'
import Detail from '@/pages/Detail'


export default [
  {
    path: '/detail/:id?',
    component:Detail
  },
  {
    path: '/topics',
    component:Topics
  },
]