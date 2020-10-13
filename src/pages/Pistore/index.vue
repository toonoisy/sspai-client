<template>
  <div class="packageContainer">
    <Header />
    <!--头部内容-->
    <HederTop />
    <!--轮播图-->
    <RotationChart />
    <!--内容区-->
    <Content />
    <!--最新上架-->
    <Shelf :choiceness="choiceness" />
    <!--编辑精选-->
    <Selected />
    <!--装机必备-->
    <Necessary />
    <router-view></router-view>
  </div>
</template>

<script>
import HederTop from '@/pages/Pistore/HederTop/index'
import RotationChart from '@/pages/Pistore/RotationChart/index'
import Content from '@/pages/Pistore/Content/index'
import Shelf from '@/pages/Pistore/Content/Shelf/index'
import Selected from '@/pages/Pistore/Content/Selected/index'
import Necessary from '@/pages/Pistore/Content/Necessary/index'
export default {
  name: 'Pistore',
  components: {
    HederTop,
    RotationChart,
    Content,
    Shelf,
    Selected,
    Necessary,
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
