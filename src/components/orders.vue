<template>
  <div class="userList">
    <!-- 面包屑 -->
    <my-bread titleOne="订单管理" titleTwo="订单列表"></my-bread>
    <!-- 表格 -->
    <el-table :data="orderslist" style="width:100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="order_number" label="订单编号"></el-table-column>
      <el-table-column prop="order_price" label="订单价格"></el-table-column>
      <el-table-column prop="pay_status" label="是否付款">
          <template slot-scope="scope">
              <el-button v-if="scope.row.pay_status==='0'" type="danger" plain disabled size="mini">未付款</el-button>
              <el-button v-if="scope.row.pay_status==='1'" type="success" plain disabled size="mini">已付款</el-button>
             
          </template>
        
      </el-table-column>
      <el-table-column prop="is_send" label="是否发货"></el-table-column>
      <el-table-column prop="update_time" label="下单时间"></el-table-column>
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
      formLabelWidth: "120px"
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
