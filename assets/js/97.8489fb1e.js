(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{518:function(e,t,n){"use strict";n.r(t);var i={data:function(){return{activeConfirm:!1}},methods:{openConfirm:function(){this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",accept:this.acceptAlert,parameters:["hello"]})},acceptAlert:function(e){this.$vs.notify({color:"danger",title:"Deleted image "+e[0],text:"The selected image was successfully deleted"})}}},o=n(1),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"centerx"},[n("vs-button",{attrs:{color:"danger",type:"gradient"},on:{click:function(t){return e.openConfirm()}}},[e._v("Alert Primary")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);