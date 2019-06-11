<template>
  <div class="reg-div">
    <div class="register-wrapper">
      <div id="register">
        <p class="title">注册界面</p>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="demo-ruleForm"
        >
          <!-- <p class="tips">选择头像</p> -->
          <el-form-item prop="file">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item prop="username">
            <el-input v-model="ruleForm2.username" auto-complete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">注册</el-button>
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import $backend from '../backend'
export default {
  data () {
    // <!--验证用户名是否合法-->
    let checkName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        file: '',
        username: ''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        username: [{ validator: checkName, trigger: 'change' }]
      },
      imageUrl: '',
      imgw: 0,
      imgh: 0
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      this.ruleForm2.file = file
      this.imageUrl = URL.createObjectURL(file)
      return false
      // 阻止图片上传，等到所有内容填写完成之后一起上传
    },
    // <!--提交注册-->
    submitForm (formName) {
      let params = new FormData()
      params.append('image', this.ruleForm2.file)
      params.append('user', this.ruleForm2.username)
      params.append('pass', this.ruleForm2.pass)
      $backend.registerUser(params)
        .then(function (res) {
          alert(res.status)
        })
    },
    // <!--进入登录页-->
    gotoLogin () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style scoped>
.reg-div{
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(5, 20, 34);
}
/* .avatar-uploader  */
.el-upload {
  border: 2px dashed #da2c2c;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  border: 2px dashed #8c939d;
  border-radius: 6px;
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar-uploader-icon:hover{
  border-color: #409EFF
}
.avatar {
  /* width: 120px; */
  height: 180px;
  display: block;
}
.loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-wrapper img {
  position: relative;
  z-index: 1;
}
.register-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
#register {
  max-width: 340px;
  margin: 10px auto;
  background: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 10px #cac6c6;
}
.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}
.tips{
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  margin: 10px;
  text-align: left;
  float: left;
}
.el-form-item {
  text-align: center;
}
.login {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #1ab2ff;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
}
.login:hover {
  color: #2c2fd6;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
</style>
