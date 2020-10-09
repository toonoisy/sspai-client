<template>
  <div class="packageContainer">
    <!--头部内容-->
    <HederTop />
    <!--轮播图-->
    <RotationChart />
    <!--内容区-->
    <Content />
    <!--最新上架-->
    <Content />
    <!--编辑精选-->
    <Content />
    <!--装机必备-->
    <Content />
  </div>
</template>

<script>
import HederTop from '@/pages/Pistore/HederTop/index'
import RotationChart from '@/pages/Pistore/RotationChart/index'
import Content from '@/pages/Pistore/Content/index'

export default {
  name: 'Pistore',
  components: {
    HederTop,
    RotationChart,
    Content,
  },
}
</script>
<style lang="less" scoped>
.packageContainer {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}
</style>
