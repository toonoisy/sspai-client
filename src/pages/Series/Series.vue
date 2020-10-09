<template>
  <div class="series">
    <div class="series-wrapper">
      <div class="series-banner clearFix">
        <div class="swiper-container" ref="seriesSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="../../../public/images/banner01.jpg" alt="" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="../../../public/images/banner02.jpg" alt="" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="../../../public/images/banner03.jpg" alt="" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="../../../public/images/banner04.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <!-- 导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="recommend-container">
          <div class="recommend">今日推荐</div>
          <div class="recommend-title">擦亮互联网与现实世界的「窗户」</div>
          <div class="recommend-content">
            不同的「窗」是否清晰、颜色是否准确、对我们的眼睛是否友好等差异，很大程度上决定了我们看到网络世界的样子。
            这就是为什么我们需要好的显示器。
          </div>
          <div class="recommend-ref">
            出自栏目：
            <router-link to="/series" class="link">显示器完全指南</router-link
            ><i></i>
          </div>
        </div>
      </div>
      <div class="series-columns">
        <div class="series-columns-header">
          <div class="tabs">
            <a
              :class="['all', { active: isShowSeriesColumn }]"
              @click="showSeriesColumn"
              >全部分类</a
            >
            <a :class="['my', { active: !isShowSeriesColumn }]" @click="showMy"
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
        <div class="series-column" v-show="isShowSeriesColumn">
          <div class="title">最新上架</div>
          <div class="item-wrapper">
            <div class="item">
              <div class="content-wrapper">
                <router-link to="/series">
                  <img src="../../../public/images/1.png" alt="" />
                  <div class="hover-card">
                    <div class="hover-card-title">Python 自学手册</div>
                    <div class="hover-card-content">
                      从零开始教程掌握 Python 编程技巧。
                    </div>
                    <div class="hover-card-footer">
                      <div class="hover-card-price">￥<span>39.90</span></div>
                      <div class="hover-card-trial">免费阅读 2 章</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="item">
              <div class="content-wrapper">
                <router-link to="/series">
                  <img src="../../../public/images/1.png" alt="" />
                  <div class="hover-card">
                    <div class="hover-card-title">Python 自学手册</div>
                    <div class="hover-card-content">
                      从零开始教程掌握 Python 编程技巧。
                    </div>
                    <div class="hover-card-footer">
                      <div class="hover-card-price">￥<span>39.90</span></div>
                      <div class="hover-card-trial">免费阅读 2 章</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="item">
              <div class="content-wrapper">
                <router-link to="/series">
                  <img src="../../../public/images/1.png" alt="" />
                  <div class="hover-card">
                    <div class="hover-card-title">Python 自学手册</div>
                    <div class="hover-card-content">
                      从零开始教程掌握 Python 编程技巧。
                    </div>
                    <div class="hover-card-footer">
                      <div class="hover-card-price">￥<span>39.90</span></div>
                      <div class="hover-card-trial">免费阅读 2 章</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="item">
              <div class="content-wrapper">
                <router-link to="/series">
                  <img src="../../../public/images/1.png" alt="" />
                  <div class="hover-card">
                    <div class="hover-card-title">Python 自学手册</div>
                    <div class="hover-card-content">
                      从零开始教程掌握 Python 编程技巧。
                    </div>
                    <div class="hover-card-footer">
                      <div class="hover-card-price">￥<span>39.90</span></div>
                      <div class="hover-card-trial">免费阅读 2 章</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="item">
              <div class="content-wrapper">
                <router-link to="/series">
                  <img src="../../../public/images/1.png" alt="" />
                  <div class="hover-card">
                    <div class="hover-card-title">Python 自学手册</div>
                    <div class="hover-card-content">
                      从零开始教程掌握 Python 编程技巧。
                    </div>
                    <div class="hover-card-footer">
                      <div class="hover-card-price">￥<span>39.90</span></div>
                      <div class="hover-card-trial">免费阅读 2 章</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Series",
  data() {
    return {
      keyword: "Power+",
      isShowSeriesColumn: true,
    };
  },
  methods: {
    showSeriesColumn() {
      this.$router.push("/series");
      this.isShowSeriesColumn = true;
    },
    showMy() {
      this.$router.push("/series/my");
      this.isShowSeriesColumn = false;
    },
  },
};
</script>

<style lang="less" scoped>
.series {
  width: 100%;
  height: 100%;
  // height: 3000px;
  background: #f4f4f4;
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
    .swiper-container img {
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
        }
      }
    }
  }
}
.series-columns {
  .series-columns-header {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    .tabs {
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
  .series-column {
    background: #fff;
    padding: 30px;
    .title {
      font-size: 20px;
      color: #292525;
      padding-bottom: 30px;
    }
    .item-wrapper {
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
      .item {
        .content-wrapper {
          position: relative;
          width: 197px;
          height: 262px;
          border-radius: 10px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
          .hover-card {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 20px 15px 0 15px;
            box-sizing: border-box;
            opacity: 0;
            transition: opacity 0.5s;
            .hover-card-title {
              font-size: 18px;
              margin-bottom: 10px;
            }
            .hover-card-footer {
              position: absolute;
              bottom: 30px;
              display: flex;
              width: calc(100% - 30px);
              justify-content: space-between;
              align-items: baseline;
              .hover-card-price {
                span {
                  font-size: 22px;
                }
              }
            }
            &:hover {
              opacity: 1;
              transition: opacity 0.5s;
            }
          }
        }
      }
    }
  }
}
</style>
