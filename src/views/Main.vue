
<template>
<el-container class="nav" >
  <el-aside width="250px"  >
 
    <el-menu
      class="el-menu-t"
      unique-opened
      default-active="1-1"
      @open="menu_handleOpen"
      @close="menu_handleClose"
       background-color="#304156"
      text-color="#fff"
      active-text-color="#409EFF"
      v-bind:style="{  width:'250px'}"
      
      >
        <div class="title" >
          
        </div>
      <!-- 个人信息管理 -->
      <el-submenu  index="1" >
        <template slot="title">
          <div class="nav-icon icon-computer"></div>
          <span>个人信息管理</span>
        </template>
        <el-menu-item-group>
      
          <el-menu-item index="1-1" @click="toHostList">主机组</el-menu-item>
          <el-menu-item index="1-2" @click="toHosts">主机</el-menu-item>
          <el-menu-item index="1-3" @click="toalarm">安全警报</el-menu-item>
          <el-menu-item index="1-4" @click="towebssh">远程登录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 业务管理 -->
       <el-submenu  index="2" >
        <template slot="title">
          <div class="nav-icon icon-task"></div>
          <span>业务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"  @click="toAnsibletask" >简单任务</el-menu-item>
          <el-menu-item index="2-2"  @click="toTaskApply">任务部署</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 人工客服管理 -->
       <el-submenu  index="3" >
        <template slot="title">
          <div class="nav-icon icon-network"></div>
          <span>人工客服管理</span>
        </template>
        <el-menu-item-group>
       
          <el-menu-item index="3-1" @click="tonetflowdisplay">流量分析展示</el-menu-item>
          <el-menu-item index="3-2" @click="tonetflowcheck">流量详情</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <!-- 模型训练 -->
       <el-submenu  index="4" >
        <template slot="title">
          <div class="nav-icon icon-database"></div>
          <span>模型训练</span>
        </template>
        <el-menu-item-group>
     
          <el-menu-item index="4-1" @click="tomysqlchecklog">数据库日志审计</el-menu-item>
          <el-menu-item index="4-2" @click="tomysqlfilelog">数据文件操作日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 日志分析 -->
     <el-submenu  index="5" >
        <template slot="title">
          <div class="nav-icon icon-log"></div>
          <span>日志分析</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 代理服务 -->
      <el-submenu  index="6" >
        <template slot="title">
          <div class="nav-icon icon-proxy"></div>
          <span>代理服务</span>
        </template>
        <el-menu-item-group>
          
          <el-menu-item index="6-1" @click="towaf">网络防火墙</el-menu-item>
          <el-menu-item index="6-2" @click="tosetproxy">代理服务配置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     <!-- 个人信息 -->
      <el-menu-item index="7" @click="toUserInfo" >
         <template slot="title">
          <div class="nav-icon icon-person"></div>
          <span >个人信息 </span>
        </template>
      </el-menu-item>

      <el-menu-item index="8" @click="toAllconfig">
         <template slot="title">
          <div class="nav-icon icon-person"></div>
          <span > 全局配置</span>
        </template>
      </el-menu-item>
    </el-menu>
    
  </el-aside>
  
  <el-container >
    <el-header style="text-align: right; font-size: 12px; margin-bottom:10px;padding-right:30px">
        <i class="el-icon-message item"></i>
      <el-badge :value="12" class="notice">
      </el-badge>

      <i class="el-icon-bell item"></i>
      <el-badge :value="3" class="notice">
      </el-badge>
      <span class="logout" @click="dialogVisible = true">Logout</span>
     
    </el-header>
   <div >
    <el-main  >
      <!-- 跳转的内容 -->
       <router-view ></router-view>
    </el-main>
    </div>
  </el-container>
 
  
  <div>
    <el-dialog
       title="提示"
       :visible.sync="dialogVisible"
        width="30%"
       :before-close="dialog_handleClose">
       <span>是否确定要退出</span>
       <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" type="warning" style="width:50px;height:30px;">取 消</el-button>
        <el-button type="primary" @click="toLogin" style="width:50px;height:30px;">确 定</el-button>
       </span>
       </el-dialog>
  </div>
