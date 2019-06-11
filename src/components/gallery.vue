<template>
  <div id="gallery">
    <waterfall ref="waterfall" :gap=24 :imgsArr="imgsArr" :imgWidth=280 :maxCols=4 :isLogin="isLogin" @scrollReachBottom="getData">
    </waterfall>
  </div>
</template>

<script>
import $backend from '../backend'
import waterfall from '@/components/waterfall.vue'
export default {
  name: 'gallery',
  data () {
    return {
      imgsArr: [],
      group: 0,
      isLogin: false
    }
  },
  components: {
    waterfall
  },
  methods: {
    getData () {
      $backend.fetchPersonal()
        .then(res => {
          this.group++
          if (this.group === 5) {
            this.$refs.waterfall.waterfallOver()
            return
          }
          res = res.map(x => ({
            'src': '/api/images/' + x['key'],
            'swap': '/api/faceswap/' + x['key']
          }))
          this.imgsArr = this.imgsArr.concat(res)
        })
    },
    getLoginInfo () {
      $backend.getLoginInfo()
        .then(res => {
          this.isLogin = res['isLogin']
        })
    }
  },
  created () {
    this.getData()
    this.getLoginInfo()
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
#app {
  position: relative;
  #header {
    display: block;
    text-align: center;
    background: #000;
    color: #cccccc;
    line-height: 32px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    position: fixed;
    z-index: 999;
    width: 100%;
  }
  #gallery {
    background: rgb(5, 20, 34);
    position: absolute;
    height: 90%;
    width: 100%;
  }
#app {
  overflow: auto;
  position: relative;
  .some-info {
    line-height: 1.6;
    text-align: center;
  }
}
}
</style>
