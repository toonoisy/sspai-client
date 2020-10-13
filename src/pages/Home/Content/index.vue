<template>
  <div class="contentContainer">
    <!-- 左边 -->
    <div class="contentLeft">
      <!-- 标题 -->
      <ul class="navList" @click="changeIndex">
        <li
          class="navItem"
          :class="{ active: currentIndex === 0 }"
          data-tag="推荐"
          data-index="0"
        >
          推荐
        </li>
        <li
          class="navItem"
          data-tag="热门文章"
          data-index="1"
          :class="{ active: currentIndex === 1 }"
          data-time="1602431451"
        >
          最热
        </li>
        <li
          class="navItem"
          data-tag="应用推荐"
          data-index="2"
          :class="{ active: currentIndex === 2 }"
          data-time="1602431331"
        >
          应用设置
        </li>
        <li
          class="navItem"
          data-tag="生活方式"
          data-index="3"
          :class="{ active: currentIndex === 3 }"
          data-time="1602431378"
        >
          生活方式
        </li>
        <li
          class="navItem"
          data-tag="效率技巧"
          data-index="4"
          :class="{ active: currentIndex === 4 }"
          data-time="1602431401"
        >
          效率技巧
        </li>
        <li
          class="navItem"
          data-tag="少数派播客"
          data-index="5"
          :class="{ active: currentIndex === 5 }"
          data-time="1602431432"
        >
          博客
        </li>
        <li
          class="navItem"
          data-tag="生活方式"
          data-index="6"
          :class="{ active: currentIndex === 6 }"
        >
          视频
        </li>
      </ul>
      <!-- 内容 -->
      <div class="contentMain">
        <div class="news" v-show="morning_paper.banner">
          <div class="newsTitle">
            <a href="javascript:;">派早报</a>
            <div class="newsTime">
              <div class="time">{{ nowDate }}</div>
              <div class="week">{{ nowWeek }}</div>
            </div>
            <div class="newsLink">
              <a href="javascript:;">阅读全篇早报 -></a>
            </div>
          </div>
          <div class="newsContent">
            <div class="newsImg">
              <a href="javascript:;">
                <img
                  :src="`https://cdn.sspai.com/${morning_paper.banner}`"
                  alt=""
                  width="227"
                  height="230"
                />
              </a>
            </div>
            <ul class="newsList">
              <li
                class="newsItem"
                v-for="(item, index) in morning_paper.morning_paper_title"
                :key="index"
              >
                <div class="newsIndex">0{{ index + 1 }}</div>
                <a href="javascript:;">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="10"
        >
          <ArticleCard
            v-for="(articalCardInfo, index) in articalCardList"
            :key="index"
            :articalCardInfo="articalCardInfo"
          />
        </div>
      </div>
      <div class="bottomLoading" v-show="busy">
        正在加载中...
      </div>
    </div>
    <!-- 右边 -->
    <div class="contentRight">
      <a href="javascript:;" class="advert">
        <img
          src="https://cdn.sspai.com/article/14a64b88-d7d1-5dd2-63fc-25b67f5f2795.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!274x132r/gravity/Center/crop/274x132/interlace/1"
        />
      </a>
      <div class="sspai_card">
        <div class="sspai_title">
          <i class="card_logo"></i>
          <span>一派</span>
        </div>
        <ul class="sspai_list">
          <li
            class="sspai_item"
            v-for="item in yipaiCardList"
            :key="item.banner_id"
          >
            <div class="item_left">
              <span class="item_title">{{ item.title }}</span>
              <div class="item_talk">
                <i class="el-icon-magic-stick"></i>
                <span class="talk_rank"
                  >讨论 VOL.<b>{{ item.vol }}</b></span
                >
              </div>
            </div>
            <div class="item_right">
              <img :src="`https://cdn.sspai.com/${item.banner}`" />
            </div>
          </li>
        </ul>
        <a href="javascript:;" class="look_more">
          查看更多
          <i class="el-icon-arrow-right"></i>
        </a>
      </div>
      <!-- <div class="sspai_card">
        <div class="sspai_title">
          <i class="card_logo"></i>
          <span>一派</span>
        </div>
        <ul class="sspai_list">
          <li class="sspai_item">
            <div class="item_left">
              <span class="item_title">十一假期你准备干什么?</span>
              <div class="item_talk">
                <i class="el-icon-magic-stick"></i>
                <span class="talk_rank">讨论 VOL.013</span>
              </div>
            </div>
            <div class="item_right">
              <img
                src="https://cdn.sspai.com/article/cbf4d52c-d6e8-935c-502f-6d261ea9ed28.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!126x88r/gravity/Center/crop/126x88/interlace/1"
              />
            </div>
          </li>
          <li class="sspai_item">
            <div class="item_left">
              <span class="item_title">十一假期你准备干什么?</span>
              <div class="item_talk">
                <i class="el-icon-magic-stick"></i>
                <span class="talk_rank">讨论 VOL.013</span>
              </div>
            </div>
            <div class="item_right">
              <img
                src="https://cdn.sspai.com/article/cbf4d52c-d6e8-935c-502f-6d261ea9ed28.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!126x88r/gravity/Center/crop/126x88/interlace/1"
              />
            </div>
          </li>
          <li class="sspai_item">
            <div class="item_left">
              <span class="item_title">十一假期你准备干什么?</span>
              <div class="item_talk">
                <i class="el-icon-magic-stick"></i>
                <span class="talk_rank">讨论 VOL.013</span>
              </div>
            </div>
            <div class="item_right">
              <img
                src="https://cdn.sspai.com/article/cbf4d52c-d6e8-935c-502f-6d261ea9ed28.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!126x88r/gravity/Center/crop/126x88/interlace/1"
              />
            </div>
          </li>
        </ul>
        <a href="javascript:;" class="look_more">
          查看更多
          <i class="el-icon-arrow-right"></i>
        </a>
      </div> -->
      <div class="sspai_about">
        <div class="icon_about">
          <a href="javascript:;">
            <i class="iconfont icon-weibo"></i>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-weixin"></i>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-dingding"></i>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-WIFI"></i>
          </a>
        </div>
        <ul class="link_about">
          <li class="link_item">关于我们</li>
          <li class="link_item">成为作者</li>
          <li class="link_item">用户协议</li>
          <li class="link_item">商务合作</li>
          <li class="link_item">常见问题</li>
          <li class="link_item">客户端</li>
          <li class="link_item">关于我们</li>
          <li class="link_item">联系我们</li>
        </ul>
        <div class="ssp_about">
          <span>© 2013-2020 少数派</span>
          <span>粤ICP备09128966号-4</span>
          <span>CC BY-NC 4.0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '../ArticleCard'
