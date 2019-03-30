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
          <el-button type="danger" round>登出</el-button>
        </el-col>
      </el-row>1
    </el-header>
    <!-- 主体容器 -->
    <el-container class="my-container">
      <!-- 左边导航 -->
      <el-aside width="200px" class="my-aside">
        <!-- 导航栏菜单 -->
        <el-menu
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo"
          router
        >
          <!-- 用户管理 -->
          <el-submenu index="1" >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="users">
                <span class="el-icon-menu"></span>
                <span>用户列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 权限管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="roles">
                <span class="el-icon-menu"></span>
                <span>角色列表</span>
              </el-menu-item>
                 <el-menu-item index="rights">
                <span class="el-icon-menu"></span>
                <span>权限列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 商品管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <span class="el-icon-menu"></span>
                <span>商品列表</span>
              </el-menu-item>
               <el-menu-item index="3-2">
                <span class="el-icon-menu"></span>
                <span>分类参数</span>
              </el-menu-item>
               <el-menu-item index="3-3">
                <span class="el-icon-menu"></span>
                <span>商品分类</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 订单管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">
                <span class="el-icon-menu"></span>
                <span>订单列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 数据统计 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <span class="el-icon-menu"></span>
                <span>数据列表</span>
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
  name: "index"
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
