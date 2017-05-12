var modal = weex.requireModule('modal')
let stream = weex.requireModule('stream')

export default {
  data() {
    return {
      baseUrl: './src/assets/images/index/'
    }
  },
  methods: {
    jump(to) {
      if (this.$router && to) {
        // console.log(to)
        if (isNaN(to)) {
          this.$router.push(to)
        } else {
          this.$router.go(to)
        }
      }
    },
    getStarCount(news, page, callback) {
      return stream.fetch(
        {
          method: 'GET',
          type: 'json',
          url: 'http://wangyi.butterfly.mopaasapp.com/news/api?type=' +
            news +
            '&page=' +
            page +
            '&limit=10'
        },
        callback
      )
    },
    msgToast(msg, dur = 0.3) {
      modal.toast({
        message: msg,
        duration: dur
      })
    },
    msgInfo(msg) {
      return new Promise((resolve, reject) => {
        modal.alert(
          {
            message: msg,
            okTitle: '确定'
          },
          function(value) {
            resolve(true)
          }
        )
      })
    },
    msgQuestion(msg) {
      return new Promise((resolve, reject) => {
        modal.confirm(
          {
            message: msg,
            okTitle: '确定',
            cancelTitle: '取消'
          },
          function(value) {
            if (value === 'OK') {
              resolve(true)
            } else {
              resolve(false)
            }
          }
        )
      })
    }
  }
}
