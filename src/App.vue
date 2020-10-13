<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
#app {
  user-select: none;
  background-color: #f4f4f4;
  font-size: 14px;
}
</style>