</el-container>


</template>

<script>
export default {
  data() {
    return {
      h: "",
      isCollapse: false,
      username: "jeason",
      dialogVisible: false
    };
  },
  methods: {
    //个人信息
    toUserInfo() {
      this.$router.push({ path: "/main/userinfo" });
    },
    //全局配置
    toAllconfig() {
      this.$router.push({ path: "/main/allconfig" });
    },
    //服务器管理
    toHostList() {
      this.$router.push({ path: "/main/hostlist" });
    },
    //报警日志页面
    toalarm(){
      this.$router.push({ path: "/main/alarm" });
    },
    towebssh(){
      this.$router.push({ path: "/main/webssh" });
    },
    toHosts() {
      this.$router.push({ path: "/main/hosts" });
    },
    //登出
    toLogin() {
      this.dialogVisible = false;
      this.$router.push({ path: "/login" });
    },
    toAnsibletask() {
      this.$router.push({ path: "/main/ansibletask/adhoc" });
    },
    toTaskApply() {
      this.$router.push({ path: "/main/taskapply/agentapply" });
    },
    tomysqlchecklog() {
      this.$router.push({ path: "/main/mysqlchecklog" });
    },
    tomysqlfilelog() {
      this.$router.push({ path: "/main/mysqlfilelog" });
    },
    towaf() {
      this.$router.push({ path: "/main/waf" });
    },
    tosetproxy() {
      this.$router.push({ path: "/main/setproxy/argsfilter" });
    },
    tonetflowdisplay(){
       this.$router.push({ path: "/main/netflowdisplay" });
    },
     tonetflowcheck(){
       this.$router.push({ path: "/main/netflowcheck" });
    },
    menu_handleClose() {},
    menu_handleOpen() {},
    dialog_handleClose() {},
    getscreenHeight() {}
  },
  components: {},
  computed: {
    hei() {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      );
    }
  },
  mounted() {
    this.getscreenHeight();
  }
};
</script>

<style scoped>
.userinfo {
  height: 150px;
  width: 199px;
  vertical-align: center;
  padding-top: 30px;
}
.user_img {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  border-radius: 50%;
}
.userinfo .username {
  color: white;
  padding-left: 15px;
}
.el-header {
  background-color: rgb(234, 240, 247);
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.nav {
  height: 100%;
  min-height: 800px;
  border: 1px solid #eee;
}

.nav-icon {
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
.icon-computer {
  background: url("../assets/computer.png");
  background-size: contain;
}

.icon-task {
  background: url("../assets/task.png");
  background-size: contain;
}
.icon-log {
  background: url("../assets/log.png");
  background-size: contain;
}
.icon-network {
  background: url("../assets/network.png");
  background-size: contain;
}
.icon-person {
  background: url("../assets/person.png");
  background-size: contain;
}
.icon-database {
  background: url("../assets/database.png");
  background-size: contain;
}
.icon-proxy {
  background: url("../assets/proxy.png");
  background-size: contain;
}

.logout {
  font-size: 15px;
  color: black;
  cursor: pointer;
}
.logout:hover {
  color: rgb(95, 95, 179);
}

.routerlink {
  text-decoration: None;
}

 * {
        margin: 0;
        padding: 0;
    }

    .el-menu-t{
        display: block;
        position: fixed;
        height: 100%;
        width: 250px;
        left: 0;
        top: 0;
        bottom: 0;
    }
  .item{
    font-size: 22px;
    
  }
  .notice{
    margin-right:15px;
    position:relative;
    left:-10px;
    top:10px;
  }
  i:hover{
    cursor: pointer;
  }
  .title{
    color:#409EFF;
    font-size:50px;
    height:150px;
    width:250px; 
    background-color:#304156 ;
    display:inline-block;
    line-height:150px;
    text-align:center;
    /* background-image: url("../static/logo.png"); */
    background:url("../static/logo.png") no-repeat center;
  }
</style>