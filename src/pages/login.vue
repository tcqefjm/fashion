<template>
  <div class="login-container">
    <el-form :model="ruleForm2" :rules="rules2"
             status-icon
             ref="ruleForm2"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">登陆界面</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="ruleForm2.username"
                  auto-complete="off"
                  placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="ruleForm2.password"
                  auto-complete="off"
                  placeholder="密码"
        ></el-input>
      </el-form-item>
      <br/>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:45%;float: left" @click="handleSubmit" :loading="logining">登录</el-button>
        <el-button type="primary" style="width:45%;float: right" @click="gotoReg">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import $backend from '../backend'
export default {
  data () {
    return {
      logining: false,
      ruleForm2: {
        username: '',
        password: ''
      },
      rules2: {
        username: [{ required: true, message: '请输入你的用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      checked: false
    }
  },
  methods: {
    handleSubmit (event) {
      const that = this
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          let params = new URLSearchParams()
          params.append('user', this.ruleForm2.username)
          params.append('pass', this.ruleForm2.password)
          $backend.loginUser(params)
            .then(function (res) {
              if (res.data.status === 'Success') {
                that.$router.push({ path: '/view' })
              } else {
                alert('Username or Password wrong!')
              }
            })
        } else {
          return false
        }
      })
    },
    gotoReg () {
      this.$router.push({
        path: '/register'
      })
    }
  }
}
</script>

<style scoped>
  .title{
    /* color: #cac6c6; */
    font-size: 26px;
    line-height: 60px;
  }
  .login-container {
    position: absolute;
    background: rgb(5, 20, 34);
    width: 100%;
    height: 100%;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 10px #cac6c6;
  }
  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }
  .el-form{
    /* background-color: rgb(20, 20, 71); */
  }
</style>
