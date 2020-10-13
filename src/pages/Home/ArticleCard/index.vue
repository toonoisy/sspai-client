<template>
  <div class="articleCard">
    <div class="cartImg">
      <a href="javascript:;" v-if="articalCardInfo.banner">
        <img :src="`https://cdn.sspai.com/${articalCardInfo.banner}`" alt="" />
      </a>
    </div>
    <div class="cart_content">
      <div class="card_title">
        <a href="javascript:;">
          {{ articalCardInfo.title }}
        </a>
      </div>
      <div class="card_hidden">
        {{ articalCardInfo.title }}
      </div>
      <div class="card_bottom">
        <div class="left">
          <div class="user" v-if="articalCardInfo.author">
            <a href="javascript:;">
              <img
                :src="`https://cdn.sspai.com/${articalCardInfo.author.avatar}`"
                alt=""
              />
            </a>
            <a href="javascript:;">{{ articalCardInfo.author.nickName }}</a>
          </div>
          <div class="time">
            <span>{{ timeDistance }}前</span>
          </div>
        </div>
        <div class="right">
          <div class="collection">
            <i class="el-icon-s-flag"></i>
            <span>{{ articalCardInfo.like_count }}</span>
          </div>
          <div class="comment">
            <i class="el-icon-chat-square"></i>
            <span>{{ articalCardInfo.comment_count }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDifValue } from '@/assets/formatDate'

export default {
  name: 'ArticleCard',
  props: ['articalCardInfo'],
  data() {
    return {
      // timeDistance: getDifValue(this)
    }
  },
  computed: {
    // 时间差
    timeDistance() {
      let { articalCardInfo } = this
      return getDifValue(
        articalCardInfo.modify_time,
        articalCardInfo.created_time
      )
    },
  },
}
</script>

<style lang="less" scoped>
.articleCard {
  max-width: 800px;
  background-color: white;
  user-select: none;
  margin-bottom: 15px;
  display: flex;
  background: #fff;
  width: 100%;
  height: 200px;
  .cartImg {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: relative;
    a {
      img {
        width: 100%;
        height: 100%;
        transition: all 0.2s;
      }
    }
  }
  .cart_content {
    width: 50%;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s;

    .card_title {
      color: #292525;
      font-weight: 600;
      font-size: 20px;
      height: 57px;
      margin-bottom: 20px;
      line-height: 1.4;
      text-align: left;
    }
    .card_hidden {
      display: none;
    }
    .card_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #655e5e;
      .left {
        display: flex;
        align-items: center;
        color: #8e8787;
        .user {
          display: flex;
          align-items: center;
          margin-right: 10px;
          img {
            cursor: pointer;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
        .time {
          color: #8e8787;
        }
      }
      .right {
        display: flex;
        color: #8e8787;
        .comment {
          margin-left: 20px;
        }
      }
    }
  }
  &:hover .cartImg > a > img {
    transform: scale(1.1);
  }
  &:hover .cart_content {
    margin-right: 30px;
  }
}
</style>
