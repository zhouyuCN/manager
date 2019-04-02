<template>
  <div class="userList">
    <!-- 面包屑 -->
    <my-bread titleOne="用户管理" titleTwo="用户列表"></my-bread>
    <!-- 表格 -->
    <el-table :data="rights" style="width:100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="authName" label="权限名称"></el-table-column>
      <el-table-column prop="path" label="路径"></el-table-column>
      <el-table-column prop="level" label="层级">
        <template slot-scope="scope">
          <span v-if="scope.row.level ==='0'">一级</span>
          <span v-if="scope.row.level ==='1'">二级</span>
          <span v-if="scope.row.level ==='2'">三级</span>
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
      rights: []
    };
  },

  async created() {
    let res = await this.$axios.get(`rights/list`);
    this.rights = res.data.data;
  }
};
</script>

<style lang="scss">
</style>
