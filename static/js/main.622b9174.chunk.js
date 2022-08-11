(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,t,n){e.exports={container:"WinnerModal_container__260aH",gif:"WinnerModal_gif__3mnTx"}},58:function(e,t,n){e.exports={horses:"Horses_horses__1rnSf",rotateHorse:"Horses_rotateHorse__XBJ_V",names:"Horses_names__313sw",gif:"Horses_gif__1qRC0"}},88:function(e,t,n){},89:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a,c=n(0),s=n.n(c),r=n(40),i=n.n(r),o=n(14),d=n(7),l=n(1),u=n(55),h=n(64),m=n(66),f=n(16),j=n(71),b="https://horse-racing-server.herokuapp.com/",O={API_URL:b,API_ENDPOINT_FOR_REDUX:"api",API_URL_FOR_SOCKET:b,SOCKET_START_MESSAGE:"start",SOCKET_TICKER_MESSAGE:"ticker",MAX_DISTANCE:1e3},p=O.API_URL,x=O.SOCKET_TICKER_MESSAGE,_=O.API_ENDPOINT_FOR_REDUX,g=O.API_URL_FOR_SOCKET,E=O.SOCKET_START_MESSAGE,R=Object(m.a)({reducerPath:"dataApi",baseQuery:Object(f.d)({baseUrl:p}),endpoints:function(e){return{raceData:e.query({query:function(){return _},onCacheEntryAdded:function(e,t){return Object(h.a)(Object(u.a)().mark((function e(){var n,a,c,s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.updateCachedData,a=t.cacheDataLoaded,c=t.cacheEntryRemoved,console.log("Making request for the first time in a while"),e.prev=2,e.next=5,a;case 5:s=Object(j.a)(g),console.log({socket:s}),console.log("http server connected"),s.on("connect",(function(){console.log("socket connected"),s.emit(E)})),s.on(x,(function(e){console.log("ticker emitted"),n((function(t){t.push(e)}))})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log({error:e.t0});case 15:return e.next=17,c;case 17:s.off(),console.log("No component subscribed to the data for a while");case 19:case"end":return e.stop()}}),e,null,[[2,12]])})))()}})}}}),N=R.useRaceDataQuery,v={maxWidth:15,isRaceEnded:!1,latestRaceData:void 0,winner:void 0},y=Object(l.d)({name:"horses",initialState:v,reducers:{updateLatestRaceData:function(e,t){e.latestRaceData=t.payload},zoomIn:function(e){e.maxWidth+=1},zoomOut:function(e){e.maxWidth-=1},endTheRace:function(e){e.isRaceEnded=!0},setWinner:function(e,t){e.winner=t.payload}}}),S=y.actions,A=S.updateLatestRaceData,w=S.zoomIn,T=S.zoomOut,C=S.endTheRace,I=S.setWinner,k=y.reducer,D=Object(l.a)({reducer:(a={},Object(d.a)(a,R.reducerPath,R.reducer),Object(d.a)(a,"horses",k),a),middleware:function(e){return e({serializableCheck:{ignoredActions:["horses/setSocket"],ignoredPaths:["horses.socket"]}}).concat(R.middleware)}}),H=(n(88),n(89),n(24)),P=n(69),M=n.n(P),W=n(70),K=n.n(W),L=n(68),U=n.n(L),z=n(67),F=n.n(z),G=n(57),X=n.n(G),q=n(3);function J(){var e=Object(H.d)((function(e){return e.horses})).winner;return e&&Object(q.jsx)("section",{className:X.a.container,children:Object(q.jsxs)("div",{className:"pt-5 mt-3 d-flex flex-column align-items-center",children:[Object(q.jsx)("h1",{className:"fs-4 text-center text-primary",children:"WINNER"}),Object(q.jsx)("h1",{className:"mb-5 mt-2 text-center",children:e.name.toUpperCase()}),Object(q.jsx)("img",{alt:"winner",className:X.a.gif,src:e.gif})]})})}var B=n(35),Q=n(15),V=n(58),Y=n.n(V),Z=n.p+"static/media/l1.8ba713ae.gif",$=n.p+"static/media/l2.826e2d8e.gif",ee=n.p+"static/media/l_miracle.dfb40033.gif",te=n.p+"static/media/r1.662feb6e.gif",ne=n.p+"static/media/r2.3a353552.gif",ae=n.p+"static/media/r3.7a54ba2a.gif",ce=O.MAX_DISTANCE;function se(){var e=N().data,t=Object(H.d)((function(e){return e.horses})),n=t.maxWidth,a=t.latestRaceData,s=t.isRaceEnded,r=Object(H.c)(),i=[{gif:Z,style:"rotateHorse"},{gif:$,style:"rotateHorse"},{gif:ee,style:"rotateHorse"},{gif:te,style:"horses"},{gif:ne,style:"horses"},{gif:ae,style:"horses"}];return Object(c.useEffect)((function(){if(console.log({data:e}),!s&&e&&e.length){var t=e[e.length-1],n=t.filter((function(e){return e.distance>=ce})),a=Object(Q.a)(n,1)[0];if(a)return a=Object(B.a)(Object(B.a)({},a),i[t.indexOf(a)]),r(C()),void setTimeout((function(){return r(I(a))}),3e3);r(A(t))}}),[e]),Object(q.jsx)("section",{className:"mb-3",children:Object(q.jsx)("div",{className:"d-flex flex-column text-start",children:a&&a.map((function(e,t){return Object(q.jsxs)("div",{children:[Object(q.jsx)("h2",{className:Y.a.names,children:e.name}),Object(q.jsx)("img",{alt:"horse",src:i[t].gif,style:{maxWidth:"".concat(n,"vw"),marginLeft:"".concat((100-n)*e.distance/ce-3,"vw")},className:Y.a[i[t].style]})]},"".concat(e.name))}))})})}var re=function(){var e=Object(H.c)(),t=Object(H.d)((function(e){return e.horses})).winner,n=U()(),a=n.width,c=n.height;return Object(q.jsxs)("div",{className:"App",children:[Object(q.jsxs)("header",{className:"App-header py-2 position-relative mb-3 px-4",children:[Object(q.jsx)("h1",{className:"fs-5 my-0 py-0",children:"HORSE RACING"}),Object(q.jsxs)("span",{className:"position-absolute end-0 gap-2 ",children:[Object(q.jsx)("button",{type:"button",className:"btn-clean text-white me-2",onClick:function(){return e(w())},children:Object(q.jsx)(M.a,{className:"h-2rem"})}),Object(q.jsx)("button",{type:"button",className:"btn-clean text-white me-4",onClick:function(){return e(T())},children:Object(q.jsx)(K.a,{className:"h-2rem"})})]})]}),Object(q.jsx)("main",{children:Object(q.jsx)(se,{})}),t&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(F.a,{width:a-30,height:c}),Object(q.jsx)(J,{})]})]})};i.a.render(Object(q.jsx)(s.a.StrictMode,{children:Object(q.jsx)(o.a,{store:D,children:Object(q.jsx)(re,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.622b9174.chunk.js.map