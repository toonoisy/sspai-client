<template>
  <div class="articleCard">
    <div class="cartImg">
      <a href="javascript:;">
        <img
          src="https://cdn.sspai.com/article/57bd980b-0c34-750b-81ea-5ed9cce20152.png?imageMogr2/auto-orient/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400/interlace/1"
          alt=""
        />
      </a>
    </div>
    <div class="cart_content">
      <div class="card_title">
        <a href="javascript:;">
          开源、可定制的网页批注工具——Hypothesis
        </a>
      </div>
      <div class="card_hidden">
        开源、可定制的网页批注工具——Hypothesis
      </div>
      <div class="card_bottom">
        <div class="left">
          <div class="user">
            <a href="javascript:;">
              <img
                src="https://cdn.sspai.com/user/714505_1489245009399.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1"
                alt=""
              />
            </a>
            <a href="javascript:;">PlatyHsu</a>
          </div>
          <div class="time">
            <span>59分钟前</span>
          </div>
        </div>
        <div class="right">
          <div class="collection">
            <i class="el-icon-s-flag"></i>
            <span>11</span>
          </div>
          <div class="comment">
            <i class="el-icon-chat-square"></i>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
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
