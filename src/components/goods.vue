<template>
  <div class="userList">
    <!-- 面包屑 -->
    <my-bread titleOne="商品管理" titleTwo="商品列表"></my-bread>

    <el-row>
      <!-- 输入框  -->
      <el-col :span="5">
        <el-input placeholder="请输入内容" v-model="sendData.query" class="input-with-select">
          <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <!-- 添加用户 -->
      <el-col :span="4">
        <el-button type="success" plain @click="addFormVisible = true">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="goodslist" style="width:100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="goods_name" label="商品名称"></el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)"></el-table-column>
      <el-table-column prop="goods_weight" label="商品重量"></el-table-column>
      <el-table-column prop="add_time" label="创建时间"></el-table-column>
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
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <!-- @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    :current-page="currentPage4"-->
    <el-pagination
      :page-sizes="[10, 20, 50, 100]"
      :page-size="sendData.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @current-change="currentChange"
      @size-change="sizeChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      //用户数据
      goodslist: [],
      total: 0,
      //页码
      sendData: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    async search() {

      let res = await this.$axios.get("goods", { params: this.sendData });
      console.log(res);
      this.goodslist = res.data.data.goods;
      this.total=res.data.data.total;
      this.sendData.query='';
    },
    //删除
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "狠心删除",
        cancelButtonText: "留你狗命",
        type: "warning"
      })
        .then(async () => {
          let res = await this.$axios.delete(`goods/${row.goods_id}`);
          this.search();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //分页
    sizeChange(size) {
      this.sendData.pagesize = size;
      this.search();
    },
    currentChange(current) {
      this.sendData.pagenum = current;
      this.search();
    }
  },
  //响应数据
    created() {
        this.search();
  }
};
</script>

<style lang="scss">
</style>
