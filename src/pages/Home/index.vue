<template>
  <div>
    <Header />
    <img
      src="https://cdn.sspai.com/article/b46bbe08-e7f6-d540-c9db-c293859791de.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!2880x620r/gravity/Center/crop/2880x620/interlace/1"
      width="100%"
      height="310"
    />
    <Card />
    <Content />
  </div>
</template>

<script>
import Card from './Cards'
import Content from './Content'
export default {
  name: 'Home',
  components: {
    Card,
    Content,
  },
}
</script>

<style lang="less" scoped></style>
