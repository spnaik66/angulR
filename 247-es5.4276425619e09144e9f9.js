!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(self.webpackChunkschool_ang_proj=self.webpackChunkschool_ang_proj||[]).push([[247],{82051:function(e,t){var n,i;void 0===(i="function"==typeof(n=function(){"use strict";function t(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){a(i.response,t,n)},i.onerror=function(){console.error("could not download file")},i.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,r=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,r,a){var s=o.URL||o.webkitURL,l=document.createElement("a");l.download=r=r||e.name||"download",l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):n(l.href)?t(e,r,a):i(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(l.href)},4e4),setTimeout(function(){i(l)},0))}:"msSaveOrOpenBlob"in navigator?function(e,o,r){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),o);else if(n(e))t(e,o,r);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout(function(){i(a)})}}:function(e,n,i,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,i);var s="application/octet-stream"===e.type,l=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||s&&l||r)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var d=o.URL||o.webkitURL,f=d.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout(function(){d.revokeObjectURL(f)},4e4)}});o.saveAs=a.saveAs=a,e.exports=a})?n.apply(t,[]):n)||(e.exports=i)},88247:function(t,i,r){"use strict";r.r(i),r.d(i,{ResourceManagementModule:function(){return P}});var a=r(61116),s=r(64762),l=r(99713),c=r(70118),u=r(71397),d=r(86659),f=r(54733),p=r(82051),m=r(83559),h=r(72644),v=r(85907),b=r(87368),g=r(42693),Z=r(17145),y=function(){var e=function(){function e(t){n(this,e),this._httpClient=t,this.url=Z.A.RESOURCES,this.url_share=Z.A.SHAREFILE}return o(e,[{key:"sIndex",value:function(){return this._httpClient.get(this.url)}},{key:"sStore",value:function(e){var t=Object.assign({},e);return this._httpClient.post(this.url,t)}},{key:"sDelete",value:function(e){return this._httpClient.delete(this.url+"/"+e)}},{key:"upload",value:function(e){var t=new g.aW("POST","".concat(this.url,"/upload"),e);return this._httpClient.request(t)}},{key:"sDownloadFile",value:function(e){return this._httpClient.get("".concat(this.url,"/download/").concat(e),{responseType:"blob"})}},{key:"sendFile",value:function(e){return this._httpClient.post("".concat(this.url_share),{email:e.email,imageUrl:e.base64,subject:"Share File",filename:e.fileName})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(b.LFG(g.eN))},e.\u0275prov=b.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),A=r(99624),w=r(80570),T=r(23458),q=r(12937),S=r(98911),_=r(32370),x=r(22041);function k(e,t){1&e&&b._UZ(0,"v-loader")}function C(e,t){if(1&e){var n=b.EpF();b.TgZ(0,"button",17),b.NdJ("click",function(){return b.CHM(n),b.oxw().exportToExcel()}),b._uU(1),b.qZA()}if(2&e){var i=b.oxw();b.xp6(1),b.Oqu(i.exportBtnLabel)}}function F(e,t){if(1&e&&(b.TgZ(0,"th",18),b._uU(1),b.qZA()),2&e){var n=t.$implicit;b.xp6(1),b.Oqu(n)}}function U(e,t){if(1&e){var n=b.EpF();b.TgZ(0,"tr"),b.TgZ(1,"td"),b._uU(2),b.qZA(),b.TgZ(3,"td"),b._uU(4),b.qZA(),b.TgZ(5,"td"),b._uU(6),b.qZA(),b.TgZ(7,"td"),b._uU(8),b.qZA(),b.TgZ(9,"td"),b.TgZ(10,"button",19),b.NdJ("click",function(){var e=b.CHM(n).$implicit;return b.oxw().sendFileFromServer(e)}),b._uU(11,"Send"),b.qZA(),b.TgZ(12,"button",20),b.NdJ("click",function(){var e=b.CHM(n).$implicit;return b.oxw().downloadFileFromServer(e._id,e.fileName)}),b._uU(13,"Download"),b.qZA(),b.TgZ(14,"v-btn",21),b.NdJ("actionEvent",function(e){return b.CHM(n),b.oxw().delete(e)}),b.qZA(),b.qZA(),b.qZA()}if(2&e){var i=t.$implicit,o=t.index;b.xp6(2),b.Oqu(o+1),b.xp6(2),b.Oqu(i.name),b.xp6(2),b.Oqu(i.notes),b.xp6(2),b.Oqu(i.fileName),b.xp6(6),b.Q6J("actionValue",i._id)}}var N=function(){var t=function(){function t(e,i){n(this,t),this._resourceService=e,this.sanitizer=i,this.isSubmitted=!1,this.title="Resources",this.thCols=["Id","ContactName","Notes","File Name","Actions"],this.addLink="/resource-management/create",this.list=[],this.dtOptions={},this.dtTrigger=new m.xQ,this.exportBtnLabel=c.h.exportBtnLabel,this.showAddForm=!1}return o(t,[{key:"sanitizeurl",value:function(){}},{key:"ngOnInit",value:function(){this.index(),this.dtOptions=u.Z.optionsWithoutDownload}},{key:"index",value:function(){var e=this;this.isSubmitted=!0,this.list=[],this._resourceService.sIndex().subscribe(function(t){t&&t.data&&t.data.length&&(e.isSubmitted=!1,e.list=t.data,e.dtTrigger.next()),e.isSubmitted=!1},function(t){console.log("Error !"),v.error("No data found","Error !"),e.isSubmitted=!1})}},{key:"edit",value:function(){}},{key:"delete",value:function(e){var t=this;console.log("e:",e),this.isSubmitted=!0,this._resourceService.sDelete(e).subscribe(function(e){t.isSubmitted=!1,t.index(),d.Z.showSweetAlert("Deleted Successfully",!1),setTimeout(function(){location.reload()},300)},function(e){console.log("err:",e),d.Z.showSweetAlert(e.error.message,!1),t.isSubmitted=!1})}},{key:"onShowAddForm",value:function(){this.showAddForm=!this.showAddForm}},{key:"downloadFile",value:function(e){console.log("downloadFile"),this._resourceService.sDownloadFile(e).subscribe()}},{key:"downloadFileFromServer",value:function(e,t){var n=this;this.isSubmitted=!0,this._resourceService.sDownloadFile(e).subscribe(function(e){(0,p.saveAs)(e,t),n.isSubmitted=!1})}},{key:"sendFileFromServer",value:function(e){var t=this;console.log(e),this.isSubmitted=!0,this._resourceService.sDownloadFile(e._id).subscribe(function(n){return(0,s.mG)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var i,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.blobToBase64(n);case 2:i=t.sent,this._resourceService.sendFile(Object.assign(Object.assign({},e),{base64:i})).subscribe(function(e){o.isSubmitted=!1}),this.isSubmitted=!1;case 4:case"end":return t.stop()}},t,this)}))})}},{key:"blobToBase64",value:function(e){return new Promise(function(t,n){var i=new FileReader;i.onloadend=function(){return t(i.result)},i.readAsDataURL(e)})}},{key:"exportToExcel",value:function(){var t=[["File Name"]].concat(e(this.list.map(function(e){return[e.fileName]})));(0,h.C)(t,"Resources list")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(b.Y36(y),b.Y36(A.H7))},t.\u0275cmp=b.Xpm({type:t,selectors:[["app-list-resources"]],viewQuery:function(e,t){var n;(1&e&&b.Gf(f.G,5),2&e)&&(b.iGM(n=b.CRH())&&(t.dtElement=n.first))},decls:23,vars:11,consts:[[4,"ngIf"],[1,"wrapper"],[1,"content-wrapper"],[3,"title","canshowBreadCrumb"],[1,"content"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-tools"],["actionType","add",3,"link"],["type","button","class","btn btn-success1 btn-xs rounded-pill px-3 py-1 fs-5 fw-bold",3,"click",4,"ngIf"],[1,"card-body"],[1,"table-responsive"],["datatable","",1,"table","table-striped","table-bordered","compact",3,"dtOptions","dtTrigger"],[1,"bg-info"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success1","btn-xs","rounded-pill","px-3","py-1","fs-5","fw-bold",3,"click"],["scope","col"],["type","button",1,"btn","btn-primary","btn-sm","rounded-pill","mr-1",3,"click"],["type","button",1,"btn","btn-info","btn-sm","rounded-pill",3,"click"],["actionType","deleteclick",3,"actionValue","actionEvent"]],template:function(e,t){1&e&&(b.YNc(0,k,1,0,"v-loader",0),b.TgZ(1,"div",1),b._UZ(2,"app-header"),b._UZ(3,"app-sidebar"),b.TgZ(4,"div",2),b._UZ(5,"app-content-header",3),b.TgZ(6,"section",4),b.TgZ(7,"div",5),b.TgZ(8,"div",6),b.TgZ(9,"h3",7),b._uU(10),b.qZA(),b.TgZ(11,"div",8),b._UZ(12,"v-btn",9),b.YNc(13,C,2,1,"button",10),b.qZA(),b.qZA(),b.TgZ(14,"div",11),b.TgZ(15,"div",12),b.TgZ(16,"table",13),b.TgZ(17,"thead",14),b.TgZ(18,"tr"),b.YNc(19,F,2,1,"th",15),b.qZA(),b.qZA(),b.TgZ(20,"tbody"),b.YNc(21,U,15,5,"tr",16),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b._UZ(22,"app-footer"),b.qZA()),2&e&&(b.Q6J("ngIf",t.isSubmitted),b.xp6(5),b.Q6J("title",t.title)("canshowBreadCrumb",!0),b.xp6(1),b.Q6J("@slideFromRight",void 0),b.xp6(4),b.hij(" List ",t.title,""),b.xp6(2),b.Q6J("link",t.addLink),b.xp6(1),b.Q6J("ngIf",t.list&&t.list.length),b.xp6(3),b.Q6J("dtOptions",t.dtOptions)("dtTrigger",t.dtTrigger),b.xp6(3),b.Q6J("ngForOf",t.thCols),b.xp6(2),b.Q6J("ngForOf",t.list))},directives:[a.O5,w.G,T.k,q.e,S.K,f.G,a.sg,_.c,x.O],styles:[""],data:{animation:[(0,l.X$)("slideFromRight",[(0,l.eR)("void=>*",[(0,l.oB)({opacity:0,transform:"translateX(100%)"}),(0,l.jt)(".8s",(0,l.oB)({opacity:1,transform:"translateX(0)"}))])])]}}),t}(),E=r(89264),O=r(11462),R=function(){var e=function e(){n(this,e)};return e.breadCrumbLinkItems=[],e.listRoute="/resource-management",e.dashboardTitle="Resource Managment",e}(),I=r(905),J=r(68281),L=r(15842);function j(e,t){1&e&&b._UZ(0,"v-loader")}function M(e,t){1&e&&(b.TgZ(0,"p"),b._uU(1," Phone Number is Required "),b.qZA())}function B(e,t){1&e&&(b.TgZ(0,"p"),b._uU(1," Email is Required "),b.qZA())}var Q,D,G=[{path:"",component:N,pathMatch:"full"},{path:"create",component:(Q=function(){function e(t,i,o,r){n(this,e),this._resourceService=t,this._router=i,this._formBuilder=o,this._contactsService=r,this.isSubmitted=!1,this.title="Upload Resource",this.backLink="/resource-management",this.contactList=[],this.addForm=this._formBuilder.group({contactId:[null,O.kI.required],name:[null],middleName:[null],surname:[null],email:[null],phoneNumber:[null],notes:[null,O.kI.required]})}return o(e,[{key:"ngOnInit",value:function(){this.getContactList()}},{key:"getContactList",value:function(){var e=this;this._contactsService.sIndex().subscribe(function(t){e.contactList=t.data.map(function(e){return{id:e._id,text:e.name+" - "+e.phoneNumber+" - "+e.city}})})}},{key:"onTagChanged",value:function(e){console.log(this.contact),this.updateContactId(e),this.getSelectedContactData(e)}},{key:"getSelectedContactData",value:function(e){var t=this;console.log("id:",e),this.isSubmitted=!0,this._contactsService.sShow(e).subscribe(function(e){e&&e.data&&(console.log("res.data:===",e.data),t.addForm.patchValue(Object.assign({},e.data)),t.selectedContactData=e.data),t.isSubmitted=!1},function(e){console.log("Error !"),t.isSubmitted=!1})}},{key:"selectFiles",value:function(e,t){this.fileRef=t,this.selectedFiles=e.target.files}},{key:"upload",value:function(e,t){var n=this;this.fileUploadService$.subscribe(function(e){n.fileRef.value="",n.isSubmitted=!1},function(e){console.log("err:",e),v.error("Data imported failed","Error !"),n.isSubmitted=!1})}},{key:"updateContactId",value:function(e){this.fCtrls.contactId.setValue(e)}},{key:"fCtrls",get:function(){return this.addForm.controls}},{key:"uploadFiles",value:function(){var e=this;if(!this.addForm.valid)return v.error("Please enter required fields","Error!"),!1;if(!this.selectedFiles||0==this.selectedFiles.length)return v.error("Please select file","Error!"),!1;this.isSubmitted=!0;var t=new FormData;t.append("file",this.selectedFiles[0]),console.log("this.notes:==",this.notes),t.append("notes",this.fCtrls.notes.value),t.append("contactId",this.fCtrls.contactId.value),this.fileUploadService$=this._resourceService.upload(t),this.fileUploadService$.subscribe(function(t){e.fileRef.value="",e.isSubmitted=!1,v.success("Submitted successfully","Success !"),e._router.navigateByUrl(R.listRoute)},function(t){console.log("err:",t),v.error("Data imported failed","Error !"),e.isSubmitted=!1})}}]),e}(),Q.\u0275fac=function(e){return new(e||Q)(b.Y36(y),b.Y36(E.F0),b.Y36(O.qu),b.Y36(I.P))},Q.\u0275cmp=b.Xpm({type:Q,selectors:[["app-add-resources"]],decls:57,vars:15,consts:[[4,"ngIf"],[1,"wrapper"],[1,"content-wrapper"],[3,"title","canshowBreadCrumb"],[1,"content"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-tools"],["actionType","back",3,"link"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","exampleInputPassword1"],[1,"col-md-12","pr-0","pl-0"],["width","100%","formControlName","contactId",3,"ngModel","data","placeholder","ngModelChange","valueChanged"],["fCtrlName","name","label","First Name","isReadonly","true",3,"fGroup"],["fCtrlName","middleName","label","Middle Name","isReadonly","true",3,"fGroup"],["fCtrlName","surname","label","Last Name","isReadonly","true",3,"fGroup"],["for","exampleInputEmail1"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","formControlName","phoneNumber","readonly","",1,"form-control"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","formControlName","email","readonly","",1,"form-control"],["type","file",1,"form-control",3,"change"],["file",""],[1,"col-md-12"],["name","notes","id","","rows","3","formControlName","notes",1,"form-control"],[1,"card-footer","text-right"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(e,t){if(1&e){var n=b.EpF();b.YNc(0,j,1,0,"v-loader",0),b.TgZ(1,"div",1),b._UZ(2,"app-header"),b._UZ(3,"app-sidebar"),b.TgZ(4,"div",2),b._UZ(5,"app-content-header",3),b.TgZ(6,"section",4),b.TgZ(7,"div",5),b.TgZ(8,"div",6),b.TgZ(9,"h3",7),b._uU(10),b.qZA(),b.TgZ(11,"div",8),b._UZ(12,"v-btn",9),b.qZA(),b.qZA(),b.TgZ(13,"div",10),b.TgZ(14,"form",11),b._UZ(15,"br"),b.TgZ(16,"div",12),b.TgZ(17,"div",13),b.TgZ(18,"div",14),b.TgZ(19,"label",15),b._uU(20,"Concerned Contact"),b.qZA(),b.TgZ(21,"div",16),b.TgZ(22,"ng-select2",17),b.NdJ("ngModelChange",function(e){return t.contact=e})("valueChanged",function(e){return t.onTagChanged(e)}),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.TgZ(23,"div",12),b.TgZ(24,"div",13),b._UZ(25,"app-v-input-full",18),b.qZA(),b.TgZ(26,"div",13),b._UZ(27,"app-v-input-full",19),b.qZA(),b.TgZ(28,"div",13),b._UZ(29,"app-v-input-full",20),b.qZA(),b.TgZ(30,"div",13),b.TgZ(31,"div",14),b.TgZ(32,"label",21),b._uU(33,"Phone Number"),b.qZA(),b._UZ(34,"input",22),b.YNc(35,M,2,0,"p",0),b.qZA(),b.qZA(),b.TgZ(36,"div",13),b.TgZ(37,"div",14),b.TgZ(38,"label",21),b._uU(39,"Email"),b.qZA(),b._UZ(40,"input",23),b.YNc(41,B,2,0,"p",0),b.qZA(),b.qZA(),b.TgZ(42,"div",13),b.TgZ(43,"div",14),b.TgZ(44,"label",21),b._uU(45,"Upload file"),b.qZA(),b.TgZ(46,"input",24,25),b.NdJ("change",function(e){b.CHM(n);var i=b.MAs(47);return t.selectFiles(e,i)}),b.qZA(),b.qZA(),b.qZA(),b.TgZ(48,"div",26),b.TgZ(49,"div",14),b.TgZ(50,"label",21),b._uU(51,"Notes"),b.qZA(),b._UZ(52,"textarea",27),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.TgZ(53,"div",28),b.TgZ(54,"button",29),b.NdJ("click",function(){return t.uploadFiles()}),b._uU(55,"Submit"),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b._UZ(56,"app-footer"),b.qZA()}2&e&&(b.Q6J("ngIf",t.isSubmitted),b.xp6(5),b.Q6J("title",t.title)("canshowBreadCrumb",!0),b.xp6(5),b.hij("Add ",t.title,""),b.xp6(2),b.Q6J("link",t.backLink),b.xp6(2),b.Q6J("formGroup",t.addForm),b.xp6(8),b.Q6J("ngModel",t.contact)("data",t.contactList)("placeholder","Concerned Contact"),b.xp6(3),b.Q6J("fGroup",t.addForm),b.xp6(2),b.Q6J("fGroup",t.addForm),b.xp6(2),b.Q6J("fGroup",t.addForm),b.xp6(6),b.Q6J("ngIf",t.fCtrls.phoneNumber.dirty&&t.fCtrls.phoneNumber.invalid),b.xp6(6),b.Q6J("ngIf",t.fCtrls.email.dirty&&t.fCtrls.email.invalid),b.xp6(13),b.Q6J("disabled",!t.selectedFiles))},directives:[a.O5,w.G,T.k,q.e,S.K,O._Y,O.JL,O.sg,J.c,O.JJ,O.u,L.a,O.Fj,_.c,x.O],styles:[""]}),Q)}],H=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.oAB({type:e}),e.\u0275inj=b.cJS({imports:[[E.Bz.forChild(G)],E.Bz]}),e}(),Y=r(47635),P=((D=function e(){n(this,e)}).\u0275fac=function(e){return new(e||D)},D.\u0275mod=b.oAB({type:D}),D.\u0275inj=b.cJS({imports:[[a.ez,H,Y.m]]}),D)}}])}();