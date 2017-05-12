<template>
    <div class="boxbase">
        <!--输入数组列表-->
        <scroller class="appmain">
            <div class="box">
                <div v-for="(val,key) in group" v-if="val.length!=0" :ref="key">
                    <div class="box-title">
                        <text class="txt1" :value="key=='ZZ'?'#':key"></text>
                    </div>
                    <div class="box1" v-for="t,index in val">
                        <text class="txt2" @click="clk(t.deptId,t.deptName)">{{t.deptName}}</text>
                    </div>
                </div>
            </div>
        </scroller>
        <!--侧边跳转字母导航-->
        <div class="box2">
            <text v-for="val,key in group" class="txtIndex" @click="toIndex(key)" :value="key=='ZZ'?'#':key" v-if="val.length!=0"></text>
        </div>
    </div>
</template>
<script>
import pinyin from './ChinesePY.js'
const dom = weex.requireModule('dom')

export default {
    props: ['department'],
    data() {
        return {
            depList: this.department,
            group: {
                A: [],
                B: [],
                C: [],
                D: [],
                E: [],
                F: [],
                G: [],
                H: [],
                I: [],
                J: [],
                K: [],
                L: [],
                M: [],
                N: [],
                O: [],
                P: [],
                Q: [],
                R: [],
                S: [],
                T: [],
                U: [],
                V: [],
                W: [],
                X: [],
                Y: [],
                Z: [],
                ZZ: [],
            }
        }
    },
    methods: {
        toIndex(str) {
            dom.scrollToElement(this.$refs[str]['0'], {})
        },
        clk(deptId, depName) {
            this.$emit('clk', deptId, depName)
        }
    },
    created() {
        let dl = this.depList
        if (dl.length > 1) {
            for (let i = 0, j = dl.length; i < j; i++) {
                let c = pinyin.GetQP(dl[i].deptName).substr(0, 1)
                if (c == 'a') {
                    this.group.A.push(dl[i])
                } else if (c == 'b') {
                    this.group.B.push(dl[i])
                } else if (c == 'c') {
                    this.group.C.push(dl[i])
                } else if (c == 'd') {
                    this.group.D.push(dl[i])
                } else if (c == 'e') {
                    this.group.E.push(dl[i])
                } else if (c == 'f') {
                    this.group.F.push(dl[i])
                } else if (c == 'g') {
                    this.group.G.push(dl[i])
                } else if (c == 'h') {
                    this.group.H.push(dl[i])
                } else if (c == 'i') {
                    this.group.I.push(dl[i])
                } else if (c == 'j') {
                    this.group.J.push(dl[i])
                } else if (c == 'K') {
                    this.group.K.push(dl[i])
                } else if (c == 'l') {
                    this.group.L.push(dl[i])
                } else if (c == 'm') {
                    this.group.M.push(dl[i])
                } else if (c == 'n') {
                    this.group.N.push(dl[i])
                } else if (c == 'o') {
                    this.group.O.push(dl[i])
                } else if (c == 'p') {
                    this.group.P.push(dl[i])
                } else if (c == 'q') {
                    this.group.Q.push(dl[i])
                } else if (c == 'r') {
                    this.group.R.push(dl[i])
                } else if (c == 's') {
                    this.group.S.push(dl[i])
                } else if (c == 't') {
                    this.group.T.push(dl[i])
                } else if (c == 'u') {
                    this.group.U.push(dl[i])
                } else if (c == 'v') {
                    this.group.V.push(dl[i])
                } else if (c == 'w') {
                    this.group.W.push(dl[i])
                } else if (c == 'x') {
                    this.group.X.push(dl[i])
                } else if (c == 'y') {
                    this.group.Y.push(dl[i])
                } else if (c == 'z') {
                    this.group.Z.push(dl[i])
                } else {
                    this.group.ZZ.push(dl[i])
                }
            }
        } else {
            this.msgToast('请检查您的网络连接！')
        }
    }
}
</script>

<style scoped>
.boxbase {
    position: absolute;
    top: 100px;
    bottom: 0px;
    width: 750px;
    left: 0px;
    z-index: 1;
}

.box-title {
    width: 750px;
    height: 34px;
    background-color: #f5f5f4;
}

.box2 {
    position: absolute;
    top: 40px;
    right: 10px;
    flex-direction: column;
}

.txtIndex {
    flex: 1;
    font-size: 32px;
    color: #008dfc;
    margin-top: 4px;
    margin-bottom: 3px;
}

.txt1 {
    font-size: 28px;
    margin-left: 30px;
}

.txt2 {
    font-size: 28px;
    margin-left: 30px;
    width: 500px;
}

.appmain {
    position: absolute;
    background-color: #f5f5f4;
    top: 0px;
    bottom: 110px;
    width: 750px;
    left: 0px;
}

.box {
    width: 750;
    flex-direction: column;
    margin-top: 10px;
}

.box1 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin-top: 10px;
    width: 750px;
    height: 80px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #d9d9d9;
}
</style>