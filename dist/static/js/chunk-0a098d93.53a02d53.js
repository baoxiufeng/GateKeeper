(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a098d93"],{"22ce":function(e,i,t){"use strict";t.d(i,"h",(function(){return a})),t.d(i,"g",(function(){return n})),t.d(i,"e",(function(){return r})),t.d(i,"a",(function(){return d})),t.d(i,"j",(function(){return _})),t.d(i,"f",(function(){return s})),t.d(i,"i",(function(){return u})),t.d(i,"d",(function(){return o})),t.d(i,"m",(function(){return c})),t.d(i,"b",(function(){return f})),t.d(i,"k",(function(){return p}));var l=t("b775");function a(e){return Object(l["a"])({url:"/service/service_plugin_config",method:"get",params:e})}function n(e){return Object(l["a"])({url:"/service/service_list",method:"get",params:e})}function r(e){return Object(l["a"])({url:"/service/service_delete",method:"get",params:e})}function d(e){return Object(l["a"])({url:"/service/service_add",method:"post",data:e})}function _(e){return Object(l["a"])({url:"/service/service_update",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/service/service_detail",method:"get",params:e})}function u(e){return Object(l["a"])({url:"/service/service_stat",method:"get",params:e})}function o(e){return Object(l["a"])({url:"/service/service_add_tcp",method:"post",data:e})}function c(e){return Object(l["a"])({url:"/service/service_update_tcp",method:"post",data:e})}function f(e){return Object(l["a"])({url:"/service/service_add_grpc",method:"post",data:e})}function p(e){return Object(l["a"])({url:"/service/service_update_grpc",method:"post",data:e})}},"2ad9":function(e,i,t){},3441:function(e,i,t){"use strict";var l=t("e99b"),a=t("3250"),n=t("8078"),r=t("0926"),d=[].sort,_=[1,2,3];l(l.P+l.F*(r((function(){_.sort(void 0)}))||!r((function(){_.sort(null)}))||!t("95b6")(d)),"Array",{sort:function(e){return void 0===e?d.call(n(this)):d.call(n(this),a(e))}})},"6f07":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]={name:"InputCard",components:{},filters:{},props:{config:{type:Object,default:function(){return{}}}},data:function(){return{err:""}},computed:{value:{get:function(){return this.config.field_value?this.config.field_value:this.config.field_default_value}}},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{inputs:function inputs(a){this.config.field_default_value="";var reg=eval(this.config.field_valid_rule);if(this.$message&&(this.$message.closeAll(),this.err=""),""!==a&&reg&&!reg.test(a)){this.err=this.config.field_display_name+"输入应满足："+this.config.field_valid_rule;var error_info=this.config.field_display_name+"输入异常";this.$message.error({message:error_info}),this.$emit("error",this.err)}else this.err="",this.$emit("error",this.err);this.$emit("input",""+a)}}}},"7ab0":function(e,i,t){"use strict";var l,a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v(e._s(e.pannelInfo.display_name))])]),e._l(e.pannelInfo.items,(function(i,l){return t("div",{key:l,staticClass:"wrapper-class"},[t("div",{staticStyle:{flex:"2"}},[i.field_required?t("span",{staticStyle:{color:"red","margin-right":"5px"}},[e._v(" * ")]):e._e(),t("span",{staticStyle:{"font-size":"14px"}},[e._v(e._s(i.field_display_name))]),t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:i.file_description||i.field_placeholder,placement:"top"}},[i.file_description||i.field_placeholder?t("i",{staticClass:"el-icon-question"}):e._e()]),t("span",[e._v(" :")])],1),t("div",{staticStyle:{display:"flex",flex:"8"}},e._l(i.child,(function(i,l){return t("div",{key:l,staticStyle:{"min-width":"20rem"}},["input"===i.field_type?t("InputCard",{attrs:{config:i},on:{error:e.errInput},model:{value:i.field_value,callback:function(t){e.$set(i,"field_value",t)},expression:"a.field_value"}}):e._e(),"select"===i.field_type?t("SelectCard",{attrs:{config:i},model:{value:i.field_value,callback:function(t){e.$set(i,"field_value",t)},expression:"a.field_value"}}):e._e(),"textarea"===i.field_type?t("TextareaPanel",{attrs:{config:i},on:{error:e.errTextarea},model:{value:i.field_value,callback:function(t){e.$set(i,"field_value",t)},expression:"a.field_value"}}):e._e()],1)})),0)])}))],2)},n=[],r=(t("3441"),function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("div",[t("div",[t("el-input",{attrs:{value:e.value,placeholder:e.config.field_placeholder,label:e.config.field_display_name},on:{input:e.inputs}}),e.err?t("span",{staticStyle:{color:"red","font-size":"12px",opacity:"0.8"}},[e._v(" "+e._s(e.err)+" ")]):e._e()],1)])])}),d=[],_=t("6f07"),s=_["a"],u=t("cba8"),o=Object(u["a"])(s,r,d,!1,null,"06ef8974",null),c=o.exports,f=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("div",[t("el-select",{attrs:{value:e.value,placeholder:"请选择"},on:{change:e.changes}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)])},p=[],h=(t("1bc7"),t("fc02"),{name:"SelectCard",components:{},props:{config:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{value:{get:function(){return this.config.field_value?this.config.field_value:this.config.field_default_value}},options:function(){var e=this.config.field_option.split(","),i=e[0].split("|"),t=e[1].split("|"),l=[];return t.forEach((function(e,t){l.push({value:i[t],label:e})})),l}},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{changes:function(e){this.$emit("input",e)}}}),m=h,v=Object(u["a"])(m,f,p,!1,null,"c2fadd9a",null),y=v.exports,g=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("div",[t("div",[t("el-input",{attrs:{value:e.value,placeholder:e.config.field_placeholder,label:e.config.field_display_name,type:"textarea",autosize:{minRows:2}},on:{input:e.inputs,change:e.changes}}),e.err?t("span",{staticStyle:{color:"red","font-size":"12px",opacity:"0.8"}},[e._v(" "+e._s(e.err)+" ")]):e._e()],1)])])},b=[],q=t("955d"),O=q["a"],j=Object(u["a"])(O,g,b,!1,null,"099bcb5e",null),x=j.exports,C={name:"CardPanel",components:{InputCard:c,SelectCard:y,TextareaPanel:x},props:{config:{type:Object,default:function(){return{}}}},data:function(){return l=this,{}},computed:{pannelInfo:function(){return{display_name:this.config.display_name?this.config.display_name:"基本信息",sort:this.config.sort?this.config.sort:0,postion:this.config.postion?this.config.postion:"normal",unique_name:this.config.unique_name?this.config.unique_name:"no_name",items:this.config.items?this.config.items:[]}}},watch:{pannelInfo:{deep:!0,handler:function(e,i){l.$emit("input:config",e)}}},created:function(){},mounted:function(){},destroyed:function(){},methods:{errInput:function(e){this.$emit("error",e)},errTextarea:function(e){this.$emit("error",e)}}},k=C,w=(t("ab1e"),Object(u["a"])(k,a,n,!1,null,"2ba6e446",null));i["a"]=w.exports},"955d":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]={name:"InputCard",components:{},filters:{},props:{config:{type:Object,default:function(){return{}}}},data:function(){return{err:""}},computed:{value:{get:function(){return this.config.field_value?this.config.field_value:this.config.field_default_value}}},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{inputs:function(e){this.config.field_default_value="",this.$emit("input",""+e)},changes:function changes(a){var reg=eval(this.config.field_valid_rule);if(this.$message&&(this.$message.closeAll(),this.err=""),""!==a&&reg&&!reg.test(a)){this.err=this.config.field_display_name+"输入应满足："+this.config.field_valid_rule;var error_info=this.config.field_display_name+"输入异常";this.$message.error({message:error_info}),this.$emit("error",this.err),this.$emit("input","")}else this.err="",this.$emit("error",this.err),this.$emit("input",""+a)}}}},"95b6":function(e,i,t){"use strict";var l=t("0926");e.exports=function(e,i){return!!e&&l((function(){i?e.call(null,(function(){}),1):e.call(null)}))}},a835:function(e,i,t){"use strict";t("2ad9")},ab1e:function(e,i,t){"use strict";t("dbf0")},dbf0:function(e,i,t){},fb94:function(e,i,t){"use strict";t.r(i);var l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"mixin-components-container"},[t("div",[e._v(e._s(e.title))]),e._l(e.card_config,(function(i){return t("CardPanel",{key:i.unique_name,staticClass:"card",attrs:{config:i},on:{error:e.errCard},model:{value:i.valued,callback:function(t){e.$set(i,"valued",t)},expression:"item.valued"}})})),e._l(e.auth_config_selected,(function(i){return t("CardPanel",{key:i.unique_name,staticClass:"card",attrs:{config:i},on:{error:e.errCard},model:{value:i.valued,callback:function(t){e.$set(i,"valued",t)},expression:"item.valued"}})})),e._l(e.auth_config_options,(function(i){return t("CardPanel",{key:i.unique_name,staticClass:"card",attrs:{config:i},on:{error:e.errCard},model:{value:i.valued,callback:function(t){e.$set(i,"valued",t)},expression:"item.valued"}})})),e._l(e.load_balance_config_selected,(function(i){return t("CardPanel",{key:i.unique_name,staticClass:"card",attrs:{config:i},on:{error:e.errCard},model:{value:i.valued,callback:function(t){e.$set(i,"valued",t)},expression:"item.valued"}})})),e._l(e.load_balance_config_options,(function(i){return t("CardPanel",{key:i.unique_name,staticClass:"card",attrs:{config:i},on:{error:e.errCard},model:{value:i.valued,callback:function(t){e.$set(i,"valued",t)},expression:"item.valued"}})})),t("div",{staticClass:"bottom"},[t("el-button",{attrs:{round:""},on:{click:e.clickCancel}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.clickOk}},[e._v("确认")])],1)],2)},a=[],n=(t("ac67"),t("8ee4")),r=t("c1d5"),d=(t("1bc7"),t("32ea"),t("e186"),t("7590")),_=t("22ce"),s=t("7ab0");function u(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?u(Object(t),!0).forEach((function(i){Object(n["a"])(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}var c={http:"HTTP服务",tcp:"TCP服务",grpc:"GRPC服务"},f={name:"ServiceCreateHttp",components:{CardPanel:s["a"]},data:function(){return{title:"",card_config:[{display_name:"基本信息",sort:0,postion:"normal",unique_name:"base_info",items:[{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"6-128位字母数字下划线",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_name",field_display_name:"服务名称",field_required:!0,field_valid_rule:"",file_description:"基础的服务名称"},{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"最多255字符，必填",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_description",field_display_name:"服务描述",field_required:!0,field_valid_rule:"",file_description:"基础的服务描述"},{field_type:"textarea",field_display:"inline",field_clear:"none",field_placeholder:"例如www.baidu.com",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_hosts",field_display_name:"服务域名",field_required:!0,field_valid_rule:"",file_description:"基础的服务域名"},{field_type:"textarea",field_display:"inline",field_clear:"none",field_placeholder:"例如/path",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_http_paths",field_display_name:"服务地址",field_required:!0,field_valid_rule:"",file_description:"基础的服务地址"},{field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"0|1,关闭|开启",field_value:"",field_default_value:"",field_unique_name:"need_strip_url",field_display_name:"是否开启strip_url",field_required:!0,field_valid_rule:""},{field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"round|weight_round|consistent_hash|random,轮询|权重轮询|一致性hash|随机",field_value:"",field_default_value:"",field_unique_name:"transfer_loadbalance_strategy",field_display_name:"loadbalance策略",field_required:!0,field_valid_rule:""},{field_type:"textarea",field_display:"",field_clear:"",field_placeholder:"每个规则一行 如：协议://127.0.0.1:8701 100 ",field_option:"",field_value:"",field_default_value:"",field_unique_name:"upstream_list",field_display_name:"下游服务器ip+权重",field_required:!0,field_valid_rule:"",file_description:""}]}],auth:[],auth_config_selected:"",load_balance:[],load_balance_config_selected:"",isEdit:!1,submitButDisabled:!1,form:{service_name:"",service_desc:"",rule_type:0,rule:"",need_https:0,need_websocket:0,need_strip_uri:1,url_rewrite:"",header_transfor:"",round_type:2,ip_list:"",disf_name:"",disf_cluster_name:"",weight_list:"",upstream_connect_timeout:"",upstream_header_timeout:"",upstream_idle_timeout:"",upstream_max_idle:"",open_auth:0,black_list:"",white_list:"",clientip_flow_limit:"",service_flow_limit:""}}},computed:{auth_config_options:{get:function(){var e=this;return this.auth&&this.auth.filter((function(i){return e.auth_config_selected[0].items[0].child[0].field_value===i.unique_name}))}},load_balance_config_options:{get:function(){var e=this;return this.load_balance&&this.load_balance.filter((function(i){return e.load_balance_config_selected[0].items[0].child[0].field_value===i.unique_name}))}}},created:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var i,t,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=this.$route.query&&this.$route.query.type,this.type=i,t=this.$route.query&&this.$route.query.id,i&&(this.title="创建"+c[i]),!(t>0)){e.next=10;break}this.isEdit=!0,this.fetchData(t),this.title="修改"+c[i],e.next=16;break;case 10:if(!(Object.keys(c).filter((function(e){return i===e})).length>0)){e.next=16;break}return e.next=13,Object(_["h"])();case 13:l=e.sent,"tcp"===this.type&&(this.card_config=[{display_name:"基本信息",sort:0,postion:"normal",unique_name:"base_info",items:[{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"6-128位字母数字下划线",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_name",field_display_name:"服务名称",field_required:!0,field_valid_rule:"",file_description:"tcp的服务名称"},{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"最多255字符，必填",field_option:"",field_value:"",field_default_value:"",field_unique_name:"service_description",field_display_name:"服务描述",field_required:!0,field_valid_rule:"",file_description:"tcp的服务描述"},{field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"round|weight_round|consistent_hash|random,轮询|权重轮询|一致性hash|随机",field_value:"",field_default_value:"",field_unique_name:"transfer_loadbalance_strategy",field_display_name:"loadbalance策略",field_required:!0,field_valid_rule:"",file_description:"tcp的loadbalance策略"},{field_type:"textarea",field_display:"",field_clear:"",field_placeholder:"每个规则一行 如：grpc://127.0.0.1:8701 100 ",field_option:"",field_value:"",field_default_value:"",field_unique_name:"upstream_list",field_display_name:"下游服务器ip+权重",field_required:!0,field_valid_rule:"",file_description:"tcp的下游服务器ip+权重"}]}]),this.card_config=this.formatChange([].concat(Object(r["a"])(this.card_config),Object(r["a"])(l.data[i])));case 16:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),methods:{decodeItems:function(e){var i=[];return e&&e.forEach((function(e){e.child.forEach((function(e){i.push(e)}))})),i},encodeItems:function(e){var i=[],t=[],l=!1;return e.forEach((function(e){e.field_clear||(e.field_clear="none"),l?t.push(e):"none"===e.field_clear&&i.push(o(o({},e),{},{child:[e]})),l||"left"!==e.field_clear||(t=[],t.push(e),l=!0),l&&"right"===e.field_clear&&(i.push(o(o({},t[0]),{},{child:t})),l=!1)})),i},sendFormInfo:function(e){var i=this,t=JSON.parse(JSON.stringify(e));return t.forEach((function(e){e.items=i.decodeItems(e.items)})),t},formatChange:function(e,i){var t=this,l=[],a=[],n=[],r="",d="",_="",s="";e.forEach((function(e){"normal"===e.postion?(e.items=e.items&&t.encodeItems(e.items),e.items&&0!==e.items.length&&l.push(e)):"auth"===e.postion?(e.items=e.items&&t.encodeItems(e.items),r+=e.unique_name+"|",d+=e.display_name+"|",e.items&&0!==e.items.length&&a.push(e)):"loadbalance"===e.postion&&(e.items=e.items&&t.encodeItems(e.items),_+=e.unique_name+"|",s+=e.display_name+"|",e.items&&0!==e.items.length&&n.push(e))})),r+="default",d+="默认验证",_+="default",s+="默认负载";var u={field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:r+","+d,field_value:i?i.data.auth_type:"默认验证",field_default_value:"",field_unique_name:"transfer_auth_type",field_display_name:"验证规则",field_required:!1,field_valid_rule:""},c={field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:_+","+s,field_value:i?i.data.load_balance_type:"默认负载",field_default_value:"",field_unique_name:"transfer_loadbalance_type",field_display_name:"负载策略",field_required:!1,field_valid_rule:""};this.auth_config_selected=[{display_name:"服务验证",sort:3,postion:"normal",unique_name:"auth_type",items:[o({child:[u]},u)]}],this.auth=[].concat(a),this.load_balance_config_selected=[{display_name:"服务负载",sort:3,postion:"normal",unique_name:"load_balance_type",items:[o({child:[c]},c)]}],this.load_balance=[].concat(n);var f=[].concat(l);return f},clickCancel:function(e){this.$router.go(-1)},clickOk:function(e){var i=this;if(this.err)this.$message.error({message:this.err}),this.err="";else{var t=this.sendFormInfo(this.card_config),l=t.shift(),a=this.sendFormInfo(this.auth_config_options),n=[];this.auth.forEach((function(e){var i;a.length&&e.unique_name===a[0].unique_name?(i=n).push.apply(i,Object(r["a"])(a)):n.push(e)})),n=this.sendFormInfo(n);var d=this.sendFormInfo(this.load_balance_config_options),s=[];this.load_balance.forEach((function(e){var i;d.length&&e.unique_name===d[0].unique_name?(d[0].items[0].child=JSON.parse(JSON.stringify(d[0].items)),(i=s).push.apply(i,Object(r["a"])(d))):s.push(e)})),s=this.sendFormInfo(s);var u={http:0,tcp:1,grpc:2},c="";c="tcp"===this.type?{plugin_conf:JSON.stringify(this.pluginConfChange([].concat(Object(r["a"])(t),Object(r["a"])(n),Object(r["a"])(s)))),load_type:u[this.type],service_name:l.items[0].field_value,service_desc:l.items[1].field_value,load_balance_strategy:l.items[2].field_value,load_balance_type:s[0].unique_name,auth_type:n[0]?n[0].unique_name:"",upstream_list:l.items[3].field_value}:{plugin_conf:JSON.stringify(this.pluginConfChange([].concat(Object(r["a"])(t),Object(r["a"])(n),Object(r["a"])(s)))),load_type:u[this.type],service_name:l.items[0].field_value,service_desc:l.items[1].field_value,http_hosts:l.items[2].field_value,http_paths:l.items[3].field_value,need_strip_uri:l.items[4].field_value,load_balance_strategy:l.items[5].field_value,load_balance_type:s[0].unique_name,auth_type:n[0]?n[0].unique_name:"",upstream_list:l.items[6].field_value};var f=this.$route.query&&this.$route.query.id;f>0?Object(_["j"])(o(o({},c),{},{id:+f})).then((function(){i.$message.success({message:c.service_name+"服务修改成功"}),i.$router.go(-1)})):Object(_["a"])(c).then((function(){i.$message.success({message:c.service_name+"服务创建成功"}),i.$router.go(-1)}))}},pluginConfChange:function(e){var i={};return e.forEach((function(e){i[e.unique_name]={},e.items.forEach((function(t){i[e.unique_name][t.field_unique_name]=t.field_value}))})),i},errCard:function(e){this.err=e},fetchData:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(i){var t,l,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={id:i},e.next=3,Object(_["f"])(t);case 3:l=e.sent,a=[{display_name:"基本信息",sort:0,postion:"normal",unique_name:"base_info",items:[{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"6-128位字母数字下划线",field_option:"",field_value:l.data.service_name,field_default_value:"",field_unique_name:"service_name",field_display_name:"服务名称",field_required:!0,field_valid_rule:"",file_description:"基础的服务名称"},{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"最多255字符，必填",field_option:"",field_value:l.data.service_desc,field_default_value:"",field_unique_name:"service_description",field_display_name:"服务描述",field_required:!0,field_valid_rule:"",file_description:"基础的服务描述"},{field_type:"textarea",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"",field_value:l.data.http_hosts,field_default_value:"",field_unique_name:"service_hosts",field_display_name:"服务域名",field_required:!0,field_valid_rule:"",file_description:"基础的服务域名"},{field_type:"textarea",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"",field_value:l.data.http_paths,field_default_value:"",field_unique_name:"service_http_paths",field_display_name:"服务地址",field_required:!0,field_valid_rule:"",file_description:"基础的服务地址"},{field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"0|1,关闭|开启",field_value:l.data.need_strip_uri,field_default_value:"",field_unique_name:"need_strip_url",field_display_name:"是否开启strip_url",field_required:!0,field_valid_rule:""},{field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"round|weight_round|consistent_hash|random,轮询|权重轮询|一致性hash|随机",field_value:l.data.load_balance_strategy,field_default_value:"",field_unique_name:"transfer_loadbalance_strategy",field_display_name:"loadbalance策略",field_required:!0,field_valid_rule:""},{field_type:"textarea",field_display:"",field_clear:"",field_placeholder:"每个规则一行 如：grpc://127.0.0.1:8701 100 ",field_option:"",field_value:l.data.upstream_list,field_default_value:"",field_unique_name:"upstream_list",field_display_name:"下游服务器ip+权重",field_required:!0,field_valid_rule:"",file_description:""}]}],"tcp"===this.type&&(a=[{display_name:"基本信息",sort:0,postion:"normal",unique_name:"base_info",items:[{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"6-128位字母数字下划线",field_option:"",field_value:l.data.service_name,field_default_value:"",field_unique_name:"service_name",field_display_name:"服务名称",field_required:!0,field_valid_rule:"",file_description:"tcp的服务名称"},{field_type:"input",field_display:"inline",field_clear:"none",field_placeholder:"最多255字符，必填",field_option:"",field_value:l.data.service_desc,field_default_value:"",field_unique_name:"service_description",field_display_name:"服务描述",field_required:!0,field_valid_rule:"",file_description:"tcp的服务描述"},{field_type:"select",field_display:"inline",field_clear:"none",field_placeholder:"",field_option:"round|weight_round|consistent_hash|random,轮询|权重轮询|一致性hash|随机",field_value:l.data.load_balance_strategy,field_default_value:"",field_unique_name:"transfer_loadbalance_strategy",field_display_name:"loadbalance策略",field_required:!0,field_valid_rule:""},{field_type:"textarea",field_display:"",field_clear:"",field_placeholder:"每个规则一行 如：grpc://127.0.0.1:8701 100 ",field_option:"",field_value:l.data.upstream_list,field_default_value:"",field_unique_name:"upstream_list",field_display_name:"下游服务器ip+权重",field_required:!0,field_valid_rule:"",file_description:"tcp的下游服务器ip+权重"}]}]),this.card_config=this.formatChange([].concat(Object(r["a"])(a),Object(r["a"])(l.data[this.type])),l);case 7:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}()}},p=f,h=(t("a835"),t("cba8")),m=Object(h["a"])(p,l,a,!1,null,"7e59c19e",null);i["default"]=m.exports}}]);