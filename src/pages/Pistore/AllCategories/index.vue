<template>
  <div class="packageContainer">
    <!--头部导航-->
    <HederTop />
    <!--选择分类-->
    <div class="select">
      <div class="select-item">
        <div class="tabs-box">
          <div class="item">
            分类
          </div>
          <div class="tab-aontainer">
            <a href="javascript:;" class="active">全部</a>
            <a href="javascript:;">装机必备</a>
            <a href="javascript:;">生活工作</a>
          </div>
        </div>

        <div class="tabs-box">
          <div class="item">
            类型
          </div>
          <div class="tab-aontainer">
            <a href="javascript:;" class="active">全部</a>
            <a
              href="javascript:;"
              v-for="item in switchInfo"
              :key="item.id"
              @click="switchs(item)"
            >
              {{ item.name }}</a
            >
          </div>
        </div>
        <div class="tabs-box">
          <div class="item">
            平台
          </div>
          <div class="tab-aontainer">
            <a href="javascript:;" class="active">全部</a>
            <a href="javascript:;">macOs</a>
            <a href="javascript:;">Windows</a>
            <a href="javascript:;">iOS</a>
            <a href="javascript:;">Android</a>
            <a href="javascript:;">移动端</a>
            <a href="javascript:;">桌面端</a>
            <a href="javascript:;">跨平台</a>
          </div>
        </div>
      </div>
    </div>
    <!--内容区-->
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <div class="content">
        <div class="contentItem">
          <!--图片区-->
          <div class="itemImg">
            <div
              class="itemComtent"
              v-for="cont in contentInfo"
              :key="cont.id"
              @click="toDetail(cont)"
            >
              <div class="icon-box">
                <i class="icon"> <img src="./images/苹果.png" alt=""/></i>
              </div>
              <!--主题内容区-->
              <div class="item-container">
                <div class="img">
                  <img :src="`https://cdn.sspai.com/${cont.banner}`" alt="" />
                </div>
                <div class="font">
                  <span>{{ cont.name }}</span>
                </div>
                <div class="font1">
                  <span>{{ cont.summary }}</span>
                </div>
                <div class="price">
                  <span>￥{{ cont.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HederTop from '@/pages/Pistore/HederTop/index'
import { mapState } from 'vuex'
export default {
  name: 'Allcategories',
  data() {
    return {
      busy: false,
      offset: 0,
      class_id: 0,
      currentIndex: 0,
    }
  },
  components: {
    HederTop,
  },
  mounted() {
    //定义请求分类列表函数
    this.getSwitchInfo()
    //定义请求内容区函数
    this.getContentInfo()
  },
  methods: {
    //请求分类类表数据
    getSwitchInfo() {
      this.$store.dispatch('getswitchInfo')
    },
    //请求内容区数据
    getContentInfo() {
      this.$store.dispatch('getContentInfo', this.offset)
    },
    //跳转详情页
    toDetail(cont) {
      // console.log(cont.id)
      this.$router.push({ path: `/shidetail?id=${cont.id}` })
    },
    //下拉加载更多
    async loadMore() {
      //禁用下拉加载刷新
      this.busy = true
      this.offset = this.offset + 12
      if (this.offset === 60) {
        return
      }
      await this.$store.dispatch('getContentInfo', { offset: this.offset })
      this.busy = false
    },
    //获取id

    switchs(item) {
      this.busy = true
      // console.log(item.id)
      let class_id = item.id
      this.offset = 0
      console.log(class_id)
      this.$store.dispatch('getContentInfo', { offset: this.offset, class_id })
    },
  },
  computed: {
    //分类列表数据
    ...mapState({
      switchInfo: (state) => state.setting.switchInfo,
    }),
    //内容区数据
    ...mapState({
      contentInfo: (state) => state.setting.contentInfo,
    }),
  },
}
</script>
<style lang="less" scoped>
.packageContainer {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  .select {
    width: 1116px;
    background-color: white;
    margin: 20px auto;
    .select-item {
      display: flex;
      flex-direction: column;
      .tabs-box {
        // position: relative;
        .item {
          font-size: 14px;
          color: #8e8787;
          padding-right: 48px;
          margin: 18px 20px;
        }
        .tab-aontainer {
          // position: absolute;
          float: left;
          margin-left: 100px;
          margin-top: -35px;
          a {
            display: inline-block;
            font-size: 14px;
            color: #655e5e;
            margin-right: 35px;
            text-decoration: none;
            &.active {
              font-weight: 800;
            }
          }
        }
      }
    }
  }
  .content {
    width: 1116px;
    height: 100%;
    background-color: white;
    margin: 20px auto;
    .contentItem {
      width: 1056px;
      height: 100%;
      margin: 0 auto;
    }
    .itemImg {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      // justify-content: space-evenly;
      justify-content: flex-start;
      align-items: center;
      .itemComtent {
        width: 242px;
        height: 260px;
        margin-top: 30px;
        margin-right: 20px;
        margin-bottom: 20px;
        border: 1px solid rgb(199, 198, 198);
        border-radius: 5px;
        &:hover {
          box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
        }
        .icon-box {
          .icon {
            img {
              display: block;
              float: right;
              width: 20px;
              height: 20px;
              margin: 10px 10px 0 0;
            }
          }
        }
        .item-container {
          flex: auto;
          display: flex;
          // position: absolute;
          // margin: 0 auto;
          flex-direction: column;
          align-items: center;
          align-content: center;
          padding-left: 35px;
          .img {
            margin-top: 20px;
            img {
              width: 80px;
              height: 80px;
            }
          }
          .font {
            height: 24px;
            margin-bottom: 40px;
            span {
              font-size: 16px;
              color: #292525;
              line-height: 24px;
              font-weight: 500;
              text-align: center;
            }
          }
          .font1 {
            height: 17px;
            margin-bottom: 20px;
            span {
              font-size: 12px;
              color: #8e8787;
              line-height: 17px;
              text-align: center;
            }
          }
          .price {
            margin: 20px 0 0;
            height: 25px;
            span {
              line-height: 25px;
              font-size: 18px;
              font-weight: 500;
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>
