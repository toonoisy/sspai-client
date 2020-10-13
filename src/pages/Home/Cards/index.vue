<template>
  <div class="cardContainer">
    <ul class="cardList">
      <li class="cardItem" v-for="cardImg in cardImgList" :key="cardImg.id">
        <a href="javascript:;">
          <img :src="`https://cdn.sspai.com/${cardImg.image}`" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Card',
  methods: {
    getCardList() {
      this.$store.dispatch('getCardImgList')
    },
  },
  computed: {
    ...mapState({
      cardImgList: (state) => state.home.cardImgList,
    }),
  },
  mounted() {
    this.getCardList()
  },
}
</script>

<style lang="less" scoped>
.cardContainer {
  width: 100%;
  margin-top: -40px;
  position: relative;
  z-index: 5;
  margin-bottom: 30px;
  // background-color: rgba(0, 0, 0, 0.3);
  .cardList {
    max-width: 1120px;
    margin: 0 auto;
    .cardItem {
      width: 264px;
      height: 144px;
      margin-right: 20px;
      margin-bottom: 20px;
      display: inline-block;
      -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      overflow: hidden;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      &:last-child {
        margin-right: 0;
      }
      a {
        img {
          transition: all 0.5s;
          border-radius: 6px;
          vertical-align: middle;
          width: 264px;
          height: 144px;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>
