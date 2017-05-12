<template>
  <div>
    <div class="foot">
      <div class="tabbar" @click="jump('/index'),changediv('1')">
        <image class="images" :src="baseurl+items[0]"></image>
        <text class="txton" :style="{color: toggle[0]}" :value="txts[0]"></text>
      </div>
      <div class="tabbar" @click="jump('/hospitalIndex'),changediv('2')">
        <image class="images" :src="baseurl+items[1]"></image>
        <text class="txton" :style="{color: toggle[1]}" :value="txts[1]"></text>
      </div>
      <div class="tabbar" @click="jump('/newsIndex'),changediv('3')">
        <image class="images" :src="baseurl+items[2]"></image>
        <text class="txton" :style="{color: toggle[2]}" :value="txts[2]"></text>
      </div>
      <div class="tabbar" @click="jump('/meIndex'),changediv('4')">
        <image class="images" :src="baseurl+items[3]"></image>
        <text class="txton" :style="{color: toggle[3]}" :value="txts[3]"></text>
      </div>
    </div>
  </div>
</template>

<script>
// 使用方法
// toggle: ['#999999', '#999999', '#2e95e6', '#999999'],
// items: ['homeOff@3x.png', 'hosOff@3x.png', 'news@3x.png', 'meOff@3x.png'],
export default {
  props: ['toggle', 'items'],
  data() {
    return {
      baseurl: './src/assets/images/index/',
      txts: [
        '首页',
        '医院',
        '资讯',
        '我的',
      ]
    }
  },
  methods: {
    changediv(num) {
      // console.log(this.toggle)
    }
  }
}
</script>

<style scoped>
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

.txton {
  font-size: 22px;
  line-height: 46px;
  text-align: center;
}
</style>