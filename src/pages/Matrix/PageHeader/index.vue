<template>
  <!-- 页面头部 -->
  <div class="matrixPageHeader">
    <div class="pageTitle">
      <div class="left">
        <span class="matrix">Matrix</span>
        <span class="community">社区</span>
      </div>
      <div class="right">
        <i class="iconfont icon-Matrix"></i>
        <span class="author">成为作者</span>
      </div>
    </div>
    <div class="pageTabs">
      <ul class="items">
        <li class="item active">社区广场</li>
        <li class="item">专栏</li>
        <li class="item">一派</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less" scoped>
.matrixPageHeader {
  .pageTitle {
    max-width: 1140px;
    margin: auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin-bottom: 8px;

    .left {
      height: 60px;
      line-height: 60px;
      font-size: 34px;
      font-weight: 400;
      display: flex;
      cursor: default;

      .matrix {
        margin-right: 6px;
        padding-top: 3px;
        font-size: 36px;
      }
    }

    .right {
      cursor: pointer;
      width: 114px;
      height: 42px;
      line-height: 42px;
      background: rgb(64, 140, 255);
      border-radius: 42px;
      color: #fff;
      font-size: 14px;
      margin-right: 24px;
      text-align: center;
      font-size: 0;

      .icon-Matrix {
        margin-right: 4px;
        margin-left: 4px;
        font-size: 15px;
      }

      .author {
        display: inline-block;
        font-size: 14px;
      }
    }
  }

  .pageTabs {
    max-width: 1140px;
    margin: auto;

    .items {
      display: flex;

      .item {
        font-size: 16px;
        color: #8e8787;
        padding: 8px 0;
        margin-right: 16px;
        display: inline-block;
        height: 22px;
        line-height: 22px;
        min-width: 64px;
        text-align: center;
        position: relative;
        cursor: pointer;
      }

      .item:hover {
        color: #292525;
      }

      .item::after {
        content: "";
        display: inline-block;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
      }

      .active {
        color: #292525;
      }

      .active:after {
        background: #292525;
      }
    }
  }
}
</style>
