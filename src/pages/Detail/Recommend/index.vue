<template>
   <ul class="recommend-posts">
    <div class="block-title" v-if="this.recommendList.length !== 0">推荐</div>
    <li v-for="recommend in recommendList" :key="recommend.id">
      <a href="javascript:;" class="post-item">
        <img class="itemImg" :src="`https://cdn.sspai.com/${recommend.banner}`" alt="" />
        <div class="post-info">
          <div class="post-title">
             {{recommend.title}}
          </div>
          <div class="post-content">
            <a href="javascript:;">
              <img
                class="post-author-img"
               :src="`https://cdn.sspai.com/${recommend.author.avatar}`"
                alt=""
              />
              <span class="post-author-name">{{recommend.author.nickname}}</span>
            </a>
            <div class="post-other">
              <span class="post-other-item">
                <i class="iconfont icon-shandian"></i>
                <span>{{recommend.like_count}}</span>
              </span>
              <span class="post-other-item">
                <i class="iconfont icon-pinglun1"></i>
                <span>{{recommend.comment_count}}</span>
              </span>
              <span class="post-other-item">
                <span>02月27日</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    </li>
   </ul>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      id:this.$route.params.id,
      recommendList:[],
      isShow:true
    }
  },
  mounted(){
    this.getRecommend()
  },
  methods: {
   async getRecommend(){
      const result = await  this.$API.reqRecommend(this.id)
      this.recommendList = result.data
    }
  },
};
</script>

<style lang="less" scoped>
.recommend-posts {
  margin-top: 32px;
  .block-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #292525;
    margin: 16px 0;
  }

  li {
    margin-bottom: 12px;
    .post-item {
      display: inline-block;
      width: 828px;
      height: 234px;
      display: flex;
      text-decoration: none;
      color: #292525;
      .itemImg {
        height: 100%;
        width: 468px;
      }
      .post-info {
        width: 436px;
        padding: 32px;
        height: 234px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #fff;
        .post-title {
          font-size: 18px;
          font-weight: 600;
          line-height: 25px;
          margin-bottom: 24px;
        }
        .post-content {
          display: flex;
          text-align: center;
          a {
            text-decoration: none;
            color: #292525;
            display: block;
            margin-right: 24px;
            .post-author-img {
              vertical-align: middle;
              width: 20px;
              height: 20px;
              border-radius: 100%;
              margin-right: 8px;
            }
            .post-author-name {
              font-size: 14px;
              vertical-align: middle;
            }
          }
          .post-other {
            font-size: 12px;
            color: #8e8787;
            .post-other-item {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
