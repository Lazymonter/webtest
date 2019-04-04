<template>
    <div class="background">
        <el-row>
            <el-col :span="6" offset="9" style="text-align:center;padding-top:150px;font-size:70px;color:#409EFF">
                IBE
            </el-col>
          <el-col :span="8" offset="8">
              <div class="login" >
                  <input type="text"  v-model="input" placeholder="请输入您的账号"/>
                  <input type="password"  v-model="input" placeholder="请输入您的密码"/>
                  <el-button type="success" class="login_button">登录</el-button>
                  <a href="#">注册账号</a>
              </div>
          </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.background{
    background: white;
    position:fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
}
.login{
    border-radius: 5px;
    height: 200px;
    margin-top: 150px;
    background: white;;
    opacity: 0.6;
    text-align: center;
    background: transparent;
    
}

input{
    outline: none;
    border:none;
    border-bottom: 1px solid grey;
    display: inline-block;
    width:100%;
    font-size: 18px;
    text-align: center;
    margin-top: 40px;
    border-radius: 5px;
    background: transparent;

}
.login_button{
    margin-top: 50px;
    height: 40px;
    width: 100%;
    font-size: 20px;
    background-color:#409EFF;
    border: none;
    margin-bottom: 20px;
}
</style>