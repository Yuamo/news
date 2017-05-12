
<template>
  <div class="box1">
    <div class="box1-1" :style="{borderBottomColor: item.color}" @click="clk(index,item.path)" v-for="item,index in banner">
      <text class="txt1" :style="{color:item.color}" :value="item.txt"></text>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bannerList'],
  data() {
    return {
      banner: this.bannerList,
      color1: this.bannerList[0].color,
      color2: this.bannerList[1].color,
    }
  },
  computed: {},
  methods: {
    clk(num,path) {
      for (let i = 0, j = this.banner.length; i < j; i++) {
        if (i == num) {
          this.bannerList[i].color = this.color1
        } else {
          this.bannerList[i].color = this.color2
        }
      }
      this.$emit('bannerClk', num,path)
    }
  },
  created() {

  }
}
</script>
<style scoped>
.box1 {
  flex-direction: row;
  width: 750px;
  height: 100px;
}

.box1-1 {
  border-bottom-color: #d9d9d9;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.txt1 {
  font-size: 30px;
  color: #707070;
}
</style>
