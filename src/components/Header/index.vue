<template>
  <div class="headerContainer">
    <div class="headerMain">
      <div class="logoBox">
        <a class="logo">
          <i class="iconfont icon-icon-test"></i>
        </a>
        <h1 class="title">少数派</h1>
      </div>
      <div class="menuBox">
        <div class="menuItem">
          <div class="menuItem1">
            <i class="iconfont icon-M"></i>
            <span>Matrix社区</span>
          </div>
          <div class="menuItem2List">
            <div class="menuItem2">
              <i class="iconfont icon-M"></i>
              <span>社区广场</span>
            </div>
            <div class="menuItem2">
              <i class="iconfont icon-M"></i>
              <span>一派</span>
            </div>
          </div>
        </div>
        <div class="menuItem">
          <i class="iconfont icon-fufei"></i>
          <span>付费订阅</span>
        </div>
        <div class="menuItem">
          <div class="menuItem1">
            <i class="iconfont icon-xing"></i>
            <span>特别策划</span>
          </div>
          <div class="menuItem2List">
            <div class="menuItem2">
              <i class="iconfont icon-M"></i>
              <span>专题精选</span>
            </div>
            <div class="menuItem2">
              <i class="iconfont icon-M"></i>
              <span>相机陈列馆</span>
            </div>
            <div class="menuItem2">
              <i class="iconfont icon-M"></i>
              <span>Shortcart</span>
            </div>
          </div>
        </div>
        <div class="menuItem">
          <div class="menuItem1">
            <i class="iconfont icon-store"></i>
            <span>Pi Store</span>
          </div>
          <div class="menuItem2List">
            <div class="menuItem2">
              <i class="iconfont icon-M"></i>
              <span>正版软件</span>
            </div>
            <div class="menuItem2">
              <i class="iconfont icon-M"></i>
              <span>官方淘宝</span>
            </div>
          </div>
        </div>
        <div class="menuItem">
          <i class="iconfont icon-fly"></i>
          <span>Tron 计划</span>
        </div>
      </div>
      <div class="userBox">
        <i
          :class="isShowSearch ? 'el-icon-close' : 'el-icon-search'"
          @click="showSearchBox"
        ></i>
        <button class="login">登录</button>
      </div>
    </div>
    <!-- <div class="searchMain" v-show="isShowSearch">
      <div class="searchContainer">
        <div class="searchBox">
          <input
            type="text"
            placeholder="热门搜索"
            autofocus="autofocus"
            ref="search"
          />
        </div>
        <div class="keywords">
          <span class="label left">热门搜索</span>
          <ul class="keywordList">
            <li class="keyword">工具</li>
            <li class="keyword">工具</li>
            <li class="keyword">工具</li>
            <li class="keyword">工具</li>
            <li class="keyword">工具</li>
            <li class="keyword">工具</li>
            <li class="keyword">工具</li>
          </ul>
          <span class="label right">换一组</span>
        </div>
      </div>
    </div> -->
    <el-dialog
      :visible.sync="isShowSearch"
      :modal="false"
      width="100%"
      top="60px"
      :show-close="false"
      :before-close="beforeClose"
    >
      <div class="searchMain" v-show="isShowSearch">
        <div class="searchContainer">
          <div class="searchBox">
            <input
              type="text"
              placeholder="热门搜索"
              autofocus="autofocus"
              ref="search"
            />
          </div>
          <div class="keywords">
            <span class="label left">热门搜索</span>
            <ul class="keywordList">
              <li
                class="keyword"
                v-for="(keyword, index) in keywords"
                :key="index"
              >
                {{ keyword }}
              </li>
            </ul>
            <span class="label right" @click="changeKeywordList">换一组</span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      isShowSearch: false,
      currentIndex: 0,
    }
  },
  methods: {
    // 1-点击显示搜索框
    showSearchBox() {
      this.isShowSearch = !this.isShowSearch
      this.$nextTick(() => {
        this.$refs.search.focus()
      })
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    },
    // 2-对话框关闭之前
    beforeClose(done) {
      document.body.style.overflow = ''
      document.body.style.height = ''
      done()
    },
    // 3-获取关键字
    getKeywordList() {
      this.$store.dispatch('getKeywordList')
    },
    // 4-改变关键字
    changeKeywordList() {
      this.currentIndex = this.currentIndex + 7
      if (this.currentIndex > 99) {
        this.currentIndex = 0
      }
    },
  },
  computed: {
    // 1-拿到 keywordList
    ...mapState({
      keywordList: (state) => state.home.keywordList || [],
    }),
    // 2-根据keywordList 计算出一个新的关键字数组
    keywords() {
      let { currentIndex } = this
      return this.keywordList.slice(currentIndex, currentIndex + 7)
    },
  },
  mounted() {
    this.getKeywordList()
    this.$store.dispatch('getCardImgList')
  },
}
</script>

