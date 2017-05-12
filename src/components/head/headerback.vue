<template>
       <div class="header">
            <div class="item1" @click="clkleft">
                <image class="img-bg1"  resize="contain" :src="title.url1" ></image>
                <text  class="titletxt2">返回</text>
            </div>
            <div>
                <text class="titletxt1" :value="title.info"></text>
            </div>
            <div class="item2"  @click="clkright">
                <image class="img-bg2" resize="contain" :src="title.url2"></image>
                <text  class="titletxt2" :src="title.txtright"></text>
            </div>
        </div>
</template>
<script>
    export default {
        props: ['title'],
        methods: {
            clkleft() {
                this.$emit('clkleft')
            },
            clkright() {
                this.$emit('clkright')
            }
        }
    }
</script>

<style scoped>
    .img-bg1 {
        width: 30px;
        height: 50px;
    }
    
    .img-bg2 {
        width: 50px;
        height: 50px;
    }
    
    .header {
        width: 750px;
        height: 100px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #2e95e6;
        z-index: 99;
    }
    
    .item1 {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
    }
    
    .item2 {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }
    
    .titletxt1 {
        font-size: 34px;
        color: #fdfcfc;
    }
    
    .titletxt2 {
        font-size: 32px;
        color: #fdfcfc;
    }
</style>