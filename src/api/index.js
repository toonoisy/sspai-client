import request from '@/utils/request'
//  头部三个card数据
export const reqTopicsList = () => {
  return request({
    url: '/getTopicsList',
    method: 'get',
  })
}

//  获取底部数据
export const reqTopics = () => {
  return request({
    url: '/getTopics',
    method: 'get',
  })
}

//  获取点击导航时的话题
export const reqTopicsAll = (tag) => {
  return request({
    url: `/getTopicsAll?tag=${tag}`,
    method: 'get',
  })
}

//  加载更多的
export const reqTopicsMore = () => {
  return request({
    url: '/getTopicsMore',
    method: 'get',
  })
}
//  详情页的banner
export const reqTopicDetailBanner = (id) => {
  return request({
    url: `/getTopicDetailBanner?topicId=${id}`,
    method: 'get',
  })
}

//  获取最新数据
export const reqPostItem = (id) => {
  return request({
    url: `/getPostItem?topicId=${id}`,
    method: 'get',
  })
}
//  获取推荐数据
export const reqRecommend = (id) => {
  return request({
    url: `/getRecommend?topicId=${id}`,
    method: 'get',
  })
}

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

// 社区列表
// http://localhost:3001/api/matrixList
export const reqMatricList = (limit, offset) => {
  return request({
    url: '/matrixList',
    method: 'get',
  })
}

// 社区一派
// http://localhost:3001/api/matrixYipai
export const reqMatricYipai = () => {
  return request({
    url: '/matrixYipai',
    method: 'get',
  })
}

// 社区推荐
// http://localhost:3001/api/matrixCommend
export const reqMatricCommend = () => {
  return request({
    url: '/matrixCommend',
    method: 'get',
  })
}

// 社区专栏
// http://localhost:3001/api/matrixSpecial
export const reqMatricSpecial = () => {
  return request({
    url: '/matrixSpecial',
    method: 'get',
  })
}
export const reqSeriesBannerList = () => {
  return request.get('/seriesBanner')
}

export const reqSeriesRecommendList = () => {
  return request.get('/seriesRecommend')
}

export const reqSeriesLatestList = () => {
  return request.get('/seriesLatest')
}

export const reqSeriesTrialList = () => {
  return request.get('/seriesTrial')
}

export const reqSeriesCategoriesList = () => {
  return request.get('/seriesCategories')
}
