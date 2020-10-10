<template>
  <!-- matrix页面容器 -->
  <div class="matrixContainer">
    <Header></Header>
    <!-- 页面 -->
    <div class="matrixPage">
      
      <PageHeader></PageHeader>
      <MatrixPageIndex></MatrixPageIndex>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import PageHeader from './PageHeader';
import MatrixPageIndex from './MatrixPageIndex';



export default {
  name: "",
  components: {
    Header,
    PageHeader,
    MatrixPageIndex,
  }
};
</script>

<style lang="less" scoped>
.matrixContainer {
  min-height: 100%;
  padding-top: 60px;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.03);

  a {
    text-decoration: none;
  }

 
}
</style>
