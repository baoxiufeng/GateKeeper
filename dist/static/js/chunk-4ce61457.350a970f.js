(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ce61457"],{"902b":function(e,i,t){},fb94:function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"mixin-components-container"},[t("div",[e._v(e._s(e.title))]),e._l(e.allData,(function(i){return t("CardPanel",{key:i.unique_name,staticClass:"card",attrs:{config:i},on:{error:e.errCard},model:{value:i.valued,callback:function(t){e.$set(i,"valued",t)},expression:"item.valued"}})})),t("div",{staticClass:"bottom"},[t("el-button",{attrs:{round:""},on:{click:e.clickCancel}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.clickOk}},[e._v("确认")])],1)],2)},l=[],n=(t("ac67"),t("e680"),t("a7e5"),t("8ee4")),_=(t("1bc7"),t("32ea"),t("e186"),t("7590")),d=t("c1d5"),r=t("22ce"),u=t("7ab0"),s=function(e){return[{display_name:"基本信息",sort:0,postion:"normal",unique_name:"base_info",items:[{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"6-128位字母数字下划线",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_name",field_display_name:"服务名称",field_required:!0,field_valid_rule:"",file_description:"基础的服务名称"},{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"最多255字符，必填",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_description",field_display_name:"服务描述",field_required:!0,field_valid_rule:"",file_description:"基础的服务描述"},{field_type:"textarea",field_display:"inline",field_clear:"none",field_placeholder:"例如www.baidu.com",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_hosts",field_display_name:"服务域名",field_required:!1,field_valid_rule:"",file_description:"基础的服务域名"},{field_type:"textarea",field_display:"inline",field_clear:"none",field_placeholder:"例如/path",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_http_paths",field_display_name:"服务地址",field_required:!0,field_valid_rule:"",file_description:"基础的服务地址"},{field_type:"switch",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"0|1,关闭|开启",field_value:"",field_default_value:"1",field_unique_name:"need_strip_url",field_display_name:"剥离前缀",field_required:!0,field_valid_rule:""},{field_type:"radio",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"round|weight_round|consistent_hash|random,轮询|权重轮询|一致性hash|随机",field_value:"consistent_hash",field_default_value:"",field_unique_name:"transfer_loadbalance_strategy",field_display_name:"负载类型",field_required:!0,field_valid_rule:""},{field_type:"textarea",field_display:"",field_clear:"",field_placeholder:"格式：".concat(e||"http","://127.0.0.1:8710 100"),field_option:"",field_value:"",field_default_value:"",field_unique_name:"upstream_list",field_display_name:"下游IP和权重",field_required:!0,field_valid_rule:"",file_description:""}]}]},c=function(e){return[{display_name:"基本信息",sort:0,postion:"normal",unique_name:"base_info",items:[{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"6-128位字母数字下划线",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_name",field_display_name:"服务名称",field_required:!0,field_valid_rule:"",file_description:"".concat(e,"的服务名称")},{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"最多255字符，必填",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_description",field_display_name:"服务描述",field_required:!0,field_valid_rule:"",file_description:"".concat(e,"的服务描述")},{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"本地监听的端口",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_port",field_display_name:"服务端口",field_required:!0,field_valid_rule:"",file_description:"本地监听可访问的端口"},{field_type:"radio",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"round|weight_round|consistent_hash|random,轮询|权重轮询|一致性hash|随机",field_value:"",field_default_value:"",field_unique_name:"transfer_loadbalance_strategy",field_display_name:"负载类型",field_required:!0,field_valid_rule:"",file_description:"".concat(e,"的loadbalance策略")},{field_type:"textarea",field_display:"",field_clear:"",field_placeholder:"格式：".concat(e,"://127.0.0.1:8710 100"),field_option:"",field_value:"",field_default_value:"",field_unique_name:"upstream_list",field_display_name:"下游IP和权重",field_required:!0,field_valid_rule:"",file_description:"".concat(e,"的下游服务器ip+权重")}]}]},o=function(e,i){var t="http"!==i?c:s,a=t(i);return a.forEach((function(i){i.items.forEach((function(i){i.field_value=e[i.field_unique_name]}))})),a};function f(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?f(Object(t),!0).forEach((function(i){Object(n["a"])(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}var h={http:"HTTP服务",tcp:"TCP服务",grpc:"GRPC服务"},m={name:"ServiceCreateHttp",components:{CardPanel:u["a"]},data:function(){return{title:"",card_config:[],auth:[],auth_config_selected:"",load_balance:[],load_balance_config_selected:"",isEdit:!1,submitButDisabled:!1,form:{service_name:"",service_desc:"",rule_type:0,rule:"",need_https:0,need_websocket:0,need_strip_uri:1,url_rewrite:"",header_transfor:"",round_type:2,ip_list:"",disf_name:"",disf_cluster_name:"",weight_list:"",upstream_connect_timeout:"",upstream_header_timeout:"",upstream_idle_timeout:"",upstream_max_idle:"",open_auth:0,black_list:"",white_list:"",clientip_flow_limit:"",service_flow_limit:""}}},computed:{allData:function(){return[].concat(Object(d["a"])(this.card_config),Object(d["a"])(this.auth_config_selected),Object(d["a"])(this.auth_config_options),Object(d["a"])(this.load_balance_config_selected),Object(d["a"])(this.load_balance_config_options))},auth_config_options:{get:function(){var e=this;return this.auth&&this.auth.filter((function(i){return e.auth_config_selected[0].items[0].child[0].field_value===i.unique_name}))}},load_balance_config_options:{get:function(){var e=this;return this.load_balance&&this.load_balance.filter((function(i){return e.load_balance_config_selected[0].items[0].child[0].field_value===i.unique_name}))}}},created:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var i,t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=this.$route.query&&this.$route.query.type,this.type=i,t=this.$route.query&&this.$route.query.id,this.card_config=s(this.type),i&&(this.title="创建"+h[i]),!(t>0)){e.next=11;break}this.isEdit=!0,this.fetchData(t),this.title="修改"+h[i],e.next=17;break;case 11:if(!(Object.keys(h).filter((function(e){return i===e})).length>0)){e.next=17;break}return e.next=14,Object(r["h"])();case 14:a=e.sent,"http"!==this.type&&(this.card_config=c),this.card_config=this.formatChange([].concat(Object(d["a"])(this.card_config),Object(d["a"])(a.data[i])));case 17:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),methods:{decodeItems:function(e){var i=[];return e&&e.forEach((function(e){e.child.forEach((function(e){i.push(e)}))})),i},encodeItems:function(e){var i=[],t=[],a=!1;return e.forEach((function(e){e.field_clear||(e.field_clear="none"),a?t.push(e):"none"===e.field_clear&&i.push(p(p({},e),{},{child:[e]})),a||"left"!==e.field_clear||(t=[],t.push(e),a=!0),a&&"right"===e.field_clear&&(i.push(p(p({},t[0]),{},{child:t})),a=!1)})),i},sendFormInfo:function(e){var i=this,t=JSON.parse(JSON.stringify(e));return t.forEach((function(e){e.items=i.decodeItems(e.items)})),t},formatChange:function(e,i){var t=this,a=[],l=[{display_name:"默认验证",items:[],postion:"auth",sort:2,unique_name:"default_auth"}],n=[{display_name:"默认负载",items:[],postion:"loadbalance",sort:2,unique_name:"default_loadbalance"}],_="",d="",r="",u="";e.forEach((function(e){"normal"===e.postion?(e.items=e.items&&t.encodeItems(e.items),e.items&&0!==e.items.length&&a.push(e)):"auth"===e.postion?(e.items=e.items&&t.encodeItems(e.items),_+=e.unique_name+"|",d+=e.display_name+"|",l.push(e)):"loadbalance"===e.postion&&(e.items=e.items&&t.encodeItems(e.items),r+=e.unique_name+"|",u+=e.display_name+"|",n.push(e))})),_+="default_auth",d+="默认验证",r+="default_loadbalance",u+="默认负载";var s={field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:_+","+d,field_value:i&&i.data.auth_type&&-1!==l.findIndex((function(e){return e.unique_name===i.data.auth_type}))?i.data.auth_type:"default_auth",field_default_value:"",field_unique_name:"transfer_auth_type",field_display_name:"验证规则",field_required:!1,field_valid_rule:""},c={field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:r+","+u,field_value:i&&i.data.load_balance_type&&-1!==n.findIndex((function(e){return e.unique_name===i.data.load_balance_type}))?i.data.load_balance_type:"default_loadbalance",field_default_value:"",field_unique_name:"transfer_loadbalance_type",field_display_name:"负载策略",field_required:!1,field_valid_rule:""};this.auth_config_selected=[{display_name:"服务验证",sort:3,postion:"normal",unique_name:"auth_type",items:[p({child:[s]},s)]}],this.auth=[].concat(l),this.load_balance_config_selected=[{display_name:"服务负载",sort:3,postion:"normal",unique_name:"load_balance_type",items:[p({child:[c]},c)]}],this.load_balance=[].concat(n);var o=[].concat(a);return o},clickCancel:function(e){this.$router.go(-1)},isValid:function(e,i){var t=[];return e.forEach((function(e){-1!==i.findIndex((function(i){return e.unique_name===i.unique_name}))&&t.push(e)})),t},clickOk:function(e){var i=this;if(this.err)this.$message.error({message:this.err}),this.err="";else{var t=this.sendFormInfo(this.card_config),a=t.shift(),l=this.sendFormInfo(this.auth_config_options),n=this.isValid(l,this.auth),_=this.sendFormInfo(this.load_balance_config_options),u=this.isValid(_,this.load_balance),s={http:0,tcp:1,grpc:2},c="";c="http"!==this.type?{plugin_conf:JSON.stringify(this.pluginConfChange([].concat(Object(d["a"])(t),Object(d["a"])(n),Object(d["a"])(u)))),load_type:s[this.type],service_name:a.items[0].field_value,service_desc:a.items[1].field_value,port:Number(a.items[2].field_value),load_balance_strategy:a.items[3].field_value,load_balance_type:u[0]?u[0].unique_name:"",auth_type:n[0]?n[0].unique_name:"",upstream_list:a.items[4].field_value}:{plugin_conf:JSON.stringify(this.pluginConfChange([].concat(Object(d["a"])(t),Object(d["a"])(n),Object(d["a"])(u)))),load_type:s[this.type],service_name:a.items[0].field_value,service_desc:a.items[1].field_value,http_hosts:a.items[2].field_value,http_paths:a.items[3].field_value,need_strip_uri:Number(""+a.items[4].field_value?a.items[4].field_value:a.items[4].field_default_value),load_balance_strategy:a.items[5].field_value,load_balance_type:u[0]?u[0].unique_name:"",auth_type:n[0]?n[0].unique_name:"",upstream_list:a.items[6].field_value};var o=this.$route.query&&this.$route.query.id;o>0?Object(r["j"])(p(p({},c),{},{id:+o})).then((function(){i.$message.success({message:c.service_name+"服务修改成功"}),i.$router.go(-1)})):Object(r["a"])(c).then((function(){i.$message.success({message:c.service_name+"服务创建成功"}),i.$router.go(-1)}))}},pluginConfChange:function(e){var i={};return e.forEach((function(e){i[e.unique_name]={},e.items.forEach((function(t){i[e.unique_name][t.field_unique_name]=t.field_value}))})),i},errCard:function(e){this.err=e},fetchData:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(i){var t,a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={id:i},e.next=3,Object(r["f"])(t);case 3:a=e.sent,l=o(a.data,this.type),this.card_config=this.formatChange([].concat(Object(d["a"])(l),Object(d["a"])(a.data[this.type])),a);case 6:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}()}},v=m,y=(t("fe47"),t("cba8")),b=Object(y["a"])(v,a,l,!1,null,"6a0bc019",null);i["default"]=b.exports},fe47:function(e,i,t){"use strict";t("902b")}}]);