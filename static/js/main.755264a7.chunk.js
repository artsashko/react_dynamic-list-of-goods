(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(4),c=n.n(a),u=n(1),s=n.n(u),i=n(2),l=n(5),f=n(6),d=n(8),p=n(7),m=function(t){var e=t.goods;return o.a.createElement("ul",null,e.map((function(t){return o.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})))};n(15);function h(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){var t=Object(i.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return(e=t.sent).sort((function(t,e){return t.name.localeCompare(e.name)})),t.abrupt("return",e.slice(0,5));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(i.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={goods:[]},t.loadGoods=function(){var e=Object(i.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:r=e.sent,t.setState({goods:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(f.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goods;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Dynamic list of Goods"),o.a.createElement("button",{onClick:function(){return t.loadGoods(h)},type:"button"},"Load All Goods"),o.a.createElement("button",{onClick:function(){return t.loadGoods(b)},type:"button"},"Load 5 first"),o.a.createElement("button",{onClick:function(){return t.loadGoods(v)},type:"button"},"Load red goods"),o.a.createElement(m,{goods:e}))}}]),n}(o.a.Component);c.a.render(o.a.createElement(y,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.755264a7.chunk.js.map