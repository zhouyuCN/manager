<template>
  <!-- 整体容器 -->
  <el-container class="index-container">
    <!-- 头部区域 -->
    <el-header class="my-header">
      <el-row>
        <el-col :span="4">
          <img src="../assets/images/logo.png" alt>
        </el-col>
        <el-col :span="17">
          <h2>黑马电商管理系统</h2>
        </el-col>
        <el-col :span="3" class="Logout">
          <el-button type="danger" @click="logout" round>登出</el-button>
        </el-col>
      </el-row>1
    </el-header>
    <!-- 主体容器 -->
    <el-container class="my-container">
      <!-- 左边导航 -->
      <el-aside width="200px" class="my-aside">
        <!-- 导航栏菜单 -->
        <el-menu
          default-active="users"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo"
          router
        >
          <!-- 左侧菜单 -->
          <el-submenu :index="`${item.id}`" v-for="(item,index) in menuList" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item  :index="it.path ||users" v-for="(it,index) in item.children" :key="index" >
                <span class="el-icon-menu" ></span>
                <span>{{it.authName}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容 -->
      <el-main class="my-main">
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      //左侧菜单
      menuList:[],
    }
  },
  methods:{
    //退出
    logout(){
      window.sessionStorage.removeItem('token');
      this.$router.push('/login');
      this.$message.success('退出成功')
    }
  },
  //验证登入
  beforeCreate() {
    if(!(window.sessionStorage.getItem('token'))){
      this.$router.push('/login');
      this.$message.error('请登入')
     
    }
  },
  //左侧菜单栏渲染
 async created(){
  let res = await  this.$axios.get('menus');
  this.menuList=res.data.data;
  }
};
</script>


<style  lang="scss">
.index-container {
  height: 100%;
  .my-header {
    height: 60px;
    line-height: 60px;
    h2 {
      text-align: center;
      margin: 0;
    }
    .Logout {
      text-align: right;
    }
  }
  .my-container {
    .my-aside {
      background-color: #545c64;
      .el-menu {
        border: 0;
      }
    }
    .my-main {
      background-color: #e9eef3;
      padding-top: 0;
    }
  }
}
</style>
