<!-- 饿了么表格导入与导出 -->
<!------------------------------------------------------------------->
<!--
写在前面的话：
>>>本案例基于ElementUI中的Upload上传组件。
开发准备工作：
1、安装依赖
npm install -S file-saver xlsx  （这里其实安装了2个依赖）
npm install -D script-loader

2、加入两个转换依赖
本项目中在src>plugins>excel，放入2个JS文件分别是：Blob.js和Export2Excel.js
3、为高复用导入/导出方法已做封装，在/utils/commonFun.js中
-->
<!------end---------------------------------------------------------->

<template>
  <el-card class="pageWarp" shadow="always">
    <div class="Btns">
      <el-button size="small" type="primary" @click="exportExcel">导出EXCEL</el-button>
      <el-upload
        action="/"
        :on-change="importExcel"
        :auto-upload="false"
        :show-file-list="false"
        accept=".xls, .xlsx"
      >
        <el-button type="primary" size="small">EXCEL导入</el-button>
      </el-upload>
    </div>
    <el-table :data="tableData" border stripe>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="市区"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="zip" label="邮编"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "",
  components: {},
  data () {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王1虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王2虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王3虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王4虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王5虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王6虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王7虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 导出
    exportExcel () {
      const tHeader = ["日期", "姓名", "省份", "市区", "地址", "邮编"];
      const filterVal = ["date", "name", "province", "city", "address", "zip"];
      /*
          tHeader 表头文字
          filterVal 表头对应的key
          tableData 表格数据
          '学生名单' 导出的文件名
          */
      exportToExcel(tHeader, filterVal, this.tableData, "学生名单");
    },
    // 导入
    importExcel (files) {
      if (files) {
        if (!/\.(xls|xlsx)$/.test(files.name.toLowerCase())) {
          this.$message.error("上传格式不正确，请上传xls或者xlsx格式");
          return false;
        }
        let parms = {
          date: "日期",
          name: "姓名",
          province: "省份",
          city: "市区",
          address: "地址",
          zip: "邮编"
        };
        readExcel(this.tableData, parms, files);
      }
    },
    deleteRow (index, rows) {
      rows.splice(index, 1);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.Btns {
  display: flex;
  margin-bottom: 15px;
  
}
.el-button {
    margin-right: 15px;
  }
</style>
