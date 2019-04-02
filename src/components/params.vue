<template>
  <div class="paramsBox">
    <!-- 面包屑 -->
    <my-bread titleOne="商品管理" titleTwo="分类参数"></my-bread>
    <!-- 注意 -->
    <el-alert title="注意: 只允许为第三级分类设置相关参数!" type="warning" show-icon :closable="false" class="warning"></el-alert>
    <!-- 选择分类 -->
    <el-row>
      <el-col :span="24">
        <span>请选择商品分类:&nbsp&nbsp&nbsp</span>
        <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
      </el-col>
    </el-row>
    <!-- 参数 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" class="params">
      <el-button type="primary" disabled class="params-btn">主要按钮</el-button>
      <!-- 动态 -->
      <el-tab-pane label="动态参数" name="first">
        <!-- 表格 -->
        <el-table :data="dynParamsList" style="width:100%" border>
          <el-table-column type width="50"></el-table-column>
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="username" label="商品参数" width="150"></el-table-column>
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
                type="danger"
                plain
                size="mini"
                icon="el-icon-delete"
                @click="handleDelete(scope.$index, scope.row)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 静态 -->
      <el-tab-pane label="静态参数" name="second">
        <!-- 表格 -->
        <el-table :data="dynParamsList" style="width:100%" border>
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="username" label="属性名称" width="150"></el-table-column>
          <el-table-column prop="username" label="属性值" width="150"></el-table-column>
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
                type="danger"
                plain
                size="mini"
                icon="el-icon-delete"
                @click="handleDelete(scope.$index, scope.row)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "params",
  data() {
    return {
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                }
              ]
            }
          ]
        }
      ],
      selectedOptions: [],
      selectedOptions2: [],
      activeName: "first",
      //动态参数
      dynParamsList: [{}, {}]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss">
.paramsBox{
    .warning{
        margin: 20px 0;
    }
    .params{
        margin-top: 30px;
        .params-btn{
            margin: 15px 0;
        }
    }

}
</style>
