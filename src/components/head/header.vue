<template>
  <div class="header">
    <div class="item1">
      <image class="img-bg" :src="title.url1" @click="clkleft('1')"></image>
    </div>
    <div>
      <text class="txt1" :value="title.info"></text>
    </div>
    <div class="item2">
      <image class="img-bg2" :src="title.url2" @click="clkright('2')"></image>
    </div>
  </div>
</template>
<script>
// var modal = weex.requireModule('modal')

export default {
  props: ['title'],
  data() {
    return {}
  },
  methods: {
    clkright(e) {
      this.$emit('clkright', e)
    },
    clkleft(e) {
      this.$emit('clkleft', e)
    }
  }
}
</script>
<style scoped>
.img-bg2 {
  width: 50px;
  height: 40px;
}

.img-bg {
  width: 50px;
  height: 50px;
}

.header {
  width: 750px;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ff4443;
  z-index: 99;
  border-top-width: 0px;
}

.item1 {
  margin-left: 20px;
}

.item2 {
  margin-right: 20px;
}

.txt1 {
  font-size: 34px;
  color: #fdfcfc
}
</style>