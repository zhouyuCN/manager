<template>
  <div class="userList">
    <!-- 面包屑 -->
  <my-bread titleOne="用户管理"  titleTwo="用户列表"></my-bread>

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
    <el-table :data="userlist" style="width:100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="mg_state" label="用户状态">
        <template slot-scope="scope">
          <el-switch
            active-color="#13ce66"
            v-model="scope.row.mg_state"
            @change="startBtn(scope.row)"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
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
    <!-- 分页 -->
    <!-- @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    :current-page="currentPage4"-->
    <el-pagination
      :page-sizes="[5, 10, 15, 20]"
      :page-size="sendData.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @current-change="currentChange"
      @size-change="sizeChange"
    ></el-pagination>

    <!-- 添加用户弹窗 -->
    <el-dialog title="添加用户" :visible.sync="addFormVisible">
      <el-form :model="addForm" :rules="rules" ref="addForm">
        <el-form-item label="用户名称" :label-width="formLabelWidth" prop="username">
          <el-input v-model="addForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="addForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="addForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="addForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUserForm('addForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑用户弹窗 -->
    <el-dialog title="编辑用户" :visible.sync="editFormVisible">
      <el-form :model="editForm" ref="editForm">
        <el-form-item label="用户名称" :label-width="formLabelWidth">
          <el-input v-model="editForm.username" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="editForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="editForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserForm('editForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 用户角色弹窗 -->
    <el-dialog title="用户角色" :visible.sync="roleFormVisible">
      <el-form :model="editForm" ref="editForm">
        <el-form-item label="用户名称" :label-width="formLabelWidth">{{roleList.username}}</el-form-item>
        <el-form-item label="角色选择" :label-width="formLabelWidth">
          <el-select v-model="roleList.role_name" placeholder="请选择">
            <el-option
              v-for="item in rolenames"
              :key="item.value"
              :label="item.roleName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="roleFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="roleUserForm('editForm')">确 定</el-button>
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
      userlist: [],
      total: 0,
      //页码
      sendData: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      addFormVisible: false,
      editFormVisible: false,
      roleFormVisible: false,
      formLabelWidth: "120px",
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      editForm: {
        username: "",
        email: "",
        mobile: ""
      },
      roleList: {},
      rolenames: [],
      roleUser: [],
      rules: {
        username: [
          { required: true, message: " 请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: " 密码不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "长度在6-16个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async search() {
      let res = await this.$axios.get("users", {
        params: this.sendData
      });
      this.userlist = res.data.data.users;
      this.total = res.data.data.total;
      this.sendData.query = "";
    },

    //编辑用户
    async handleEdit(index, row) {
      this.editFormVisible = true;
      let res = await this.$axios.get(`users/${row.id}`);
      console.log(res);
      this.editForm = res.data.data;
    },
    editUserForm(editForm) {
      this.$refs[editForm].validate(async valid => {
        if (valid) {
          let res = await this.$axios.put(`users/${this.editForm.id}`, {
            email: this.editForm.email,
            mobile: this.editForm.mobile
          });
          console.log(res);
          if (res.data.meta.status === 200) {
            this.search();
            this.editFormVisible = false;
          }
        }
      });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "狠心删除",
        cancelButtonText: "留你狗命",
        type: "warning"
      })
        .then(async () => {
          let res = await this.$axios.delete(`users/${row.id}`);
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
    startBtn(row) {
      this.$axios.put(`users/${row.id}/state/${row.mg_state}`);
    },
    //添加用户
    addUserForm(addForm) {
      this.$refs[addForm].validate(async valid => {
        if (valid) {
          let res = await this.$axios.post("users", this.addForm);
          console.log(res);
          if (res.data.meta.status === 201) {
            this.search();
            this.addFormVisible = false;
          }
        } else {
          this.$message.error({
            message: "数据格式错误,请按照提示修改",
            duration: 1500
          });

          return false;
        }
      });
    },
    // 角色
    async showRole(row) {
      this.roleFormVisible = true;
      console.log(row);
      this.roleList = row;
      let res = await this.$axios.get("roles");
      this.rolenames = res.data.data;
    },
    async roleUserForm(formName) {
      let res = await this.$axios.put(`users/${this.roleList.id}/role`, {
        rid: this.roleList.role_name
      });
      if (res.data.meta.status == 200) {
        this.roleFormVisible = false;
        this.search();
      }
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
  created() {
    this.search();
  }
};
</script>

<style lang="scss">

</style>
