(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(4),o=c(5),l=c(7),r=c(6),d=(c(12),c(13),c(1)),i=c(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e.handleSelect=function(t){e.setState({selectedGood:t})},e.handleClear=function(){e.setState({selectedGood:""})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,c=u.map((function(c){return Object(i.jsxs)("tr",{"data-cy":"Good",className:t===c?"has-background-success-light":"",children:[Object(i.jsx)("td",{children:t!==c?Object(i.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.handleSelect(c)},children:"+"}):Object(i.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.handleClear,children:"-"})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})}));return Object(i.jsxs)("main",{className:"section container",children:[Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[this.state.selectedGood.length?"".concat(t," is selected"):"No goods selected",t.length>0&&Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleClear})]}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:c})})]})}}]),c}(d.Component);a.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.736f8902.chunk.js.map