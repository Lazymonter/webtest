<template>
    <div>
        <el-row>
          <el-col :span="4" :offset=4 class="registfont textalign">账号</el-col>
          <el-col :span="8" ><el-input  placeholder="请输入内容" v-model="input10" clearable></el-input></el-col>
          <el-col :span="4" :offset=1 class="errorfont" v-show="true">您的账号输入错误</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
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