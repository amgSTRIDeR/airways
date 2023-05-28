"use strict";(self.webpackChunkairways=self.webpackChunkairways||[]).push([[399],{1399:(R,d,n)=>{n.r(d),n.d(d,{MainModule:()=>k});var h=n(6895),u=n(6806),s=n(2832),a=n(3840),t=n(4650),g=n(9653),c=n(4006),f=n(4195),m=n(8742),b=n(1318);const M=[{path:"",component:(()=>{class i{constructor(e){this.store=e,this.isRoundTrip=!0,this.originAirport=null,this.destinationAirport=null,this.departureDate=null,this.returnDate=null,this.readyForSearch=!1,this.isSearchImplement=!1,this.isRoundTrip$=this.store.select(s.r.IsRoundTripSelector),this.originAirport$=this.store.select(s.r.AirportForwardSelector),this.isSearchImplement$=this.store.select(s.r.IsSearchImplement),this.destinationAirport$=this.store.select(s.r.AirportBackSelector),this.departureDate$=this.store.select(s.r.FlightForwardSelector),this.returnDate$=this.store.select(s.r.FlightBackSelector),this.isRoundTripSubscription=this.isRoundTrip$.subscribe(r=>{this.isRoundTrip=r,this.checkReadyForSearch()}),this.originAirportSubscription=this.originAirport$.subscribe(r=>{this.originAirport=r,this.checkReadyForSearch()}),this.destinationAirportSubscription=this.destinationAirport$.subscribe(r=>{this.destinationAirport=r,this.checkReadyForSearch()}),this.departureDateSubscription=this.departureDate$.subscribe(r=>{this.departureDate=r,this.checkReadyForSearch()}),this.returnDateSubscription=this.returnDate$.subscribe(r=>{this.returnDate=r,this.checkReadyForSearch()}),this.isSearchImplementSubscription=this.isSearchImplement$.subscribe(r=>{this.isSearchImplement=r})}ngOnDestroy(){this.isRoundTripSubscription.unsubscribe(),this.originAirportSubscription.unsubscribe(),this.destinationAirportSubscription.unsubscribe(),this.departureDateSubscription.unsubscribe(),this.returnDateSubscription.unsubscribe(),this.isSearchImplementSubscription.unsubscribe()}changeTripType(e){this.store.dispatch(a.V.IsRoundTrip({isRoundTrip:e}))}onSubmit(e){e.preventDefault(),this.checkReadyForSearch(),null!==this.originAirport&&null!==this.destinationAirport&&null!==this.departureDate&&this.readyForSearch?(this.store.dispatch(a.V.ChangeIsSearchImplement({IsSearchImplement:!1})),this.store.dispatch(a.V.LoadAvailableFlights({originAirportKey:this.originAirport.key,destinationAirportKey:this.destinationAirport.key,departureDate:this.departureDate,returnDate:this.returnDate}))):this.store.dispatch(a.V.ChangeIsSearchImplement({IsSearchImplement:!0}))}checkReadyForSearch(){this.readyForSearch=!(null===this.originAirport||null===this.destinationAirport||!this.checkDepartureDate()||this.isRoundTrip&&!this.checkReturnDate())}checkDepartureDate(){return null!==this.departureDate&&this.departureDate>new Date}checkReturnDate(){return null!==this.returnDate&&null!==this.departureDate&&this.returnDate>this.departureDate}onClick(e){e.target instanceof HTMLElement&&(e.target.classList.contains("bg-image")||document.querySelector(".footer")?.contains(e.target)||document.querySelector(".header")?.contains(e.target)&&!e.target.classList.contains("button__book-flights")&&!document.querySelector("app-date-select")?.contains(e.target))&&this.store.dispatch(a.V.ChangeIsShownValue({IsShownMainPage:!1}))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-main"]],hostBindings:function(e,r){1&e&&t.NdJ("click",function(l){return r.onClick(l)},!1,t.evT)},decls:14,vars:3,consts:[[1,"main-form"],[1,"radio-buttons"],["for","roundTrip"],["type","radio","id","roundTrip","name","tripType",3,"checked","click"],["for","oneWay"],["type","radio","id","oneWay","name","oneWay",3,"checked","click"],[1,"airports-form"],[1,"dates-passengers-wrapper"],[1,"date-form"],[1,"passengers-form"],["type","submit",1,"search-button",3,"disabled","click"]],template:function(e,r){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"label",2)(3,"input",3),t.NdJ("click",function(){return r.changeTripType(!0)}),t.qZA(),t._uU(4," Round Trip "),t.qZA(),t.TgZ(5,"label",4)(6,"input",5),t.NdJ("click",function(){return r.changeTripType(!1)}),t.qZA(),t._uU(7," One Way "),t.qZA()(),t._UZ(8,"app-airports-form",6),t.TgZ(9,"div",7),t._UZ(10,"app-date-form",8)(11,"app-passengers-form",9),t.qZA(),t.TgZ(12,"button",10),t.NdJ("click",function(l){return r.onSubmit(l)}),t._uU(13," Search "),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("checked",r.isRoundTrip),t.xp6(3),t.Q6J("checked",!r.isRoundTrip),t.xp6(6),t.Q6J("disabled",!r.readyForSearch&&r.isSearchImplement))},dependencies:[c._Y,c.JL,c.F,f.C,m.d,b.S],styles:['.main-form[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:90vw;max-width:580px;height:390px;padding:24px;border-radius:8px;background:rgba(255,255,255,.85)}.radio-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;height:48px}.radio-buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:space-between;font-family:Roboto,sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:20px;letter-spacing:.1px;color:#11397e;transition:color .3s}.radio-buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{color:#174dab;cursor:pointer;transition:color .3s}.radio-buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]{border:2px solid #174dab;transition:border .3s}.radio-buttons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;-webkit-appearance:none;appearance:none;display:grid;place-content:center;box-sizing:border-box;width:20px;height:20px;margin:0 10px 0 0;border:2px solid #74767A;border-radius:50%;transition:border .3s}.radio-buttons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{cursor:pointer}.radio-buttons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:before{position:relative;content:"";width:12px;height:12px;border-radius:10px;transform:scale(0);background-color:#11397e}.radio-buttons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked{border-color:#11397e}.radio-buttons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:before{transform:scale(1)}.airports-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:120px;row-gap:4px}.search-button[_ngcontent-%COMP%]{align-self:flex-end;width:122px;height:40px;padding:8px 16px;font-family:Roboto;font-style:normal;font-weight:400;font-size:16px;line-height:24px;background:#11397E;border:.5px solid #11397E;border-radius:4px;color:#fff;transition:all .3s ease}.search-button[_ngcontent-%COMP%]:hover{background:#f5f5f5;color:#11397e;cursor:pointer;transition:all .3s ease}.search-button[_ngcontent-%COMP%]:active{background:#e9edf1;color:#11397e;transition:all .3s ease}.search-button[_ngcontent-%COMP%]:disabled{cursor:default;background:#11397E;color:#ffffff2c;transition:all .3s ease}.dates-passengers-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;row-gap:4px}.dates-passengers-wrapper[_ngcontent-%COMP%]   .date-form[_ngcontent-%COMP%], .dates-passengers-wrapper[_ngcontent-%COMP%]   .passengers-form[_ngcontent-%COMP%]{width:49%}@media (max-width: 768px){.dates-passengers-wrapper[_ngcontent-%COMP%]{flex-direction:column}.dates-passengers-wrapper[_ngcontent-%COMP%]   .date-form[_ngcontent-%COMP%], .dates-passengers-wrapper[_ngcontent-%COMP%]   .passengers-form[_ngcontent-%COMP%]{width:100%}}']}),i})()}];let y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(M),u.Bz]}),i})();var C=n(9549),S=n(4385),x=n(9602),O=n(3238),P=n(7423),T=n(4144),A=n(7084),D=n(8255),v=n(4466);let k=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[P.M],imports:[h.ez,y,C.lN,S.LD,c.u5,x.FA,O.XK,T.c,A.To,D.Tx,v.m]}),i})()}}]);