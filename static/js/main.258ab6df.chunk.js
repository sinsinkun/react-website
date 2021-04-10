(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(16),s=a.n(n),r=a(10),l=a(7),o=a(2),d=a(0);var j=function(){return Object(d.jsxs)("div",{className:"text-center",style:{marginTop:"8rem"},children:[Object(d.jsx)("h2",{children:"PAGE NOT FOUND"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"The page you are looking for could not be found..."})]})};var h=function(e){var t=Object(c.useContext)(y);return Object(c.useEffect)((function(){t.x>=780&&e.toggleSideNav(!1)}),[t]),Object(d.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"navbar-brand",children:"JingChang Xiao"}),t.x>780?Object(d.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"active",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/projects",className:"nav-link",activeClassName:"active",children:"Past Projects"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/contact",className:"nav-link",activeClassName:"active",children:"Contact Me"})})]}):Object(d.jsx)("button",{className:"btn",style:{color:"lightgrey"},onClick:function(){e.showSideNav?e.toggleSideNav(!1):e.toggleSideNav(!0)},children:Object(d.jsx)("span",{children:"Menu"})})]})})};var m=function(e){var t=Object(c.useState)(!1),a=Object(r.a)(t,2),i=a[0],n=a[1],s=Object(c.useRef)(null);return Object(c.useEffect)((function(){e.showSideNav?n(!0):s.current&&(s.current.classList.add("side-nav-close"),setTimeout((function(){n(!1)}),290))}),[e.showSideNav]),i?Object(d.jsx)("div",{className:"side-nav",ref:s,children:Object(d.jsx)("div",{className:"navbar-collapse navbar-dark",children:Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"active",onClick:function(){return e.toggleSideNav(!1)},children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/projects",className:"nav-link",activeClassName:"active",onClick:function(){return e.toggleSideNav(!1)},children:"Past Projects"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/contact",className:"nav-link",activeClassName:"active",onClick:function(){return e.toggleSideNav(!1)},children:"Contact Me"})})]})})}):null};var b=function(){return Object(d.jsx)("footer",{className:"footer mt-auto py-3 bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid text-center",children:[Object(d.jsx)("span",{className:"text-light",children:"JingChang Xiao"})," ",Object(d.jsx)("span",{className:"text-muted",children:"React Portfolio 2021"})]})})},u=a.p+"static/media/profile.4de8fccf.jpg",x=a.p+"static/media/JingChang_Xiao_Resume.718c3d2b.pdf";var g=function(){return Object(d.jsx)("div",{className:"my-3",children:Object(d.jsxs)("div",{className:"card card-md mx-auto",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("h4",{className:"card-title",children:"About Me"})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("img",{src:u,className:"profile-image",alt:"logo",style:{width:"200px",float:"left"}}),Object(d.jsx)("p",{className:"card-text",children:"My name is Jingchang Xiao, I am a graduate from the University of Toronto with a Bachelor's degree in Mechanical Engineering. I've had personal projects in coding on and off ever since University, and have recently gotten more serious about finding a career in the Software Development industry."}),Object(d.jsxs)("p",{class:"card-text",children:[Object(d.jsx)("a",{href:x,target:"_blank",rel:"noreferrer",children:"Click here"}),"\xa0 to open a copy of my resume. It covers in more detail my educational and professional background, as well as other skills that may be less relevant to developers."]}),Object(d.jsx)("p",{className:"card-text",children:"Althought my formal experience is limited, I have spent a lot of time learning and growing as a developer. I am familiar with a multitude of languages including Javascript, vanilla HTML and CSS, ReactJS, NodeJS, C#, C, and others. Beyond frontend experience, I have also had experience with projects involving backend work with Express server management, relational (SQL) and non-relational (MongoDB) database querying, and API handling both client side and server side."}),Object(d.jsx)("p",{className:"card-text",children:'For some recent examples of my works, please refer to my "Past Projects" page where I have included links to some projects I have worked on in the past few months. Please note that most projects are meant to demonstrate a specific area of web functionality, and therefore a little barren in terms of actual content.'}),Object(d.jsx)("p",{className:"card-text",children:"This is a small example website I put together to demonstrate my proficiency with ReactJS, as well as general web development practices. The website is responsive, meaning it will auto adjust the displayed media based on the size of the window the user is trying to use."})]})]})})};var v=function(e){return Object(d.jsxs)("div",{className:"row card-body",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h5",{className:"d-flex justify-content-center",children:e.name})}),Object(d.jsx)("div",{className:"col-12 col-sm-4",children:Object(d.jsx)("div",{className:"d-flex justify-content-center my-1",children:Object(d.jsx)("img",{className:"img-fluid",src:e.image,alt:e.name})})}),Object(d.jsxs)("div",{className:"col col-sm-8",children:[Object(d.jsx)("p",{className:"my-2",children:e.description}),Object(d.jsxs)("p",{className:"my-1",children:["Live link:"," ",Object(d.jsx)("a",{className:"port-link",href:e.link,target:"_blank",rel:"noreferrer",children:e.link})]}),Object(d.jsxs)("p",{className:"my-1",children:["Github link:"," ",Object(d.jsx)("a",{href:e.gitLink,target:"_blank",rel:"noreferrer",children:e.gitLink})]})]})]})},p=a.p+"static/media/socketim.9471ed4a.png",O=a.p+"static/media/budget.d228ffed.png",f=a.p+"static/media/burgerlogger.a6e4c633.png",N=[{name:"Socket IM",image:p,description:"The focus of this project was to implement SocketIO under the react framework. I have implemented SocketIO in vanilla HTML before, but due to the nature of React's virtual DOM, SocketIO requires a different approach.",link:"https://react-im.herokuapp.com/",gitLink:"https://github.com/sinsinkun/React-SocketIO"},{name:"Google Books Search",image:a.p+"static/media/googlebooks.33a3cd29.png",description:'This project is to demonstrate a basic implementation of a full MERN stack. The search itself calls the Google Books API to obtain entries, which can be saved to the "Saved" tab for later access, implemented using MongoDB.',link:"https://jcx-googlebooksearch.herokuapp.com/",gitLink:"https://github.com/sinsinkun/UTOR-Googlebooks"},{name:"Budget Tracker",image:O,description:"This project focuses on the implementation of a Service Worker, which allows offline functionality in the event of internet interruption.",link:"https://jcx-budgettracker.herokuapp.com/",gitLink:"https://github.com/sinsinkun/UTOR-BudgetTracker"},{name:"Burger Logger",image:f,description:"This project is to showcase my familiarity with vanilla HTML/JS full stack implementation, utilizing a SQL DB backend for tracking information.",link:"https://jcx-burger.herokuapp.com/",gitLink:"https://github.com/sinsinkun/UTOR-BurgerList"}];var k=function(){return Object(d.jsx)("div",{className:"my-3",children:Object(d.jsxs)("div",{className:"card card-md mx-auto",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("h4",{className:"card-title",children:"Past Projects"})}),N.map((function(e){return Object(d.jsx)(v,{name:e.name,link:e.link,image:e.image,gitLink:e.gitLink,description:e.description})}))]})})};var w=function(){return Object(d.jsx)("div",{className:"my-3",children:Object(d.jsxs)("div",{className:"card card-md mx-auto",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("h4",{className:"card-title",children:"Contact Information"})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("p",{className:"mb-3 mx-2",children:["Feel free to contact me through any of the channels listed below.",Object(d.jsx)("br",{}),"I look forward to hearing from you!"]}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{className:"my-2",children:[Object(d.jsx)("b",{children:"Email:"})," chang.x1994@gmail.com"]}),Object(d.jsxs)("li",{className:"my-2",children:[Object(d.jsx)("b",{children:"Phone Number:"})," 416-834-7055"]}),Object(d.jsxs)("li",{className:"my-2",children:[Object(d.jsx)("b",{children:"Github:"})," ",Object(d.jsx)("a",{href:"https://github.com/sinsinkun",target:"_blank",rel:"noreferrer",children:"https://github.com/sinsinkun"})]}),Object(d.jsxs)("li",{className:"my-2",children:[Object(d.jsx)("b",{children:"LinkedIn:"})," ",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/jingchang-xiao/",target:"_blank",rel:"noreferrer",children:"https://www.linkedin.com/in/jingchang-xiao/"})]})]})]})]})})},y=(a(28),i.a.createContext());function S(){var e=Object(c.useState)({x:window.innerWidth,y:window.innerHeight}),t=Object(r.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(!1),s=Object(r.a)(n,2),u=s[0],x=s[1];return Object(c.useEffect)((function(){function e(){i({x:window.innerWidth,y:window.innerHeight})}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),Object(d.jsx)("div",{className:"App d-flex flex-column",children:Object(d.jsx)(y.Provider,{value:a,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(h,{showSideNav:u,toggleSideNav:x}),Object(d.jsx)(m,{showSideNav:u,toggleSideNav:x}),Object(d.jsx)("div",{className:"main-body container-md",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(g,{})}),Object(d.jsx)(o.a,{path:"/projects",children:Object(d.jsx)(k,{})}),Object(d.jsx)(o.a,{path:"/contact",children:Object(d.jsx)(w,{})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(j,{})})]})}),Object(d.jsx)(b,{})]})})})}s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.258ab6df.chunk.js.map