<template>
    <!--只用ios能用-->

    
    <div class="time-layout" v-if="Am||Pm">
        <!--时间弹层-->
        <div class="sel-time" v-if="Am">
            <div class="backceng"  @click="clkDiv"></div>
            <div class="time-title">
                <text class="txt1" value="">2017.3.21 上午</text>
            </div>
            <scroller class="sel-time-s">
                <div class="times"  v-for="(time,index) in timeAmList" @click="selTime(time)">
                    <text class="txt1" :value="time"></text>
                </div>
            </scroller>
        </div>
        <div class="sel-time" v-if="Pm">
            <div class="backceng"  @click="clkDiv"> </div>
            <div class="time-title">
                <text class="txt1" value="">2017.3.21 下午</text>
            </div>
            <scroller class="sel-time-s">
                <div class="times"  v-for="(time,index) in timePmList" @click="selTime(time)">
                    <text class="txt1" :value="time"></text>
                </div>
            </scroller>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'Am', 'Pm'
        ],
        data() {
            return {
                timeAmList: [
                    '09:00',
                    '09:15',
                    '09:30',
                    '09:45',
                    '10:00',
                    '10:15',
                    '10:30',
                    '10:45',
                    '11:00',
                    '11:15',
                    '11:30',
                    '11:45',
                    '12:00',
                ],
                timePmList: [
                    '09:00',
                    '09:15',
                    '09:30',
                    '09:45',
                    '10:00',
                    '10:15',
                    '10:30',
                    '10:45',
                    '11:00',
                    '11:15',
                    '11:30',
                    '11:45',
                    '12:00',
                ]
            }
        },
        methods: {
            selTime(time) {
                this.$emit('selTime', time)
            },
            clkDiv() {
                this.$emit('clkDiv')
            },
            selAmTime(d, index) {
                this.Am = true;
                this.Pm = false;
            },
            selPmTime(d, index) {
                this.Pm = true;
                this.Am = false;
            }
        }
    }
</script>

<style scoped>
    .time-layout {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 750px;
        flex: 1;
    }
    
    .backceng {
        position: absolute;
        bottom: 700px;
        left: 0px;
        z-index: 5;
        width: 750px;
        height: 1000px;
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .time-title {
        position: absolute;
        bottom: 620px;
        left: 0px;
        z-index: 99;
        width: 750px;
        height: 80px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #eeeeee;
    }
    
    .sel-time-s {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 750px;
        height: 620px;
        background-color: #ffffff;
        flex-direction: column;
        z-index: 99;
    }
    
    .sel-time {
        position: absolute;
        bottom: 116px;
        left: 0px;
        width: 750px;
        height: 2000px;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0);
        z-index: 99;
    }
    
    .times {
        width: 750px;
        height: 80px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-bottom-style: solid;
        border-bottom-color: #e5e5e5;
        border-bottom-width: 1px;
    }
    
    .txt1 {
        font-size: 30px;
        text-align: center;
    }
</style>