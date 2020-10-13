<template>
  <div class="container">
    <div class="header">
      <!--头部区域-->
      <div class="nav">
        <div class="img">
          <img src="./images/图标.png" alt="" />
        </div>
        <div class="navItem">
          <div class="item">
            <span>
              <!-- <a href="javascript">全部软件</a> -->
              <router-link to="/allcategories">全部软件</router-link>
            </span>
            <i>></i>
          </div>

          <div class="item">
            <span>
              <a href="javascript">装机必备</a>
            </span>
            <i> > </i>
          </div>

          <div class="item">
            <span>
              <a href="javascript">影音媒体</a>
            </span>
          </div>
        </div>
      </div>
      <!--内容区域-->
      <div class="content">
        <div class="imgs">
          <img :src="`https://cdn.sspai.com/${detailInfo.banner}`" alt="" />
        </div>
        <div class="contents">
          <div class="inner">{{ detailInfo.name }}</div>
          <div class="describe">
            {{ detailInfo.description }}
          </div>
          <div class="edition">
            版本
            <button class="btn"><span>单用户</span></button>
          </div>
          <div class="sum">
            数量
            <button class="btnn">
              <span class="left">-</span>
              <i>1</i>
              <span class="right">+</span>
            </button>
          </div>
          <div class="price" v-if="details.length">
            <span> ￥{{ details[0].price }}</span>
          </div>
          <div class="purchase">
            <span> 立即购买</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'detail',
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      let id = this.$route.query.id
      this.$store.dispatch('getDetailInfo', id)
    },
  },
  computed: {
    ...mapState({
      detailInfo: (state) => state.detail.detailInfo,
    }),
    details() {
      return this.detailInfo.details || []
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  .header {
    margin: 0 auto;
    width: 710px;
    background-color: white;
    .nav {
      position: relative;
      height: 48px;
      .img {
        position: absolute;
        line-height: 48px;
      }
      .navItem {
        display: flex;
        justify-content: flex-start;
        height: 48px;
        .item {
          margin-left: 20px;
          text-align: center;
          line-height: 48px;
          a {
            color: #8e8787;
            font-size: 14px;
          }
          i {
            display: inline-block;
            font-size: 14px;
            line-height: 48px;
            margin-left: 8px;
          }
        }
      }
    }
    .content {
      margin-top: 20px;
      display: flex;
      .imgs {
        width: 120px;
        height: 232px;
        margin-left: 20px;
        img {
          width: 120px;
          height: 120px;
        }
      }
      .contents {
        margin-left: 40px;
        .inner {
          font-size: 25px;
          margin-bottom: 5px;
        }
        .describe {
          font-size: 14px;
          color: #8e8787;
        }
        .edition {
          margin: 15px 0;
          font-size: 14px;
          color: #8e8787;
          .btn {
            background-color: #8e8787;
            width: 53px;
            height: 25px;
            outline: none;
            border: none;
            border-radius: 3px;
            margin-left: 15px;
            span {
              color: white;
            }
          }
        }
        .sum {
          margin: 15px 0;
          font-size: 14px;
          position: relative;

          .btnn {
            width: 78px;
            height: 25px;
            outline: none;
            border: none;
            border-radius: 3px;
            margin-left: 15px;
            background-color: white;
            border: 1px solid #8e8787;
            .left {
              line-height: 25px;
              color: #8e8787;
            }
            .right {
              line-height: 25px;
              color: #8e8787;
            }
            i {
              line-height: 25px;
              margin: 0 15px;
            }
          }
        }
        .price {
          width: 79px;
          height: 25px;
          span {
            font-size: 26px;
            color: red;
            line-height: 25px;
            margin: 20px 0;
          }
        }
        .purchase {
          width: 86px;
          height: 26px;
          border-radius: 24px;
          background-color: #fd281a;
          margin-top: 10px;
          span {
            font-size: 14px;
            line-height: 26px;
            color: white;
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>
