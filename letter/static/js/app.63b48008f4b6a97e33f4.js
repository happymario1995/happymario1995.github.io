webpackJsonp([1],{40:function(e,n){},41:function(e,n,t){t(86);var r=t(14)(t(48),t(94),"data-v-647e008b",null);e.exports=r.exports},42:function(e,n,t){t(85);var r=t(14)(t(49),t(92),"data-v-35c047fd",null);e.exports=r.exports},43:function(e,n,t){var r=t(14)(t(46),t(91),null,null);e.exports=r.exports},44:function(e,n,t){var r=t(14)(t(47),t(93),null,null);e.exports=r.exports},46:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),u=t(24),a=t.n(u),l=t(42),c=t.n(l),d=t(41),f=t.n(d),h=t(40);t.n(h);n.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:f.a},data:function(){return{currentStyle:"",enableHtml:!0,fullStyle:["\nhtml {\n  height: 100%; \n  perspective: 1000px;\n  color: rgb(222,222,222); \n  background: rgb(0,64,64); \n}\n.styleEditor {\n  width: 50vw; \n  height: 100%; \n  margin: .5em; \n  padding: .5em; \n  overflow: auto; \n  border: 1px solid; \n  background: rgb(20,20,20);\n}\n.token.selector{ \n  color: rgb(130,150,0); \n}\n.token.property{ \n  color: rgb(190,140,0); \n}\n.token.punctuation{ \n  color: yellow; \n}\n.token.function{ \n  color: rgb(40,160,150); \n}\n.styleEditor {\n  position: fixed; \n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n.resumeEditor{\n  right: 0;\n  color: #222;\n  width: 50vw; \n  height: 100%;\n  margin: .5em;\n  padding: 2em;\n  overflow: auto;\n  position: fixed; \n  border: 1px solid;\n  -webkit-transition: none;\n  background: rgb(200,200,200); \n  transition: none;\n  -webkit-transform: rotateY(-10deg) translateZ(-100px) ;\n          transform: rotateY(-10deg) translateZ(-100px) ;\n}"," "],currentMarkdown:"",fullMarkdown:"\nLetter\n====\n<br>\n\n坐标：湖南长沙。\n资深软件工程师，资深产品经理，高级项目经理。现为自由职业。\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function e(){return n.apply(this,arguments)}var n=a()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.progressivelyShowStyle(0);case 2:return e.next=4,this.progressivelyShowResume();case 4:return e.next=6,this.progressivelyShowStyle(1);case 6:return e.next=8,this.progressivelyShowStyle(2);case 8:return e.next=10,this.progressivelyShowStyle(3);case 10:case"end":return e.stop()}},e,this)}));return e}(),progressivelyShowStyle:function(e){var n=this;return new o.a(function(t,r){var o=a()(s.a.mark(function n(){var r,i,u,a,l,c=this;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=this.fullStyle[e]){n.next=3;break}return n.abrupt("return");case 3:i=this.fullStyle.filter(function(n,t){return t<=e}).map(function(e){return e.length}).reduce(function(e,n){return e+n},0),u=i-r.length,this.currentStyle.length<i?(a=this.currentStyle.length-u,l=r.substring(a,a+1)||" ",this.currentStyle+=l,"\n"===r.substring(a-1,a)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.goBottom()}),setTimeout(o,1)):t();case 6:case"end":return n.stop()}},n,this)})).bind(n);o()})},progressivelyShowResume:function(){var e=this;return new o.a(function(n,t){var r=e.fullMarkdown.length;!function t(){if(e.currentMarkdown.length<r){e.currentMarkdown=e.fullMarkdown.substring(0,e.currentMarkdown.length+1);e.currentMarkdown[e.currentMarkdown.length-1];"\n"===e.currentMarkdown[e.currentMarkdown.length-2]&&e.$refs.resumeEditor&&e.$nextTick(function(){return e.$refs.resumeEditor.goBottom()}),setTimeout(t,60)}else n()}()})}}}},47:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),u=t(24),a=t.n(u),l=t(42),c=t.n(l),d=t(41),f=t.n(d),h=t(40);t.n(h);n.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:f.a},data:function(){return{currentStyle:"",enableHtml:!0,fullStyle:["\nhtml {\n  height: 100%; \n  perspective: 1000px;\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n.styleEditor {\n  width: 90%; \n  height: 100%;\n  padding: .5em;\n  overflow: auto;\n  margin: 2.5vh 5vw;\n  border: 1px solid;\n}\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n.resumeEditor{\n  top: 0; \n  color: #222; \n  padding: 1em;  \n  height: 100%;\n  margin: 2.5vh;\n  overflow: auto;\n  position: fixed;\n  border: 1px solid;\n  background: white;\n}"," "],currentMarkdown:"",fullMarkdown:"\nLetter\n=====\n<br>\n\n坐标：湖南长沙。\n资深软件工程师，资深产品经理，高级项目经理。现为自由职业。\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function e(){return n.apply(this,arguments)}var n=a()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.progressivelyShowStyle(0);case 2:return e.next=4,this.progressivelyShowResume();case 4:return e.next=6,this.progressivelyShowStyle(1);case 6:return e.next=8,this.progressivelyShowStyle(2);case 8:case"end":return e.stop()}},e,this)}));return e}(),progressivelyShowStyle:function(e){var n=this;return new o.a(function(t,r){var o=a()(s.a.mark(function n(){var r,i,u,a,l,c=this;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=this.fullStyle[e]){n.next=3;break}return n.abrupt("return");case 3:i=this.fullStyle.filter(function(n,t){return t<=e}).map(function(e){return e.length}).reduce(function(e,n){return e+n},0),u=i-r.length,this.currentStyle.length<i?(a=this.currentStyle.length-u,l=r.substring(a,a+1)||" ",this.currentStyle+=l,"\n"===r.substring(a-1,a)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.goBottom()}),setTimeout(o,1)):t();case 6:case"end":return n.stop()}},n,this)})).bind(n);o()})},progressivelyShowResume:function(){var e=this;return new o.a(function(n,t){var r=e.fullMarkdown.length;!function t(){if(e.currentMarkdown.length<r){e.currentMarkdown=e.fullMarkdown.substring(0,e.currentMarkdown.length+1);e.currentMarkdown[e.currentMarkdown.length-1];"\n"===e.currentMarkdown[e.currentMarkdown.length-2]&&e.$refs.resumeEditor&&e.$nextTick(function(){return e.$refs.resumeEditor.goBottom()}),setTimeout(t,80)}else n()}()})}}}},48:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(87),o=t.n(r);n.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(88),o=t.n(r);n.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),u=t.n(s),a=document.documentElement.clientWidth;new r.a({el:"#app",render:function(e){return e(a>500?i.a:u.a)}})},85:function(e,n){},86:function(e,n){},91:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"content"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:e.currentStyle}}),e._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:e.currentMarkdown,enableHtml:e.enableHtml}})],1)])},staticRenderFns:[]}},92:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:e._s(e.codeInStyleTag)}}),e._v(" "),t("pre",{domProps:{innerHTML:e._s(e.highlightedCode)}})])},staticRenderFns:[]}},93:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:e.currentStyle}}),e._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:e.currentMarkdown,enableHtml:e.enableHtml}})],1)},staticRenderFns:[]}},94:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:e.enableHtml}},[e.enableHtml?t("div",{domProps:{innerHTML:e._s(e.result)}}):t("pre",[e._v(e._s(e.result))])])},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.63b48008f4b6a97e33f4.js.map