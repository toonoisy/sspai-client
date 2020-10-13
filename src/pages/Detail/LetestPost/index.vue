<template>
  <ul class="latest-posts">
    <div class="block-title">最新</div>
    <li v-for="postItem in postItemList" :key="postItem.id">
      <a href="javascript:;" class="post-item">
        <div class="post-info">
          <div class="post-title">
            {{ postItem.title }}
          </div>
          <div class="post-content">
            <a href="javascript:;">
              <img
                class="post-author-img"
                :src="
                  postItem.author.avatar.startsWith('https://cdn.sspai')
                    ? postItem.author.avatar
                    : `https://cdn.sspai.com/${postItem.author.avatar}`
                "
                alt=""
              />
              <span class="post-author-name">{{
                postItem.author.nickname
              }}</span>
            </a>
            <div class="post-other">
              <span class="post-other-item">
                <i class="iconfont icon-shandian"></i>
                <span>{{ postItem.like_count }}</span>
              </span>
              <span class="post-other-item">
                <i class="iconfont icon-pinglun1"></i>
                <span>{{ postItem.comment_count }}</span>
              </span>
              <span class="post-other-item">
                <span>{{
                  postItem.created_time | timeformat('MM月DD日')
                }}</span>
              </span>
            </div>
          </div>
        </div>
        <img
          class="post-cover"
          :src="`https://cdn.sspai.com/${postItem.banner}`"
          alt=""
        />
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'LetestPost',
  data() {
    return {
      id: this.$route.params.id,
      postItemList: [],
      total: 0,
    }
  },
  mounted() {
    this.getPostItem()
  },
  methods: {
    //  获取最新数据
    async getPostItem() {
      const result = await this.$API.reqPostItem(this.id)
      this.total = result.total
      this.postItemList = result.data
    },
  },
}
</script>

<style lang="less" scoped>
.latest-posts {
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
    padding: 0;
    margin: 0 auto;
    line-height: normal;
    width: 828px;
    .post-item {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      justify-content: space-between;
      padding: 28px;
      color: #292525;
      background: #fff;
      text-decoration: none;
      margin-bottom: 10px;
      .post-info {
        width: 436px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
      .post-cover {
        width: 164px;
        height: 100px;
        border-radius: 8px;
        border: 1px solid #f7f7f8;
        flex-shrink: 0;
      }
    }
  }
}
</style>
