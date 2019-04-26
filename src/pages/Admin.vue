<template>
  <el-container>
    <el-aside width="none">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="rgb(0, 21, 41)"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>购物商城</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">商品管理</el-menu-item>
                <el-menu-item index="1-2">栏目管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>会员管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">会员列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>商城订单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">订单管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>

    </el-aside>
    <el-container>
      <el-header>
        <el-row
          type="flex"
          class="row-bg"
          justify="space-between"
        >
          <el-col :span="6">
            <el-radio-group
              v-model="isCollapse"
              style="margin-bottom: 5px;"
             
            >
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :span="6" class="header_right">
            <img src="http://img4.imgtn.bdimg.com/it/u=631949713,552237531&fm=26&gp=0.jpg" alt="" id="userimg">
          <span class="user_name">蜡笔小新</span><a href="#">退出</a>
          </el-col>
        </el-row>


      

      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.el-col {
  
  width: 100%;
  height: 100%;
}
.el-container > .el-aside {
  text-align: left;
}
.el-row {

  height: 90%;
}

.el-menu-vertical-demo {
  margin-top: 60px;
  border-right: none;
}
.el-menu-item-group>.el-menu-item-group__title{
  display: none;
}





.el-header {
  background-color: #fff;
  line-height: 60px;
}
.el-radio-group{
  margin: 0;
}
.header_right{
  text-align: right;

}
.el-radio-button__inner{
   padding: 8px 10px;
}
.user_name{
  margin: 0 10px;
}
#userimg{
  width: 30px;
  height: 30px;

  border-radius: 30%;
  display: inline-block;
  vertical-align: middle;

}




.el-aside {
  background-color: rgb(0, 33, 64);
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app,
.el-container {
  width: 100%;
  height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
