<template>
  
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      id="loginBox"
      :rules="rules"
    >
      <div class="login_txt">登录</div>
      <el-form-item
        label="账户:"
        prop="uname"
      >
        <el-input v-model="form.uname"></el-input>
      </el-form-item>
      <el-form-item
        label="密码:"
        prop="upwd"
      >
        <el-input
          v-model="form.upwd"
          type="password"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

</template>
<style lang="scss" scoped>
// form {
//   width: 100%;
//   height: 100%;
//   background-color: black;
// }
.login_txt {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  color: rgb(177, 67, 211);
}

#loginBox {
  width: 350px;
  height: 300px;
  margin: 0px auto;
  padding-top: 160px;
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        uname: "admin",
        upwd: "123456"
      },
      rules: {
        uname: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        upwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度不少于6个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      //表单验证，如果不符合则直接跳出，下面代码不执行
      this.$refs.form.validate(valid => {
        if (!valid) return;

        //发送请求
        this.$axios({
          method: "POST",
          url: "http://localhost:8899/admin/account/login",
          data: this.form
        }).then(res => {
          if (res.data.status === 0) {
            this.$router.push("/admin");
          } else {
            this.$message.error("账户或密码错误");
          }
        });
      });
    }
  }
};
</script>