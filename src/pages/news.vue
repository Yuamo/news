<template>
  <div>
    <v-header :title="title" @clkright="clkright"></v-header>
  
    <v-toggle :bannerList="bannerList" @bannerClk="bannerClk"></v-toggle>
    <list class="appmain" @loadmore="load" loadmoreoffset="10">
  
      <cell class="news-box" v-for="item in newsList">
        <image class="news-img" :src="item.imgurl" > </image>
      </cell>
    </list>
  </div>
</template>

<script>

export default {
  data() {
    return {
      baseurl: '',
      title: {
        info: '资讯新闻',
        url1: '',
        url2: ''
      },
      bannerList: [
        {
          txt: '军事',
          color: 'red',
          path: 'war'
        },
        {
          txt: '体育',
          color: '#000000',
          path: 'sport'
        },
        {
          txt: '科技',
          color: '#000000',
          path: 'tech'
        },
        {
          txt: '教育',
          color: '#000000',
          path: 'edu'
        },
        {
          txt: '娱乐',
          color: '#000000',
          path: 'ent'
        },
        {
          txt: '财经',
          color: '#000000',
          path: 'money'
        },
        {
          txt: '股票',
          color: '#000000',
          path: 'gupiao'
        },
        {
          txt: '旅游',
          color: '#000000',
          path: 'travel'
        },
        {
          txt: '女人',
          color: '#000000',
          path: 'lady'
        }  
      ],
      newsList: [ ],
      newsType: 'war',
      page: 1
    }
  },
  methods: {
    load(){
      this.getMeg(this.newsType,this.page)
      this.page++
    },
    clkright() { },
    bannerClk(num,path) {
      this.page = 1
      this.newsType = path
      this.newsList = []
      console.log(this.newsType+'  ;;;;'+this.page)
      this.getMeg(this.newsType,this.page)
      this.page++
    }, 
    getMeg(m,p){ 
      this.getStarCount (m,p, res => {
      let data = res.status==200?res.data.list:''
      this.newsList.push(...data)
    }) 
    }
  },
  async created(){
    this.getMeg('war',this.page)
    this.page++
    console.log( this.newsList)
  }
}
</script>
<style scoped>
.appmain {
  position: absolute;
  top: 200px;
  bottom: 0px;
  width: 750px;
  left: 0px;
}

.news-box {
  width: 750px;
  border-bottom-style: solid;
  border-bottom-color: #d9d9d9;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
}

.news-img {
  width: 750px;
  height: 400px;
}
</style>
