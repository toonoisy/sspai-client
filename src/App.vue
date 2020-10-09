<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './pages/Home'
export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>

<style lang="less" scoped>
.clearFix() {
  *zoom: 1;
  &::after {
    content: ' ';
    display: block;
    clear: both;
    height: 0;
  }
}
#app {
  background-color: #f4f4f4;
  font-size: 14px;
}
</style>
