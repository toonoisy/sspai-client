import request from '@/utils/request' 
//  头部三个card数据
export const reqTopicsList = () => {
  return request({
    url:'/getTopicsList',
    method:'get'
  })
}

//  获取底部数据
export const reqTopics = () => {
  return request({
    url:'/getTopics',
    method:'get'
  })
}


//  获取点击导航时的话题
export const reqTopicsAll = (tag) => {
  return request({
    url:`/getTopicsAll?tag=${tag}`,
    method:'get'
  })
}

//  加载更多的
export const reqTopicsMore = () => {
  return request({
    url:'/getTopicsMore',
    method:'get'
  })
}
//  详情页的banner
export const reqTopicDetailBanner = (id) => {
  return request({
    url:`/getTopicDetailBanner?topicId=${id}`,
    method:'get'
  })
}

//  获取最新数据
export const reqPostItem = (id) => {
  return request({
    url:`/getPostItem?topicId=${id}`,
    method:'get'
  })
}
//  获取推荐数据
export const reqRecommend = (id) => {
  return request({
    url:`/getRecommend?topicId=${id}`,
    method:'get'
  })
}
