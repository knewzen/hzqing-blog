webpackJsonp([12],{"2bAB":function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"#menu{padding:20px}.right-layout-from{margin-left:20px}.top-button{margin-bottom:20px}.grid-content{border-radius:4px;min-height:36px}","",{version:3,sources:["/home/hzq/IdeaProjects/hzqing-blog/hzqing-blog-ui/src/views/admin/system/menu/index.vue"],names:[],mappings:"AACA,MACI,YAAc,CACjB,AACD,mBACE,gBAAkB,CACnB,AACD,YACE,kBAAoB,CACrB,AACD,cACI,kBAAmB,AACnB,eAAiB,CACpB",file:"index.vue",sourcesContent:["\n#menu{\n    padding: 20px;\n}\n.right-layout-from{\n  margin-left: 20px;\n}\n.top-button{\n  margin-bottom: 20px;\n}\n.grid-content{\n    border-radius: 4px;\n    min-height: 36px;\n}\n"],sourceRoot:""}])},CDju:function(e,t,n){"use strict";function o(e){return n.i(s.a)({url:"/admin/menu/tree/"+e,method:"get"})}function a(e,t){return n.i(s.a)({url:"/admin/menu/getNextLevelCode/"+e+"/"+t,method:"get"})}function r(e){return n.i(s.a)({url:"/admin/menu/add",method:"post",data:e})}function i(e){return n.i(s.a)({url:"/admin/menu/delete/"+e,method:"delete"})}function l(e,t){return n.i(s.a)({url:"/admin/menu/put/"+e,method:"put",data:t})}t.a=o,t.b=a,t.c=r,t.e=i,t.d=l;var s=n("Vo7i")},QiVg:function(e,t,n){"use strict";var o=n("CDju");t.a={watch:{filterText:function(e){this.$refs.menuTree.filter(e)}},created:function(){this.getTree()},data:function(){return{state:"see",form:this.initObj(),filterText:"",defaultProps:{children:"menus",label:"menuName"},menuTreeDate:null,listLoading:!1}},methods:{initObj:function(){return{id:"",menuName:"",menuCode:"",levelcode:"",parentId:"",parentName:"",href:"",component:"",icon:"",menuType:"",enabled:"0",note:""}},filterNode:function(e,t){return!e||-1!==t.menuName.indexOf(e)},getTree:function(){var e=this;n.i(o.a)("-1").then(function(t){e.menuTreeDate=t.data,e.form=t.data[0],e.state="see"})},clickTree:function(e){this.form=e,this.state="see"},expandTree:function(e){console.log("expand")},toCreate:function(){var e=this;this.state="add";var t=this.form.id,a=this.form.menuName,r=this.form.levelcode;this.resetTemp(),this.form.parentId=t,this.form.parentName=a,n.i(o.b)(t,r).then(function(t){e.form.levelcode=t.data})},createMenu:function(e){var t=this;this.$refs[e].validate(function(e){e&&n.i(o.c)(t.form).then(function(){t.getTree(),t.$notify({title:"成功",message:"菜单新增成功",type:"success",duration:2e3})})})},toUpdate:function(){this.state="edit"},updateMenu:function(e){var t=this;this.$refs[e].validate(function(e){e&&n.i(o.d)(t.form.id,t.form).then(function(){t.getTree(),t.$notify({title:"成功",message:"菜单修改成功",type:"success",duration:2e3})})})},toDeleted:function(){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.i(o.e)(e.form.id).then(function(t){t.data?(e.getTree(),e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})):e.$notify({title:"失败",message:"请先删除下级菜单",type:"error",duration:2e3})})})},resetTemp:function(){this.form=this.initObj()}}}},bEq6:function(e,t,n){var o=n("2bAB");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("4d84342f",o,!0)},iSzD:function(e,t,n){"use strict";function o(e){n("bEq6")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("QiVg"),r=n("s/w2"),i=n("VU/8"),l=o,s=i(a.a,r.a,l,null,null);t.default=s.exports},"s/w2":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"menu"}},[n("el-row",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}]},[n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),n("el-tree",{ref:"menuTree",staticClass:"filter-tree",staticStyle:{"margin-top":"10px"},attrs:{data:e.menuTreeDate,props:e.defaultProps,"default-expand-all":!0,"filter-node-method":e.filterNode,"default-expanded-keys":[0,1]},on:{"node-click":e.clickTree,"node-expand":e.expandTree}})],1),e._v(" "),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"right-layout-from"},["see"==this.state?n("div",{staticClass:"top-button"},[n("el-button-group",[n("el-button",{attrs:{type:"primary","native-type":"submit",icon:"plus"},on:{click:function(t){e.toCreate()}}},[e._v("添加")]),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"edit"},on:{click:function(t){e.toUpdate()}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"danger",icon:"delete"},on:{click:function(t){e.toDeleted()}}},[e._v("删除")])],1)],1):e._e(),e._v(" "),n("div",{staticClass:"top-button"},["add"==this.state?n("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:function(t){e.createMenu("form")}}},[e._v("保存")]):e._e(),e._v(" "),"edit"==this.state?n("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:function(t){e.updateMenu("form")}}},[e._v("保存")]):e._e()],1),e._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[n("el-row",{attrs:{"aria-disabled":""}},[n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"菜单名称",prop:"menuName"}},["see"==this.state?n("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.menuName,callback:function(t){e.form.menuName=t},expression:"form.menuName"}}):n("el-input",{model:{value:e.form.menuName,callback:function(t){e.form.menuName=t},expression:"form.menuName"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"父级节点",prop:"parentName"}},[n("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.parentName,callback:function(t){e.form.parentName=t},expression:"form.parentName"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"菜单编码",prop:"menuCode"}},["see"==this.state?n("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.menuCode,callback:function(t){e.form.menuCode=t},expression:"form.menuCode"}}):n("el-input",{model:{value:e.form.menuCode,callback:function(t){e.form.menuCode=t},expression:"form.menuCode"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"资源路径",prop:"href"}},["see"==this.state?n("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.href,callback:function(t){e.form.href=t},expression:"form.href"}}):n("el-input",{model:{value:e.form.href,callback:function(t){e.form.href=t},expression:"form.href"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"前端组件",prop:"component"}},["see"==this.state?n("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.component,callback:function(t){e.form.component=t},expression:"form.component"}}):n("el-input",{model:{value:e.form.component,callback:function(t){e.form.component=t},expression:"form.component"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"图标",prop:"icon"}},["see"==this.state?n("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.icon,callback:function(t){e.form.icon=t},expression:"form.icon"}}):n("el-input",{model:{value:e.form.icon,callback:function(t){e.form.icon=t},expression:"form.icon"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"层级编码",prop:"levelcode"}},[n("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.levelcode,callback:function(t){e.form.levelcode=t},expression:"form.levelcode"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"是否可用",prop:"enabled"}},[n("el-switch",{attrs:{"on-text":"可用","off-text":"禁用","on-value":"1","off-value":"0"},model:{value:e.form.enabled,callback:function(t){e.form.enabled=t},expression:"form.enabled"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"请求资源类型",prop:"menuType"}},["see"==this.state?n("el-select",{attrs:{placeholder:"请选择机构类别",disabled:"disabled"},model:{value:e.form.menuType,callback:function(t){e.form.menuType=t},expression:"form.menuType"}},[n("el-option",{attrs:{label:"link",value:"link"}}),e._v(" "),n("el-option",{attrs:{label:"menu",value:"menu"}})],1):n("el-select",{attrs:{placeholder:"请选择机构类别"},model:{value:e.form.menuType,callback:function(t){e.form.menuType=t},expression:"form.menuType"}},[n("el-option",{attrs:{label:"link",value:"link"}}),e._v(" "),n("el-option",{attrs:{label:"menu",value:"menu"}})],1)],1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"机构说明",prop:"note"}},["see"==this.state?n("el-input",{attrs:{type:"textarea",disabled:"disabled"},model:{value:e.form.note,callback:function(t){e.form.note=t},expression:"form.note"}}):n("el-input",{attrs:{type:"textarea"},model:{value:e.form.note,callback:function(t){e.form.note=t},expression:"form.note"}})],1)],1)],1)],1)])],1)],1)},a=[],r={render:o,staticRenderFns:a};t.a=r}});
//# sourceMappingURL=12.0971fc9d736c37dc1027.js.map