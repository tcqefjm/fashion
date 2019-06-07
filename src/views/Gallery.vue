<template>
  <div id="gallery">
    <Waterfall ref="waterfall" :gap=24 :imgsArr="imgsArr" :imgWidth=280 :maxCols=4 :isLogin="isLogin" @scrollReachBottom="getData">
    </Waterfall>
  </div>
</template>

<script>

import $backend from '../backend'
import Waterfall from '@/components/Waterfall.vue'

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
    Waterfall
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
            'src': "/api/images/" + x['key'],
            'swap': "/api/faceswap/" + x['key']
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

<style lang="scss">
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
    position: absolute;
    top: 32px;
    bottom: 0;
    width: 100%;
  }
}
#app {
  overflow: auto;
  position: relative;
  .some-info {
    line-height: 1.6;
    text-align: center;
  }
}
</style>
