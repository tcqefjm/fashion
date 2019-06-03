<template>
  <div id="gallery">
    <vue-waterfall-easy ref="waterfall" :gap=24 :imgsArr="imgsArr" :imgWidth=280 :maxCols=4 @scrollReachBottom="getData" @click="clickFn" @imgError="imgErrorFn">
    </vue-waterfall-easy>
  </div>
</template>

<script>

import $backend from '../backend'
import vueWaterfallEasy from 'vue-waterfall-easy/src/vue-waterfall-easy/vue-waterfall-easy.vue'

export default {
  name: 'gallery',
  data () {
    return {
      imgsArr: [],
      group: 0,
      pullDownDistance: 0
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData () {
      $backend.fetchPersonal()
        .then(res => {
          this.group++
          if (this.group === 10) {
            this.$refs.waterfall.waterfallOver()
            return
          }
          this.imgsArr = this.imgsArr.concat(res)
        })
    },
    clickFn (event, { index, value }) {
      // event.preventDefault()
      if (event.target.tagName.toLowerCase() === 'img') {
        console.log('img clicked', index, value)
      }
    },
    imgErrorFn (imgItem) {
      console.log('图片加载错误', imgItem)
    },
    pullDownMove (pullDownDistance) {
      // console.log('pullDownDistance', pullDownDistance)
      this.pullDownDistance = pullDownDistance
    },
    pullDownEnd (pullDownDistance) {
      console.log('pullDownEnd')
      if (this.pullDownDistance > 50) {
        alert('下拉刷新')
      }
      this.pullDownDistance = 0
    }
  },
  created () {
    this.getData()
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
// .__err__ .img-wraper {
//   background: url(/static/img/1.jpg) no-repeat center/100px 100px !important;
// }
#app {
  overflow: auto;
  position: relative;
  .some-info {
    line-height: 1.6;
    text-align: center;
  }
}
</style>
