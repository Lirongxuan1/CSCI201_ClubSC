(this.webpackJsonpcarlos=this.webpackJsonpcarlos||[]).push([[0],{1296:function(e,t,a){},1297:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(1),n=a.n(i),s=a(9),l=a.n(s),r=a(2),o=(a(3),a(6),a(15),function(){return Object(c.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-search",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{fillRule:"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})]})}),b=function(e){var t;return Object(c.jsx)("div",{className:"search-bar d-flex flex-row align-items-center pl-3 pr-2",style:{width:e.width},spellCheck:"false flex-fill",children:(t=e.button,t?Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)("input",{className:"ml-0",type:"text",value:e.term,onChange:function(t){return e.onTermChange(t.target.value)}}),Object(c.jsx)("button",{className:"btn btn-light mr-0",id:"search-btn",type:"Submit",children:Object(c.jsx)(o,{})})]}):Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)("span",{className:"ml-0 mr-2",children:Object(c.jsx)(o,{})}),Object(c.jsx)("input",{type:"text",value:e.term,onChange:function(t){return e.onTermChange(t.target.value)}})]}))})};b.defaultProps={width:"auto",button:!1};var h=b,m=function(e){var t=e.href,a=e.className,i=e.children;return Object(c.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrKey){e.preventDefault(),window.history.pushState({},"","/clubsc".concat(t));var a=new PopStateEvent("popstate");window.dispatchEvent(a)}},href:"/clubsc".concat(t),className:a,children:i})},j=function(e){var t,a,n=Object(i.useState)(""),s=Object(r.a)(n,2),l=s[0],o=s[1],b=function(e){console.log("Searching for ".concat(l,"...")),e.preventDefault(),window.history.pushState({},"","/clubsc/search");var t=new PopStateEvent("popstate");window.dispatchEvent(t)};return Object(c.jsxs)("nav",{className:"navbar sticky-top navbar-expand navbar-light bg-light",children:[(t=e.search,a=e.logoOnly,a?Object(c.jsx)("div",{className:"navbar-nav",children:Object(c.jsx)(m,{className:"navbar-brand ml-2",href:"/",children:Object(c.jsx)("img",{src:"clubsc_mini.png",width:"72px",height:"40px",alt:""})})}):t?Object(c.jsxs)("div",{className:"navbar-nav",children:[Object(c.jsx)(m,{className:"navbar-brand ml-2",href:"/",children:Object(c.jsx)("img",{src:"clubsc_mini.png",width:"72px",height:"40px",alt:""})}),Object(c.jsx)("form",{className:"form-inline d-flex",onSubmit:b,children:Object(c.jsx)(h,{width:"50vw",button:!0,term:l,onTermChange:o})})]}):Object(c.jsxs)("div",{className:"navbar-nav",children:[Object(c.jsx)(m,{className:"nav-item nav-link",href:"/",children:"About"}),Object(c.jsx)(m,{className:"nav-item nav-link",href:"/",children:"Dev Team"})]})),function(e,t){if(!t)return e?Object(c.jsx)("div",{className:"navbar-nav ml-auto",children:Object(c.jsx)(m,{className:"nav-item nav-link align-items-center",href:"/user",children:e})}):Object(c.jsx)("form",{className:"form-inline ml-auto",children:Object(c.jsxs)(m,{className:"btn btn-outline-primary",href:"/login",children:[Object(c.jsx)("span",{className:"hide-mobile",children:"Sign In"}),Object(c.jsx)("span",{className:"show-mobile",children:Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-person-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})})})]})})}(e.user,e.logoOnly)]})},d=function(e){return Object(c.jsxs)("div",{className:"page-contents",children:[Object(c.jsx)(j,{search:e.search,user:e.user,logoOnly:e.logoOnly}),e.children,Object(c.jsx)("footer",{className:"".concat(e.logoOnly?"hide":""),children:Object(c.jsxs)("div",{className:"navbar navbar-light bg-light flex-column responsive-footer justify-content-center",children:[Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"mb-0",children:"\xa9 ClubSC 2020"})}),Object(c.jsxs)("div",{className:"navbar-nav d-flex flex-row justify-content-around",children:[Object(c.jsx)(m,{className:"nav-item nav-link mr-1",href:"/",children:"Privacy"}),Object(c.jsx)(m,{className:"nav-item nav-link ml-1 mr-sm-3",href:"/",children:"Terms"})]})]})})]})};d.defaultProps={search:!1,user:"",logoOnly:!1};var u=d,x=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(c.jsx)(u,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row d-flex flex-row justify-content-center",children:Object(c.jsx)("img",{className:"my-5",width:"225px",height:"150px",src:"clubsc_big.png"})}),Object(c.jsx)("form",{onSubmit:function(e){console.log("Searching for ".concat(a,"...")),e.preventDefault(),window.history.pushState({},"","/clubsc/search");var t=new PopStateEvent("popstate");window.dispatchEvent(t)},children:Object(c.jsxs)("div",{className:"row d-flex flex-column align-items-center",children:[Object(c.jsx)("div",{className:"col-8",children:Object(c.jsx)(h,{term:a,onTermChange:n})}),Object(c.jsx)("button",{className:"btn btn-light mt-5",type:"submit",children:"Search Clubs"})]})})]})})},p=(a(16),function(e){return Object(c.jsx)("div",{className:"form-group input-field my-4 px-3 d-flex flex-row align-items-center",children:Object(c.jsx)("input",{type:e.type,"aria-describedby":"emailHelp",placeholder:e.title})})}),f=function(){return Object(c.jsx)(u,{logoOnly:!0,children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row d-flex flex-row justify-content-center align-items-center",style:{height:"60vh"},children:Object(c.jsxs)("div",{className:"col-10 col-md-8 col-lg-5",children:[Object(c.jsx)("h1",{className:"my-3",style:{textAlign:"center"},children:"Log In"}),Object(c.jsxs)("form",{children:[Object(c.jsx)(p,{type:"email",title:"Email"}),Object(c.jsx)(p,{type:"password",title:"Password"}),Object(c.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(c.jsxs)(m,{className:"mr-auto ml-1",href:"/signup",children:[Object(c.jsx)("span",{className:"hide-mobile",children:"Don't have an account?"}),Object(c.jsx)("span",{className:"show-mobile",children:"Sign Up"})]}),Object(c.jsx)("button",{className:"btn btn-primary ml-auto mr-1",type:"Submit",children:"Submit"})]})]})]})})})})},g=(a(17),function(e){var t=e.placeholder;return Object(c.jsx)("div",{className:"form-group input-area my-4 px-3 d-flex flex-row align-items-center",children:Object(c.jsx)("textarea",{placeholder:t})})}),O=function(){return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)(p,{type:"text",title:"Name"}),Object(c.jsx)(p,{type:"email",title:"Email"}),Object(c.jsx)(p,{type:"password",title:"Password"})]})},v=function(){return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)(p,{type:"text",title:"Club Name"}),Object(c.jsx)(p,{type:"email",title:"Email"}),Object(c.jsx)(p,{type:"password",title:"Password"}),Object(c.jsx)(g,{placeholder:"Club Description"})]})},y=function(){var e=Object(i.useState)("student"),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(c.jsx)(u,{logoOnly:!0,children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row d-flex flex-row justify-content-center align-items-center",style:{height:"60vh"},children:Object(c.jsxs)("div",{className:"col-10 col-md-8 col-lg-5",children:[Object(c.jsx)("h1",{className:"my-3",style:{textAlign:"center"},children:"Sign Up"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(c.jsx)("h6",{children:"Account Type:"}),Object(c.jsxs)("span",{children:[Object(c.jsxs)("label",{className:"mr-3",children:[Object(c.jsx)("input",{type:"radio",name:"user-type",value:"student",className:"mr-1",checked:"student"===a,onChange:function(e){return n(e.target.value)}}),"Student"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",name:"user-type",value:"club",className:"mr-1",checked:"club"===a,onChange:function(e){return n(e.target.value)}}),"Club"]})]})]}),"student"===a?Object(c.jsx)(O,{}):Object(c.jsx)(v,{}),Object(c.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(c.jsxs)(m,{className:"mr-auto ml-1",href:"/login",children:[Object(c.jsx)("span",{className:"hide-mobile",children:"Already have an account?"}),Object(c.jsx)("span",{className:"show-mobile",children:"Sign In"})]}),Object(c.jsx)("button",{className:"btn btn-primary ml-auto mr-1",type:"Submit",children:"Submit"})]})]})]})})})})},w=a(4),k=a.n(w),N=(a(8),function(e){return Object(c.jsx)("div",{className:"col-12 col-md-5 col-xl-3",children:Object(c.jsx)("div",{className:"card mb-3 mb-xl-4 mx-1 mx-xl-1",children:Object(c.jsxs)("div",{className:"card-body d-flex flex-column justify-content-center align-items-center",children:[Object(c.jsx)("h5",{className:"card-title",children:e.title}),Object(c.jsx)("p",{className:"card-text",children:e.text}),Object(c.jsx)(m,{href:"/club",className:"btn btn-primary",children:"Club Page"})]})})})}),S=function(e){for(var t=[],a=e.children.length,i=0;i<a;i+=4){for(var s=[],l=i;l<(i+4<a?i+4:a);l++)s.push(e.children[l]);t.push(Object(c.jsx)("div",{className:"row d-flex flex-row justify-content-xl-start justify-content-sm-center justify-content-between",children:s},i))}return Object(c.jsx)(n.a.Fragment,{children:t})},C=function(){return Object(c.jsx)(u,{search:!0,children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("p",{className:"my-3",style:{textAlign:"center"},children:"11 results found"}),Object(c.jsxs)(S,{children:[Object(c.jsx)(N,{title:"Scope",text:"I'm baby hell of helvetica cray ugh, fashion axe kombucha taxidermy flexitarian. Narwhal literally gochujang, 8-bit succulents cloud bread DIY scenester portland cornhole williamsburg before they sold out humblebrag. Pop-up VHS crucifix deep v pork belly forage slow-carb, raw denim tousled roof party man bun."}),Object(c.jsx)(N,{title:"Novus Think Tank",text:"Hot chicken health goth DIY prism synth, meditation banjo leggings snackwave poke hell of pickled farm-to-table. Helvetica vape blog paleo. Farm-to-table man braid shaman tilde etsy chia leggings literally YOLO sriracha thundercats blog tousled."}),Object(c.jsx)(N,{title:"BreakThrough Hip Hop",text:"Swag marfa sustainable intelligentsia helvetica street art gentrify unicorn blue bottle leggings. Kinfolk yuccie drinking vinegar taxidermy mixtape pitchfork."}),Object(c.jsx)(N,{title:"LACI",text:"Wayfarers truffaut slow-carb gentrify, fam bespoke af. Deep v organic four loko, chia DIY try-hard hella fanny pack yuccie. Hashtag ramps gochujang 8-bit cronut photo booth mlkshk readymade chicharrones. Pug DIY gentrify plaid dreamcatcher jean shorts unicorn blog slow-carb twee."}),Object(c.jsx)(N,{title:"AIM",text:"Cornhole ugh mumblecore coloring book 3 wolf moon pop-up woke schlitz. La croix edison bulb four dollar toast messenger bag chillwave small batch, literally keffiyeh man braid sartorial roof party kombucha umami."}),Object(c.jsx)(N,{title:"WYSE",text:"I'm baby hell of helvetica cray ugh, fashion axe kombucha taxidermy flexitarian. Narwhal literally gochujang, 8-bit succulents cloud bread DIY scenester portland cornhole williamsburg before they sold out humblebrag. Pop-up VHS crucifix deep v pork belly forage slow-carb, raw denim tousled roof party man bun."}),Object(c.jsx)(N,{title:"CAIS++",text:"Hot chicken health goth DIY prism synth, meditation banjo leggings snackwave poke hell of pickled farm-to-table. Helvetica vape blog paleo. Farm-to-table man braid shaman tilde etsy chia leggings literally YOLO sriracha thundercats blog tousled."}),Object(c.jsx)(N,{title:"Code The Change",text:"Swag marfa sustainable intelligentsia helvetica street art gentrify unicorn blue bottle leggings. Kinfolk yuccie drinking vinegar taxidermy mixtape pitchfork."}),Object(c.jsx)(N,{title:"Environmental Student Assembly",text:"Wayfarers truffaut slow-carb gentrify, fam bespoke af. Deep v organic four loko, chia DIY try-hard hella fanny pack yuccie. Hashtag ramps gochujang 8-bit cronut photo booth mlkshk readymade chicharrones. Pug DIY gentrify plaid dreamcatcher jean shorts unicorn blog slow-carb twee."}),Object(c.jsx)(N,{title:"SoCal Vocals",text:"Cornhole ugh mumblecore coloring book 3 wolf moon pop-up woke schlitz. La croix edison bulb four dollar toast messenger bag chillwave small batch, literally keffiyeh man braid sartorial roof party kombucha umami."}),Object(c.jsx)(N,{title:"Kinky Trojans",text:"Cornhole ugh mumblecore coloring book 3 wolf moon pop-up woke schlitz. La croix edison bulb four dollar toast messenger bag chillwave small batch, literally keffiyeh man braid sartorial roof party kombucha umami."})]})]})})},D=(a(1296),function(e){var t=e.club,a=e.timestamp,i=e.children;return Object(c.jsxs)("div",{className:"post pt-4 pb-1 px-4 my-4",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)("h6",{children:a}),Object(c.jsx)("p",{children:i})]})}),I=function(){return Object(c.jsx)(u,{search:!0,user:k.a.name.findName(),children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(D,{club:"blah",timestamp:"06/16/2020",children:"I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?"}),Object(c.jsx)(D,{club:"blah",timestamp:"06/16/2020",children:"I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?"}),Object(c.jsx)(D,{club:"blah",timestamp:"06/16/2020",children:"I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?"}),Object(c.jsx)(D,{club:"blah",timestamp:"06/16/2020",children:"I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?"}),Object(c.jsx)(D,{club:"blah",timestamp:"06/16/2020",children:"I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?"}),Object(c.jsx)(D,{club:"blah",timestamp:"06/16/2020",children:"I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?"})]})})},L=function(e){var t=Object(i.useState)({text:"Leave",style:"btn-primary"}),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(c.jsx)("div",{className:"col-12 col-md-5 col-xl-3",children:Object(c.jsx)("div",{className:"card mb-3 mb-xl-4 mx-1 mx-xl-1",children:Object(c.jsxs)("div",{className:"card-body d-flex flex-column justify-content-center align-items-center",children:[Object(c.jsx)("h5",{className:"card-title",children:e.title}),Object(c.jsx)("button",{onClick:function(){"Leave"===n.text?s({text:"Join",style:"btn-outline-primary"}):s({text:"Leave",style:"btn-primary"})},className:"btn ".concat(n.style),children:n.text})]})})})},M=function(){var e=k.a.name.findName();return Object(c.jsx)(u,{search:!0,user:e,children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"d-flex flex-row justify-content-center",children:Object(c.jsx)("h1",{className:"mt-4",children:e})}),Object(c.jsx)("hr",{}),Object(c.jsxs)(S,{children:[Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"}),Object(c.jsx)(L,{title:"Scope"})]})]})})},z=function(e){var t=e.path,a=e.children,c=Object(i.useState)(window.location.pathname),n=Object(r.a)(c,2),s=n[0],l=n[1];return Object(i.useEffect)((function(){var e=function(){l(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),s==="/clubsc".concat(t)?a:null},E=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(z,{path:"/",children:Object(c.jsx)(x,{})}),Object(c.jsx)(z,{path:"/search",children:Object(c.jsx)(C,{})}),Object(c.jsx)(z,{path:"/login",children:Object(c.jsx)(f,{})}),Object(c.jsx)(z,{path:"/signup",children:Object(c.jsx)(y,{})}),Object(c.jsx)(z,{path:"/userdash",children:Object(c.jsx)(I,{})}),Object(c.jsx)(z,{path:"/user",children:Object(c.jsx)(M,{})})]})};l.a.render(Object(c.jsx)(E,{}),document.querySelector("#root"))},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},3:function(e,t,a){},6:function(e,t,a){},8:function(e,t,a){}},[[1297,1,2]]]);
//# sourceMappingURL=main.66318247.chunk.js.map