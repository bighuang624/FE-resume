webpackJsonp([1],Array(24).concat([function(t,e,n){"use strict";var i=n(58),a=n.n(i),s=n(124),r=n.n(s),o=r.a.create({baseURL:"https://www.easy-mock.com/mock/599d6ef2059b9c566dcd47e8/resume/",timeout:5e3});o.interceptors.request.use(function(t){return t},function(t){return console.log(t),a.a.reject(t)}),o.interceptors.response.use(function(t){return t.data},function(t){return console.log("err"+t),a.a.reject(t)}),e.a=o},,,,,,,,,,,,,,,,,,,,function(t,e,n){function i(t){n(95)}var a=n(3)(n(49),n(115),i,null,null);t.exports=a.exports},,function(t,e,n){"use strict";function i(){return n.i(a.a)({url:"experience",method:"get"})}e.a=i;var a=n(24)},function(t,e,n){"use strict";function i(){return n.i(a.a)({url:"skills",method:"get"})}e.a=i;var a=n(24)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(45),a=n(44),s=n.n(a);i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:s.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(105),a=n.n(i),s=n(106),r=n.n(s);e.default={name:"app",components:{LeftNav:a.a,MainBoard:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(107),a=n.n(i),s=n(108),r=n.n(s);e.default={name:"leftNav",components:{AboutMe:a.a,Contact:r.a},data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(109),a=n.n(i),s=n(111),r=n.n(s),o=n(110),c=n.n(o);e.default={name:"mainBoard",components:{Experience:a.a,Skills:r.a,SelfEvaluation:c.a},data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"aboutMe",data:function(){return{info1:[{icon:"fa fa-graduation-cap",title:"教育背景",text:"武汉大学软件工程2015级"},{icon:"fa fa-map-marker",title:"城市",text:"武汉"}],info2:[{icon:"fa fa-rss",title:"个人博客",text:"kyonhuang.top",address:"http://kyonhuang.top/"},{icon:"fa fa-github",title:"github",text:"@bighuang624",address:"https://github.com/bighuang624"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact",data:function(){return{info:[{icon:"fa fa-phone",title:"手机",text:"181****2694"},{icon:"fa fa-envelope",title:"邮箱",text:"kyonhuang@qq.com"},{icon:"fa fa-qq",title:"QQ",text:"245****13"},{icon:"fa fa-weibo",title:"微博",text:"@大黄菌今天也在摸鱼"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(46);e.default={name:"experience",data:function(){return{info:[]}},created:function(){var t=this;n.i(i.a)().then(function(e){t.info=e.info})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"selfEvaluation",data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(112),a=n.n(i),s=n(47);e.default={name:"skills",components:{Skill:a.a},data:function(){return{programming:[],quality:[]}},created:function(){var t=this;n.i(s.a)().then(function(e){t.programming=e.programming,t.quality=e.quality})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"skill",props:["title","value"],data:function(){return{valueStyle:"\n      width: "+this.value+"%;\n      animation: "+this.title+" 2s ease-out;\n      "}},methods:{addSkillAnime:function(){var t=document.createElement("style");t.innerText+="\n        @keyframes "+this.title+" {\n          0% { width: 0; }\n          100% { width: "+this.value+"%; }\n        };\n      ",document.getElementsByTagName("head")[0].appendChild(t)}},created:function(){this.addSkillAnime()}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){t.exports=n.p+"static/img/avatar.681cdf1.jpg"},function(t,e,n){function i(t){n(93)}var a=n(3)(n(50),n(113),i,null,null);t.exports=a.exports},function(t,e,n){function i(t){n(97)}var a=n(3)(n(51),n(117),i,null,null);t.exports=a.exports},function(t,e,n){function i(t){n(98)}var a=n(3)(n(52),n(118),i,"data-v-6f83d708",null);t.exports=a.exports},function(t,e,n){function i(t){n(96)}var a=n(3)(n(53),n(116),i,"data-v-3e29f7a3",null);t.exports=a.exports},function(t,e,n){function i(t){n(94)}var a=n(3)(n(54),n(114),i,"data-v-33fe3d36",null);t.exports=a.exports},function(t,e,n){function i(t){n(101)}var a=n(3)(n(55),n(121),i,"data-v-b61f4318",null);t.exports=a.exports},function(t,e,n){function i(t){n(100)}var a=n(3)(n(56),n(120),i,"data-v-7f06720e",null);t.exports=a.exports},function(t,e,n){function i(t){n(99)}var a=n(3)(n(57),n(119),i,"data-v-71cb5bd0",null);t.exports=a.exports},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"leftNav"},[i("img",{attrs:{id:"avatar",src:n(104)}}),t._v(" "),i("h1",[t._v("Kyon Huang")]),t._v(" "),i("h3",[t._v("Web 开发工程师")]),t._v(" "),i("aboutMe"),t._v(" "),i("contact")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"experience"},[t._m(0),t._v(" "),n("ul",{staticClass:"experience-list"},t._l(t.info,function(e){return n("li",[n("div",{staticClass:"experience-title"},[n("h4",{domProps:{textContent:t._s(e.name)}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.time)}})]),t._v(" "),n("div",{staticClass:"experience-detail"},[n("div",[n("h4",{domProps:{textContent:t._s(e.intro)}}),t._v(" "),e.hasAddress?n("a",{staticClass:"experience-address",attrs:{href:e.address}},[t._v("项目在线预览")]):t._e()]),t._v(" "),n("span",{staticClass:"experience-description",domProps:{textContent:t._s(e.description)}})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("h3",[t._v("项目经历")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mainBoard"),t._v(" "),n("leftNav")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact"},[n("h3",{staticClass:"section-title"},[t._v("联系方式")]),t._v(" "),n("ul",t._l(t.info,function(e){return n("li",[n("i",{class:e.icon}),t._v(" "),n("span",{domProps:{textContent:t._s(e.text)}})])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainBoard"},[n("div",{staticClass:"inner"},[n("experience"),t._v(" "),n("skills"),t._v(" "),n("selfEvaluation")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"aboutMe"},[n("h3",{staticClass:"section-title"},[t._v("关于我")]),t._v(" "),n("ul",[t._l(t.info1,function(e){return n("li",[n("i",{class:e.icon}),t._v(" "),n("span",{domProps:{textContent:t._s(e.text)}})])}),t._v(" "),t._l(t.info2,function(e){return n("li",[n("i",{class:e.icon}),t._v(" "),n("a",{attrs:{href:e.address},domProps:{textContent:t._s(e.text)}})])})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skill"},[n("div",{staticClass:"skill-title",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("span",{staticClass:"skill-line"},[n("span",{staticClass:"skill-value",style:t.valueStyle})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"skills"},[t._m(0),t._v(" "),n("h4",[t._v("- 编程能力 -")]),t._v(" "),n("div",{staticClass:"skills-list"},t._l(t.programming,function(t){return n("skill",{key:t.title,attrs:{title:t.title,value:t.value}})})),t._v(" "),n("h4",[t._v("- 个人素养 -")]),t._v(" "),n("div",{staticClass:"skills-list"},t._l(t.quality,function(t){return n("skill",{key:t.title,attrs:{title:t.title,value:t.value}})}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("h3",[t._v("技能列表")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"self-evaluation"},[n("div",{staticClass:"section-title"},[n("h3",[t._v("自我评价")])]),t._v(" "),n("p",[t._v("我拥有对未知领域的学习热情和自学能力，并有做预先规划的习惯，能够守时守约地完成任务。")]),t._v(" "),n("p",[t._v("我是一个友善的人，喜欢交流和分享自己编程学习中的困惑与经验。我在个人博客上发表了三十余篇学习笔记，并在 Github 上有开源项目。")]),t._v(" "),n("p",[t._v("较多的项目经历和院学生会的任职锻炼了我处理事务以及团队领导、沟通的能力。")])])}]}}]),[48]);
//# sourceMappingURL=app.7855fc48fc4093bdc9b3.js.map