<template>
    <div class="button"
         :style="{width:btn.width+'px',height:btn.height+'px',backgroundColor:backg}"
         @click="enter">
        <text class="txtbtn"
              :style="{color: btn.color,fontSize:btn.fontsize+'px'}">{{btn.value}}</text>
    </div>
</template>
<script>
export default {
    props: ['btn'],
    data() {
        return {
            backg: this.btn.background
        }
    },
    methods: {
        enter(event) {
            if (!this.btn.isNotClick){
                // console.log(event)
                // 每次都辅初始值
                this.backg = this.btn.background;
                // 当按钮按下修改按钮的颜色
                let col = this.backg;
                let r = (parseInt(col.substring(1, 3), 16) - 50) >= 0 ? (parseInt(col.substring(1, 3), 16) - 50) : parseInt(col.substring(1, 3), 16);
                let g = (parseInt(col.substring(3, 5), 16) - 50) >= 0 ? (parseInt(col.substring(3, 5), 16) - 50) : parseInt(col.substring(3, 5), 16);
                let b = (parseInt(col.substring(5, 7), 16) - 50) >= 0 ? (parseInt(col.substring(5, 7), 16) - 50) : parseInt(col.substring(5, 7), 16);
                this.backg = 'rgb(' + r + ',' + g + ',' + b + ')';
                this.$emit('enter');
            }
        }
    }
}
</script>

<style scoped>
.button {
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.txtbtn {
    text-align: center;
}
</style>