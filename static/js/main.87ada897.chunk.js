(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{11:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/personal_logo_inverted.440110ce.png"},31:function(e,t,a){e.exports=a(50)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),i=a.n(r),c=a(24),o=a(25),s=a(30),m=a(28),u=a(9),d=a(1),E=(a(11),a(3));var p={background:"linear-gradient(135deg, rgba(10,4,4,1) 0%, rgba(42,71,66,1) 50%, rgba(86,184,61,1) 76%, rgba(14,47,18,1) 100%)"},g={background:"linear-gradient(135deg, rgba(10,4,4,1) 0%, rgba(87,14,33,1) 50%, rgba(235,57,199,1) 76%, rgba(37,14,18,1) 100%)"},b={background:"linear-gradient(135deg, rgba(10,4,4,1) 0%, rgba(18,28,84,1) 50%, rgba(27,174,187,1) 76%, rgba(14,17,28,1) 100%)"},h=function(e){var t=Object(n.useState)(0),a=Object(E.a)(t,2),r=a[0],i=a[1];Object(n.useEffect)((function(){c()}),[e.currentPage]);var c=function(){i(r?0:1)};return"home"===e.currentPage?l.a.createElement("div",{className:"header",style:p},l.a.createElement("h1",{key:r},"Home Page"),l.a.createElement("p",{key:r+1},"Information ","&"," Filler Text")):"demos"===e.currentPage?l.a.createElement("div",{className:"header",style:g},l.a.createElement("h1",{key:r+2},"Demos Page"),l.a.createElement("p",{key:r+3}," React application samples")):"about"===e.currentPage?l.a.createElement("div",{className:"header",style:b},l.a.createElement("h1",{key:r+4},"About Page"),l.a.createElement("p",{key:r+5},"Information on site ","&"," me")):l.a.createElement("div",{className:"header",style:{backgroundColor:"#cc4a4a"}},l.a.createElement("h1",null,"Unknown Header"),l.a.createElement("p",null,"Error"),l.a.createElement("p",null,"How did you get here"))},f=a(26),v=a.n(f);var w=function(e){var t=Object(n.useState)(0),a=Object(E.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)("navVis"),o=Object(E.a)(c,2),s=o[0],m=o[1],d=Object(n.useState)(!1),p=Object(E.a)(d,2),g=p[0],b=p[1],h=Object(n.useState)(!1),f=Object(E.a)(h,2),w=f[0],y=f[1];Object(n.useEffect)((function(){window.innerWidth<=780&&b(!0),y(!1)}),[]),Object(n.useEffect)((function(){var e=function(){return setTimeout(k,200)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}));var k=function(){var e=window.pageYOffset;e<=0&&m("navVis"),e>r?m("navNotVis"):e<r&&m("navVis"),i(e)};Object(n.useEffect)((function(){window.addEventListener("resize",(function(){var e=window.innerWidth;b(e<=780),e>=780&&w&&y(!1)}))}));var N=function(){y(!1)};return l.a.createElement("div",{className:s},l.a.createElement("div",{className:"navBar"},l.a.createElement("div",{className:"navLogoArea"},l.a.createElement("img",{className:"navLogo",src:v.a,alt:"logo",height:"35px",width:"35px"}),l.a.createElement("p",null,"React-Test")),l.a.createElement("div",{className:"burgerBtn"+(g?"":"-hidden"),onClick:function(){y(!w)}},l.a.createElement("div",{className:"line1"}," "),l.a.createElement("div",{className:"line1"}," "),l.a.createElement("div",{className:"line1"}," ")),l.a.createElement("div",{className:"navLinks"+(g?"-in-side-menu":"")+(w?"-open":"")},"home"===e.currentPage?l.a.createElement("div",{className:"clickedNav",style:{backgroundColor:"rgba(50,50,50,1)"}},"Home"):l.a.createElement(u.b,{to:"/",onClick:N},"Home"),"demos"===e.currentPage?l.a.createElement("div",{className:"clickedNav",style:{backgroundColor:"rgba(50,50,50,1)"}},"Demos"):l.a.createElement(u.b,{to:"/demos",onClick:N},"Demos"),"about"===e.currentPage?l.a.createElement("div",{className:"clickedNav",style:{backgroundColor:"rgba(50,50,50,1)"}},"About"):l.a.createElement(u.b,{to:"/about",onClick:N},"About"))))};function y(){window.scrollTo(0,0)}var k=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null),l.a.createElement("p",null,"Site in progress"),l.a.createElement("button",{onClick:y},"Back to Top"))};a(41);var N=function(e){var t=Object(n.useState)(!0),a=Object(E.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){e.updatePage("home"),window.scrollTo(0,0),i(!0)}),[]),l.a.createElement("div",{className:"home"},l.a.createElement("h3",null,"Welcome"),l.a.createElement("div",{style:{height:"40px"}}),l.a.createElement("div",{className:"fade-in"+(r?"-is-visible":"")},l.a.createElement("div",{className:"squeeze1"},l.a.createElement("div",null,l.a.createElement("p",null,"This is a small example website I put together to play around with creating UI experiences using ReactJS, with  an emphasis on the functional aspects regarding website/React design. Responsive design is taken into consideration when designing the various aspects of this website."),l.a.createElement("p",null,"I intend to use as few third party libraries as possible, keeping to native react functionality except in demos requiring more complicated usability. This site will be updated with more content as I find new and interesting ways to manipulate objects through ReactJS.")),l.a.createElement("div",{className:"fillImage"},"Image"))),l.a.createElement("div",{style:{height:"40px"}}),l.a.createElement("div",{className:"fade-in"+(r?".is-visible":"")},l.a.createElement("div",{className:"squeeze2"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement("div",{className:"fillImage"},"Image"))),l.a.createElement("div",{style:{height:"40px"}}),l.a.createElement("div",{className:"botLorem"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement("div",{style:{height:"40px"}}))},x=(a(42),a(29));a(43);var j={pageNum:1,info:l.a.createElement("div",null,l.a.createElement("h3",null,"Education"),l.a.createElement("table",{cellSpacing:"0"},l.a.createElement("th",{colSpan:"2"},l.a.createElement("p",null,"University of Toronto")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,"Toronto, ON")),l.a.createElement("td",null,l.a.createElement("p",null,"Sep 2012 - Apr 2017")))),l.a.createElement("p",null,"Mechanical Engineering, Bachelors of Applied Science"),l.a.createElement("p",null,"Specialization in Solids and Mechatronics"),l.a.createElement("div",{style:{height:"10px"}}),l.a.createElement("h3",null,"Skills ","&"," Qualifications"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("p",null,"- Experience working with C, C","#",", Javascript")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Experience working with VSCode and Visual Studio")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Experience working with git and github")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Excellent oral and written communication skills (fluent in English)")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Work well both independently and as part of a group")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Quick learner, easily capable of picking up new information")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Experience with project management software (e.g. Solidworks PDM, CATIA 3DE)")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Highly proficient in Solidworks and AutoCAD")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Very familiar with Microsoft Office"))))},O={pageNum:2,info:l.a.createElement("div",null,l.a.createElement("h3",null,"Professional Experience"),l.a.createElement("table",{cellSpacing:"0"},l.a.createElement("th",{colSpan:"2"},l.a.createElement("p",null,"Design Engineer")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,"Array Marketing")),l.a.createElement("td",null,l.a.createElement("p",null,"July 2017 - Mar 2020")))),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("p",null,"- Designed 3D display systems for use in retail environments with considerations for ease of manufacturing/assembly, cost of materials, assembly complexity, and overall aesthetics")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Communicated with project managers and clients to ensure all client requirements are met effectively and efficiently")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Created detailed manufacturing and assembly instructions, as well as BOMs for use in production and cost estimation")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Worked together with department managers to improve department workflow and efficiency")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Worked together with model makers to create accurate prototypes and resolve any potential issues"))),l.a.createElement("div",{style:{height:"10px"}}),l.a.createElement("table",{cellSpacing:"0"},l.a.createElement("th",{colSpan:"2"},l.a.createElement("p",null,"Review Engineering Assistant")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,"Ministry of Environment and Climate Change")),l.a.createElement("td",null,l.a.createElement("p",null,"Sep 2015 - Aug 2016")))),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("p",null,"- Reviewed Environmental Compliance Approcal (ECA) Applications for Noise")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Drafted engineering assessments and ECA Certificates")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Verified acoustic and vibration calculations submitted by engineering consultants")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Engaged in professional communications with engineering consultants regarding their applications"))))},S={pageNum:3,info:l.a.createElement("div",null,l.a.createElement("h3",null,"Project Experience"),l.a.createElement("table",{cellSpacing:"0"},l.a.createElement("th",{colSpan:"2"},l.a.createElement("p",null,"Project Lead ","&"," Front End Developer")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,"Flexible Upskilling Network (FUN) Program")),l.a.createElement("td",null,l.a.createElement("p",null,"Aug 2020 - Sep 2020")))),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("p",null,"- Assisted in the creation of a basic functional website for a prescription tracker application using ReactJS")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Ensured team stayed on top of project deliverables and deadlines")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Initiated group discussions and distributed tasks to team members"))),l.a.createElement("div",{style:{height:"10px"}}),l.a.createElement("table",{cellSpacing:"0"},l.a.createElement("th",{colSpan:"2"},l.a.createElement("p",null,"Robotics Project Team Member")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,"Mechatronics Systems Course, University of Toronto")),l.a.createElement("td",null,l.a.createElement("p",null,"Jan 2017 - Mar 2017")))),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("p",null,"- Assisted in the design of pathing algorithm using proximity based sensors")),l.a.createElement("tr",null,l.a.createElement("p",null,"- Assisted in the design of algorithm using laser sensors to visually map an area"))))},P=function(){var e=Object(n.useState)(j),t=Object(E.a)(e,2),a=t[0],r=t[1],i=Object(n.useRef)(),c=[j,O,S],o=function(e){var t=e.id;Object(x.a)(i.current.getElementsByTagName("button")).forEach((function(e){e.id===t?e.className="button-clicked":e.className=""})),r(c[t])};return l.a.createElement("div",{className:"scrollable-container",ref:i},l.a.createElement("ul",{className:"scroll-nav"},l.a.createElement("button",{id:"0",className:"button-clicked",onClick:function(e){return o(e.target)}}),l.a.createElement("button",{id:"1",onClick:function(e){return o(e.target)}}),l.a.createElement("button",{id:"2",onClick:function(e){return o(e.target)}})),l.a.createElement("div",{className:"scroll-main"},a.info))};var C=function(e){return Object(n.useEffect)((function(){e.updatePage("about"),window.scrollTo(0,0)}),[]),l.a.createElement("div",{className:"about"},l.a.createElement("h3",null,"This site was built using reactJS"),l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement("div",{className:"about-me"},l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sideImg"})),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Creator: JingChang Xiao"),l.a.createElement("p",null,"Email: chang.x1994@gmail.com"),l.a.createElement("p",null,"Phone Number: 416 834 7055"),l.a.createElement("p",null,"Github: ",l.a.createElement("a",{href:"https://github.com/sinsinkun/",target:"_blank",rel:"noopener noreferrer"},"https://github.com/sinsinkun/"))),l.a.createElement("div",{className:"scrollable-bio"},l.a.createElement(P,null))),l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement("div",{className:"about-me"},l.a.createElement("p",null,"Other Projects: "),l.a.createElement("p",null,l.a.createElement("a",{href:"https://saqlain.pro/",target:"_blank",rel:"noopener noreferrer"},"https://saqlain.pro/"))),l.a.createElement("div",{style:{height:"40px"}}))},A=(a(44),a(19)),T=a.n(A);a(49);var q=function(e){var t=Object(n.useRef)(),a=Object(n.useState)({x:0,y:0}),r=Object(E.a)(a,2),i=r[0],c=(r[1],Object(n.useState)({x:0,y:0})),o=Object(E.a)(c,2),s=o[0];return o[1],l.a.createElement("div",{className:"demo1-container",ref:t},l.a.createElement("div",{style:{height:"120px"}}),l.a.createElement("div",{className:"flipstrip"}),l.a.createElement(T.a,{defaultPosition:{x:0,y:5},bounds:".demo1-container"},l.a.createElement("div",{className:"hex"},"x: ".concat(i.x," y: ").concat(i.y))),l.a.createElement(T.a,{defaultPosition:{x:85,y:-75},bounds:".demo1-container"},l.a.createElement("div",{className:"hex"},"x: ".concat(s.x," y: ").concat(s.y))))};var D=function(e){var t=Object(n.useState)(),a=Object(E.a)(t,2),r=a[0],i=a[1],c=l.a.createElement("div",{style:{maxWidth:"600px"}},l.a.createElement("p",null,"This demo requires a larger screen size. Please make your browser window larger, or use a different device to view this demo."));return Object(n.useEffect)((function(){e.updatePage("demos"),window.scrollTo(0,0)}),[]),Object(n.useEffect)((function(){window.innerWidth<=780?i(c):i(l.a.createElement(q,null)),window.addEventListener("resize",(function(){window.innerWidth<=780?i(c):i(l.a.createElement(q,null))}))}),[]),l.a.createElement("div",{className:"demos"},l.a.createElement("h3",null,"Demos and stuff"),l.a.createElement("p",{style:{maxWidth:"720px"}},'The following demo uses react-draggable to create a demo similar to the table-top game "Tellstones" by Riot Games.'),l.a.createElement("div",{className:"demo-placeholder"},r),l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement("p",null,"More mini projects coming soon"),l.a.createElement("div",{style:{height:"40px"}}))},I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={currentPage:"home"},e.updatePage=function(t){e.setState({currentPage:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{basename:""},l.a.createElement("div",{className:"appBody"},l.a.createElement(w,{currentPage:this.state.currentPage}),l.a.createElement(h,{currentPage:this.state.currentPage}),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/"},l.a.createElement(N,{updatePage:this.updatePage})),l.a.createElement(d.a,{path:"/demos"},l.a.createElement(D,{updatePage:this.updatePage})),l.a.createElement(d.a,{path:"/about"},l.a.createElement(C,{updatePage:this.updatePage}))),l.a.createElement("div",{style:{height:"30px"}}),l.a.createElement(k,null)))}}]),a}(n.Component);i.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.87ada897.chunk.js.map