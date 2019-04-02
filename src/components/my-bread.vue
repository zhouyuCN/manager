<template>
  <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{titleOne}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{titleTwo}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    props:['titleOne','titleTwo']

};
</script>

<style>
.bread {
  background-color: #d3dce6;
  line-height: 45px;
  padding-left: 15px;
}
</style>
