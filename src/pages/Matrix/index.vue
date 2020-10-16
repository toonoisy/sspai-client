<template>
  <!-- matrix页面容器 -->
  <div class="matrixContainer">
    <Header></Header>
    <!-- 页面 -->
    <div class="matrixPage">
      <PageHeader></PageHeader>
      <MatrixPageIndex></MatrixPageIndex>
      <ColumnsContainer></ColumnsContainer>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import PageHeader from "./PageHeader";
import MatrixPageIndex from "./MatrixPageIndex";
import ColumnsContainer from "./ColumnsContainer";

export default {
  name: "",
  components: {
    Header,
    PageHeader,
    MatrixPageIndex,
    ColumnsContainer,
  },
};
</script>

<style lang="less" scoped>
.matrixContainer {
  min-height: 100%;
  padding-top: 60px;
  overflow-x: hidden;

  a {
    text-decoration: none;
  }

  .matrixPage {
    background: #fff;
  }
}
</style>
