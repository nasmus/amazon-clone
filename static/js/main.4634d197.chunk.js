(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(24),i=n.n(s),o=(n(47),n(11)),r=(n(48),n(16)),l=n(8),j=(n(49),n(38)),d=n.n(j),h=n(40),u=n.n(h),b=n(2),m=Object(a.createContext)(),O=function(e){var t=e.reducer,n=e.initialState,c=e.children;return Object(b.jsx)(m.Provider,{value:Object(a.useReducer)(t,n),children:c})},p=function(){return Object(a.useContext)(m)},g=n(30),_=(g.a.initializeApp({apiKey:"AIzaSyAkysvBUcPng3kwQ9k3zjP4A1Vb8TkWSz4",authDomain:"clone-d2fb4.firebaseapp.com",projectId:"clone-d2fb4",storageBucket:"clone-d2fb4.appspot.com",messagingSenderId:"1042289999563",appId:"1:1042289999563:web:efb2a487a5071c1a55654e",measurementId:"G-8TT54T78VL"}).firestore(),g.a.auth());var x=function(){var e=p(),t=Object(o.a)(e,1)[0],n=t.basket,a=t.user;return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(b.jsxs)("div",{className:"header__search",children:[Object(b.jsx)("input",{type:"text",className:"header__searchInput"}),Object(b.jsx)(d.a,{type:"text",className:"header__searchIcon"})]}),Object(b.jsxs)("div",{className:"header__nev",children:[Object(b.jsx)(r.b,{to:!a&&"/login",className:"header__link",children:Object(b.jsxs)("div",{onClick:function(){a&&_.signOut()},className:"header__option",children:[Object(b.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===a||void 0===a?void 0:a.email," "]}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign in"})]})}),Object(b.jsx)(r.b,{to:"/",className:"header__link",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(b.jsx)(r.b,{to:"/",className:"header__link",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"your"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(b.jsx)(r.b,{to:"/chackout",className:"header__link",children:Object(b.jsxs)("div",{className:"header__optionBasket",children:[Object(b.jsx)(u.a,{}),Object(b.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};n(63),n(64);var v=function(e){var t=e.id,n=e.title,a=e.image,c=e.price,s=e.rating,i=p(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("p",{children:n}),Object(b.jsxs)("p",{className:"product__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:c})]}),Object(b.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e){return Object(b.jsx)("p",{children:"\u2b50\ufe0f"})}))})]}),Object(b.jsx)("img",{src:a,alt:""}),Object(b.jsx)("button",{onClick:function(){l({type:"ADD TO BASKET",item:{id:t,title:n,price:c,image:a,rating:s}})},children:"Add to Basket"})]})};var f=function(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/HI_EN/1500x600_Hero-Tall_NP._CB660043011_.jpg"}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(v,{id:"1234567",title:"The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation ",price:11.96,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SX679_.jpg"}),Object(b.jsx)(v,{id:"1234567",title:"DualShock 4 Wireless Controller for PlayStation 4 - Magma Red how to constant innovation The lean startup: how to constant innovation",price:64.96,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL.jpg"})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(v,{id:"1234567",title:"The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation ",price:11.96,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(b.jsx)(v,{id:"1234569",title:"The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation ",price:11.96,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"}),Object(b.jsx)(v,{id:"1234567",title:"YONEX Astrox 100 ZZ Badminton Racket (Dark Navy)(3UG5)(Unstrung)YONEX Astrox 100 ZZ Badminton Racket (Dark Navy)(3UG5)(Unstrung) ",price:225,rating:5,image:"https://m.media-amazon.com/images/I/51XOBVxLk4L._AC_UL320_.jpg"})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(v,{id:"1234567",title:"The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation ",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SX679_.jpg"}),Object(b.jsx)(v,{id:"1234567",title:"The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation ",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SX679_.jpg"})]})]})};n(65);var N=function(e){var t=e.id,n=e.title,a=e.image,c=e.price,s=e.rating,i=p(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct__image",src:a,alt:""}),Object(b.jsxs)("div",{className:"checkoutProduct__info",children:[Object(b.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(b.jsxs)("p",{className:"checkoutProduct__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:c})]}),Object(b.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e){return Object(b.jsx)("p",{children:"\u2b50\ufe0f"})}))}),Object(b.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},k=(n(66),n(67),n(41)),T=n.n(k),S=n(31),w=n(19),y=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)};var A=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(w.a)(Object(w.a)({},e),{},{user:t.user});case"ADD TO BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(S.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var n=Object(S.a)(e.basket),a=e.basket.findIndex((function(e){return e.id===t.id}));return a>=0?n.splice(a,1):console.warn("cant remove product"),Object(w.a)(Object(w.a)({},e),{},{basket:n});default:return e}};var C=function(){var e=p(),t=Object(o.a)(e,2),n=t[0].basket;return t[1],Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(T.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["subtotal (",n.length," items): ",Object(b.jsx)("strong",{children:" ".concat(e)})]}),Object(b.jsxs)("small",{className:"subtotal__gift",children:[Object(b.jsx)("input",{type:"checkbox"})," this order contains a gift"]})]})},decimalScal:2,value:y(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(b.jsx)("button",{children:"Proceed to Checkout"})]})};var E=function(){var e=p(),t=Object(o.a)(e,1)[0].basket;return Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsx)("img",{className:"checkout__ad"}),0===(null===t||void 0===t?void 0:t.length)?Object(b.jsx)("div",{children:Object(b.jsx)("h2",{className:"checkout__title",children:"Your Basket is Empty"})}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"checkout__title",children:"your shopping Basket"}),t.map((function(e){return Object(b.jsx)(N,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]}),t.length>0&&Object(b.jsx)("div",{className:"checkout__right",children:Object(b.jsx)(C,{})})]})};n(69);var P=function(){var e=Object(l.f)(),t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),j=Object(o.a)(i,2),d=j[0],h=j[1];return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{className:"login__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(b.jsxs)("div",{className:"login__container",children:[Object(b.jsx)("h1",{children:"Sign in"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h5",{children:"E-mail"}),Object(b.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},type:"email"}),Object(b.jsx)("h5",{children:"Password"}),Object(b.jsx)("input",{value:d,onChange:function(e){return h(e.target.value)},type:"password"}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(c,d).then((function(t){e.push("./")})).catch((function(e){return alert(e.message)}))},className:"login__singInButton",children:"Sign in"})]}),Object(b.jsx)("p",{children:"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(c,d).then((function(t){e.push("./")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon account"})]})]})};var z=function(){var e=p(),t=Object(o.a)(e,2),n=t[0],c=(n.basket,n.user,t[1]);return Object(a.useEffect)((function(){var e=_.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),Object(b.jsx)(r.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(l.c,{children:[Object(b.jsxs)(l.a,{path:"/chackout",children:[Object(b.jsx)(x,{}),Object(b.jsx)(E,{})]}),Object(b.jsxs)(l.a,{path:"/login",children:[Object(b.jsx)(x,{}),Object(b.jsx)(P,{})]}),Object(b.jsxs)(l.a,{path:"/",children:[Object(b.jsx)(x,{}),Object(b.jsx)(f,{})]})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{initialState:{basket:[],user:null},reducer:A,children:Object(b.jsx)(z,{})})}),document.getElementById("root")),L()}},[[71,1,2]]]);
//# sourceMappingURL=main.4634d197.chunk.js.map