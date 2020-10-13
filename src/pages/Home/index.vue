<template>
  <div>
    <Carousel />
    <Card />
    <Content />
  </div>
</template>

<script>
import Card from './Cards'
import Content from './Content'
import Carousel from './Carousel'
export default {
  name: 'Home',
  components: {
    Card,
    Content,
    Carousel,
  },
}
</script>

<style lang="less" scoped></style>
