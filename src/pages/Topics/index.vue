<template>
  <div class="topics-container">
    <!-- 头部区域 -->
    <div class="topics-header">全部专题</div>
    <div class="topics-content">
    <!-- 专题区域 -->
    <TopicsList/>
    <!-- tab切换 -->
      <div class="topics-tab">
        <div class="tab-item" :class="{active:currentIndex===index}" v-for="(nav,index) in navList" :key="nav.id" @click="changeItem($event,index)" :data-tag='nav.title'>{{nav.title}}</div>
      </div>
      <!-- list区域 -->
      <div class="topics-list">
        <div class="topics-card"  v-for="(topic) in topics" :key="topic.id" @click="toDetail(topic.id)">
          <a href="javascript:;">
            <img :src="`https://cdn.sspai.com/${topic.banner}`" alt="" />
            <div class="topics-info">
              <span class="topics-title">{{topic.title}}</span>
              <span class="topics-count">共 {{topic.article_count}} 篇文章</span>
            </div>
          </a>
        </div>
      </div>
        <div class="uppdate-more" v-if="isShow"><button class="button-show-more" @click="updataMore" >加载更多</button></div>
        <div class="uppdate-more" v-else><button class="button-show-more" >数据已加载完毕</button></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Topics",
  data(){
    return{
      navList:[
      {id:1,title:'全部'},
      {id:2,title:'硬件'},
      {id:3,title:'效率'},
      {id:4,title:'游戏'},
    ],
    currentIndex:0,
    topics:[],
    tag:'全部',
    total:0,
    isShow:true
    }
  },
  mounted(){
    this.getTopics()
  },
  methods:{
    //  请求数据页面list区域数据
   async getTopics(){
     const result = await this.$API.reqTopics()
     this.total = result.total
     this.topics = result.data
    },
  //  点击nav切换样式
    async changeItem($event,index){
        this.currentIndex = index
        let {tag} = $event.target.dataset
        this.tag = tag
         await this.getTopicsAll()
        if (this.topics.length < this.total) {
          this.isShow = true
          return
        }
        this.isShow = false
    },
  // 获取所有话题
   async getTopicsAll(){
      const result = await this.$API.reqTopicsAll(this.tag)
      this.total = result.total
      this.topics = result.data
    },
  //  加载更多
   async updataMore(){
      const result = await this.$API.reqTopicsMore()
      this.topics = this.topics.concat(result.data)
    },

  // 点击切换到详情页 
  toDetail(topicId){
    this.$router.push(`/detail/${topicId}`)
    }
  },
};
</script>

<style lang='less' scoped>
.topics-container {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  .topics-header {
    font-weight: 500;
    font-size: 28px;
    line-height: 39px;
    padding: 40px;
    margin-bottom: 45px;
    text-align: center;
    background: #fff;
  }
  .topics-content {
    width: 1120px;
    padding: 0 12px;
    margin: auto;
    // recommend区域
    .topics-tab {
      display: flex;
      margin: 24px 0;
      .tab-item {
        font-size: 16px;
        line-height: 22px;
        font-weight: 500;
        color: #8e8787;
        padding: 4px 0;
        cursor: pointer;
        margin-right: 30px;
      }
      & .active {
        border-bottom: 2px solid #fd281a;
        color: #fd281a;
      }
    }
    .topics-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .topics-card {
        width: 270px;
        margin: 0 10px 10px 0;
        a {
          display: block;
          cursor: pointer;
          font-size: 14px;
          line-height: 22px;
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
            &:hover{
              background: #f7f7f8;
            }
            .topics-title {
              color: #292525;
              font-weight: 500;
              margin-bottom: 4px;
              width: 236px;
            }
            .topics-count {
              color: #8e8787;
            }
          }
        }
      }
    }
    .uppdate-more{
       height: 78px;
       .button-show-more {
          cursor: pointer;
          color: #655e5e;
          font-size: 14px;
          display: block;
          width: 136px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-radius: 40px;
          background: #f7f7f8;
          margin: 36px auto;
          border: none;
          outline: none;
      }
    }
  }
}
</style>