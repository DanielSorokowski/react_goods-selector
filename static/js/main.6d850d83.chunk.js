(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=c(5),l=c(7),d=c(6),i=(c(12),c(13),c(1)),r=c.n(i),u=c(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam",isGoodSelected:!0},e.handleSelect=function(t){e.setState({selectedGood:t,isGoodSelected:!0})},e.handleClearClick=function(){e.setState({selectedGood:"",isGoodSelected:!1})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.selectedGood,s=t.isGoodSelected,n=b.map((function(t){return Object(u.jsxs)("tr",{"data-cy":"Good",className:c===t?"has-background-success-light":"",children:[Object(u.jsx)("td",{children:c!==t?Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.handleSelect(t)},children:"+"}):Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.handleClearClick,children:"-"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]})}));return Object(u.jsxs)("main",{className:"section container",children:[Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[this.state.isGoodSelected?"".concat(c," is selected"):"No goods selected",s&&Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleClearClick})]}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:n})})]})}}]),c}(r.a.Component);n.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6d850d83.chunk.js.map