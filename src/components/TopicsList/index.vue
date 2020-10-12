<template>
  <div class="topics-recommend">
    <div class="topics-card" v-for="(topics) in topicsList" :key="topics.id" @click="toDetail(topics.id)">
      <a href="javascript:;">
        <img :src="`https://cdn.sspai.com/${topics.banner}`" alt="" />
        <div class="topics-info">
          <span class="topics-title">{{topics.title}}</span>
          <span class="topics-count">共 {{topics.article_count}} 篇文章</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "TopicsList",
    mounted(){
    this.$store.dispatch('getTopicsList')
  },
  methods:{
    toDetail(topicId){
        this.$router.push(`/detail/${topicId}`)
    }
  },
  computed:{
    ...mapState({
       topicsList:state => state.topics.topicsList.data
    })
  }

};
</script>

<style lang="less" scoped>
.topics-recommend {
  width: 100%;
  margin-bottom: 36px;
  display: flex;
  justify-content: space-between;
  .topics-card {
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
        width: 366px;
        height: 200px;
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
</style>
