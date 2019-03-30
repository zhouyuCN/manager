<template>
  <div class="login">
    <div class="login-box">
      <h2>用户登入</h2>
      <el-form label-position="top" label-width="80px" >
        <el-form-item ><span class="ico">* </span><span> 用户名称</span>
          <el-input ></el-input>
        </el-form-item>
         <el-form-item ><span class="ico">* </span><span> 用户密码</span>
          <el-input></el-input>
        </el-form-item>
        <el-form-item >
          <el-button class="btn" type="primary">登入</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang="scss">
.login {
    height: 100%;
    background-color:#324152 ;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box{
        width: 540px;
        height: 420px;
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 10px;
        background-color: #fff;
        padding: 35px;
        .btn {
            width: 100%;
        }
        .ico {
            display: inline-block;
            color: red;
        }
    }
}
</style>
