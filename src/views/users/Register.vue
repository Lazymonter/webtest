<template>
    <div>
        <el-row>
          <el-col :span="24" Extra large class="titlefont">注册账号</el-col>
        </el-row>
        <el-row :gutter="20" class="register_item">
          <el-col :span="4" :offset="4" class="registfont textalign">账号</el-col>
          <el-col :span="8" ><el-input  placeholder="请输入账号" v-model="username" clearable></el-input></el-col>
          <el-col :span="8"  class="errorfont" v-show="false">您输入的账号有误</el-col>
        </el-row>
        <el-row :gutter="20" class="register_item">
          <el-col :span="4" :offset="4" class="registfont textalign">密码</el-col>
          <el-col :span="8" ><el-input type="password"  placeholder="请输入密码" v-model="password" clearable></el-input></el-col>
          <el-col :span="8"  class="errorfont" v-show="false">您输入的密码有误</el-col>
        </el-row>
         <el-row :gutter="20" class="register_item">
          <el-col :span="4" :offset="4" class="registfont textalign">性别</el-col>
          <el-col :span="8" > 
              <el-radio v-model="radio" label="male">男</el-radio>
              <el-radio v-model="radio" label="female">女</el-radio>
              </el-col>
          <el-col :span="8"  class="errorfont" v-show="true">{{birthday}}</el-col>
        </el-row>

        <el-row :gutter="20" class="register_item">
          <el-col :span="4" :offset="4" class="registfont textalign">出生日期</el-col>
          <el-col :span="8" ><el-date-picker v-model="birthday"  type="date" placeholder="选择日期" style="width:100%"></el-date-picker></el-col>
          <el-col :span="8"  class="errorfont" v-show="false">您输入的出生日期有误</el-col>
        </el-row>
        
        <el-row :gutter="20" class="register_item">
          <el-col :span="4" :offset="4" class="registfont textalign">用户昵称</el-col>
          <el-col :span="8" ><el-input  placeholder="请输入用户昵称" v-model="input10" clearable></el-input></el-col>
          <el-col :span="8"  class="errorfont" v-show="false">您输入的用户昵称有误</el-col>
        </el-row>
        <el-row :gutter="20" class="register_item">
          <el-col :span="4" :offset="4" class="registfont textalign">邮箱</el-col>
          <el-col :span="8" ><el-input  placeholder="请输入邮箱"  
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]" v-model="input10" clearable></el-input></el-col>
          <el-col :span="8"  class="errorfont" v-show="false">您输入的邮箱有误</el-col>
        </el-row>
       
        <el-row :gutter="20" class="register_item">
          <el-col :span="4" :offset="4" class="registfont textalign">手机号码</el-col>
          <el-col :span="8" ><el-input  placeholder="请输入手机号码" v-model="input10" clearable></el-input></el-col>
          <el-col :span="8"  class="errorfont" v-show="false">您输入的手机号码有误</el-col>
        </el-row>
        <el-row :gutter="20" class="register_item">
          <el-col :span="4" :offset="4" class="registfont textalign">验证码</el-col>
          <el-col :span="8" ><el-input  placeholder="请输入验证码" v-model="input10" clearable></el-input></el-col>
          <el-col :span="8"  class="errorfont" v-show="false">您输入的验证码有误</el-col>
        </el-row>

        <el-row>
          <el-col :span="24" class="textalign">
              <el-button type="success" class="btn_space">注册</el-button>
              <el-button type="warning" class="btn_space">返回</el-button>
          </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "秦羽根",
                radio:"male",
                birthday:""
            }
        },
    }
</script>

<style scoped>
.btn_space{
    margin-left: 50px;
    margin-right: 50px;
}


.register_item{
    margin-bottom: 25px
}
.titlefont{
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 30px
}
.errorfont{
    line-height: 40px;
    color: red;
    font-size: 10px;
}
.registfont{
    font-size: 15px
}
.textalign{
    line-height: 40px;
    text-align:center
}
</style>