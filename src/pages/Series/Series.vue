<template>
  <div class="series">
    <div class="series-wrapper">
      <div class="series-banner clearFix">
        <Carousel :bannerList="bannerList" :CDN="CDN"></Carousel>
        <div class="recommend-container">
          <a
            :href="recommendList[idx] ? recommendList[idx].url : `#`"
            target="_blank"
          >
            <div class="recommend">
              {{ recommendList[idx] ? recommendList[idx].title_prefix : '' }}
            </div>
            <div class="recommend-title">
              {{ recommendList[idx] ? recommendList[idx].title : '' }}
            </div>
            <div class="recommend-content">
              {{ recommendList[idx] ? recommendList[idx].description : '' }}
            </div>
            <div class="recommend-ref">
              出自栏目：
              <span class="link">{{
                recommendList[idx] ? recommendList[idx].series.title : ''
              }}</span>
            </div>
          </a>
        </div>
      </div>
      <div class="series-columns-wrapper">
        <div class="series-columns-header">
          <div class="tabs">
            <a
              :class="['all', { active: $route.fullPath === '/series' }]"
              @click="showSeriesColumn"
              >全部分类</a
            >
            <a
              :class="['my', { active: $route.fullPath === '/series/my' }]"
              @click="showMy"
              >我的订阅</a
            >
          </div>
          <el-input
            v-model="keyword"
            placeholder="搜索"
            class="search"
            size="mini"
          ></el-input>
        </div>
        <div class="series-columns" v-show="$route.fullPath === '/series'">
          <Column
            :list="latestList"
            :CDN="CDN"
            :to="to"
            :categories="categories[0]"
          ></Column>
          <div class="column">
            <div class="title">
              {{ categories[1] }}
            </div>
            <div class="item-wrapper">
              <div class="item" v-for="trial in trialList" :key="trial.id">
                <router-link :to="to">
                  <div class="content-wrapper">
                    <img :src="`${CDN}${trial.article.banner}`" alt="" />
                  </div>
                  <div class="info-wrapper">
                    <span>{{ trial.series.title }}</span>
                    <h4>{{ trial.article.title }}</h4>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <Column
            v-for="category in categoriesList"
            :key="category.id"
            :list="category"
            :CDN="CDN"
            :to="to"
          ></Column>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Carousel from '@/components/Carousel/Carousel'
import Column from '@/components/Column/Column'
export default {
  name: 'Series',
  data() {
    return {
      // isShowSeriesColumn: true, // 改用 this.$route.fullPath 判断显示隐藏了
      CDN: 'https://cdn.sspai.com/',
      idx: '',
      keyword: 'Power+',
      to: '/series',
      categories: ['最新上架', '精选试读'],
    }
  },
  created() {
    this.changeIndex()
  },
  mounted() {
    this.getBannerList()
    this.getRecommendList()
    this.getLatestList()
    this.getTrialList()
    this.getCategoriesList()
  },
  methods: {
    changeIndex() {
      this.idx = Math.floor(Math.random() * (3 + 1)) // 生成一个0-3的随机数
    },
    showSeriesColumn() {
      this.$router.push('/series')
    },
    showMy() {
      this.$router.push('/series/my')
      // console.log(this.$route);
    },
    getBannerList() {
      this.$store.dispatch('getBannerList')
    },
    getRecommendList() {
      this.$store.dispatch('getRecommendList')
    },
    getLatestList() {
      this.$store.dispatch('getLatestList')
    },
    getTrialList() {
      this.$store.dispatch('getTrialList')
    },
    getCategoriesList() {
      this.$store.dispatch('getCategoriesList')
    },
  },
  computed: {
    ...mapState({
      bannerList: (state) => state.series.bannerList,
      recommendList: (state) => state.series.recommendList,
      latestList: (state) => state.series.latestList,
      trialList: (state) => state.series.trialList,
      categoriesList: (state) => state.series.categoriesList,
    }),
  },
  components: {
    Carousel,
    Column,
  },
}
</script>

<style lang="less" scoped>
.series {
  width: 100%;
  height: 100%;
  // height: 3000px;
  background: #f4f4f4;
  margin-top: 20px;
}
.series-wrapper {
  width: 1120px;
  margin: auto;
  .series-banner {
    .swiper-container {
      width: 780px;
      height: 324px;
      float: left;
    }
    /deep/ .swiper-container img {
      width: 100%;
      height: 100%;
    }
    .recommend-container {
      position: relative;
      width: 316px;
      height: 325px;
      float: right;
      background: #fff;
      padding: 30px 20px;
      box-sizing: border-box;
      font-size: 12px;
      .recommend-title {
        font-size: 18px;
        padding: 15px 0;
        color: #292525;
      }
      .recommend-content {
        color: #8e8787;
        font-size: 14px;
        line-height: 160%;
      }
      .recommend-ref {
        position: absolute;
        bottom: 30px;
        color: #8e8787;
        .link {
          color: #292525;
          &:hover {
            color: #fd281a;
          }
        }
      }
    }
  }
}
.series-columns-wrapper {
  .series-columns-header {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    .tabs {
      a {
        cursor: pointer;
      }
      font-size: 16px;
      .all {
        margin-right: 40px;
        color: #8e8787;
        padding-bottom: 6px;
        text-decoration: none;
      }
      .my {
        color: #8e8787;
        padding-bottom: 6px;
        text-decoration: none;
      }
      .active {
        color: #fd281a;
        border-bottom: 2px solid #fd281a;
      }
    }
    /deep/ .el-input {
      width: 120px;
    }
    /deep/ .el-input__inner {
      background: #f4f4f4;
      padding: 0;
      margin: 0;
      border-radius: 0%;
      border: none;
      border-bottom: 1px solid #8e8787;
      color: #8e8787;
    }
  }
  .series-columns {
    .column {
      background: #fff;
      padding: 30px 15px 20px 30px;
      margin-bottom: 15px;
      .title {
        font-size: 20px;
        color: #292525;
        padding-bottom: 30px;
      }
      .item-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0 5px;
        .item {
          width: 197px;
          margin-right: 15px;
          .content-wrapper {
            margin-bottom: 8px;
            img {
              width: 197px;
              height: 98px;
              border-radius: 4px;
            }
          }
          .info-wrapper {
            span {
              font-size: 12px;
            }
            h4 {
              font-size: 14px;
              font-weight: 400;
              margin-top: 8px;
              line-height: 140%;
              height: 40px;
              color: #292525;
            }
          }
        }
      }
    }
  }
}
</style>
