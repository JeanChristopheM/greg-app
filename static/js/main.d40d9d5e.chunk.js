(this["webpackJsonpgreg-app"]=this["webpackJsonpgreg-app"]||[]).push([[0],{13:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),s=a.n(r),i=(a(13),a(4)),o=a.n(i),u=a(5),l=a(8),j=a(3),h=a(0);var d=function(e){var t=e.className,a=e.state,c="State Machine 1",r={src:"".concat("/greg-app","/weather2.riv"),stateMachines:c,artboard:"New Artboard",autoplay:!0},s=Object(j.useRive)(r),i=s.RiveComponent,o=s.rive,u=Object(j.useStateMachineInput)(o,c,"switchAnimation"),l=Object(j.useStateMachineInput)(o,c,"state");return Object(n.useEffect)((function(){l&&setTimeout((function(){l.value=a.weather,u.fire()}),250)}),[l,u,a.weather]),Object(h.jsx)(i,{className:t})};var p=function(e){var t=e.state;return Object(h.jsxs)("div",{className:"todayCard card",children:[Object(h.jsxs)("div",{className:"todayCard__data",children:[Object(h.jsx)("p",{children:t.today}),Object(h.jsx)("p",{children:["Ensoleill\xe9","Nuageux","Pluvieux"][t.weather]}),Object(h.jsx)("p",{children:t.temperature})]}),Object(h.jsx)(d,{className:"weatherIcon",state:t})]})};var b=function(e){var t=e.state;return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("h3",{children:"Home"}),Object(h.jsx)(p,{state:t}),Object(h.jsx)("h3",{children:"T\xe2ches \xe0 venir :"}),Object(h.jsx)("div",{className:"upcomingContainer",children:t.upcoming.length?t.upcoming.map((function(e){return Object(h.jsxs)("div",{className:"upcoming card",children:[Object(h.jsxs)("div",{className:"upcoming__data",children:[Object(h.jsx)("h4",{children:e.task}),Object(h.jsx)("p",{children:e.status?"D\xe9j\xe0 fait":"Encore \xe0 faire"}),Object(h.jsx)("p",{children:e.date})]}),Object(h.jsxs)("div",{className:"upcoming__actions",children:[Object(h.jsx)("p",{children:"O"}),Object(h.jsx)("p",{children:"V"})]})]},e.id)})):Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("h4",{children:"Tout est en ordre !"})})})]})};var O=function(e){var t=e.state;return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("h3",{children:"Mes t\xe2ches"}),Object(h.jsx)("div",{className:"dataSetContainer",children:t.data.length>0?t.data.map((function(e){return Object(h.jsx)("div",{className:"dataSet card",children:Object(h.jsx)("p",{children:e.task})},e.id)})):Object(h.jsx)("p",{children:"Loading Data..."})})]})},m=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],v=[6,0,1,2,3,4,5];var x=function(e){var t=e.state,a=e.nextMonth,n=e.prevMonth,c=t.dateToDisplay,r={currentDay:c.getDate(),currentMonthIndex:c.getMonth(),currentYear:c.getFullYear()},s=new Date(r.currentYear,r.currentMonthIndex,1).getDay(),i=new Date(r.currentYear,r.currentMonthIndex+1,0).getDate(),o=new Date(r.currentYear,r.currentMonthIndex,0).getDate();return Object(h.jsxs)("div",{className:"calendar",children:[Object(h.jsxs)("div",{className:"calendar__controls",children:[Object(h.jsx)("p",{onClick:function(){n()},children:"<"}),Object(h.jsxs)("h4",{children:[m[r.currentMonthIndex]," ",r.currentYear]}),Object(h.jsx)("p",{onClick:function(){a()},children:">"})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("p",{className:"dayName",children:"L"}),Object(h.jsx)("p",{className:"dayName",children:"M"}),Object(h.jsx)("p",{className:"dayName",children:"M"}),Object(h.jsx)("p",{className:"dayName",children:"J"}),Object(h.jsx)("p",{className:"dayName",children:"V"}),Object(h.jsx)("p",{className:"dayName",children:"S"}),Object(h.jsx)("p",{className:"dayName",children:"D"})]}),function(){for(var e=[],t=1,a=o-(v[s]-1);a<=o;a++)e.push({nb:a,current:!1,key:t}),t++;for(var n=1;n<=i;n++)e.push({nb:n,current:!0,key:t}),t++;for(var c=42-e.length,r=1;r<=c;r++)e.push({nb:r,current:!1,key:t}),t++;var u=function(t){return e.slice(t,t+7)};return[u(0),u(7),u(14),u(21),u(28),u(35)]}().map((function(e){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("p",{className:e[0].current?"currentMonth":"otherMonth",children:e[0].nb},e[0].key),Object(h.jsx)("p",{className:e[1].current?"currentMonth":"otherMonth",children:e[1].nb},e[1].key),Object(h.jsx)("p",{className:e[2].current?"currentMonth":"otherMonth",children:e[2].nb},e[2].key),Object(h.jsx)("p",{className:e[3].current?"currentMonth":"otherMonth",children:e[3].nb},e[3].key),Object(h.jsx)("p",{className:e[4].current?"currentMonth":"otherMonth",children:e[4].nb},e[4].key),Object(h.jsx)("p",{className:e[5].current?"currentMonth":"otherMonth",children:e[5].nb},e[5].key),Object(h.jsx)("p",{className:e[6].current?"currentMonth":"otherMonth",children:e[6].nb},e[6].key)]},"".concat(e[0].key,"-row"))}))]})};var g=function(e){var t=e.state,a=e.nextMonth,n=e.prevMonth;return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("h3",{children:"Moon"}),Object(h.jsx)("div",{className:"card",children:Object(h.jsx)(x,{state:t,nextMonth:a,prevMonth:n})})]})},f=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("/greg-app","/database.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,e.abrupt("return",new Promise((function(e){setTimeout((function(){return e(t)}),1e3)})));case 9:e.prev=9,e.t0=e.catch(0),console.log("The error is : ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();var M,N=function(e){var t=e.className,a=e.onClickEvent,n="State Machine 1",c={src:"".concat("/greg-app","/homeicon.riv"),stateMachines:n,artboard:"New Artboard",autoplay:!0},r=Object(j.useRive)(c),s=r.RiveComponent,i=r.rive,o=Object(j.useStateMachineInput)(i,n,"Trigger 2"),u=Object(j.useStateMachineInput)(i,n,"Switch");return Object(h.jsx)(s,{className:t,onMouseEnter:function(){return u.value=!0},onMouseLeave:function(){return u.value=!1},onClick:function(){o.fire(),a()}})},y=a(2),w=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],D={page:"HOME_PAGE",dateToDisplay:new Date,today:(M=new Date,"".concat(M.getDate()," ").concat(w[M.getMonth()]," ").concat(M.getFullYear())),weather:1,temperature:"16\xb0 / 20\xb0",upcoming:[],data:[]};function E(e,t){switch(t.type){case"handlePage":var a=Object(y.a)({},e);return a.page=t.page,Object(y.a)({},a);case"updateData":var n=Object(y.a)({},e);return n.data=t.data,Object(y.a)({},n);case"updateUpcoming":var c=Object(y.a)({},e),r=c.data.filter((function(e){return e.date.includes("Juillet")}));return c.upcoming=r,Object(y.a)({},c);case"cycleWeather":var s=Object(y.a)({},e);return 2===s.weather?s.weather=0:s.weather+=1,Object(y.a)({},s);case"nextMonth":var i,o=Object(y.a)({},e);return i=11===o.dateToDisplay.getMonth()?new Date(o.dateToDisplay.getFullYear()+1,0,5):new Date(o.dateToDisplay.getFullYear(),o.dateToDisplay.getMonth()+1,5),o.dateToDisplay=i,Object(y.a)({},o);case"prevMonth":var u,l=Object(y.a)({},e);return u=0===l.dateToDisplay.getMonth()?new Date(l.dateToDisplay.getFullYear()-1,11,5):new Date(l.dateToDisplay.getFullYear(),l.dateToDisplay.getMonth()-1,5),l.dateToDisplay=u,Object(y.a)({},l);default:throw new Error}}var k=function(){var e=Object(n.useReducer)(E,D),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,c({type:"updateData",data:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=function(){c({type:"cycleWeather"})};return Object(n.useEffect)((function(){0!==a.data.length&&c({type:"updateUpcoming"})}),[a.data]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"header"}),Object(h.jsxs)("main",{className:"main",children:["LIST_PAGE"===a.page&&Object(h.jsx)(O,{state:a}),"HOME_PAGE"===a.page&&Object(h.jsx)(b,{state:a,handleWeather:r}),"MOON_PAGE"===a.page&&Object(h.jsx)(g,{state:a,nextMonth:function(){c({type:"nextMonth"})},prevMonth:function(){c({type:"prevMonth"})}})]}),Object(h.jsxs)("footer",{className:"footer",children:["LIST_PAGE"===a.page?Object(h.jsx)(N,{className:"homeicon active",onClickEvent:function(){return c({type:"handlePage",page:"LIST_PAGE"})}}):Object(h.jsx)(N,{className:"homeicon",onClickEvent:function(){return c({type:"handlePage",page:"LIST_PAGE"})}}),"HOME_PAGE"===a.page?Object(h.jsx)(N,{className:"homeicon active",onClickEvent:function(){return c({type:"handlePage",page:"HOME_PAGE"})}}):Object(h.jsx)(N,{className:"homeicon",onClickEvent:function(){return c({type:"handlePage",page:"HOME_PAGE"})}}),"MOON_PAGE"===a.page?Object(h.jsx)(N,{className:"homeicon active",onClickEvent:function(){return c({type:"handlePage",page:"MOON_PAGE"})}}):Object(h.jsx)(N,{className:"homeicon",onClickEvent:function(){return c({type:"handlePage",page:"MOON_PAGE"})}}),Object(h.jsx)("div",{onClick:function(){r()},children:"O"})]})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d40d9d5e.chunk.js.map