<style lang="less" scoped>
body.openModal {
  height: 100vh;
  overflow: hidden;
}
.headerContainer {
  color: aliceblue;
  width: 100%;
  height: 60px;
  line-height: 60px;
  min-width: 1120px;
  background-color: #292525;
  .headerMain {
    display: flex;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
    .logoBox {
      height: 60px;
      width: 101px;
      .logo {
        .iconfont {
          box-sizing: border-box;
          height: 60px;
          font-size: 30px;
          color: white;
          padding: 3px;
          border-radius: 50%;
          background-color: rgb(218, 40, 42);
          // margin-right: 10px;
        }
      }
      .title {
        height: 60px;
        box-sizing: border-box;
        float: right;
      }
    }
    .menuBox {
      display: flex;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      color: #e5e5e5;
      .menuItem {
        position: relative;
        height: 60px;
        box-sizing: border-box;
        margin: 0 20px;
        .menuItem2List {
          position: fixed;
          left: 0;
          right: 0;
          top: 60px;
          height: 0px;
          overflow: hidden;
          z-index: 98;
          font-weight: 500;
          display: flex;
          justify-content: center;
          background: rgba(41, 37, 37, 0.7);
          .menuItem2 {
            padding: 0 20px;
            cursor: pointer;
            &.menuItem2:hover {
              background: rgba(41, 37, 37, 0.8);
            }
          }
        }
        &:nth-child(1):hover .menuItem2List {
          height: 60px;
        }
        &:nth-child(3):hover .menuItem2List {
          height: 60px;
        }
        &:nth-child(4):hover .menuItem2List {
          height: 60px;
        }
        .iconfont {
          margin-right: 10px;
        }
        span {
          font-size: 14px;
        }
      }
    }
    .userBox {
      height: 60px;
      line-height: 60xp;
      & > i {
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        color: #e5e5e5;
        margin-right: 24px;
        display: inline-block;
        width: 32px;
        height: 32px;
      }
      .login {
        font-size: 14px;
        padding: 5px 10px;
        border-radius: 20px;
        outline: none;
        border: none;
      }
    }
  }
  .searchMain {
    width: 100%;
    position: relative;
    background-color: #fff;
    // z-index: 99;
    .searchContainer {
      width: 100%;
      max-width: 810px;
      margin: 0 auto;
      color: black;
      padding: 32px 0;
      .searchBox {
        // position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
        input {
          width: 100%;
          background: #f5f5f5;
          color: #292525;
          border: 1px solid transparent;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-transition: all 0.2s;
          transition: all 0.2s;
          font-size: 14px;
          height: 60px;
          line-height: 14px;
          padding: 23px 15px 23px 14px;
          outline: none;
          &:focus {
            border: 1px solid #f5f5f5;
            background-color: transparent;
          }
        }
      }
      .keywords {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        .label {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-size: 16px;
          text-align: center;
          letter-spacing: 0.1em;
          color: #655e5e;
          display: inline-block;
          margin-right: 20px;
          vertical-align: middle;
          line-height: 23px;
          &:last-child {
            cursor: pointer;
          }
        }
        .keywordList {
          .keyword {
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            font-size: 12px;
            text-align: center;
            display: inline-block;
            color: #8e8787;
            margin-right: 10px;
            background: #f5f5f5;
            line-height: 24px;
            padding: 0 12px;
            border-radius: 14px;
            cursor: pointer;
            vertical-align: middle;
          }
        }
        .labelRight {
          float: right;
        }
      }
    }
  }
  /deep/ .el-dialog .el-dialog__header {
    padding: 0;
  }
}
</style>
