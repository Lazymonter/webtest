<template>
  <div>
    ElasticIP地址<el-input style="width:30%; margin:30px;" v-model="elkIp" placeholder=""></el-input>
    Elastic 端口<el-input style="width:30%; margin:30px;" v-model="port" placeholder=""></el-input>
    <div><el-button type="primary" style=" margin:30px" @click="gloableconfig">确定生效</el-button></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        elkIp:this.$ALLCONFIG.allconfig.elkip,
        port:this.$ALLCONFIG.allconfig.port
      }
    },
    methods: {
      gloableconfig() {
       this.$ALLCONFIG.allconfig.elkip=this.elkIp;
        this.$ALLCONFIG.allconfig.port=this.port;
      }
    },
  }
</script>

<style scoped>

</style>