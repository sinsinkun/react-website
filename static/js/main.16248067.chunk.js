(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{10:function(e,a,t){},19:function(e,a,t){e.exports=t.p+"static/media/personal_logo_inverted.440110ce.png"},23:function(e,a,t){e.exports=t(36)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(16),l=t.n(c),r=t(17),o=t(18),u=t(22),s=t(21),m=t(8),d=t(1);t(10);var p=function(e){return"home"===e.currentPage?i.a.createElement("div",{className:"header",style:{background:"linear-gradient(#1abc9c, #dff)"}},i.a.createElement("h1",null,"Home Page"),i.a.createElement("p",null,"Information ","&"," Filler Text")):"demos"===e.currentPage?i.a.createElement("div",{className:"header",style:{background:"linear-gradient(#dc6a9c, #dff)"}},i.a.createElement("h1",null,"Demos Page"),i.a.createElement("p",null,"React application samples")):"about"===e.currentPage?i.a.createElement("div",{className:"header",style:{background:"linear-gradient(#15b2c4, #dff)"}},i.a.createElement("h1",null,"About Page"),i.a.createElement("p",null,"Information on site ","&"," me")):i.a.createElement("div",{className:"header",style:{backgroundColor:"#cc4a4a"}},i.a.createElement("h1",null,"Unknown Header"),i.a.createElement("p",null,"Error"),i.a.createElement("p",null,"How did you get here"))},E=t(6),b=t(19),v=t.n(b);var f=function(e){var a=Object(n.useState)(0),t=Object(E.a)(a,2),c=t[0],l=t[1],r=Object(n.useState)("navVis"),o=Object(E.a)(r,2),u=o[0],s=o[1],d=Object(n.useState)(!1),p=Object(E.a)(d,2),b=p[0],f=p[1],g=Object(n.useState)(!1),h=Object(E.a)(g,2),N=h[0],w=h[1],k=Object(n.useState)(!1),P=Object(E.a)(k,2),O=P[0],j=P[1];Object(n.useEffect)((function(){window.innerWidth<=780&&w(!0),j(!1)}),[]),Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.pageYOffset;e<=0&&(console.log("top of page"),s("navVis")),e>c&&!b?(console.log("make nav invisible - "+c+" to "+e),s("navNotVis"),f(!0)):e<c&&!b&&(console.log("make nav visible again - "+c+" to "+e),s("navVis"),f(!0)),l(e)}))})),Object(n.useEffect)((function(){var e=setTimeout((function(){f(!1)}),400);return function(){clearTimeout(e)}}),[b]),Object(n.useEffect)((function(){window.addEventListener("resize",(function(){var e=window.innerWidth;w(e<=780),e>=780&&O&&j(!1)}))}));var q=function(){j(!1)};return i.a.createElement("div",{className:u},i.a.createElement("div",{className:"navBar"},i.a.createElement("div",{className:"navLogoArea"},i.a.createElement("img",{className:"navLogo",src:v.a,alt:"logo",height:"35px",width:"35px"}),i.a.createElement("p",null,"React-Test")),i.a.createElement("div",{className:"burgerBtn"+(N?"":"-hidden"),onClick:function(){j(!O)}},i.a.createElement("div",{className:"line1"}," "),i.a.createElement("div",{className:"line1"}," "),i.a.createElement("div",{className:"line1"}," ")),i.a.createElement("div",{className:"navLinks"+(N?"-in-side-menu":"")+(O?"-open":"")},"home"===e.currentPage?i.a.createElement("div",{className:"clickedNav",style:{backgroundColor:"#1abc9c"}},"Home"):i.a.createElement(m.b,{to:"/",onClick:q},"Home"),"demos"===e.currentPage?i.a.createElement("div",{className:"clickedNav",style:{backgroundColor:"#dc6a9c"}},"Demos"):i.a.createElement(m.b,{to:"/demos",onClick:q},"Demos"),"about"===e.currentPage?i.a.createElement("div",{className:"clickedNav",style:{backgroundColor:"#15b2c4"}},"About"):i.a.createElement(m.b,{to:"/about",onClick:q},"About"))))};function g(){window.scrollTo(0,0)}var h=function(e){return i.a.createElement("div",{className:"footer"},i.a.createElement("p",null),i.a.createElement("p",null,"Site in progress"),i.a.createElement("button",{onClick:g},"Back to Top"))};t(33);var N=function(e){var a=Object(n.useState)(!0),t=Object(E.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){e.updatePage("home"),window.scrollTo(0,0),l(!0)}),[]),i.a.createElement("div",{className:"home"},i.a.createElement("h3",null,"Sub heading"),i.a.createElement("div",{className:"fade-in"+(c?"-is-visible":"")},i.a.createElement("div",{className:"squeeze1"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("div",{className:"topImage"}," "))),i.a.createElement("div",{className:"fade-in"+(c?".is-visible":"")},i.a.createElement("div",{className:"squeeze2"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("div",{className:"topImage"}," "))),i.a.createElement("div",{className:"botLorem"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))};t(34);var w=function(e){return Object(n.useEffect)((function(){e.updatePage("about"),window.scrollTo(0,0)}),[]),i.a.createElement("div",{className:"about"},i.a.createElement("p",null,"This site was built using react with no 3rd party libraries"),i.a.createElement("div",{className:"about-me"},i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sideImg"},"Image")),i.a.createElement("div",{className:"main"},i.a.createElement("p",null,"Creator: "),i.a.createElement("p",null,"JingChang Xiao"),i.a.createElement("p",null,"Github: "),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/sinsinkun/",target:"_blank",rel:"noopener noreferrer"},"https://github.com/sinsinkun/")))))};t(35);var k=function(e){return Object(n.useEffect)((function(){e.updatePage("demos"),window.scrollTo(0,0)}),[]),i.a.createElement("div",{className:"demos"},i.a.createElement("h3",null,"Demos and stuff"),i.a.createElement("p",null,"Subtitle"))},P=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={currentPage:"home"},e.updatePage=function(a){e.setState({currentPage:a})},e}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,{basename:"/react-website"},i.a.createElement("div",{className:"appBody"},i.a.createElement(f,{currentPage:this.state.currentPage}),i.a.createElement(p,{currentPage:this.state.currentPage}),i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/"},i.a.createElement(N,{updatePage:this.updatePage})),i.a.createElement(d.a,{path:"/demos"},i.a.createElement(k,{updatePage:this.updatePage})),i.a.createElement(d.a,{path:"/about"},i.a.createElement(w,{updatePage:this.updatePage}))),i.a.createElement(h,null)))}}]),t}(n.Component);l.a.render(i.a.createElement(P,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.16248067.chunk.js.map