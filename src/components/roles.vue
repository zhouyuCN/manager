<template>
  <div class="userList">
    <!-- 面包屑 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 添加用户 -->
    <el-button type="success" plain>添加用户</el-button>
    <!-- 表格 -->
    <el-table :data="tableData" style="width:980" border>
      <el-table-column prop="ico" width="30">
        <el-collapse>
          <el-collapse-item title name="1"></el-collapse-item>
        </el-collapse>
      </el-table-column>
      <el-table-column prop="num" label="#" width="30"></el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="150"></el-table-column>
      <el-table-column prop="render" label="角色描述" width="250"></el-table-column>
      <el-table-column prop="option" label="操作" width="175">
        <el-button type="primary" plain size="mini" icon="el-icon-edit"></el-button>
        <el-button type="warning" plain size="mini" icon="el-icon-delete"></el-button>
        <el-button type="danger" plain size="mini" icon="el-icon-check"></el-button>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <!-- @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    :current-page="currentPage4"-->
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
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
          roleName: "主管",
          render: "技术负责人"
        },
        {
          num: "1",
          roleName: "主管",
          render: "技术负责人"
        },
        {
          num: "1",
          roleName: "主管",
          render: "技术负责人"
        },
        {
          num: "1",
          roleName: "主管",
          render: "技术负责人"
        }
      ]
    };
  }
};
</script>

<style>
</style>
