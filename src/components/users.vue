<template>
  <div class="userList">
    <!-- 面包屑 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <!-- 输入框  -->
      <el-col :span="5">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <!-- 添加用户 -->
      <el-col :span="4">
        <el-button type="success" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" style="width:980" border>
      <el-table-column prop="num" label="#" width="30"></el-table-column>
      <el-table-column prop="userName" label="姓名" width="150"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="250"></el-table-column>
      <el-table-column prop="phone" label="电话" width="250"></el-table-column>
      <el-table-column prop="userMode" label="用户状态" width="60">
        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-table-column>
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
  name: "users",
  data() {
    return {
      tableData: [
        {
          num: "1",
          userName: "admin",
          email: "adsfad@qq.com",
          phone: "13948892932"
        },
        {
          num: "1",
          userName: "admin",
          email: "adsfad@qq.com",
          phone: "13948892932"
        },
        {
          num: "1",
          userName: "admin",
          email: "adsfad@qq.com",
          phone: "13948892932"
        },
        {
          num: "1",
          userName: "admin",
          email: "adsfad@qq.com",
          phone: "13948892932"
        }
      ],
      value1: false,
      value2: true
    };
  }
};
</script>

<style lang="scss">

    .bread{
      background-color: #d3dce6;
      line-height: 45px;
      padding-left: 15px;
    }

</style>
