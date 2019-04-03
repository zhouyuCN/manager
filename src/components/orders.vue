<template>
  <div class="userList">
    <!-- 面包屑 -->
    <my-bread titleOne="订单管理" titleTwo="订单列表"></my-bread>
    <!-- 表格 -->
    <el-table :data="orderslist" style="width:100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="order_number" label="订单编号"></el-table-column>
      <el-table-column prop="order_price" label="订单价格"></el-table-column>
      <el-table-column prop="mobile" label="是否付款">
        <template slot-scope="scope">
          <el-button v-if="scope.row.order_pay==='0'" type="danger" plain disabled size="mini">未付款</el-button>
          <el-button v-else type="success" plain disabled size="mini">已付款</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="is_send" label="是否发货"></el-table-column>
      <el-table-column prop="create_time" label="下单时间">
        <template slot-scope="scope">{{scope.row.create_time | doTime('YYYY-MM-DD HH:mm:ss')}}</template>
      </el-table-column>
      <el-table-column prop="option" label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            plain
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
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
    <!-- 弹窗 -->
    <el-dialog title="添加用户" :visible.sync="addFormVisible">
      <el-form :model="addForm" :rules="rules" ref="addForm">
        <el-form-item label="用户名称" :label-width="formLabelWidth" prop="username">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth" prop="password">
          <el-input  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input  autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUserForm('addForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      //用户数据
      orderslist: [],
      total: 0,
      //页码
      sendData: {
        pagenum: 1,
        pagesize: 10
      },
      formLabelWidth: "120px",
      addFormVisible:false,
    };
  },
  methods: {
    //刷新页面
    async syncPage() {
      let res = await this.$axios.get("orders", { params: this.sendData });
      console.log(res);
      this.orderslist = res.data.data.goods;
      this.total = res.data.data.total;
    },
    handleEdit() {
      this.addFormVisible=true
    },
    //分页
    sizeChange(size) {
      this.sendData.pagesize = size;
      this.syncPage();
    },
    currentChange(current) {
      this.sendData.pagenum = current;
      this.syncPage();
    }
  },
  //响应数据
  created() {
    this.syncPage();
  }
};
</script>

<style lang="scss">
</style>
