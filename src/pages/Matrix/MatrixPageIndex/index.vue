<template>
  <!-- 社区广场 -->
  <div class="matrixPageIndex">
    <div class="indexContainer">
      <!-- 内容主体 -->
      <div class="main">
        <div class="mainTab">
          <ul class="sort">
            <li class="sortItem">
              <i class="iconfont icon-jingxuan"></i>
              <span>精选</span>
            </li>
          </ul>
          <div class="layout">
            <i class="iconfont icon-layout-3 current"></i>
            <div class="layoutTypeLists">
              <i class="iconfont icon-list"></i>
              <i class="iconfont icon-layout"></i>
              <i class="iconfont icon-autolayout"></i>
            </div>
          </div>
        </div>
        <ul class="postsList">
          <li class="postsListItem" v-for="posts in matricList" :key="posts.id">
            <a class="postItem" href="">
              <div class="postInfo">
                <div class="postTitle">{{ posts.title }}</div>
                <div class="postBottom">
                  <a class="postAuthor" href="">
                    <img
                      class="authorImg"
                      src="./images/user.jpg"
                      alt=""
                      v-if="!posts.author.avatar"
                    />
                    <img
                      class="authorImg"
                      :src="posts.author.avatar"
                      alt=""
                      v-else-if="
                        posts.author.avatar.indexOf('cdn.sspai.com') !== -1
                      "
                    />
                    <img
                      class="authorImg"
                      :src="`https://cdn.sspai.com/${posts.author.avatar}`"
                      alt=""
                      v-else
                    />
                    <span class="authorName">{{ posts.author.nickname }}</span>
                  </a>
                  <div class="postOther">
                    <span class="postOtherItem">
                      <i class="iconfont icon-sandian"></i>
                      <span>{{ posts.like_count }}</span>
                    </span>
                    <span class="postOtherItem">
                      <i class="iconfont icon-pinglun"></i>
                      <span>{{ posts.comment_count }}</span>
                    </span>
                    <span class="postOtherItem">
                      <span>{{ posts.created_time }}</span>
                    </span>
                  </div>
                </div>
              </div>
              <img
                class="postCover"
                :src="`https://cdn.sspai.com/${posts.banner}`"
                v-if="posts.banner"
              />
            </a>
          </li>
        </ul>
        <div class="more">加载更多</div>
      </div>

      <!-- 侧边栏 -->
      <div class="sideContainerr">
        <!-- 一派 -->
        <div class="yipai">
          <i class="yipaiHeader"></i>
          <div class="yipaiCover">
            <img src="./images/yipaicover.jpg" alt="" v-if="!yipai.banner" />
            <img
              :src="yipai.banner"
              alt=""
              v-else-if="yipai.banner.indexOf('cdn.sspai.com') !== -1"
            />
            <img :src="`https://cdn.sspai.com/${yipai.banner}`" alt="" v-else />
            <span class="yipaiTag">
              <i class="iconfont icon-shengbo"></i>
              <span>讨论</span>
            </span>
          </div>
          <div class="yipaiInfo">{{ yipai.title }}</div>
          <div class="yipaiBottom">
            <a class="speakButton" href="">
              <i class="iconfont icon-shengbo"></i>
              <span>我来说一说</span>
            </a>
            <a class="moreButton" href="">更多一派讨论 ></a>
          </div>
        </div>

        <!-- 值得关注 -->
        <div class="recommend">
          <div class="recommendHeader">值得关注</div>
          <ul class="recommendList">
            <li class="recommendListItem" v-for="item in commendList" :key="item.id_hash">
              <a class="recommendItem" href="">
                <img class="avater" :src="item.avatar" alt="" v-if="item.avatar.indexOf('cdn.sspai.com') !== -1"/>
                <img class="avater" :src="`https://cdn.sspai.com/${item.avatar}`" alt="" v-else/>
                <div class="info">
                  <span class="name">{{item.nickname}}</span>
                  <span class="intro"
                    >{{item.bio}}
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <!-- 专栏推荐 -->
        <div class="recommend">
          <div class="recommendHeader">专栏推荐</div>
          <ul class="recommendList">
            <li class="recommendListItem" v-for="item in specialList" :key="item.id">
              <a class="recommendItem" href="">
                <img class="cover" :src="item.author.avatar" alt="" v-if="item.author.avatar.indexOf('cdn.sspai.com') !== -1"/>
                <img class="cover" :src="`https://cdn.sspai.com/${item.author.avatar}`" alt="" v-else/>
                <div class="info">
                  <span class="name">{{item.title}}</span>
                  <span class="intro">{{item.article_count}} 人关注 </span>
                </div>
              </a>
            </li>
          </ul>
          <a class="moreButton" href="">查看全部 ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "MatrixPageIndex",

  mounted() {
    // vue生命周期，页面DOM挂载完成后触发该函数
    this.getMatricList();
    this.getMatricYipai();
    this.getMatricCommend();
    this.getMatricSpecial();
  },

  methods: {
    getMatricList() {
      this.$store.dispatch("getMatricList"); // 触发getMatricList
    },
    getMatricYipai() {
      this.$store.dispatch("getMatricYipai"); // 触发getMatricList
    },
    getMatricCommend() {
      this.$store.dispatch("getMatricCommend"); // 触发getMatricList
    },
    getMatricSpecial() {
      this.$store.dispatch("getMatricSpecial"); // 触发getMatricList
    },
  },

  computed: {
    ...mapState({
      matricList: (state) => state.matrix.matricList,
    }),
    ...mapState({
      yipaiList: (state) => state.matrix.matricYipai[0],
    }),
    ...mapState({
      commendList: (state) => state.matrix.matricCommend.slice(0, 3),
    }),
    ...mapState({
      specialList: (state) => state.matrix.matricSpecial.slice(0, 3),
    }),
    yipai() {
      return this.yipaiList || {};
    }

  },


};
</script>

