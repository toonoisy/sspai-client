<template>
  <el-carousel indicator-position="none" height="310px">
    <el-carousel-item v-for="item in bannerList" :key="item.id">
      <img
        :src="`https://cdn.sspai.com/${item.image}`"
        alt=""
        width="100%"
        height="100%"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      bannerList: [],
    }
  },
  methods: {
    async getBannerList() {
      const result = await this.$API.reqMainBannerList()
      this.bannerList = result.data
    },
  },
  mounted() {
    this.getBannerList()
  },
}
</script>

<style lang="less" scoped></style>
