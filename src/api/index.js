import Ajax from '@/ajax/Ajax';

// 社区列表
// http://localhost:3001/api/matrixList
export const reqMatricList = (limit, offset) => {
  return Ajax({
    url:'/matrixList',
    method:'get'
  })
}

// 社区一派
// http://localhost:3001/api/matrixYipai
export const reqMatricYipai = () => {
  return Ajax({
    url:'/matrixYipai',
    method:'get'
  })
}

// 社区推荐
// http://localhost:3001/api/matrixCommend
export const reqMatricCommend = () => {
  return Ajax({
    url:'/matrixCommend',
    method:'get'
  })
}

// 社区专栏
// http://localhost:3001/api/matrixSpecial
export const reqMatricSpecial = () => {
  return Ajax({
    url:'/matrixSpecial',
    method:'get'
  })
}