<template>
<el-container>
  <div class="intro-div">
    <div class="intro-text">
      <h1 style="font-size: 2.5em">智能时尚搭配系统</h1>
      <br/>
      <h1 style="font-size: 1.6em">一两句说明</h1>
    </div>
    <div class="start-button">
      <el-button v-if="isLogin" type="primary" round @click="gotoview">开始使用</el-button>
      <el-button v-if="isLogout" type="primary" round @click="gotologin">先登陆哟</el-button>
    </div>
  </div>
  <div class="image-div">
    <el-image
    style="width:300px; height:350px"
    :src="imageurl"
    >
    </el-image>
  </div>
</el-container>
</template>

<script>
import $backend from '../backend'
export default {
  data () {
    return {
      imageurl: require('../assets/face.png'),
      isLogin: false,
      isLogout: true
    }
  },
  methods: {
    loginjudge () {
      $backend.getLoginInfo()
        .then(res => {
          this.isLogin = res['isLogin']
          this.isLogout = !this.isLogin
        })
    },
    gotologin () {
      this.$router.push({ path: '/login' })
    },
    gotoview () {
      this.$router.push({ path: '/view' })
    }
  },
  created () {
    this.loginjudge()
  }
}
</script>

<style scoped>
.el-container{
  height: 90%;
  width:100%;
  background-color: rgb(5, 20, 34);
  position: absolute;
}
/* .el-image:hover{
  box-shadow: 0 0 40px #cac6c6;
} */
  .intro-div{
    /* width: 86%;
    height: 100%;
    position: absolute; */
    /* background-size: 100% 100%; */
    background-color: rgb(5, 20, 34);
  }
  .intro-text{
    color: aliceblue;
    margin-top: 100px;
    margin-left: 160px;
    text-align: center;
    font-family: "Microsoft YaHei";
  }
  .start-button{
    margin-top: 60px;
    margin-left: 160px;
    text-align: center;
  }
  .image-div{
    margin: 60px auto;
  }
</style>
