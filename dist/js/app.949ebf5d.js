(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00b2":function(t,e,a){},"0124":function(t,e,a){},"0994":function(t,e,a){},"10dd":function(t,e,a){"use strict";var n=a("4df4"),s=a.n(n);s.a},"22a0":function(t,e,a){},"22f4":function(t,e,a){},"235f":function(t,e,a){},2550:function(t,e,a){"use strict";var n=a("cfd7"),s=a.n(n);s.a},"39ba":function(t,e,a){"use strict";var n=a("235f"),s=a.n(n);s.a},"4d58":function(t,e,a){},"4df4":function(t,e,a){},"514c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,s,i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],l={name:"app"},c=l,u=(a("5c0b"),a("2877")),d=Object(u["a"])(c,r,o,!1,null,null,null),p=d.exports,h=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"show-case"}},[a("div",{staticClass:"card_container"},[a("CardInvoice",{attrs:{detailPayment:t.paymentDetail,payNowAction:t.payButton,title:"Invoice xxx xxx xxx"}}),a("br"),a("br"),a("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[a("BaseIconProductAndPlan",{attrs:{product:"life",plan:"bronze"}}),a("BaseIconProductAndPlan",{attrs:{product:"safe",plan:"gold",size:"medium"}}),a("BaseIconProductAndPlan",{attrs:{product:"strong",plan:"silver"}})],1)],1)])},f=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon-container",class:[t.product].concat(t.iconSizeClasses)},[a("img",{staticClass:"icon-product",attrs:{src:t.getProductImg}}),a("img",{staticClass:"icon-plan",attrs:{src:t.getPlanImg}})])},v=[],g={name:"BaseIconProductAndPlan",data:function(){return{productIcon:{safe:"https://superyou.co.id/img/icons/prod-umbrella.svg",life:"https://superyou.co.id/img/icons/prod-heart.svg",strong:"https://superyou.co.id/img/icons/prod-dumbell.svg"},planIcon:{gold:"https://superyou.co.id/img/icons/badge-gold.svg",silver:"https://superyou.co.id/img/icons/badge-silver.svg",bronze:"https://superyou.co.id/img/icons/badge-bronze.svg"}}},props:{product:{type:String,default:"safe"},plan:{type:String,default:"gold"},size:{type:String,default:"medium"}},computed:{getProductImg:function(){return this.productIcon[this.product]},getPlanImg:function(){return this.planIcon[this.plan]},iconSizeClasses:function(){return{small:"small"===this.size,medium:"medium"===this.size,large:"large"===this.size}}}},b=g,_=(a("b11d"),Object(u["a"])(b,y,v,!1,null,null,null)),C=_.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-card",{attrs:{"header-style":t.cardStyles.header}},[a("h3",{attrs:{slot:"card-header"},slot:"card-header"},[t._v(t._s(t.title))]),a("div",{attrs:{slot:"card-body"},slot:"card-body"},[a("InvoiceBody",{attrs:{details:t.detailPayment}},[a("baseChip",{attrs:{slot:"payment-status",type:t.detailPayment.status},slot:"payment-status"},[a("span",{staticClass:"text"},[t._v(t._s(t.detailPayment.status_message))])]),a("baseButton",{attrs:{slot:"payment-button","btn-text":"BAYAR SEKARANG",isDisabled:t.isActionDisabled},on:{onClick:t.handleClickCTA},slot:"payment-button"}),a("div",{staticClass:"payment-list",attrs:{slot:"payment-detail"},slot:"payment-detail"},[t._l(t.detailPayment.invoices,(function(t){return a("InvoiceDetail",{key:t.id,attrs:{datas:t}})})),a("div",{staticClass:"invoice-summary"},[a("div",{staticClass:"invoice-summary__wrapper"},[a("h2",[t._v("Payment Fee")]),a("span",[t._v(t._s(t.detailPayment.fee))])])])],2)],1)],1)])},x=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"su_card"},[a("div",{staticClass:"su_card-header",style:[t.headerStyle]},[t._t("card-header",[a("h3",[t._v("Card Header")])])],2),a("div",{staticClass:"su_card-body",style:[t.bodyStyle]},[t._t("card-body",[t._v("card body")])],2)])},w=[],P={name:"BaseCard",props:{headerStyle:{type:Object,default:function(){return{backgroundColor:"#00aaae"}}},bodyStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}}},D=P,I=(a("6fb8"),Object(u["a"])(D,k,w,!1,null,"2bfbd4af",null)),B=I.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"outline arrow",class:{size:t.size,disabled:t.isDisabled},attrs:{id:"su_btn",disabled:t.isDisabled},on:{click:t.handleClick}},[t._v(t._s(t.btnText))])},M=[],N={props:{btnText:{type:String,default:"BUTTON"},size:{type:String},onClick:{type:Function},isDisabled:{type:Boolean,default:!1}},methods:{handleClick:function(){this.$emit("onClick")}}},A=N,O=(a("8c82"),Object(u["a"])(A,E,M,!1,null,null,null)),j=O.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.type,style:t.inlineStyles,attrs:{id:"chip"}},[t._t("icon-left"),t._t("default"),t._t("icon-right")],2)},$=[],F={name:"BaseChip",props:{type:{type:String,default:"default"},inlineStyles:{type:[Object,String]}}},z=F,R=(a("88e6"),Object(u["a"])(z,T,$,!1,null,"5582b7bc",null)),L=R.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"su_invoice-body"},[a("div",{staticClass:"payment-last"},[a("p",{staticClass:"title"},[t._v("Tanggal Pembayaran Terakhir")]),a("p",{staticClass:"body"},[t._v(t._s(t.details.lastPayment))])]),a("div",{staticClass:"payment-next"},[a("p",{staticClass:"title"},[t._v("Tanggal Pembayaran Berikutnya")]),a("p",{staticClass:"body"},[t._v(t._s(t.details.nextPayment))])]),a("div",{staticClass:"payment-status"},[t._t("payment-status",[a("div",[t._v(t._s(t.details.status))])])],2),a("div",{staticClass:"payment-total"},[a("p",{staticClass:"title"},[t._v("Jumlah Pembayaran")]),a("p",{staticClass:"body"},[t._v(t._s(t.details.total))])]),a("div",{staticClass:"payment-method"},[a("p",{staticClass:"title"},[t._v("Metode Pembayaran")]),a("p",{staticClass:"body"},[t._v(t._s(t.details.method))])]),a("div",{staticClass:"payment-term"},[a("p",{staticClass:"title"},[t._v("Mode Pembayaran")]),a("p",{staticClass:"body"},[t._v(t._s(t.details.mode))])]),a("div",{staticClass:"payment-detail"},[a("p",{staticClass:"body dropdown-detail",on:{click:t.onClickInvoiceDetail}},[t._v(" Lihat Detail "),a("img",{staticClass:"dropdown-detail-arrow",class:{active:t.showInvoiceDetail},attrs:{src:"https://superyou.co.id/img/icons/caret-down-darkblue.svg"}})])]),a("div",{staticClass:"payment-button"},[t._t("payment-button",[a("button",[t._v("Bayar Sekarang")])])],2),a("div",{staticClass:"payment-detail-invoice"},[a("transition-expand",[t.showInvoiceDetail?t._t("payment-detail"):t._e()],2)],1)])},q=[],K={name:"TransitionExpand",functional:!0,render:function(t,e){var a={props:{name:"expand"},on:{afterEnter:function(t){t.style.height="auto"},enter:function(t){var e=getComputedStyle(t).width;t.style.width=e,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";var a=getComputedStyle(t).height;t.style.width=null,t.style.position=null,t.style.visibility=null,t.style.height=0,getComputedStyle(t).height,setTimeout((function(){t.style.height=a}))},leave:function(t){var e=getComputedStyle(t).height;t.style.height=e,getComputedStyle(t).height,setTimeout((function(){t.style.height=0}))}}};return t("transition",a,e.children)}},J=K,U=(a("c5e7"),Object(u["a"])(J,n,s,!1,null,null,null)),V=U.exports,G={name:"invoiceBody",components:{TransitionExpand:V},props:{details:{type:Object,required:!0}},data:function(){return{showInvoiceDetail:!1}},methods:{onClickInvoiceDetail:function(){this.showInvoiceDetail=!this.showInvoiceDetail}}},H=G,W=(a("10dd"),Object(u["a"])(H,Y,q,!1,null,"25a83905",null)),Z=W.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"invoice-detail"},[a("div",{staticClass:"detail-left"},[a("div",{staticClass:"product-icon",staticStyle:{width:"70px"}},[a("BaseIconProductAndPlan",{attrs:{product:t.getIconProduct,plan:t.getBadgeType}})],1),a("div",{staticClass:"product-basic-rider-name"},[a("ProductCompletedName",{attrs:{details:t.allProductNameAndPolicyNumber}})],1),a("a",{staticClass:"see-product-detail",attrs:{href:"/dashboard/e-policy/"+t.datas.productId}},[t._v("Detail Produk")])]),a("div",{staticClass:"detail-right"},[a("span",{staticClass:"price",class:t.noRiders},[a("span",[t._v(t._s(t.datas.price))])]),t.datas.riders&&t.datas.riders.length?t._l(t.datas.riders,(function(e){return a("span",{key:e.price,staticClass:"price"},[a("span",[t._v(t._s(e.price))])])})):t._e()],2)])},X=[],tt=(a("caad"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-completed-name",class:t.noRiders},[a("h2",{staticClass:"basic-product"},[t._v(t._s(t.details.name)+" - "+t._s(t.details.plan))]),t.details.riders?t._l(t.details.riders,(function(e,n){return a("div",{key:"rider"+n,staticClass:"rider-wrapper"},[a("h2",[t._v(t._s(e.name))]),a("BaseChip",{attrs:{inlineStyles:t.chipCustomStyle,type:"outline"}},[t._v("Add On")])],1)})):t._e(),a("p",{staticClass:"policy-number",class:t.noPolicyNumber},[t._v(t._s(t.details.policyNumber))])],2)}),et=[],at={name:"ProductCompletedName",components:{BaseChip:L},props:{details:{type:Object,default:function(){return{name:"Super Safe Protection",plan:"Gold",riders:[],policyNumber:12341234}}}},computed:{chipCustomStyle:function(){return"width: 62px;align-self: center;margin-left: 7px;height: 18px;padding: 2px 4px;"},noRiders:function(){return null===this.details.riders||0===this.details.riders.length?"single":""},noPolicyNumber:function(){return null===this.details.policyNumber?"empty":""}}},nt=at,st=(a("2550"),Object(u["a"])(nt,tt,et,!1,null,"1c4199c8",null)),it=st.exports,rt={name:"InvoiceDetail",components:{ProductCompletedName:it,BaseIconProductAndPlan:C},props:{datas:{type:Object,default:function(){return{}}}},computed:{allProductNameAndPolicyNumber:function(){return{name:this.datas.product,plan:this.datas.plan,riders:this.datas.riders,policyNumber:this.datas.policyNumber}},getIconProduct:function(){if(this.datas.product){var t=this.datas.product.toLowerCase();return t.includes("safe")?"safe":t.includes("life")?"life":t.includes("strong")?"strong":null}return null},getBadgeType:function(){return this.datas?this.datas.plan.toLowerCase():""},noRiders:function(){return null===this.datas.riders||0===this.datas.riders.length?"single":null}}},ot=rt,lt=(a("708d"),Object(u["a"])(ot,Q,X,!1,null,"07fc81fb",null)),ct=lt.exports,ut={name:"CardInvoice",props:{detailPayment:{type:Object,required:!0},payNowAction:{type:Function},title:{type:String,default:""}},components:{BaseCard:B,BaseButton:j,BaseChip:L,InvoiceBody:Z,InvoiceDetail:ct},computed:{cardStyles:function(){return{header:{backgroundColor:"#00aaae",color:"#fff"}}},isActionDisabled:function(){return!this.detailPayment||"waiting"!==this.detailPayment.status}},methods:{handleClickCTA:function(){this.payNowAction()}}},dt=ut,pt=(a("82a8"),Object(u["a"])(dt,S,x,!1,null,"85dd8e7c",null)),ht=pt.exports,mt={lastPayment:"3 January 2018",nextPayment:"3 Agustus 2018",status:"waiting",status_message:"Pembayaran Berhasil",total:"Rp 57.500",fee:"Rp 5.000",mode:"Bulanan",method:"Debit Card",invoices:[{product:"Super Safe Protection",productId:"1",plan:"Gold",policyNumber:1919000112,price:"Rp 1.280.900",fee:"5.000",riders:[{name:"Super Motor",price:"Rp 9.000"},{name:"Super Holiday",price:"Rp 12.000"}]},{product:"Super Life Protection",productId:"2",plan:"Silver",policyNumber:null,price:"Rp 22.100",riders:null},{product:"Super Strong Protection",productId:"3",plan:"Bronze",policyNumber:1919000114,price:"Rp 22.100",riders:null}],policy_group_number:"3191783",summary_token:"b6b7a3b0768ed2d2601ac37fcbfbf4560f4b2bcc",payment_method_id:22},ft=function(){return alert("from paynow")},yt={name:"ShowCase",data:function(){return{paymentDetail:null,payButton:null}},components:{BaseIconProductAndPlan:C,CardInvoice:ht},computed:{cardStyles:function(){return{header:{backgroundColor:"#00aaae",color:"#fff"}}}},created:function(){this.paymentDetail=mt,this.payButton=ft}},vt=yt,gt=(a("a669"),Object(u["a"])(vt,m,f,!1,null,null,null)),bt=gt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"form-container"}},[a("BaseStepper",{attrs:{dataSteps:t.dataSteps}}),a("h1",[t._v("Form")]),a("form",[a("base-input",{attrs:{value:t.userName,label:"Nama Lengkap",name:"userName",note:"Note: Nama Lengkap",char:"^[A-Za-z ]+$","min-length":6,required:""},on:{handleChange:t.handleInputChange}}),a("br"),a("base-input",{attrs:{value:t.citizenId,label:"Nomor Kartu Indentitas",name:"citizenId",inputType:"text",char:"^[0-9]*$","max-length":16,required:""},on:{handleChange:t.handleInputChange}}),a("br"),a("base-input",{attrs:{value:t.insuredName,label:"Email",name:"insuredName",inputType:"email",required:""},on:{handleChange:t.handleInputChange}}),a("br"),a("base-select",{attrs:{name:"relations",label:"Hubungan",options:t.dataSelectOpt},on:{handleChange:t.handleInputChange}}),a("br"),a("base-checkbox-and-radio",{attrs:{name:"gender",axis:"row",inputType:"checkbox"},on:{handleChange:t.handleInputChange}}),a("br"),a("base-input-date",{attrs:{value:t.dob,"min-age":17,"max-age":40}})],1)],1)},Ct=[],St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"su-input",class:{"with-note":t.note,"input-error":t.isError}},[a("div",{staticClass:"su-input_control",class:{"is-focused":t.isFocused}},[a("label",{staticClass:"su-input_label"},[t._v(" "+t._s(t.label)+" "),a("input",{staticClass:"su-input_text",attrs:{type:t.inputType,name:t.name,autocomplete:"off"},domProps:{value:t.value},on:{focus:t.onInputFocus,blur:t.onInputBlur,beforeinput:function(e){return t.expectedCharacters(e)},input:function(e){return t.onInputChange(e)}}}),t.icon?a("span",{staticClass:"su-input_icon"},[a("img",{attrs:{src:t.icon,alt:"input icon"}})]):t._e()]),t.isError?a("span",{staticClass:"su-input_error message"},[t._v(t._s(t.errorMessage))]):a("span",{staticClass:"su-input_note message"},[t._v(t._s(t.note))])])])},xt=[],kt=(a("a9e3"),a("4d63"),a("ac1f"),a("25f0"),{name:"BaseInput",data:function(){return{isFocused:!1,isError:!1,isReadOnly:!1,errorMessage:null}},props:{value:{type:String},name:String,inputType:{type:String,default:"text"},label:{type:String,default:null},note:{type:String,default:null},char:{type:String,default:null},maxLength:{type:Number,default:null},minLength:{type:Number,default:0},required:{type:Boolean,default:!1},icon:{type:String,default:null}},methods:{onInputBlur:function(){if(this.isFocused=!1,this.required&&(null===this.value||0===this.value.length))return this.errorMessage="".concat(this.label," wajib di isi"),this.isError=!0,this.isError;this.checkMinLength()?(this.errorMessage="Minimal ".concat(this.minLength," karakter"),this.isError=!0):(this.errorMessage="",this.isError=!1),"email"===this.inputType&&this.validateEmail(this.value)},onInputFocus:function(){this.isFocused=!0},onInputChange:function(t){this.$emit("handleChange",t.target.value,t.target.getAttribute("name"))},expectedCharacters:function(t){return this.checkMaxLength(t),this.checkCharRegexMatch(t),!0},checkMaxLength:function(t){if(this.maxLength&&t.target.value.length>=this.maxLength&&"deleteContentBackward"!==t.inputType)return t.preventDefault(),!1},checkMinLength:function(){var t=this.value?this.value.length:0;return this.minLength>t},checkCharRegexMatch:function(t){if(this.char){var e=new RegExp(this.char);return!(!e.test(t.data)&&"deleteContentBackward"!==t.inputType)||(t.preventDefault(),!1)}},validateEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if(console.log(e.test(t)),e.test(t))return this.isError=!1,this.errorMessage="",!0;this.isError=!0,this.errorMessage="Format email tidak valid"}}}),wt=kt,Pt=(a("afa6"),Object(u["a"])(wt,St,xt,!1,null,"7c3612c4",null)),Dt=Pt.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"su-stepper-wrapper"},[a("div",{attrs:{id:"su-stepper"}},[a("div",{staticClass:"su-progress"},[a("div",{staticClass:"bar",style:{width:t.barWidth+"%"}})]),t._l(t.dataSteps,(function(e,n){return a("div",{key:e.info,staticClass:"su-step"},[a("div",{staticClass:"rounded",class:{passed:t.isStepPassed(n)}},[t._v(" "+t._s(e.title)+" ")]),a("div",{staticClass:"info"},[t._v(t._s(e.info))])])}))],2)])},Bt=[],Et={name:"BaseStepper",props:{dataSteps:{type:Array,default:function(){return[{title:"1",info:"Info 1"},{title:"2",info:"Info 2"},{title:"3",info:"Info 3"},{title:"4",info:"Info 4"}]}},currentStep:{type:Number,default:1}},methods:{isStepPassed:function(t){return t<this.currentStep}},computed:{barWidth:function(){if(0===this.currentStep||1===this.currentStep)return 0;var t=this.dataSteps.length-1,e=this.currentStep-1,a=1/t*100,n=a*e;return n}}},Mt=Et,Nt=(a("78f0"),Object(u["a"])(Mt,It,Bt,!1,null,"3be8f0d3",null)),At=Nt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"input-error":t.isError},attrs:{id:"su-base-select"}},[a("label",{class:{active:t.isFocused}},[t._v(t._s(t.label))]),a("v-select",{staticClass:"base-select",attrs:{options:t.options,searchable:!1,selectable:function(t){return"INA"!==t.val},"select-on-key-codes":[8]},on:{input:t.onSelectOption,"search:focus":t.onFocus,"search:blur":t.onBlur}}),t.isError?a("span",{staticClass:"su-input_error message"},[t._v(t._s(t.errorMessage))]):t._e()],1)},jt=[],Tt=(a("b0c0"),a("4a7a")),$t=a.n(Tt),Ft={name:"BaseSelect",data:function(){return{selectedData:null,isFocused:!1,isError:!1,errorMessage:""}},components:{vSelect:$t.a},props:{options:{type:Array,default:function(){return[{label:"Indonesia",val:"INA"},{label:"Canada",val:"CA"},{label:"Australia",val:"AUS"}]}},label:{type:String,default:"Label"},name:{type:String,default:null}},methods:{onSelectOption:function(t){t&&(this.selectedData=t)},onFocus:function(){this.isFocused=!0},onBlur:function(){return this.isFocused=!1,null===this.selectedData?(this.isError=!0,this.errorMessage="Wajib di isi",this.isError):(this.isError=!1,this.errorMessage="",this.isError)}},watch:{selectedData:function(t){this.$emit("handleChange",t,this.name)}}},zt=Ft,Rt=(a("9666"),Object(u["a"])(zt,Ot,jt,!1,null,null,null)),Lt=Rt.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"su-input_checkboxes",class:t.axis},[a("label",{staticClass:"main"},[t._v("Jenis Kelamin")]),t._l(t.options,(function(e){return a("div",{key:e.val,staticClass:"checkbox-wrapper"},["checkbox"===t.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedData,expression:"checkedData"}],attrs:{id:e.name,name:t.name,type:"checkbox"},domProps:{value:e.val,checked:Array.isArray(t.checkedData)?t._i(t.checkedData,e.val)>-1:t.checkedData},on:{change:function(a){var n=t.checkedData,s=a.target,i=!!s.checked;if(Array.isArray(n)){var r=e.val,o=t._i(n,r);s.checked?o<0&&(t.checkedData=n.concat([r])):o>-1&&(t.checkedData=n.slice(0,o).concat(n.slice(o+1)))}else t.checkedData=i}}}):"radio"===t.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedData,expression:"checkedData"}],attrs:{id:e.name,name:t.name,type:"radio"},domProps:{value:e.val,checked:t._q(t.checkedData,e.val)},on:{change:function(a){t.checkedData=e.val}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedData,expression:"checkedData"}],attrs:{id:e.name,name:t.name,type:t.inputType},domProps:{value:e.val,value:t.checkedData},on:{input:function(e){e.target.composing||(t.checkedData=e.target.value)}}}),a("label",{attrs:{for:e.name}},[t._v(t._s(e.name))])])})),t.isError?a("span",{staticClass:"su-input_error message"},[t._v(t._s(t.errorMessage))]):t._e()],2)},qt=[],Kt={name:"BaseCheckboxAndRadio",data:function(){return{checkedData:[],isError:!1,errorMessage:""}},props:{options:{type:Array,default:function(){return[{val:"male",name:"Laki-laki"},{val:"female",name:"Perempuan"}]}},axis:{type:String,default:"column"},name:{type:String,default:null},inputType:{type:String,default:"checkbox"}},watch:{checkedData:function(t){this.$emit("handleChange",t,this.name)}}},Jt=Kt,Ut=(a("eab7"),Object(u["a"])(Jt,Yt,qt,!1,null,"226967cf",null)),Vt=Ut.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"su-date-wrapper"},[a("label",{class:{"date-focused":t.isFocused,"is-error":t.isError}},[t._v("Tanggal Lahir")]),a("div",{staticClass:"su-date",class:{"date-focused":t.isFocused,"is-error":t.isError},on:{"!keyup":function(e){return t.updateValue(e)},"!focus":function(e){return t.onFocused(e)},"!blur":function(e){return t.onBlured(e)}}},[t.showDay?a("input",{directives:[{name:"model",rawName:"v-model",value:t.day,expression:"day"}],ref:"day",staticClass:"su-date__input su-date__input--day",attrs:{type:"number",placeholder:"dd"},domProps:{value:t.day},on:{input:[function(e){e.target.composing||(t.day=e.target.value)},t.updateDay],blur:function(e){return t.eachBlur("day",2)}}}):t._e(),t.showDay&&t.showMonth?a("span",{staticClass:"su-date__divider"},[t._v("/")]):t._e(),t.showMonth?a("input",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],ref:"month",staticClass:"su-date__input su-date__input--month",attrs:{type:"number",placeholder:"mm"},domProps:{value:t.month},on:{input:[function(e){e.target.composing||(t.month=e.target.value)},t.updateMonth],blur:function(e){return t.eachBlur("month",2)},focus:function(e){return t.eachFocus("month")}}}):t._e(),t.showYear&&(t.showDay||t.showMonth)?a("span",{staticClass:"su-date__divider"},[t._v("/")]):t._e(),t.showYear?a("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],ref:"year",staticClass:"su-date__input su-date__input--year",attrs:{type:"number",placeholder:"yyyy"},domProps:{value:t.year},on:{input:[function(e){e.target.composing||(t.year=e.target.value)},t.updateYear],blur:function(e){return t.eachBlur("year",4)},focus:function(e){return t.eachFocus("year")}}}):t._e()]),t.isError?a("span",{staticClass:"su-input_error message"},[t._v(t._s(t.errorMessage))]):a("span",{staticClass:"su-input_note message"},[t._v(t._s(t.note))])])},Ht=[],Wt=(a("99af"),a("0d03"),a("9129"),a("e25e"),a("4d90"),{name:"su-date",props:{value:{type:[Number,String],required:!0},showDay:{type:Boolean,default:!0},showMonth:{type:Boolean,default:!0},showYear:{type:Boolean,default:!0},note:{type:String},minAge:{type:Number},maxAge:{type:Number}},data:function(){return{day:"".concat(this.value?new Date(this.value).getDate():""),month:"".concat(this.value?new Date(this.value).getMonth()+1:""),year:"".concat(this.value?new Date(this.value).getFullYear():""),isFocused:!1,isError:!1,errorMessage:""}},watch:{year:function(t,e){t>9999&&(this.year=e)}},methods:{updateDay:function(){this.day&&this.day.length>=2&&this.$refs.month.select(),this.day>31&&(this.day="31"),!this.day.length||parseInt(this.day,10)<4||(this.showMonth?this.$refs.month.select():this.showYear&&this.$refs.year.select())},updateMonth:function(){this.month&&this.month.length>=2&&this.$refs.year.select(),this.month>12&&(this.month="12"),!this.month.length||parseInt(this.month,10)<2||this.showYear&&this.$refs.year.select()},updateYear:function(){["1","2"].includes(this.year[0])||(this.year=""),this.year.length>4&&(this.year=this.year)},updateValue:function(){var t=Date.parse("".concat(this.year.padStart(4,0),"-").concat(this.month,"-").concat(this.day));console.log(t),Number.isNaN(t)||this.$emit("input",t)},checkValidDate:function(){var t=Date.parse("".concat(this.year.padStart(4,0),"-").concat(this.month,"-").concat(this.day));return!(2!==this.day.length||2!==this.month.length||4!==this.year.length||!t)},validateMinMaxYear:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(new Date).getMonth()+1,a=(new Date).getFullYear()-t,n=(new Date).getDate(),s="".concat(e,"/").concat(n,"/").concat(a),i=new Date(s).getTime();return console.log(i),i>this.submittedDate},eachBlur:function(t,e){this[t].length?this[t]=this[t].padStart(e,0):this[t]=""},eachFocus:function(t){"year"===t?0===this.month.length&&this.$refs.month.select():"month"===t&&0===this.day.length&&0===this.month.length&&this.$refs.day.select()},onFocused:function(){this.isFocused=!0},onBlured:function(){if(this.isError=!1,this.errorMessage="",this.isFocused=!1,!this.checkValidDate())return this.isError=!0,this.errorMessage="Tanggal lahir tidak valid",!1;this.minAge&&!this.validateMinMaxYear(this.minAge)&&(this.isError=!0,this.errorMessage="Umur harus ".concat(17," tahun ke atas")),this.maxAge&&this.validateMinMaxYear(this.maxAge)&&(this.isError=!0,this.errorMessage="Umur harus dibawah ".concat(this.maxAge," tahun ke atas"))}},computed:{submittedDate:function(){return Date.parse("".concat(this.year.padStart(4,0),"-").concat(this.month,"-").concat(this.day))}}}),Zt=Wt,Qt=(a("daff"),Object(u["a"])(Zt,Gt,Ht,!1,null,null,null)),Xt=Qt.exports,te={name:"FormComponets",data:function(){return{userName:null,citizenId:null,insuredName:null,relations:null,gender:null,dob:"",email:{val:null,isError:!1,errorMsg:null,min:4},dataSteps:[{title:"1",info:"Pilih Produk"},{title:"2",info:"Isi Data"},{title:"3",info:"Review"},{title:"4",info:"Pembayaran"}],dataSelectOpt:[{label:"Saya Sendiri",val:"self"},{label:"Ayah Kandung",val:"father"},{label:"Ibu Kandung",val:"mother"},{label:"Saudara Kandung",val:"brother"}]}},components:{BaseInput:Dt,BaseStepper:At,BaseSelect:Lt,BaseCheckboxAndRadio:Vt,BaseInputDate:Xt},methods:{handleInputChange:function(t,e){this[e]=t}}},ee=te,ae=(a("39ba"),Object(u["a"])(ee,_t,Ct,!1,null,"f1b94352",null)),ne=ae.exports;i["a"].use(h["a"]);var se=new h["a"]({mode:"history",routes:[{path:"/components",name:"components",component:bt},{path:"/form-components",name:"formComponents",component:ne}]}),ie=se;i["a"].config.productionTip=!1,new i["a"]({router:ie,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"66e0":function(t,e,a){},"6fb8":function(t,e,a){"use strict";var n=a("86cc"),s=a.n(n);s.a},"708d":function(t,e,a){"use strict";var n=a("4d58"),s=a.n(n);s.a},"78f0":function(t,e,a){"use strict";var n=a("22f4"),s=a.n(n);s.a},"7b94":function(t,e,a){},"82a8":function(t,e,a){"use strict";var n=a("22a0"),s=a.n(n);s.a},"86cc":function(t,e,a){},"88e6":function(t,e,a){"use strict";var n=a("9cae"),s=a.n(n);s.a},"8c82":function(t,e,a){"use strict";var n=a("66e0"),s=a.n(n);s.a},9666:function(t,e,a){"use strict";var n=a("d3b4"),s=a.n(n);s.a},"9c0c":function(t,e,a){},"9cae":function(t,e,a){},a669:function(t,e,a){"use strict";var n=a("00b2"),s=a.n(n);s.a},afa6:function(t,e,a){"use strict";var n=a("0124"),s=a.n(n);s.a},b11d:function(t,e,a){"use strict";var n=a("514c"),s=a.n(n);s.a},b853:function(t,e,a){},c5e7:function(t,e,a){"use strict";var n=a("7b94"),s=a.n(n);s.a},cfd7:function(t,e,a){},d3b4:function(t,e,a){},daff:function(t,e,a){"use strict";var n=a("b853"),s=a.n(n);s.a},eab7:function(t,e,a){"use strict";var n=a("0994"),s=a.n(n);s.a}});
//# sourceMappingURL=app.949ebf5d.js.map