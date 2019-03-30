<template>
  <div class="rightsList">
    <!-- 面包屑 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格 -->
    <el-table :data="tableData" border>
      <el-table-column prop="num" label="#" width="30"></el-table-column>
      <el-table-column prop="competence" label="权限名称" width="150"></el-table-column>
      <el-table-column prop="path" label="路径" width="200"></el-table-column>
      <el-table-column prop="hierarchy" label="层级" width="100"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "roles",
  data() {
    return {
      tableData: [
        {
          num: "1",
          competence: "商品管理",
          path: "goods",
          hierarchy:'一级'
        },
          {
          num: "1",
          competence: "商品管理",
          path: "goods",
          hierarchy:'一级'
        },
          {
          num: "1",
          competence: "商品管理",
          path: "goods",
          hierarchy:'一级'
        },
          {
          num: "1",
          competence: "商品管理",
          path: "goods",
          hierarchy:'一级'
        },
          {
          num: "1",
          competence: "商品管理",
          path: "goods",
          hierarchy:'一级'
        },
      ]
    };
  }
};
</script>

<style>
</style>