import { mapState, mapGetters } from 'vuex'
import { CNDateString, getWeek } from '@/assets/formatDate'
export default {
  name: 'Content',
  data() {
    return {
      nowDate: CNDateString(new Date()),
      nowWeek: getWeek(),
      busy: false,
      offset: 0,
      tag: '推荐',
      currentIndex: 0,
      time: '1602431493',
    }
  },
  computed: {
    ...mapState({
      yipaiCardList: (state) => state.home.yipaiCardList,
      articalCardList: (state) => state.home.articalCardList,
    }),
    ...mapGetters(['morning_paper']),
  },
  methods: {
    // 事件委派
    changeIndex(event) {
      let target = event.target
      let data = target.dataset
      let { tag, index, time } = data
      if (tag) {
        this.tag = tag
        this.currentIndex = +index
        this.time = time
        this.offset += 100
        if (index == 0) {
          this.offset = 0
        }
      }
    },
    async loadMore() {
      this.busy = true
      this.offset += 10
      await this.$store.dispatch('getArticalCardList', {
        limit: 5,
        offset: this.offset,
        tag: this.tag,
        time: this.time,
      })
      this.busy = false
    },
    getYipaiCardList() {
      this.$store.dispatch('getYipaiCardList')
    },
    getArticalCardList() {
      this.$store.dispatch('getArticalCardList', {
        limit: 10,
        offset: this.offset,
        tag: this.tag,
        time: this.time,
      })
    },
  },
  mounted() {
    this.getYipaiCardList()
    this.getArticalCardList()
  },
  components: {
    ArticleCard,
  },
  watch: {
    tag() {
      this.getArticalCardList()
    },
  },
}
</script>

