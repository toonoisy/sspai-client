<template>
  <div class="piStreContainer">
    <!--头部导航栏-->
    <div class="nav">
      <ul class="navContainer">
        <li class="navItem">
          <!-- <a href="javascript:;">商城首页</a> -->
          <router-link to="./pistore">商城首页</router-link>
        </li>
        <li class="navItem">
          <!-- <a href="javascript:;" @click="toAllcatre">全部分类</a> -->
          <router-link to="/allcategories">全部分类</router-link>
        </li>
        <li class="navItem">
          <!-- <router-link to="/asd">装机必备</router-link> -->
          <a href="javascript:;">装机必备</a>
        </li>
        <li class="navItem">
          <!-- <router-link>生活工作</router-link> -->
          <a href="javascript:;">生活工作</a>
        </li>
      </ul>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderTop',
  data() {
    return {
      currIndex: false,
    }
  },
  methods: {},
  computed: {
    //内容区数据
    ...mapState({
      contentInfo: (state) => state.setting.contentInfo,
    }),
  },
}
</script>

<style lang="less" scoped>
//头部内容样式
.router-link-active {
  color: red;
}
.piStreContainer {
  width: 1116px;
  height: 100%;
  // background-color: seagreen;
  margin: 0 auto;
  text-align: center;
  .nav {
    width: 1200px;
    margin-right: 24px;
    .navContainer {
      display: flex;
      box-sizing: border-box;
      .navItem {
        width: 65px;
        height: 41.6px;
        margin: 0 30px 0 0;
        padding: 8px 0;
        display: inline-block;
        font-size: 16px;
        line-height: 41.6px;
        a {
          display: inline-block;
          // color: red;
          text-decoration: none;
        }
        &.active {
          a {
            color: red;
          }
          // display: block;
          border-bottom: 2px solid red;
        }
      }
    }
  }
}
</style>
