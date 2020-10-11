<template>
  <div class="column">
    <div class="title">{{ categories ? categories : list.category }}</div>
    <div class="item-wrapper">
      <div
        class="item"
        v-for="item in list.children ? list.children : list"
        :key="item.id"
      >
        <router-link :to="to">
          <div class="content-wrapper">
            <img :src="`${CDN}${item.banner}`" alt="" />
            <div class="hover-card">
              <div class="hover-card-title">{{ item.title }}</div>
              <div class="hover-card-content">
                {{ item.description }}
              </div>
              <div class="hover-card-footer">
                <div class="hover-card-price">
                  <!-- item.price 原数据是不带小数点的数字，例如1200实际价格是12.00 -->
                  ￥<span>{{ (item.price / 100).toFixed(2) }}</span>
                  <!-- ￥<span>{{ item.price.toString().slice(0, -2) + '.' + item.price.toString().slice(-2)}}</span> -->
                </div>
                <div class="hover-card-trial" v-if="item.probation_total">
                  免费阅读 <span>{{ item.probation_total }}</span> 章
                </div>
              </div>
            </div>
          </div>
          <div class="info-wrapper">
            <h4>{{ item.title }}</h4>
            <div class="price">
              ￥<span>{{ (item.price / 100).toFixed(2) }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: ["list", "CDN", "to", "categories"],
};
</script>

<style lang="less" scoped>
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
      margin: 0 15px 20px 0;
      width: 197px;
      .content-wrapper {
        position: relative;
        width: 197px;
        height: 262px;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;
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
      .info-wrapper {
        h4 {
          font-size: 16px;
          line-height: 22px;
          font-weight: 400;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .price {
          color: #fd281a;
          span {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
