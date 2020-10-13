<template>
  <div>
    Test
    <button @click="handleClick">dianji</button>
    <!-- 
      v-infinite-scroll="loadMore" 滚动时触发的回调函数
      infinite-scroll-disabled="busy" busy控制是否禁用loadMore false禁用 true不禁用
      infinite-scroll-distance="10" 决定了距离页尾多少px时触发loadMore
                                    <正在加载中...>的高度设置给其即可
      infinite-scroll-immediate-check 默认值true 在绑定时立即检查busy值 


     -->
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check
    >
      <div v-for="item in data" :key="item.index">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      count: 0,
      data: [],
      busy: false,
    }
  },
  methods: {
    handleClick() {
      this.$store.dispatch('addArticalCardList')
    },
    loadMore: function() {
      this.busy = true
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: this.count++ })
        }
        console.log(this.data)
        this.busy = false
      })
    },
  },
}
</script>

<style lang="less" scoped></style>
