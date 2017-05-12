<template>
    <div>
         <div class="header">
            <div class="item1" @click="jump(-1)" >
                <image class="img-bg"  resize="stretch" :src="title.url1" ></image>
            </div>
            <div>
                <text class="txt1" :value="title.info"></text>
            </div>
            <div class="item2" @click="jump('/index')">
                <image class="img-bg" resize="stretch" :src="title.url2"></image>
            </div>
        </div>
        <!--省份和城市-->
        <div class="cityBox"  v-for="item in cityList">
            <div class="province" >
                <div class="box1">
                    <text class="txt2" :value="item.province"></text>
                </div>
            </div>
            <div class="city" v-for="c in item.city" >
                 <div class="box2" v-if="show">
                    <text class="txt2" :value="c"></text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                cityList: [{
                    province: '陕西省',
                    city: [
                        '西安市',
                        '延安市',
                        '咸阳市',
                        '渭南市',
                        '宝鸡市',
                        '汉中市',
                        '商洛市',
                    ]
                }, {
                    province: '山西省',
                    city: [
                        '西安市',
                        '延安市',
                        '咸阳市',
                        '渭南市',
                        '宝鸡市',
                        '汉中市',
                        '商洛市',
                    ]
                }, {
                    province: '河南省',
                    city: [
                        '西安市',
                        '延安市',
                        '咸阳市',
                        '渭南市',
                        '宝鸡市',
                        '汉中市',
                        '商洛市',
                    ]
                }],
                title: {
                    info: '选择地区',
                    url1: ' ',
                    url2: './src/assets/images/index/message@2x.png'
                },
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .box1 {
        width: 150px;
        height: 80px;
        text-align: center;
        background-color: #fdfcfc;
    }
    
    .box2 {
        height: 50px;
        background-color: pink;
    }
    
    .cityBox {
        width: 750px;
        flex-direction: row;
    }
    
    .province {
        width: 500px;
        flex-direction: column;
        border-right-width: 1px;
        border-right-color: black;
        border-right-style: solid;
        flex: 1;
    }
    
    .city {
        width: 200px;
        height: 50px;
        flex-direction: column;
        /*border-width: 1px;
        border-color: black;
        border-style: solid;*/
        flex: 1;
    }
    
    .txt2 {
        padding-top: 10px;
        text-align: center;
    }
    /*headerCSS*/
    
    .header {
        width: 750px;
        height: 100px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #2e95e6;
    }
    
    .img-bg {
        width: 50px;
        height: 45px;
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