<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/images/logo.png" alt>
    </div>
    <div class="login-box">
      <h2>用户登入</h2>
      <el-form
        :model="loginFrom"
        :rules="rules"
        ref="loginFrom"
        label-position="top"
        label-width="80px"
      >
        <el-form-item class="title" label="名称" prop="userName">
          <el-input v-model="loginFrom.userName"></el-input>
        </el-form-item>
        <el-form-item class="title" label="活动区域" prop="passWord">
          <el-input v-model="loginFrom.passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm('loginFrom')" type="primary">登入</el-button>
          <el-button @click="resetForm('loginFrom')" type="success">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginFrom: {
        userName: "",
        passWord: ""
      },
      rules: {
        userName: [
          { required: true, message: " 请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个字符", trigger: "blur" }
        ],
        passWord: [
          { required: true, message: " 密码不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "长度在6-16个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        } else {
          this.$message.error({
            message: "数据格式错误,请按照提示修改",
            duration: 1500
          });

          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
.login {
  height: 100%;
  background-image: url("../assets/images/timg.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    display: flex;
    width: 520px;
    justify-content: center;
    margin-bottom: 50px;
  }
  .el-form-item__label {
    color: #fff;
    font-size: 18px;
  }
  .login-box {
    width: 540px;
    height: 420px;
    box-sizing: border-box;
    box-shadow: 0 0 5px #fff;
    border-radius: 10px;
    background-color: rgba($color: #fff, $alpha: 0.05);

    padding: 35px;
    color: #fff;
    .btn {
      width: 100%;
    }
  }
}
</style>
