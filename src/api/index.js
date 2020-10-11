import request from "@/utils/request";

export const reqSeriesBannerList = () => {
  return request.get("/seriesBanner");
};

export const reqSeriesRecommendList = () => {
  return request.get("/seriesRecommend");
};

export const reqSeriesLatestList = () => {
  return request.get("/seriesLatest");
};

export const reqSeriesTrialList = () => {
  return request.get("/seriesTrial");
};

export const reqSeriesCategoriesList = () => {
  return request.get("/seriesCategories");
};


