<template>
  <div class="my">
    <div class="my-subcription">
      还没有任何订阅
    </div>
    <div class="my-loading-more">
      暂无数据
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
};
</script>

<style lang="less" scoped>
.my {
  .my-subcription {
    margin-bottom: 10px;
    background: #fff;
    text-align: center;
    font-size: 14px;
    color: #8e8787;
    padding: 100px 0;
    box-sizing: border-box;
  }
  .my-loading-more {
    background: #fff;
    text-align: center;
    font-size: 14px;
    line-height: 60px;
  }
}
</style>
