(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{479:function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",i="day",s="week",u="month",a="quarter",o="year",c="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},m={s:h,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+h(n,2,"0")+":"+h(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,u),s=r-i<0,a=e.clone().add(n+(s?-1:1),u);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:u,y:o,w:s,d:i,D:c,h:n,m:r,s:e,ms:t,Q:a}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=f;var _=function(t){return t instanceof D},y=function(t,e,r){var n;if(!t)return v;if("string"==typeof t)M[t]&&(n=t),e&&(M[t]=e,n=t);else{var i=t.name;M[i]=t,n=i}return!r&&n&&(v=n),n||!r&&v},w=function(t,e){if(_(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new D(r)},g=m;g.l=y,g.i=_,g.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function f(t){this.$L=this.$L||y(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(d);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},h.isAfter=function(t,e){return w(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<w(t)},h.$g=function(t,e,r){return g.u(t)?this[e]:this.set(r,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,a){var d=this,l=!!g.u(a)||a,f=g.p(t),h=function(t,e){var r=g.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return l?r:r.endOf(i)},m=function(t,e){return g.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},v=this.$W,M=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case o:return l?h(1,0):h(31,11);case u:return l?h(1,M):h(0,M+1);case s:var w=this.$locale().weekStart||0,D=(v<w?v+7:v)-w;return h(l?_-D:_+(6-D),M);case i:case c:return m(y+"Hours",0);case n:return m(y+"Minutes",1);case r:return m(y+"Seconds",2);case e:return m(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,a){var d,l=g.p(s),f="set"+(this.$u?"UTC":""),h=(d={},d[i]=f+"Date",d[c]=f+"Date",d[u]=f+"Month",d[o]=f+"FullYear",d[n]=f+"Hours",d[r]=f+"Minutes",d[e]=f+"Seconds",d[t]=f+"Milliseconds",d)[l],m=l===i?this.$D+(a-this.$W):a;if(l===u||l===o){var v=this.clone().set(c,1);v.$d[h](m),v.init(),this.$d=v.set(c,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[g.p(t)]()},h.add=function(t,a){var c,d=this;t=Number(t);var l=g.p(a),f=function(e){var r=w(d);return g.w(r.date(r.date()+Math.round(e*t)),d)};if(l===u)return this.set(u,this.$M+t);if(l===o)return this.set(o,this.$y+t);if(l===i)return f(1);if(l===s)return f(7);var h=(c={},c[r]=6e4,c[n]=36e5,c[e]=1e3,c)[l]||1,m=this.$d.getTime()+t*h;return g.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,c=i.months,d=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},f=function(t){return g.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:d(i.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,o,2),ddd:d(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:n};return r.replace(l,(function(t,e){return e||m[t]||n.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,d){var l,f=g.p(c),h=w(t),m=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,M=g.m(this,h);return M=(l={},l[o]=M/12,l[u]=M,l[a]=M/3,l[s]=(v-m)/6048e5,l[i]=(v-m)/864e5,l[n]=v/36e5,l[r]=v/6e4,l[e]=v/1e3,l)[f]||v,d?M:g.a(M)},h.daysInMonth=function(){return this.endOf(u).$D},h.$locale=function(){return M[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=y(t,e,!0);return n&&(r.$L=n),r},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),p=D.prototype;return w.prototype=p,[["$ms",t],["$s",e],["$m",r],["$H",n],["$W",i],["$M",u],["$y",o],["$D",c]].forEach((function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t(e,D,w),w},w.locale=y,w.isDayjs=_,w.unix=function(t){return w(1e3*t)},w.en=M[v],w.Ls=M,w}()},480:function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return l}));r(30),r(31),r(13);var n=r(12),o=(r(108),r(150));function c(content){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,text=Object(o.a)(content,!0,!0);return text.length>t?text.slice(0,t)+"...":text}function d(t,content){var e,r=t.startsWith("og:")?"property":"name";return e={hid:t},Object(n.a)(e,r,t),Object(n.a)(e,"content",content),e}function l(e){var title=e.title,r=e.description,n=e.coverUrl;function o(t){return"string"==typeof t?t:"function"==typeof t?t.call(this):t.toString()}return function(){var e=t.env.SITE_BASE,c=o.bind(this),head={meta:[]};if(title){var l="".concat(c(title)).concat(" | g0v Summit 2020 台灣零時政府雙年會");head.title=l,head.meta.push(d("og:title",l)),head.meta.push(d("twitter:title",l))}if(r){var f=c(r);head.meta.push(d("description",f)),head.meta.push(d("og:description",f)),head.meta.push(d("twitter:description",f))}if(n){var h=c(n);h.startsWith("/")&&(h="".concat(e).concat(h)),head.meta.push(d("og:image",h)),head.meta.push(d("twitter:image",h)),head.meta.push(d("twitter:card","summary_large_image"))}if(this&&(title||r||n)){var m="".concat(e).concat(this.$route.path);head.meta.push(d("og:url",m))}return head}}}).call(this,r(148))},484:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjA0NTc0IDAuMTE4MTIyQzAuNzg1OTE3IC0wLjA2MTg3MzIgMC40MjY2ODQgLTAuMDM2MTU5NiAwLjE5NTI2MiAwLjE5NTI2MkMtMC4wNjUwODc0IDAuNDU1NjEyIC0wLjA2NTA4NzQgMC44Nzc3MjIgMC4xOTUyNjIgMS4xMzgwN0w5LjA1NzE5IDEwTDAuMTk1MjYzIDE4Ljg2MTlDLTAuMDY1MDg2NiAxOS4xMjIzIC0wLjA2NTA4NjYgMTkuNTQ0NCAwLjE5NTI2MyAxOS44MDQ3QzAuNDI2Njg1IDIwLjAzNjIgMC43ODU5MTYgMjAuMDYxOSAxLjA0NTc0IDE5Ljg4MTlMMS4xMzgwNyAxOS44MDQ3TDEwIDEwLjk0MjhMMTguODYxOSAxOS44MDQ3TDE4Ljk1NDMgMTkuODgxOUMxOS4yMTQxIDIwLjA2MTkgMTkuNTczMyAyMC4wMzYyIDE5LjgwNDcgMTkuODA0N0MyMC4wNjUxIDE5LjU0NDQgMjAuMDY1MSAxOS4xMjIzIDE5LjgwNDcgMTguODYxOUwxMC45NDI4IDEwTDE5LjgwNDcgMS4xMzgwN0MyMC4wNjUxIDAuODc3NzIyIDIwLjA2NTEgMC40NTU2MTIgMTkuODA0NyAwLjE5NTI2MkMxOS41NzMzIC0wLjAzNjE1OTYgMTkuMjE0MSAtMC4wNjE4NzMyIDE4Ljk1NDMgMC4xMTgxMjJMMTguODYxOSAwLjE5NTI2MkwxMCA5LjA1NzE5TDEuMTM4MDcgMC4xOTUyNjJMMS4wNDU3NCAwLjExODEyMloiIGZpbGw9IiNGNzc5RUUiLz4KPC9zdmc+Cg=="},496:function(t,e,r){"use strict";var n=r(479),o=r.n(n);e.a={computed:{time:function(){return this.agenda.timeSheet||{}},room:function(){var t=this.time.議程場地;return t&&"ALL"!==t?t:""},fromTime:function(){return o()(this.time.議程開始時間).format("HH:mm")},duration:function(){return this.time.議程長度},toTime:function(){return o()(this.time.議程開始時間).add(this.duration,"m").format("HH:mm")},title:function(){return this.agenda.title},speakers:function(){var t=this.agenda.speakers||[];return t.map((function(t){return t.display_name})).join(" / ")},lang:function(){return this.agenda.oral_language_other||this.agenda.oral_language},format:function(){return this.agenda.format},hasPreHeaderToShow:function(){return this.topic||this.category},topic:function(){return this.agenda.topic},category:function(){return this.agenda.timeSheet.分類主題}}}},502:function(t,e,r){var content=r(540);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("120b48b8",content,!0,{sourceMap:!1})},503:function(t,e,r){var content=r(542);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("1e927bd2",content,!0,{sourceMap:!1})},504:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"2020-12-03":"Thu, Dec 3 2020","2020-12-04":"Fri, Dec 4 2020","2020-12-05":"Sat, Dec 5 2020","2020-12-06":"Sun, Dec 6 2020","abstract":"abstract","keyword":"keywords:","華語":"Mandarin","English":"English","moreInfo":"More info:"},"zh":{"2020-12-03":"2020/12/03（四）","2020-12-04":"2020/12/04（五）","2020-12-05":"2020/12/05（六）","2020-12-06":"2020/12/06（日）","abstract":"摘要","keyword":"關鍵字：","English":"English","華語":"華語","moreInfo":"更多資訊："}}'),delete t.options._Ctor}},539:function(t,e,r){"use strict";var n=r(502);r.n(n).a},540:function(t,e,r){(e=r(19)(!1)).push([t.i,".richmultiline__paragraph[data-v-6993bcaa]{margin-bottom:.5rem}.richmultiline__paragraph[data-v-6993bcaa]:last-child{margin-bottom:0!important}",""]),t.exports=e},541:function(t,e,r){"use strict";var n=r(503);r.n(n).a},542:function(t,e,r){(e=r(19)(!1)).push([t.i,".detail[data-v-a6dc0fbe]{background:hsla(0,0%,77.6%,.8)}.detail__wrapper[data-v-a6dc0fbe]{position:-webkit-sticky;position:sticky;left:0;top:0;height:100%;width:100%;max-height:100vh;max-width:100vw}.detail__modal[data-v-a6dc0fbe]{max-width:calc(100vw - 2rem);width:65rem;border:1px solid #f779ee;padding:1rem 1rem 1rem 2rem;margin:auto;position:relative;top:1rem;max-height:calc(100vh - 4rem);overflow-y:auto}@media screen and (min-width:60em){.detail__modal[data-v-a6dc0fbe]{padding:4.5rem 5.5rem;margin:auto;top:3rem;max-height:calc(100vh - 6rem)}}.detail__start[data-v-a6dc0fbe]{color:#6e6e6e}.detail__start .mr2[data-v-a6dc0fbe]{color:#555}.detail__close[data-v-a6dc0fbe]{width:1.25rem}.detail__subheader[data-v-a6dc0fbe]{border-color:#f779ee;color:#6e6e6e;left:-1rem;width:calc(100% + 1rem)}.detail h1[data-v-a6dc0fbe]{padding-top:2.5rem;margin-top:0;margin-bottom:.25rem;color:#0eafc9;position:-webkit-sticky;position:sticky;background:hsla(0,0%,100%,.9);top:-2.5rem}@media screen and (min-width:60em){.detail h1[data-v-a6dc0fbe]{top:-4.5rem}}.detail h2[data-v-a6dc0fbe]{margin-top:4rem;margin-bottom:1rem;color:#0eafc9;font-size:1.25rem;font-weight:500}.detail__tag[data-v-a6dc0fbe]{border-radius:999px;color:#fff;font-size:.75rem;margin-top:.25rem;background:#67cddd;padding:.125rem .5rem}.detail__tag[data-v-a6dc0fbe]:not(:first-child){margin-left:.25rem}.detail__keyword[data-v-a6dc0fbe]{color:#0eafc9}.detail__speakers[data-v-a6dc0fbe]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:3rem;-moz-column-gap:3rem;column-gap:3rem;margin-bottom:4.5rem;justify-content:center}.detail__speakers--mono[data-v-a6dc0fbe]{grid-template-columns:1fr}.gray[data-v-a6dc0fbe]{color:#555}.speaker[data-v-a6dc0fbe]{margin-top:3rem;text-align:center}.speaker__avatar[data-v-a6dc0fbe]{width:7.5rem;height:7.5rem;-o-object-fit:cover;object-fit:cover;border-radius:100%}.speaker__title[data-v-a6dc0fbe]{color:#303030}",""]),t.exports=e},543:function(t,e,r){"use strict";var n=r(504),o=r.n(n);e.default=o.a},561:function(t,e,r){"use strict";r.r(e);r(47),r(24),r(25),r(13),r(39),r(48);var n=r(12),o=(r(76),r(479)),c=r.n(o),d=(r(75),{props:{text:{type:String,required:!0}},computed:{paragraphList:function(){return this.text?this.text.replace(/^"/,"").replace(/"$/,"").split("\n").filter((function(line){return!!line})):[]}}}),l=(r(539),r(10)),f=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"richmultiline"},t._l(t.paragraphList,(function(e,i){return r("p",{key:i,staticClass:"richmultiline__paragraph"},[t._v("\n    "+t._s(e)+"\n  ")])})),0)}),[],!1,null,"6993bcaa",null).exports,h=r(105),m=r(496),v=r(480);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{RichMultiLine:f,ExtLink:h.a},mixins:[m.a],computed:{id:function(){return this.$route.params.agendaId},agenda:function(){var t=this;return this.$t("proposal/map").find((function(e){return e.id===t.id}))||{}},isModalVisible:function(){return!!this.id&&"title"in this.agenda},startDate:function(){return this.isModalVisible?this.agenda.timeSheet.議程日期:this.$route.params.date},dayN:function(){var t=c()(this.startDate).date()-3;return t>0?t:0},superCategory:function(){var t=[];return this.topic&&t.push(this.topic),this.category&&t.push(this.category),t.join(" / ")},isMonoSpeaker:function(){var t=this.agenda.speakers||[];return!(!t.length||t.length>1)&&t[0].bio.length>300}},methods:{closeModal:function(){this.$router.push(_(_({},this.$route),{},{params:{date:this.$route.params.date}}))},isUrl:function(t){if(!t)return!1;var e=t.split(".");return e.length>1&&e.every((function(t){return!!t}))}},head:Object(v.a)({title:function(){return this.title?this.title:"Day ".concat(this.dayN," ").concat(this.$t("agenda"))},description:function(){return this.agenda&&this.agenda.summary?this.agenda.summary:"Day ".concat(this.dayN," ").concat(this.$t("agenda"))},coverUrl:function(){return this.agenda&&this.agenda.cover_image?this.agenda.cover_image:"/og-agenda.png"}})},w=(r(541),r(543)),D=Object(l.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isModalVisible?n("div",{staticClass:"detail fixed top-0 left-0 bottom-0 right-0",on:{click:t.closeModal}},[n("div",{staticClass:"detail__wrapper"},[n("div",{staticClass:"detail__modal br2 bg-white",attrs:{"data-slideout-ignore":""},on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"detail__start f6"},[n("div",{staticClass:"dib mr2"},[t._v("Day"+t._s(t.dayN))]),n("div",{staticClass:"dib ml1"},[t._v(t._s(t.$t(t.startDate)))])]),n("button",{staticClass:"detail__close bg-white bn",on:{click:t.closeModal}},[n("img",{attrs:{src:r(484)}})])]),n("div",{staticClass:"detail__subheader mt3 pa3 bb relative"},[n("div",{staticClass:"fw5"},[t._v(t._s(t.fromTime)+" - "+t._s(t.toTime))]),t.room?n("div",{staticClass:"f6"},[t._v(t._s(t.room))]):t._e()]),n("h1",{staticClass:"fw5 f3"},[t._v(t._s(t.title))]),n("div",{staticClass:"gray"},[t._v(t._s(t.superCategory))]),n("div",{staticClass:"mt4 flex"},[t.format?n("div",{staticClass:"detail__tag"},[t._v(t._s(t.format))]):t._e(),t.lang?n("div",{staticClass:"detail__tag"},[t._v(t._s(t.$t(t.lang)))]):t._e()]),n("h2",{staticClass:"ttc"},[t._v(t._s(t.$t("abstract")))]),n("rich-multi-line",{staticClass:"gray",attrs:{text:t.agenda.summary}}),t.agenda.three_keywords?n("div",{staticClass:"detail__keyword ttc mv3 pv2"},[n("span",{staticClass:"mr2"},[t._v(t._s(t.$t("keyword")))]),t._v(t._s(t.agenda.three_keywords))]):t._e(),t.speakers?n("div",{staticClass:"detail__speakers",class:{"detail__speakers--mono":t.isMonoSpeaker}},t._l(t.agenda.speakers,(function(e,r){return n("div",{key:r,staticClass:"speaker"},[n("img",{staticClass:"speaker__avatar",attrs:{src:e.avatar_url,alt:e.display_name}}),n("div",{staticClass:"speaker__title mv3"},[n("div",{staticClass:"fw5"},[t._v(t._s(e.display_name)+" / "+t._s(e.city))]),n("div",{staticClass:"f6"},[t._v(t._s(e.organization))])]),n("rich-multi-line",{staticClass:"gray mv3 fw3",class:{tl:t.isMonoSpeaker},attrs:{text:e.bio}}),t.isUrl(e.info_url)?n("div",{staticClass:"fw3 mv3",class:{tl:t.isMonoSpeaker}},[t._v(t._s(t.$t("moreInfo"))),n("ext-link",{staticClass:"ml2",attrs:{to:e.info_url}})],1):t._e()],1)})),0):t._e()],1)])]):t._e()}),[],!1,null,"a6dc0fbe",null);"function"==typeof w.default&&Object(w.default)(D);e.default=D.exports}}]);