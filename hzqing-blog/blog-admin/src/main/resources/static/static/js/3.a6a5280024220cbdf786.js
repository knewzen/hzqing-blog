webpackJsonp([3,7],{CDju:function(e,t,n){"use strict";function o(e){return n.i(s.a)({url:"/admin/menu/tree/"+e,method:"get"})}function i(e,t){return n.i(s.a)({url:"/admin/menu/getNextLevelCode/"+e+"/"+t,method:"get"})}function r(e){return n.i(s.a)({url:"/admin/menu/add",method:"post",data:e})}function a(e){return n.i(s.a)({url:"/admin/menu/delete/"+e,method:"delete"})}function l(e,t){return n.i(s.a)({url:"/admin/menu/put/"+e,method:"put",data:t})}t.a=o,t.b=i,t.c=r,t.e=a,t.d=l;var s=n("Vo7i")},Hgv9:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.menuTreeLoading,expression:"menuTreeLoading"}],attrs:{id:"roleMenu"}},[n("el-tree",{ref:"roleMenuTree",attrs:{data:e.menuTree,"show-checkbox":"","node-key":"id","default-expand-all":!0,props:e.defaultProps}}),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:function(t){e.cancel()}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addRoleMenu()}}},[e._v("确 定")])],1)],1)},i=[],r={render:o,staticRenderFns:i};t.a=r},HnJG:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"#query{margin:0 0 10px}.input-selects-width{width:260px}.el-form-item-width{width:100%}","",{version:3,sources:["/home/hzq/IdeaProjects/hzqing-blog/hzqing-blog-ui/src/views/admin/system/role/index.vue"],names:[],mappings:"AACA,OACI,eAAyB,CAC5B,AACD,qBACI,WAAa,CAChB,AACD,oBACI,UAAY,CACf",file:"index.vue",sourcesContent:["\n#query{\n    margin: 0px 0px 10px 0px;\n}\n.input-selects-width{\n    width: 260px;\n}\n.el-form-item-width{\n    width: 100%;\n}\n"],sourceRoot:""}])},N54q:function(e,t,n){"use strict";function o(e){return n.i(f.a)({url:"/admin/role/page",method:"get",params:e})}function i(e){return n.i(f.a)({url:"/admin/role/add",method:"post",data:e})}function r(e){return n.i(f.a)({url:"/admin/role/get/"+e,method:"get"})}function a(e){return n.i(f.a)({url:"/admin/role/delete/"+e,method:"delete"})}function l(e,t){return n.i(f.a)({url:"/admin/role/put/"+e,method:"put",data:t})}function s(){return n.i(f.a)({url:"/admin/role/enabled/",method:"get"})}function u(e){return n.i(f.a)({url:"/admin/role/getRoleByUserId/"+e,method:"get"})}function c(e,t){return n.i(f.a)({url:"/admin/role/addRoleMenu/"+e,data:t,method:"post"})}function d(e){return n.i(f.a)({url:"/admin/role/getMenuIdByRoleId/"+e,method:"get"})}t.e=o,t.i=i,t.f=r,t.h=a,t.g=l,t.a=s,t.b=u,t.c=c,t.d=d;var f=n("Vo7i")},VubK:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"role"}},[n("el-card",[n("div",{attrs:{id:"query"}},[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-input",{staticStyle:{width:"96%"},attrs:{placeholder:"请输入角色名称"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e._v(" "),n("el-col",{attrs:{span:16}},[n("el-button-group",[n("el-button",{attrs:{type:"primary"}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.toCreate()}}},[e._v("新增")])],1)],1)],1)],1),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[n("el-table-column",{attrs:{align:"center",label:"序号",type:"index",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{label:"角色名称",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.roleName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.roleCode))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"是否启用"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},["1"==t.row.enabled?n("el-tag",{attrs:{type:"success"}},[e._v("启用")]):n("el-tag",{attrs:{type:"danger"}},[e._v("禁用")])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.note))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(n){e.handleResouce(t.$index,t.row)}}},[e._v("资源分配")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.listQuery.page=t}}})],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogFormVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,inline:!0,rules:e.rules,"label-width":"90px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[n("el-input",{staticClass:"input-selects-width",attrs:{placeholder:"请输入姓名"},model:{value:e.form.roleName,callback:function(t){e.form.roleName=t},expression:"form.roleName"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"角色编码",prop:"roleCode"}},[n("el-input",{staticClass:"input-selects-width",attrs:{placeholder:"请输入账户"},model:{value:e.form.roleCode,callback:function(t){e.form.roleCode=t},expression:"form.roleCode"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否可用",prop:"enabled"}},[n("el-switch",{attrs:{"on-text":"可用","off-text":"禁用","on-value":"1","off-value":"0"},model:{value:e.form.enabled,callback:function(t){e.form.enabled=t},expression:"form.enabled"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"备注",prop:"note"}},[n("el-input",{staticClass:"input-selects-width",attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入备注"},model:{value:e.form.note,callback:function(t){e.form.note=t},expression:"form.note"}})],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:function(t){e.cancel("form")}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.create("form")}}},[e._v("确 定")]):n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.update("form")}}},[e._v("确 定")])],1)],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogMenuVisible,width:"15%",title:"选择资源"},on:{"update:visible":function(t){e.dialogMenuVisible=t},open:e.menuDialogOpen}},[n("role-menu",{ref:"roleMenuCom",attrs:{roleId:e.roleToMenuId},on:{roleMenuCancle:e.roleMenuCancle}})],1)],1)],1)},i=[],r={render:o,staticRenderFns:i};t.a=r},XMw1:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"roleMenu.vue",sourceRoot:""}])},"a+sH":function(e,t,n){var o=n("XMw1");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("3f3e7fb9",o,!0)},agxW:function(e,t,n){"use strict";function o(e){n("j0Ak")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("paqh"),r=n("VubK"),a=n("VU/8"),l=o,s=a(i.a,r.a,l,null,null);t.default=s.exports},goyV:function(e,t,n){"use strict";var o=n("CDju"),i=n("N54q");t.a={props:["roleId"],created:function(){this.menuTreeLoading=!0,this.getTree()},data:function(){return{defaultProps:{children:"menus",label:"menuName"},menuTree:null,checkMenu:{menuId:"",roleId:""},menuTreeLoading:!1}},methods:{getTree:function(){var e=this;n.i(o.a)("-1").then(function(t){e.menuTree=t.data,e.getMenuIdByRoleId()})},addRoleMenu:function(){var e=this,t=this.roleId,o=this.$refs.roleMenuTree.getCheckedNodes(),r=o.map(function(e){return e.id}).join();this.checkMenu.menuId=r,this.checkMenu.roleId=t,n.i(i.c)(t,this.checkMenu).then(function(){e.$notify({title:"成功",message:"资源添加成功",type:"success",duration:2e3}),e.cancel()})},getMenuIdByRoleId:function(){var e=this;n.i(i.d)(this.roleId).then(function(t){e.resetChecked(),e.$refs.roleMenuTree.setCheckedKeys(t.data),e.menuTreeLoading=!1})},resetChecked:function(){this.$refs.roleMenuTree.setCheckedKeys([])},cancel:function(){this.$emit("roleMenuCancle","cancel")}}}},j0Ak:function(e,t,n){var o=n("HnJG");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("58cafdf1",o,!0)},mozF:function(e,t,n){"use strict";function o(e){n("a+sH")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("goyV"),r=n("Hgv9"),a=n("VU/8"),l=o,s=a(i.a,r.a,l,null,null);t.default=s.exports},paqh:function(e,t,n){"use strict";var o=n("N54q"),i=n("mozF");t.a={components:{roleMenu:i.default},data:function(){return{list:null,query:"",total:null,listQuery:{page:1,pageSize:10,roleName:""},textMap:{update:"更新",create:"创建"},dialogStatus:"",dialogFormVisible:!1,form:this.initObj(),dialogMenuVisible:!1,roleToMenuId:"",rules:{roleName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:20,message:"长度在3到20个字符",trigger:"blur"}],roleCode:[{required:!0,message:"请输入编码",trigger:"blur"}]}}},created:function(){this.getList()},methods:{initObj:function(){return{id:"",roleName:"",roleCode:"",enabled:"0",note:""}},resetTemp:function(){this.form=this.initObj()},getList:function(){var e=this;n.i(o.e)(this.listQuery).then(function(t){e.list=t.data.list,e.total=t.data.total})},cancel:function(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},handleClose:function(e){this.cancel("form"),e()},handleEdit:function(e,t){var i=this;n.i(o.f)(t.id).then(function(e){i.form=e.data,i.dialogFormVisible=!0,i.dialogStatus="update"})},update:function(e){var t=this;this.$refs[e].validate(function(i){if(!i)return!1;n.i(o.g)(t.form.id,t.form).then(function(){t.cancel(e),t.getList(),t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})})},handleDelete:function(e,t){var i=this;this.$confirm("是否刪除该记录？","记录",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.i(o.h)(t.id).then(function(){i.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),i.getList()})})},toCreate:function(){this.resetTemp(),this.dialogFormVisible=!0,this.dialogStatus="create"},create:function(e){var t=this;this.$refs[e].validate(function(i){if(!i)return!1;n.i(o.i)(t.form).then(function(){t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3}),t.cancel(e),t.getList()})})},handleResouce:function(e,t){this.dialogMenuVisible=!0,this.roleToMenuId=t.id},menuDialogOpen:function(){this.$refs.roleMenuCom.getTree()},roleMenuCancle:function(){this.dialogMenuVisible=!1},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}}}});
//# sourceMappingURL=3.a6a5280024220cbdf786.js.map