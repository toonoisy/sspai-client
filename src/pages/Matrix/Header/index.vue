<template>
  <!-- 头部 -->
  <header class="header">
    <div class="headerContainer">
      <div class="headerMain">
        <div class="logoBox">
          <div class="logo">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sspai"></use>
            </svg>
            <span class="title">返回少数派</span>
          </div>
        </div>
        <div class="headerCenter">
          <i class="iconfont icon-Matrix"></i>
        </div>
        <div class="userBox">
          <i class="iconfont icon-serch"></i>
          <button class="login">登录</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 999;
  .headerContainer {
    height: 100%;
    .headerMain {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1140px;
      margin: auto;
      padding: 0 12px;
      height: 100%;
      .logoBox {
        cursor: pointer;
        .logo {
          .icon {
            width: 26px;
            height: 26px;
            vertical-align: middle;
            margin-right: 8px;
          }
        }
        .title {
          font-size: 14px;
          vertical-align: middle;
          line-height: 20px;
        }
      }
      .headerCenter {
        .iconfont {
          font-size: 18px;
        }
      }
      .userBox {
        color: #655e5e;
        .iconfont {
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          margin-right: 24px;
          display: inline-block;
        }
        .login {
          font-size: 14px;
          padding: 5px 10px;
          border-radius: 20px;
          outline: none;
          border: none;
          background: #f5f5f5;
          cursor: pointer;
        }
        .login:hover {
          background: #fff;
        }
      }
    }
  }
}
</style>
