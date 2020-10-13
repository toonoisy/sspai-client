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

// 3-右侧一派 卡片
export const reqYipaiCardList = () => {
  return request({
    url: '/getYipaiCard',
    method: 'get',
  })
}

// 4-ArcitalList
export const addArticalCardList = ({ limit, offset, tag, time }) => {
  // let tag1 = encodeURI(tag)
  return request({
    url: `/addArticalCardList?limit=${limit}&offset=${offset}&time=${time}&tag=${tag}`,
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
