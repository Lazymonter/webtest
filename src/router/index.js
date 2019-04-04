import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/Main'
import UserInfo from '@/views/users/UserInfo'
import Allconfig from '@/views/users/Allconfig'
import alarm from "@/views/computers/alarm"
import webssh from "@/views/computers/webssh"
import Register from '@/views/users/Register'
import Login from '@/views/users/Login'
import hostgrouplist from "@/views/computers/hostgrouplist"
import hosts from "@/views/computers/Hosts"
import grouphosts from "@/views/computers/GroupHosts"
import host from "@/views/computers/Host"
import test from "@/views/test"
import cpu from "@/components/cpu"
import mywebssh from "@/views/computers/mywebssh"
import disk from "@/components/disk"
import ansibletask from "@/views/taskdo/Ansibletask"
import taskapply from "@/views/taskdo/TaskApply"
import adhoc from "@/views/taskdo/AdhocView"
import playbook from "@/views/taskdo/PlaybookView"
import agentapply from "@/views/taskdo/AgentApply"
import netflowapply from "@/views/taskdo/NetflowApply"
import mysqlapply from "@/views/taskdo/MysqlApply"
import mysqlchecklog from "@/views/mysqlcheck/Mysqlchecklog"
import mysqlfilelog from "@/views/mysqlcheck/Mysqlfilelog"
import waf from "@/views/proxy/waf"
import setproxy from "@/views/proxy/setproxy"
import argsattack from "@/views/proxy/attack/argsattack"
import fileattack from "@/views/proxy/attack/fileattack"
import ccattack from "@/views/proxy/attack/ccattack"
import cookieattack from "@/views/proxy/attack/cookieattack"
import postattack from "@/views/proxy/attack/postattack"
import uaattack from "@/views/proxy/attack/uaattack"
import netflowcheck from "@/views/netflow/netflowcheck"
import cookiefilter from "@/views/proxy/filter/cookiefilter"
import filefilter from "@/views/proxy/filter/filefilter"
import postfilter from "@/views/proxy/filter/postfilter"
import useragentfilter from "@/views/proxy/filter/useragentfilter"
import ccfilter from "@/views/proxy/filter/ccfilter"
import argsfilter from "@/views/proxy/filter/argsfilter"

import netflowdisplay from "@/views/netflow/netflowdisplay"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: main,
      children:[
        {
          path:'hostlist',
          name:"Hostgrouplist",
          component:hostgrouplist
        },
        {
          path:'hosts',
          name:"Hosts",
          component:hosts
        },
        {
          path:'grouphosts',
          name:"grouphosts",
          component:grouphosts
        },
        {
          path:'alarm',
          name:"alarm",
          component:alarm
        },
        {
          path:'webssh',
          name:"webssh",
          component:webssh
        },
        {
          path: 'userinfo',
          name: 'UserInfo',
          component: UserInfo,
        },
        {
          path: 'allconfig',
          name: 'Allconfig',
          component: Allconfig,
        },{
          path:'host',
          name:"Host",
          component:host
        },{
          path:'ansibletask',
          name:"Ansibletask",
          component:ansibletask,
          children:[
            {
              path:'playbook',
              name:"playbook",
              component:playbook
            },{
              path:'adhoc',
              name:"adhoc",
              component:adhoc
            }
          ]
        },{
          path:'taskapply',
          name:"TaskApply",
          component:taskapply,
          children:[{
            path:'agentapply',
            name:"agentapply",
            component:agentapply
          },
          {
            path:'netflowapply',
            name:"netflowapply",
            component:netflowapply
          },
          {
            path:'mysqlapply',
            name:"mysqlapply",
            component:mysqlapply
          }]
        },
        {
          path:'mysqlchecklog',
          name:"mysqlchecklog",
          component:mysqlchecklog
        },
        {
          path:'mysqlfilelog',
          name:"mysqlfilelog",
          component:mysqlfilelog
        },
        {
          path:'waf',
          name:"waf",
          component:waf
        },
        {
          path:'setproxy',
          name:"setproxy",
          component:setproxy,
          children:[
            {
              path:'argsfilter',
              name:"argsfilter",
              component:argsfilter
            },
            {
              path:'filefilter',
              name:"filefilter",
              component:filefilter
            },
            {
              path:'useragentfilter',
              name:"useragentfilter",
              component:useragentfilter
            },
            {
              path:'postfilter',
              name:"postfilter",
              component:postfilter
            },
            {
              path:'cookiefilter',
              name:"cookiefilter",
              component:cookiefilter
            },
            {
              path:'ccfilter',
              name:"ccfilter",
              component:ccfilter
            },
            {
              path:'argsfilter',
              name:"argsfilter",
              component:argsfilter
            }]
        },
        {
          path:'argsattack',
          name:"argsattack",
          component:argsattack
        },
        {
          path:'ccattack',
          name:"ccattack",
          component:ccattack
        },
        {
          path:'cookieattack',
          name:"cookieattack",
          component:cookieattack
        },
        {
          path:'postattack',
          name:"postattack",
          component:postattack
        },
        {
          path:'fileattack',
          name:"fileattack",
          component:fileattack
        },
        {
          path:'uaattack',
          name:"uaattack",
          component:uaattack
        },{
          path:'netflowdisplay',
          name:'netflowdisplay',
          component:netflowdisplay
        },
        {
          path:'netflowcheck',
          name:'netflowcheck',
          component:netflowcheck
        }
      ]
    },

    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
   {
    
    path: '/mywebssh',
    name: 'mywebssh',
    component: mywebssh
   },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/disk',
      name: 'disk',
      component: disk    }
  ]
})
