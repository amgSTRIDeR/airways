"use strict";(self.webpackChunkairways=self.webpackChunkairways||[]).push([[475],{4475:(pt,x,a)=>{a.r(x),a.d(x,{ShoppingCardModule:()=>at});var c=a(6895),g=a(6806),f=a(3151),l=a(8957),T=a(263),Z=a(8335),P=a(2906),t=a(4650),h=a(9653),O=a(4850),d=a(3546),_=a(4006),y=a(4859);let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sort-button"]],inputs:{sortName:"sortName"},decls:14,vars:3,consts:[[1,"flex","gap-half","w-full","item-center"],[1,"fz-20","lh-20"],["width","10","height","20","xmlns","http://www.w3.org/2000/svg"],["fill","none","id","canvas_background","height","22","width","12","y","-1","x","-1"],["transform","rotate(-179.74609375 5.00738525390625,3.9234316349029537) ","id","svg_1","fill","#454A53","d","m1.67405,2.256757l3.33333,3.33335l3.33334,-3.33335l-6.66667,0z"],["id","svg_2","fill","#454A53","d","m1.666665,14.504487l3.33333,3.33335l3.33334,-3.33335l-6.66667,0z"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"p",1)(2,"strong"),t._uU(3),t.qZA()(),t.O4$(),t.TgZ(4,"svg",2)(5,"g")(6,"title"),t._uU(7,"background"),t.qZA(),t._UZ(8,"rect",3),t.qZA(),t.TgZ(9,"g")(10,"title"),t._uU(11,"Layer 1"),t.qZA(),t._UZ(12,"path",4)(13,"path",5),t.qZA()()()),2&n&&(t.ekj("center","No."===r.sortName),t.xp6(3),t.Oqu(r.sortName))},styles:["[_nghost-%COMP%]{width:100%}.center[_ngcontent-%COMP%]{justify-content:center}p[_ngcontent-%COMP%]{margin:.5rem 0}"]}),e})();var A=a(6709),m=a(8255),k=a(7392);let M=(()=>{class e{constructor(n,r){this.store=n,this.router=r}editFlight(){this.store.dispatch(Z.j.EditFlightAction({id:this.order.id,flights:this.order.flights,passengersInfo:this.order.passengersInfo,passengersCount:this.order.passengersCount,totalPrice:this.order.total})),this.router.navigate(["/booking-page"])}deleteFlight(){this.store.dispatch(l.W.DeleteFlight({id:this.id}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.yh),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-menu"]],inputs:{order:"order",id:"id"},decls:12,vars:1,consts:[[1,"menu"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0)(1,"button",1)(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",null,2)(6,"button",3),t.NdJ("click",function(){return r.deleteFlight()}),t.TgZ(7,"span"),t._uU(8,"Delete"),t.qZA()(),t.TgZ(9,"button",3),t.NdJ("click",function(){return r.editFlight()}),t.TgZ(10,"span"),t._uU(11,"Edit"),t.qZA()()()()),2&n){const i=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",i)}},dependencies:[m.VK,m.OP,m.p6,k.Hw,y.RK]}),e})();var b=a(338);function N(e,o){1&e&&(t.TgZ(0,"div",17)(1,"strong"),t._uU(2,"No:"),t.qZA()())}function S(e,o){if(1&e&&t._UZ(0,"app-card-menu",18),2&e){const n=t.oxw();t.Q6J("order",n.order)("id",n.data.id)}}function I(e,o){1&e&&t._UZ(0,"mat-divider",19)}function J(e,o){1&e&&(t.TgZ(0,"div",17)(1,"strong"),t._uU(2,"Flight:"),t.qZA()())}function U(e,o){if(1&e&&(t.TgZ(0,"p",9),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.AsE(" ",n.data.to," - ",n.data.from," ")}}function F(e,o){1&e&&t._UZ(0,"mat-divider",19)}function D(e,o){1&e&&(t.TgZ(0,"div",17)(1,"strong"),t._uU(2,"Type trip:"),t.qZA()())}function q(e,o){1&e&&(t.TgZ(0,"p",9),t._uU(1," Round Trip "),t.qZA())}function Y(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"One way"),t.qZA())}function j(e,o){1&e&&t._UZ(0,"mat-divider",19)}function Q(e,o){1&e&&(t.TgZ(0,"div",17)(1,"strong"),t._uU(2,"Date & Time:"),t.qZA()())}function L(e,o){if(1&e&&(t.TgZ(0,"p",9),t._uU(1),t.ALo(2,"date"),t.ALo(3,"date"),t.ALo(4,"date"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.lnq(" ",t.xi3(2,3,n.data.backDate.landingDate,"d MMM, y"),", ",t.xi3(3,6,n.data.backDate.landingDate,"h:mm")," - ",t.xi3(4,9,n.data.backDate.takeoffDate,"h:mm")," ")}}function z(e,o){1&e&&t._UZ(0,"mat-divider",19)}function $(e,o){1&e&&(t.TgZ(0,"div",17)(1,"strong"),t._uU(2,"Passengers:"),t.qZA()())}function H(e,o){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("",n.data.adult," x Adult")}}function B(e,o){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("",n.data.child," x Child")}}function R(e,o){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("",n.data.infant," x Infant")}}function W(e,o){1&e&&t._UZ(0,"mat-divider",19)}function E(e,o){1&e&&(t.TgZ(0,"div",17)(1,"strong"),t._uU(2,"Price:"),t.qZA()())}function K(e,o){if(1&e&&t._UZ(0,"app-card-menu",18),2&e){const n=t.oxw(2);t.Q6J("order",n.order)("id",n.data.id)}}function G(e,o){if(1&e&&(t.TgZ(0,"div",20)(1,"p",21),t._uU(2),t.ALo(3,"currencyConverter"),t.qZA(),t.YNc(4,K,1,2,"app-card-menu",6),t.qZA()),2&e){const n=o.ngIf,r=t.oxw();t.xp6(2),t.hij(" ",t.xi3(3,2,r.data.price,n)," "),t.xp6(2),t.Q6J("ngIf",!r.smallPage)}}let V=(()=>{class e{constructor(n){this.store=n,this.currency$=this.store.select(T.u.CurrencySelector)}ngOnInit(){this.data=this.addVerables()}addCheckboxValueToStore(){this.store.dispatch(l.W.CheckFlight({id:this.order.id}))}addVerables(){return{flightNum:this.order.flights.forwardFlight.flightNumber,from:this.order.flights.forwardFlight.form.city,to:this.order.flights.forwardFlight.to.city,forvardDate:{takeoffDate:this.order.flights.forwardFlight.takeoffDate,landingDate:this.order.flights.forwardFlight.landingDate},backDate:this.order.flights.backFlight?{takeoffDate:this.order.flights.backFlight.takeoffDate,landingDate:this.order.flights.backFlight.landingDate}:null,adult:this.order.passengersInfo.adult.length,child:this.order.passengersInfo.child.length,infant:this.order.passengersInfo.infant.length,price:this.order.total.totalPrice,id:this.order.id,isChecked:this.order.isChecked}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-order"]],inputs:{order:"order",smallPage:"smallPage"},decls:45,vars:40,consts:[[1,"order-container"],[1,"smallWidthDescriptionContainer"],["class","type-of-value",4,"ngIf"],[1,"flex","gap-half","item-center","value-container"],["color","primary",1,"example-margin",3,"checked","click"],[2,"color","#0090bd","font-size","20px"],[3,"order","id",4,"ngIf"],["class","mat-divider-costum",4,"ngIf"],[1,"column","justify-around","value-container"],[1,"text-center"],["class","text-center",4,"ngIf"],[1,"flex","item-center","value-container"],["class","text-center",4,"ngIf","ngIfElse"],["roundTrip",""],[1,"justify-around","column","value-container"],[4,"ngIf"],["class","flex justify-between item-center value-container",4,"ngIf"],[1,"type-of-value"],[3,"order","id"],[1,"mat-divider-costum"],[1,"flex","justify-between","item-center","value-container"],[1,"price-secondary"]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,N,3,0,"div",2),t.TgZ(3,"div",3)(4,"mat-checkbox",4),t.NdJ("click",function(){return r.addCheckboxValueToStore()}),t.qZA(),t.TgZ(5,"mat-card-title",5),t._uU(6),t.qZA()(),t.YNc(7,S,1,2,"app-card-menu",6),t.qZA(),t.YNc(8,I,1,0,"mat-divider",7),t.TgZ(9,"div",1),t.YNc(10,J,3,0,"div",2),t.TgZ(11,"div",8)(12,"p",9),t._uU(13),t.qZA(),t.YNc(14,U,2,2,"p",10),t.qZA()(),t.YNc(15,F,1,0,"mat-divider",7),t.TgZ(16,"div",1),t.YNc(17,D,3,0,"div",2),t.TgZ(18,"div",11),t.YNc(19,q,2,0,"p",12),t.YNc(20,Y,2,0,"ng-template",null,13,t.W1O),t.qZA()(),t.YNc(22,j,1,0,"mat-divider",7),t.TgZ(23,"div",1),t.YNc(24,Q,3,0,"div",2),t.TgZ(25,"div",14)(26,"p",9),t._uU(27),t.ALo(28,"date"),t.ALo(29,"date"),t.ALo(30,"date"),t.qZA(),t.YNc(31,L,5,12,"p",10),t.qZA()(),t.YNc(32,z,1,0,"mat-divider",7),t.TgZ(33,"div",1),t.YNc(34,$,3,0,"div",2),t.TgZ(35,"div",14),t.YNc(36,H,2,1,"p",15),t.YNc(37,B,2,1,"p",15),t.YNc(38,R,2,1,"p",15),t.qZA()(),t.YNc(39,W,1,0,"mat-divider",7),t.TgZ(40,"div",1),t.YNc(41,E,3,0,"div",2),t.YNc(42,G,5,5,"div",16),t.ALo(43,"async"),t.qZA()(),t._UZ(44,"mat-divider")),2&n){const i=t.MAs(21);t.xp6(2),t.Q6J("ngIf",r.smallPage),t.xp6(2),t.Q6J("checked",r.data.isChecked),t.xp6(2),t.hij("",r.data.flightNum," "),t.xp6(1),t.Q6J("ngIf",r.smallPage),t.xp6(1),t.Q6J("ngIf",r.smallPage),t.xp6(2),t.Q6J("ngIf",r.smallPage),t.xp6(3),t.AsE("",r.data.from," - ",r.data.to,""),t.xp6(1),t.Q6J("ngIf",r.data.backDate),t.xp6(1),t.Q6J("ngIf",r.smallPage),t.xp6(2),t.Q6J("ngIf",r.smallPage),t.xp6(2),t.Q6J("ngIf",r.data.backDate)("ngIfElse",i),t.xp6(3),t.Q6J("ngIf",r.smallPage),t.xp6(2),t.Q6J("ngIf",r.smallPage),t.xp6(3),t.lnq(" ",t.xi3(28,29,r.data.forvardDate.landingDate,"d MMM, y"),", ",t.xi3(29,32,r.data.forvardDate.landingDate,"h:mm")," - ",t.xi3(30,35,r.data.forvardDate.takeoffDate,"h:mm")," "),t.xp6(4),t.Q6J("ngIf",r.data.backDate),t.xp6(1),t.Q6J("ngIf",r.smallPage),t.xp6(2),t.Q6J("ngIf",r.smallPage),t.xp6(2),t.Q6J("ngIf",r.data.adult>0),t.xp6(1),t.Q6J("ngIf",r.data.child>0),t.xp6(1),t.Q6J("ngIf",r.data.infant>0),t.xp6(1),t.Q6J("ngIf",r.smallPage),t.xp6(2),t.Q6J("ngIf",r.smallPage),t.xp6(1),t.Q6J("ngIf",t.lcZ(43,38,r.currency$)),t.xp6(2),t.ekj("mat-divider-costume2",r.smallPage)}},dependencies:[c.O5,A.oG,O.d,d.n5,M,c.Ov,c.uU,b.P],styles:["[_nghost-%COMP%]{width:100%}.order-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:3fr 3fr 2fr 4fr 3fr 3fr;justify-content:start;font-size:20px;font-weight:500;line-height:32px;letter-spacing:.5px;padding:.5rem 0}@media screen and (max-width: 1100px){.order-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.value-container[_ngcontent-%COMP%]{width:100%;justify-content:center;align-items:center}}.menu[_ngcontent-%COMP%]{margin-right:-1.5rem}p[_ngcontent-%COMP%]{margin:0}.smallWidthDescriptionContainer[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center;justify-content:start;width:100%}.type-of-value[_ngcontent-%COMP%]{width:30%}.mat-divider-costum[_ngcontent-%COMP%]{width:100%}.mat-divider-costume2[_ngcontent-%COMP%]{border-top-width:5px;width:100%;transform:scale(1.06);margin-top:1rem}"]}),e})(),X=(()=>{class e{constructor(){this.previousSort="No",this.isReverse=!1}transform(n,r,i){if(null===r||!i||"NoSort"===r.sortType)return n;const s=r.sortType;if(s===this.previousSort&&this.previousArray)return this.isReverse=!this.isReverse,this.previousArray=this.previousArray.reverse(),this.previousArray;const p=[...n];return this.previousSort=s,this.sortOrders(p,s)}sortOrders(n,r){return this.isReverse=!1,this.previousArray=n.sort((i,s)=>this.sortCb(i,s,r)),this.previousArray}sortCb(n,r,i){const s=(C,v)=>this.getArgOfSort(C,v),p=s(n,i),u=s(r,i);return p<u?-1:p>u?1:0}getArgOfSort(n,r){return"No"===r?n.flights.forwardFlight.flightNumber:"Flight"===r?n.flights.forwardFlight.form.city:"TripType"===r?n.flights.backFlight?"Round Trip":"One way":"Date"===r?this.newDate(n):"Passengers"===r?this.allCount(n.passengersCount):n.total.totalPrice}newDate(n){return new Date(n.flights.forwardFlight.landingDate).getTime()}allCount(n){return Object.values(n).reduce((r,i)=>r+i,0)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"sortOrders",type:e,pure:!0}),e})();function tt(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card-actions",12)(1,"app-sort-button",13),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.sortOrders("No"))}),t.qZA(),t.TgZ(2,"app-sort-button",14),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.sortOrders("Flight"))}),t.qZA(),t.TgZ(3,"app-sort-button",15),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.sortOrders("TripType"))}),t.qZA(),t.TgZ(4,"app-sort-button",16),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.sortOrders("Date"))}),t.qZA(),t.TgZ(5,"app-sort-button",17),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.sortOrders("Passengers"))}),t.qZA(),t.TgZ(6,"app-sort-button",18),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.sortOrders("Price"))}),t.qZA()()}}function et(e,o){if(1&e&&t._UZ(0,"app-order",19),2&e){const n=o.$implicit,r=t.oxw();t.Q6J("order",n)("smallPage",r.smallPage)}}function nt(e,o){if(1&e&&(t.TgZ(0,"div",20)(1,"mat-card-subtitle",21),t._uU(2,"Total "),t.qZA(),t.TgZ(3,"mat-card-title"),t._uU(4),t.ALo(5,"currencyConverter"),t.ALo(6,"async"),t.qZA()()),2&e){const n=o.ngIf,r=t.oxw();t.xp6(4),t.Oqu(t.xi3(5,1,t.lcZ(6,4,r.totalPrice$),n))}}const rt=[{path:"",component:(()=>{class e{constructor(n,r){this.store=n,this.router=r,this.totalPrice$=this.store.select(f.m.TotalPrice),this.currency$=this.store.select(T.u.CurrencySelector),this.sortType$=this.store.select(f.m.Sort),this.IsLogIn$=this.store.select(P.c.IsLogIn),this.promoCode="",this.smallPage=!1,this.sortHelper=!1,this.IsLogInSub=this.IsLogIn$.subscribe(i=>{i||this.router.navigate(["/main"])})}ngOnInit(){this.getOrders(),this.onResize(),this.getSortSubscription()}ngOnDestroy(){this.orderSubscription.unsubscribe(),this.sortSubscription.unsubscribe(),this.IsLogInSub.unsubscribe()}onResize(){const n=window.innerWidth;n>1100&&this.smallPage?this.smallPage=!1:n<=1100&&!this.smallPage&&(this.smallPage=!0)}get ordersChecked(){return this.orders.reduce((n,r)=>(r.isChecked&&(n+=1),n),0)}activatePromoCode(){this.store.dispatch(l.W.PromoCode({code:this.promoCode})),this.promoCode=""}addNewTrip(){this.store.dispatch(Z.j.ClearBookingPageState()),this.router.navigate(["/main"])}getOrders(){const n=this.store.select(f.m.Orders);this.orderSubscription=n.subscribe(r=>{this.sortHelper=!1,this.orders=r})}sortOrders(n){this.store.dispatch(l.W.SortAction({sortType:n}))}getSortSubscription(){this.sortSubscription=this.sortType$.subscribe(()=>{this.sortHelper=!0})}payForOrders(){this.store.dispatch(l.W.Pay())}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.yh),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-card"]],hostBindings:function(n,r){1&n&&t.NdJ("resize",function(){return r.onResize()},!1,t.Jf7)},decls:25,vars:13,consts:[["class","bg-light action-container",4,"ngIf"],[3,"order","smallPage",4,"ngFor","ngForOf"],[1,"new-trip","flex","item-center","justify-between"],["color","primary","mat-button","",1,"bg-light",3,"click"],["class","flex gap-half item-center",4,"ngIf"],[1,"cart-footer","flex","justify-between","item-center"],[1,"flex","justify-between","item-center","promo-container"],["placeholder","Promo Code",1,"promo-input",3,"ngModel","ngModelChange"],["color","primary","mat-button","",1,"promo-button",3,"click"],[1,"flex","gap-2","item-center"],[1,"selected-count"],["color","primary","mat-raised-button","",1,"pay-button",3,"click"],[1,"bg-light","action-container"],["sortName","No.",3,"click"],["sortName","Flight",3,"click"],["sortName","Type trip",3,"click"],["sortName","Data & Time",3,"click"],["sortName","Passengers",3,"click"],["sortName","Price",3,"click"],[3,"order","smallPage"],[1,"flex","gap-half","item-center"],[1,"text-black","fz-20","f-w-700"]],template:function(n,r){1&n&&(t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t._uU(3,"Cart"),t.qZA()(),t.YNc(4,tt,7,0,"mat-card-actions",0),t.TgZ(5,"mat-card-content"),t.YNc(6,et,1,2,"app-order",1),t.ALo(7,"sortOrders"),t.ALo(8,"async"),t.TgZ(9,"div",2)(10,"button",3),t.NdJ("click",function(){return r.addNewTrip()}),t._uU(11," + Add new trip "),t.qZA(),t.YNc(12,nt,7,6,"div",4),t.ALo(13,"async"),t.qZA(),t._UZ(14,"mat-divider"),t.TgZ(15,"div",5)(16,"div",6)(17,"input",7),t.NdJ("ngModelChange",function(s){return r.promoCode=s}),t.qZA(),t.TgZ(18,"button",8),t.NdJ("click",function(){return r.activatePromoCode()}),t._uU(19," APPLY "),t.qZA()(),t.TgZ(20,"div",9)(21,"span",10),t._uU(22),t.qZA(),t.TgZ(23,"button",11),t.NdJ("click",function(){return r.payForOrders()}),t._uU(24," Payment "),t.qZA()()()()()),2&n&&(t.xp6(4),t.Q6J("ngIf",!r.smallPage),t.xp6(2),t.Q6J("ngForOf",t.Dn7(7,5,r.orders,t.lcZ(8,9,r.sortType$),r.sortHelper)),t.xp6(6),t.Q6J("ngIf",t.lcZ(13,11,r.currency$)),t.xp6(5),t.Q6J("ngModel",r.promoCode),t.xp6(5),t.hij("",r.ordersChecked," selected"))},dependencies:[c.sg,c.O5,O.d,d.a8,d.hq,d.dn,d.dk,d.$j,d.n5,_.Fj,_.JJ,y.lW,_.On,w,V,c.Ov,b.P,X],styles:["[_nghost-%COMP%]{width:100%}.action-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:3fr 3fr 2fr 4fr 3fr 3fr;justify-content:start;padding:0 2rem}.mat-mdc-card-content[_ngcontent-%COMP%]{padding:0 2rem}.new-trip[_ngcontent-%COMP%]{min-height:100px}.cart-footer[_ngcontent-%COMP%]{min-height:140px}.promo-container[_ngcontent-%COMP%]{height:48px;min-width:350px;border:.5px solid #74767A;border-radius:5px}.promo-input[_ngcontent-%COMP%]{margin-left:5px;outline:none;border:none;height:46px;width:75%;font-size:20px}input[_ngcontent-%COMP%]::placeholder{font-size:16px}.promo-button[_ngcontent-%COMP%]{height:48px;font-size:20px;letter-spacing:.5px;padding:0 1rem}.bg-light[_ngcontent-%COMP%]{background-color:#f5f5f5}.selected-count[_ngcontent-%COMP%]{font-size:16px;letter-spacing:.5px;opacity:.7}.pay-button[_ngcontent-%COMP%]{font-size:16px;width:126px;height:60px;letter-spacing:.1px}@media screen and (max-width: 1100px){.cart-footer[_ngcontent-%COMP%]{flex-direction:column;margin-top:1rem}.promo-container[_ngcontent-%COMP%]{min-width:0;width:100%}}"],changeDetection:0}),e})()}];let ot=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(rt),g.Bz]}),e})();var it=a(4466);let at=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,ot,A.p9,m.Tx,it.m]}),e})()}}]);