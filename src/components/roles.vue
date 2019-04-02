<template>
  <div class="userList">
    <!-- 面包屑 -->
    <my-bread titleOne="权限管理" titleTwo="角色列表"></my-bread>

    <el-row>
      <!-- 添加用户 -->
      <el-col :span="4">
        <el-button type="success" plain @click="addFormVisible = true">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="userlist" style="width:100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="username" label="角色名称"></el-table-column>
      <el-table-column prop="email" label="角色描述"></el-table-column>
      <el-table-column prop="option" label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            plain
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
            type="warning"
            plain
            size="mini"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
          <el-button
            type="danger"
            plain
            size="mini"
            icon="el-icon-check"
            @click="showRole(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      //用户数据
      userlist: []
    };
  },
  methods: {

  },
  created() {

  }
};
</script>

<style lang="scss">
</style>
