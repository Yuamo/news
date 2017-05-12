<template>
  <div class="foot">
    <div class="tabbar" v-for="item,index in items" @click="clk(index,item.src)">
      <image class="images" :src="baseUrl+item.url"></image>
      <text class="txt" :style="{color:item.col}" :value="item.txt"></text>
    </div>
  </div>
</template>
<script>
export default {
  props: ['items'],
  data() {
    return {

    }
  },
  methods: {
    clk(num, src) {
      // if (num == '0') {
      //   this.items = [
      //     { url: 'home@3x.png', txt: '首页', src: '/index', col: '#2e95e6' },
      //     { url: 'hosOff@3x.png', txt: '医院', src: '/hospitalIndex', col: '#999999' },
      //     { url: 'newsOff@3x.png', txt: '资讯', src: '/newsIndex', col: '#999999' },
      //     { url: 'meOff@3x.png', txt: '我的', src: '/meIndex', col: '#999999' }
      //   ]
      // } else if (num == '1') {
      //   this.items = [
      //     { url: 'homeOff@3x.png', txt: '首页', src: '/index', col: '#999999' },
      //     { url: 'hos@3x.png', txt: '医院', src: '/hospitalIndex', col: '#2e95e6' },
      //     { url: 'newsOff@3x.png', txt: '资讯', src: '/newsIndex', col: '#999999' },
      //     { url: 'meOff@3x.png', txt: '我的', src: '/meIndex', col: '#999999' }
      //   ]
      // } else if (num == '2') {
      //   this.items = [
      //     { url: 'homeOff@3x.png', txt: '首页', src: '/index', col: '#999999' },
      //     { url: 'hosOff@3x.png', txt: '医院', src: '/hospitalIndex', col: '#999999' },
      //     { url: 'news@3x.png', txt: '资讯', src: '/newsIndex', col: '#2e95e6' },
      //     { url: 'meOff@3x.png', txt: '我的', src: '/meIndex', col: '#999999' }
      //   ]
      // } else {
      //   this.items = [
      //     { url: 'homeOff@3x.png', txt: '首页', src: '/index', col: '#999999' },
      //     { url: 'hosOff@3x.png', txt: '医院', src: '/hospitalIndex', col: '#999999' },
      //     { url: 'newsOff@3x.png', txt: '资讯', src: '/newsIndex', col: '#999999' },
      //     { url: 'me@3x.png', txt: '我的', src: '/meIndex', col: '#2e95e6' }
      //   ]
      // }
      this.jump(src)
      // this.$emit(clk, )
    }
  }
}
</script>
<style>
.foot {
  width: 750px;
  height: 116px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 50;
  flex-direction: row;
  background-color: white;
  border-top-color: #e5e5e5;
  border-top-style: solid;
  border-top-width: 1px;
}

.tabbar {
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.images {
  width: 50px;
  height: 50px;
}

.txt {
  font-size: 22px;
  line-height: 46px;
  text-align: center;
  /*color: #999999;*/
}
</style>