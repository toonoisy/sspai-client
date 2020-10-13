import request from '@/utils/request'

// 1-关键字
export const reqKeywordList = () => {
  return request({
    url: '/getkeywords',
    method: 'get',
  })
}

// 2-卡片图片数据
export const reqCardImgList = () => {
  return request({
    url: '/cardList',
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

// 3-右侧一派 卡片
export const reqYipaiCardList = () => {
  return request({
    url: '/getYipaiCard',
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

// 4-ArcitalList
export const addArticalCardList = ({ limit, offset, tag, time }) => {
  // let tag1 = encodeURI(tag)
  return request({
    url: `/addArticalCardList?limit=${limit}&offset=${offset}&time=${time}&tag=${tag}`,
  })
}
//获取更多内容数据
export const reqSelectedInfo = () => {
  return request({
    url: '/self',
    method: 'get',
  })
}

// 5-首页轮播图数据
export const reqMainBannerList = () => {
  return request({
    url: '/getMainBannerList',
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
