<template>
  <div class="cardContainer">
    <ul class="cardList">
      <li class="cardItem">
        <a href="javascript:;">
          <img
            src="https://cdn.sspai.com/article/0eadcf3b-30ed-29d9-e5e4-44b894b8d48b.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!528x288r/gravity/Center/crop/528x288/interlace/1"
            alt=""
          />
        </a>
      </li>
      <li class="cardItem">
        <a href="javascript:;">
          <img
            src="https://cdn.sspai.com/article/a55dfc88-3d99-55a3-7240-088bd67cc275.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!528x288r/gravity/Center/crop/528x288/interlace/1"
            alt=""
          />
        </a>
      </li>
      <li class="cardItem">
        <a href="javascript:;">
          <img
            src="https://cdn.sspai.com/article/6a1690eb-757d-1eec-8197-8e722536e56d.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!528x288r/gravity/Center/crop/528x288/interlace/1"
            alt=""
          />
        </a>
      </li>
      <li class="cardItem">
        <a href="javascript:;">
          <img
            src="https://cdn.sspai.com/article/6af91fea-a54a-b8fd-9865-0f2154be7f85.png?imageMogr2/auto-orient/quality/95/thumbnail/!528x288r/gravity/Center/crop/528x288/interlace/1"
            alt=""
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style lang="less" scoped>
.cardContainer {
  width: 100%;
  margin-top: -40px;
  position: relative;
  z-index: 5;
  margin-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.3);
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
