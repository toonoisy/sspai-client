import request from '@/utils/request'
//请求内容区数据
export const reqSeetingInfo = (id) => {
  return request({
    url: `/seetingInfo?${id}`,
    method: 'get',
  })
}
//请求分类列表
export const reqSwitchInfo = () => {
  return request({
    url: '/bannerInfo',
    method: 'get',
  })
}

//获取全部分类内容区数据
export const reqContentInfo = (offset, class_id) => {
  return request({
    url: `/switchInfo?offset=${offset}&class_id=${class_id}`,
    method: 'get',
  })
}

//获取更多内容数据
export const reqSelectedInfo = () => {
  return request({
    url: '/self',
    method: 'get',
  })
}

//详情页数据
export const reqDetailInfo = (id) => {
  return request({
    url: `/detailInfo?id=${id}`,
    method: 'get',
  })
}
