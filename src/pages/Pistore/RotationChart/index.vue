<template>
  <div class="rotation">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/s1.png" />
        </div>
        <div class="swiper-slide">
          <img src="./images/s2.png" />
        </div>
        <div class="swiper-slide">
          <img src="./images/s3.png" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'RotationChart',
  mounted() {
    new Swiper('.swiper-container', {
      direction: 'horizontal', // 默认 横向切换
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
}
</script>

<style lang="less" scoped>
.rotation {
  margin-top: 20px;
  .swiper-container {
    width: 1116px;
    height: 330px;
    .swiper-wrapper {
      .swiper-slide {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