<style lang="less" scoped>
.clearFix() {
  *zoom: 1;
  &::after {
    content: ' ';
    display: block;
    clear: both;
    height: 0;
  }
}
.contentContainer {
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  .contentLeft {
    width: 800px;
    .navList {
      width: 592px;
      display: flex;
      justify-content: space-between;
      .navItem {
        padding: 0 14px;
        width: auto;
        cursor: pointer;
        color: #8e8787;
        font-size: 16px;
        font-weight: 400;
        border-bottom: 2px solid transparent;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin: 0;
        margin-right: 10px;
        height: 48px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 48px;
        white-space: nowrap;
        &.active {
          color: #d71a1b;
          font-weight: 500;
          border-bottom: 2px solid #d71a1b;
        }
      }
    }
    .contentMain {
      margin-top: 20px;
      width: 100%;
      .news {
        background-color: white;
        padding-top: 31px;
        margin-bottom: 15px;
        .newsTitle {
          height: 81px;
          margin: 0 31px 0 34px;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          & > a {
            float: left;
            width: 31%;
            margin-top: 10px;
            height: 45px;
            font-size: 32px;
            line-height: 45px;
            letter-spacing: 0.1em;
            color: #292525;
          }
          .newsTime {
            float: left;
            height: 65px;
            margin-top: 15px;
            padding-left: 20px;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.05em;
            color: #655e5e;
          }
          .newsLink {
            float: right;
            margin-top: 15px;
            height: 50px;
            line-height: 50px;
            & > a {
              font-size: 14px;
              font-weight: 600;
              letter-spacing: 0.1em;
              color: #fd281a;
            }
          }
        }
        .newsContent {
          padding: 30px;
          height: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          .newsImg {
            width: 31%;
            border-radius: 2px;
            overflow: hidden;
            position: relative;
          }
          .newsList {
            display: inline-flex;
            box-sizing: border-box;
            width: 70%;
            flex-wrap: wrap;
            padding: 0 0 0 20px;
            justify-content: space-between;
            .newsItem {
              display: inline-flex;
              width: 47%;
              align-items: center;
              .newsIndex {
                font-size: 20px;
                line-height: 28px;
                color: #d71a1b;
              }
              & > a {
                margin-left: 16px;
                font-size: 16px;
                line-height: 22px;
                color: #292525;
              }
            }
          }
        }
      }
    }
    .bottomLoading {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
  .contentRight {
    position: absolute;
    top: 67px;
    right: 0;
    width: 274px;
    .advert {
      img {
        width: 274px;
        height: 132px;
        border-radius: 2px;
      }
    }
    .sspai_card {
      background: #fff;
      padding: 24px 24px 0;
      margin-top: 32px;
      .sspai_title {
        display: flex;
        height: 40px;
        align-items: center;
        .card_logo {
          width: 40px;
          height: 40px;
          background-color: white;

          background: url(./images/logo.png);
          background-size: contain;
          background-repeat: no-repeat;
          margin-right: 10px;
        }
        & > span {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 5px;
        }
      }
      .sspai_list {
        margin-top: 3px;
        .sspai_item {
          border-bottom: 1px solid #e5e5e5;
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          color: #292525;
          .item_left {
            margin-right: 16px;
            display: flex;
            flex-direction: column;
            .item_title {
              font-size: 14px;
              line-height: 20px;
              margin-bottom: 8px;
            }
            .item_talk {
              & > i {
                width: 20px;
                height: 20px;
                font-size: 20px;
                vertical-align: middle;
                color: rgb(14, 218, 14);
                padding-right: 5px;
              }
              .talk_rank {
                color: #655e5e;
                font-size: 12px;
                line-height: 20px;
                font-weight: 700;
                vertical-align: middle;
              }
            }
          }
          .item_right {
            & > img {
              width: 63px;
              height: 44px;
              border-radius: 4px;
            }
          }
        }
      }
      .look_more {
        display: block;
        cursor: pointer;
        padding: 16px 0;
        line-height: 20px;
        color: #8e8787;
        text-decoration: none;
      }
    }
    .sspai_about {
      border-top: 1px solid #e5e5e5;
      margin-top: 30px;
      padding: 30px 5px 0;
      .icon_about {
        display: flex;
        justify-content: space-between;
        a {
          .iconfont {
            display: inline-block;
            width: 34px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            font-size: 18px;
            background-color: #fff;
            cursor: pointer;
            border-radius: 50%;
          }
        }
      }
      .link_about {
        width: 100%;
        margin-top: 30px;
        overflow: hidden;
        .link_item {
          float: left;
          width: 33.33%;
          text-align: center;
          margin-bottom: 10px;
          color: #8e8787;
          font-size: 12px;
          cursor: pointer;
          &:nth-child(1),
          &:nth-child(4),
          &:nth-child(7) {
            text-align: left;
          }
          &:nth-child(3),
          &:nth-child(6) {
            text-align: right;
          }
        }
      }
      .ssp_about {
        user-select: none;
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        font-size: 12px;
        color: #c1bdbd;
        span {
          &:nth-child(2) {
            margin: 8px 0;
          }
        }
      }
    }
  }
}
</style>
