<template>
    <div>
                <el-breadcrumb separator="/" class="bread">
                    <el-breadcrumb-item><i class="el-icon-menu"></i>服务器管理</el-breadcrumb-item>
                    <el-breadcrumb-item>主机</el-breadcrumb-item>
                </el-breadcrumb>
  <div class="tablebox">
     <el-table v-loading="loading" :data="hostData"  border style="width:100%"  tooltip-effect="dark" >
        <el-table-column type="selection" >  </el-table-column>
        <el-table-column prop="hostid" label="主机ID" sortable>
        </el-table-column>

        <el-table-column   prop="name" label="主机名称"  sortable>
        </el-table-column>

        <el-table-column   label="所在组" width="300" >
          <template slot-scope="scope">
                        <span class="table_group"
                              v-for="group in scope.row.groups">{{group.name}}  </span>
          </template>
        </el-table-column>

        <el-table-column prop="host" label="host" sortable >
        </el-table-column>



         <el-table-column label="操作"  >
                    <template slot-scope="scope">
                        <el-button size="small" type="info"
                                   @click="hostDetail(scope.$index, scope.row)">监控详情
                        </el-button>
                    </template>
        </el-table-column>

                <el-table-column label="主机状态" >
          <template slot-scope="scope">
             <el-button v-if="scope.row.available == 1" size="small" type="success">
               <i class="el-icon-check"></i>可用
             </el-button>
             <el-button v-if="scope.row.available == 0" size="small" type="danger">
               <i class="el-icon-close"></i>未知
             </el-button>
             <el-button v-if="scope.row.available == 2" size="small" type="danger">
               <i class="el-icon-close"></i> 失效
              </el-button>
          </template>
            
            
        </el-table-column>
    </el-table>
  </div>
    </div>


</template>

<script>
 import axios from 'axios'
export default {
  data() {
    return {
      loading: false,
      hostData:[
    // {
    //   "hostid": "10084",
    //   "host": "Zabbix server",
    //   "name": "Zabbix server",
    //   "available": "1",
    //   "groups": [
    //     {
    //       "groupid": "4",
    //       "name": "Zabbix servers"
    //     }
    //   ]
    // },
    // {
    //   "hostid": "10254",
    //   "host": "qoot",
    //   "name": "UbuntuNode1",
    //   "available": "1",
    //   "groups": [
    //     {
    //       "groupid": "2",
    //       "name": "Linux servers"
    //     },
    //     {
    //       "groupid": "3",
    //       "name": "Linux servers2"
    //     }
    //   ]
    // },
    // {
    //   "hostid": "10255",
    //   "host": "qoot1",
    //   "name": "UbuntuNode2",
    //   "available": "1",
    //   "groups": [
    //     {
    //       "groupid": "2",
    //       "name": "Linux servers"
    //     }
    //   ]}
      ]
    };
  },
  methods: {
    hostDetail(index,row) {
      console.log(row)
         this.$router.push({
                    path: 'Host',
                    query: {
                        hostid: row.hostid,
                        hostname: row.name
                    }
                })
    },
     getData() {
                axios.get('/monitor/hostlist/').then((res) => {
                    this.hostData = res.data.res;
                    console.log(this.hostData )
                    this.loading = false
                })
            },
  },
  mounted() {
    this.getData()
  },
  components: {

  }
};
</script>

<style scoped>
.bread{
  margin-bottom: 20px
}
.table_group{
  border: 1px solid #409EFF;
  display:inline-block;
  margin-left: 5px;
  padding: 2px;
  background-color:#409EFF;
  color:white;
  border-radius:3px;
  margin-bottom: 5px;
}

.tablebox{
 margin-top: 20px
}

</style>