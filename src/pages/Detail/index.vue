<template>
  <div>
    <div class="topic-detail-page">
      <div class="page-header" :style="{backgroundImage:`url('https://cdn.sspai.com/${detailBanner.banner}')`}">
        <div class="topic-title">{{detailBanner.title}}</div>
        <div class="topic-intro">
          {{detailBanner.intro}}
        </div>
        <div><el-button icon="el-icon-plus" round>收藏</el-button></div>
      </div>
      <div class="container">
        <!-- 左侧区域 -->
        <div class="container-left">
          <!-- 推荐区域 -->
          <Recommend></Recommend>
          <!-- 最新区域 -->
          <LetestPost></LetestPost>
          <div class="button-show-more">加载更多</div>
        </div>
        <!-- 右侧区域 -->
        <div class="container-right">
          <div class="topics-content">
            <div class="block-title">推荐专题</div>
                <div class="topics-card" v-for="(topics) in topicsList" :key="topics.id">
                    <a href="javascript:;">
                    <img :src="`https://cdn.sspai.com/${topics.banner}`" alt="" />
                    <div class="topics-info">
                    <span class="topics-title">{{topics.title}}</span>
                    <span class="topics-count">共 {{topics.article_count}} 篇文章</span>
                    </div>
                    </a>
                </div>
                <a href="/topics" class="search">
                  <router-link to="/topics" class="search-all">查看全部</router-link>
                  <!-- <span class="search-all">查看全部</span> -->
                  <i class="iconfont icon-youjiankuohao"></i>
                </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Recommend from "@/pages/Detail/Recommend";
import LetestPost from "@/pages/Detail/LetestPost";
import {mapState} from 'vuex'
export default {
  name: "Detail",
  data() {
    return {
      id:this.$route.params.id,
      detailBanner:{},
      topicsList:[]
    }
  },
  mounted(){
    this.getDetailBanner()
    this.getTopicsList()
  },
  methods:{
    //  获取数据
   async getDetailBanner(){
    const result =  await this.$API.reqTopicDetailBanner(this.id)
    this.detailBanner = result.data
    },
    getTopicsList(){
       const result = JSON.parse(localStorage.getItem('USERINFO_KEY')) || {}
       this.topicsList = result.data
    },
  },
  components: {
    Recommend,
    LetestPost,
  },
};
</script>

<style lang="less" scoped>
.topic-detail-page {
  height: 100%;
  background:#f4f4f4;
  .page-header {
    min-height: 330px;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(https://cdn.sspai.com/topic/5e7dbaf5-2b4f-d99b-acdc-bc0deb19215f.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1440x330r/gravity/Center/crop/1440x330/interlace/1);
    color: #fff;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    padding: 48px;
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .topic-title {
      font-weight: 500;
      font-size: 28px;
      line-height: 39px;
    }
    .topic-intro {
      max-width: 538px;
      text-align: center;
      font-size: 14px;
      margin: 25px 0;
    }
  }
  .container {
    display: flex;
    max-width: 1140px;
    padding: 0 12px;
    margin: auto;
    .container-left {
      width: 828px;
      margin-right: 36px;
      overflow: hidden;
      min-height: 600px;
      .recommend-app {
        .block-title {
          font-weight: 500;
          font-size: 18px;
          line-height: 25px;
          color: #292525;
          margin: 16px 0;
        }
      }
      .button-show-more {
        cursor: pointer;
        color: #655e5e;
        font-size: 14px;
        font-weight: 500;
        display: block;
        width: 136px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 40px;
        background: #f7f7f8;
        margin: 36px auto;
        transition: color 0.2s;
      }
    }
    .container-right{
      .topics-content{
        margin-top: 32px;
        padding: 0;
        margin: 0 auto;
        line-height: normal;
        width: 276px;
      .block-title{
          font-weight: 500;
          font-size: 18px;
          line-height: 25px;
          color: #292525;
          margin: 35px 0 16px 0;
      }
      .topics-card {
        margin-bottom: 10px;
        a {
          display: block;
          height: 100%;
          cursor: pointer;
          font-size: 14px;
          line-height: 20px;
          background: #fff;
          text-decoration: none;
        img {
          display: block;
          width: 100%;
          height: 148px;
        }
      .topics-info {
        padding: 20px 24px;
        display: flex;
        flex-direction: column;
        .topics-title {
          color: #292525;
          font-weight: 500;
          text-decoration: none;
          margin-bottom: 4px;
        }
        .topics-count {
          color: #8e8787;
        }
      }
    }
  }
  .topics-card:hover .topics-info {
      background: #f7f7f8;
     }
   }
  .search{
      width: 100%;
      padding: 12px;
      margin-top: -12px;
      text-align: center;
      cursor: pointer;
      display: block;
      text-decoration: none;
      color: #292525;
      font-size: 14px;
     .search-all{
          .icon-youjiankuohao{
            font-size: 10px;
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>