<style lang="less" scoped>
.matrixPageIndex {
  background: #fff;

  a:link:hover {
    text-decoration: none;
  }

  .indexContainer {
    display: flex;
    justify-content: space-between;
    max-width: 1140px;
    padding: 0 12px;
    margin: auto;
    overflow: hidden;

    .main {
      width: 704px;
      padding: 0 24px;
      margin-top: 24px;
      background: #fff;

      .mainTab {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 600;
        color: #8e8787;
        height: 59px;
        border-bottom: 1px solid #e5e5e5;

        .sort {
          margin-left: -16px;
          height: 100%;

          .sortItem {
            margin: 16px;
            cursor: pointer;

            .icon-jingxuan {
              color: #ffcc16;
              margin-right: 6px;
            }
          }
        }

        .layout {
          position: relative;

          .iconfont {
            cursor: pointer;
            font-size: 18px;
            padding: 6px;
          }

          .iconfont:hover {
            color: #292525;
          }

          .layoutTypeLists {
            position: absolute;
            display: flex;
            background: #fff;
            box-shadow: 0 3px 16px rgba(0, 0, 0, 0.12);
            border-radius: 8px;
            // visibility: visible;
            right: 0px;
            padding: 6px 20px 6px 20px;
            visibility: hidden;
          }
        }

        .layout:hover .layoutTypeLists {
          visibility: visible;
        }
      }

      .postsList {
        .postsListItem {
          margin: 0;
          border-bottom: 1px solid #e5e5e5;

          .postItem {
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 18px 18px 18px 20px;
            margin: 18px -18px 18px -19px;
            border-radius: 16px;
            color: #292525;

            .postInfo {
              width: 435px;
              .postTitle {
                font-size: 18px;
                font-weight: 600;
                line-height: 25px;
                margin-bottom: 24px;
              }
              .postBottom {
                display: flex;
                align-items: center;

                .postAuthor {
                  display: block;
                  color: #292525;
                  margin-right: 24px;
                  .authorImg {
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    margin-right: 8px;
                    vertical-align: middle;
                  }
                  .authorName {
                    vertical-align: middle;
                    font-size: 14px;
                  }
                }
                .postOther {
                  font-size: 12px;
                  color: #8e8787;
                  .postOtherItem {
                    margin-right: 12px;
                  }
                  .icon-pinglun {
                    font-size: 8px;
                    margin-right: 4px;
                  }
                }
              }
            }
            .postCover {
              width: 160px;
              height: 100px;
              border-radius: 8px;
              border: 1px solid #f7f7f8;
              box-sizing: border-box;
              transition: all 0.2s ease-out;
            }
          }

          .postItem:hover {
            background: #f7f7f8;
          }
        }
      }

      .more {
        cursor: pointer;
        color: #655e5e;
        font-size: 14px;
        font-weight: 500;
        display: block;
        width: 136px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 40px;
        background: #f7f7f8;
        margin: 36px auto;
        transition: color 0.2s;
      }

      .more:hover {
        color: #292525;
      }
    }

    .sideContainerr {
      max-width: 324px;
      padding: 0 24px;
      margin-top: 40px;
      flex: 0;
      .moreButton {
        cursor: pointer;
        font-size: 12px;
        color: #655e5e;
        width: 92px;
        margin: auto;
        display: block;
      }
      .yipai {
        color: #292525;
        padding: 24px 28px 28px;
        background: #f7f7f8;
        border-radius: 16px;
        margin-top: 132px;
        .yipaiHeader {
          display: block;
          width: 90.25px;
          height: 40px;
          background-image: url(data:image/png;base64,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);
          background-position: 50%;
          background-size: contain;
          margin: auto;
          margin-bottom: 20px;
          margin-top: -132px;
        }
        .yipaiCover {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
          width: 268px;
          height: 170px;
          img {
            width: 100%;
            height: 100%;
          }
          .yipaiTag {
            position: absolute;
            left: 12px;
            top: 12px;
            width: 80px;
            height: 32px;
            background: #fff;
            font-size: 16px;
            font-weight: 500;
            line-height: 32px;
            text-align: center;
            border-radius: 16px;
          }
        }
        .yipaiInfo {
          margin-bottom: 20px;
          font-size: 14px;
        }
        .yipaiBottom {
          .speakButton {
            font-size: 14px;
            cursor: pointer;
            display: block;
            width: 124px;
            height: 40px;
            color: #fff;
            background: #292525;
            border-radius: 40px;
            margin: 0 auto 20px;
            line-height: 40px;
            i {
              width: 24px;
              height: 24px;
              margin: 0 4px 0 20px;
            }
          }
        }
      }

      .recommend {
        color: #292525;
        padding: 24px 28px 28px;
        background: #f7f7f8;
        border-radius: 16px;
        margin-top: 28px;
        max-width: 338px;
        box-sizing: border-box;

        .recommendHeader {
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 16px;
        }
        .recommendList {
          width: 268px;
          .recommendListItem {
            margin-bottom: 24px;
            .recommendItem {
              cursor: pointer;
              display: flex;
              flex-direction: row;
              .avater {
                width: 48px;
                height: 48px;
                border-radius: 100%;
                margin-right: 12px;
                flex-shrink: 0;
              }

              .cover {
                width: 60px;
                height: 60px;
                border-radius: 10px;
                margin-right: 16px;
              }
              .info {
                display: flex;
                flex-direction: column;
                font-size: 14px;
                .name {
                  color: #292525;
                  font-weight: 500;
                  margin-bottom: 4px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
