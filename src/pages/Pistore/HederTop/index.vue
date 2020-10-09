<template>
  <div class="piStreContainer">
    <!--头部导航栏-->
    <div class="nav">
      <ul class="navContainer">
        <li class="navItem active"><a href="javascript:;">商城首页</a></li>
        <li class="navItem">
          <a href="javascript:;">全部分类</a>
          <!-- <router-link to="/pistore/allcategories">全部分类</router-link> -->
        </li>
        <li class="navItem"><a href="javascript:;">装机必备</a></li>
        <li class="navItem"><a href="javascript:;">生活工作</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  data() {
    return {
      isShow: true,
    }
  },
}
</script>

<style lang="less" scoped>
//头部内容样式
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
