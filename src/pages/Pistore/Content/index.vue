<template>
  <div class="content">
    <div class="contentItem">
      <div class="title">
        最受欢迎
      </div>
      <!--图片区-->
      <div class="itemImg">
        <div
          class="itemComtent"
          v-for="set in settingInfo"
          :key="set.id"
          @click="toDetail(set)"
        >
          <div class="icon-box">
            <i class="icon"> <img src="./images/苹果.png" alt=""/></i>
          </div>
          <!--主题内容区-->
          <div class="item-container">
            <div class="img">
              <img :src="`https://cdn.sspai.com/${set.banner}`" alt="" />
            </div>
            <div class="font">
              <span>{{ set.name }}</span>
            </div>
            <div class="font1">
              <span>{{ set.summary }}</span>
            </div>
            <div class="price">
              <span>￥{{ set.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--编辑精选-->
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Content',
  mounted() {
    this.getSettingInfo()
  },
  methods: {
    getSettingInfo() {
      this.$store.dispatch('getSeetingInfo')
    },
    //跳转到详情页
    toDetail(set) {
      // console.log(set.id)
      this.$router.push({ path: `/shidetail?id=${set.id}` })
    },
  },
  computed: {
    ...mapState({
      settingInfo: (state) => state.setting.settingInfo,
    }),
  },
}
</script>

<style lang="less" scoped>
.content {
  width: 1116px;
  height: 100%;
  background-color: white;
  margin: 20px auto;
  .contentItem {
    width: 1056px;
    height: 100%;
    margin: 0 auto;
    .title {
      height: 28px;
      padding: 30px 0;
      color: #292525;
      font-size: 20px;
    }
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
      margin-top: 10px;
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
          margin-top: 30px;
          img {
            width: 80px;
            height: 80px;
          }
        }
        .font {
          height: 24px;
          margin-bottom: 30px;
          span {
            font-size: 18px;
            color: #292525;
            line-height: 24px;
            font-weight: 500;
            text-align: center;
          }
        }
        .font1 {
          height: 17px;
          margin-bottom: 30px;
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
</style>
