(this["webpackJsonpwsp-mui-ts"]=this["webpackJsonpwsp-mui-ts"]||[]).push([[0],{137:function(e,t,i){},138:function(e,t,i){},150:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),s=i(48),r=i.n(s),o=(i(137),i(138),i(14)),c=i(190),l=i(192),m=i(209),u=i(210),d=i(203),p=Object(d.a)({"@keyframes colorChange":{"0%":{color:"#ee6055"},"25%":{color:"#60d394"},"50%":{color:"#aaf683"},"75%":{color:"#ffd97d"},"100%":{color:"#ff9b85"}},"@keyframes float":{"0%":{boxShadow:"0 5px 15px 0px rgba(0,0,0,0.6)",transform:"translatey(0px)"},"50%":{boxShadow:"0 25px 15px 0px rgba(0,0,0,0.2)",transform:"translatey(-20px)"},"100%":{boxShadow:"0 5px 15px 0px rgba(0,0,0,0.6)",transform:"translatey(0px)"}},"@keyframes float-alt":{"0%":{boxShadow:"0 5px 15px 0px rgba(0,0,0,0.2)",transform:"translatey(0px)"},"50%":{boxShadow:"0 10px 15px 0px rgba(0,0,0,0.2)",transform:"translatey(-10px)"},"100%":{boxShadow:"0 5px 15px 0px rgba(0,0,0,0.2)",transform:"translatey(0px)"}},colorChange:{animationName:"$colorChange",animationDuration:"5s",animationIterationCount:"infinite",animationDirection:"alternate",animationTimingFunction:"linear"},float:{animationName:"$float",animationDuration:"8s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out"},float_alt:{animationName:"$float-alt",animationDuration:"8s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out"}}),b=i.p+"static/media/hero1.567e4b5d.gif",j=i(102),x=i.n(j),g=i(103),h=i.n(g),f="#49a6e9",O={backgroundColor:"#eee",display:"flex",justifyContent:"center",columnGap:"5em",alignContent:"center",height:"80vh",".left-side":{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",maxWidth:"100%",".text":{display:"flex",flexDirection:"column",".hello":{fontSize:"clamp(2em, 5vw, 2.5em)",fontWeight:"500"},".pedro":{fontSize:"clamp(5em, 10vw, 6em)",fontWeight:"200"},".description":{fontSize:"clamp(1em, 5vw ,2em)",fontWeight:"200",span:{textShadow:"rgb(0 0 0) 0px 0px 2px"}},".subtitle":{fontSize:"clamp(1em, 3vw, 1.3em)",fontWeight:"200"}},".buttons":{display:"inherit",columnGap:"4em",marginTop:"1.5em",".btn-contact, .btn-work":{borderRadius:"5em",background:"white",color:f,fontSize:"1em",padding:"1em 4em 1em 4em",".router-projects":{textDecoration:"none",color:f}}}},".right-side":{display:"flex",img:{width:"30em",borderRadius:"5em",alignSelf:"center"}},"@media (max-width: 720px)":{".left-side":{textAlign:"center",".text":{".pedro":{lineHeight:"0.9em"}},".buttons":{flexDirection:"column",rowGap:"1em",width:"60%",alignSelf:"center"}},".right-side":{display:"none"}},"@media (max-width: 1000px)":{".right-side":{display:"none"}}},v=i(49),w=i(1);function y(){var e=p(),t=e.colorChange,i=e.float,n=Object(a.useState)(!1),s=Object(o.a)(n,2),r=s[0],d=s[1];return Object(w.jsxs)(c.a,{sx:O,children:[Object(w.jsxs)(c.a,{className:"left-side",children:[Object(w.jsx)(l.a,{in:!0,timeout:{enter:2e3},children:Object(w.jsxs)(c.a,{className:"text",children:[Object(w.jsx)(m.a,{className:"hello",variant:"h3",children:"Hello!"}),Object(w.jsxs)(m.a,{className:"pedro",variant:"h1",children:["I'm ",Object(w.jsx)("span",{className:"".concat(t),children:"Pedro."})]}),Object(w.jsxs)(m.a,{className:"description",variant:"body1",children:["I'm a Full-Stack Developer,",Object(w.jsx)("br",{}),"working with ",Object(w.jsx)("span",{children:"Node.JS and Typescript."})]}),Object(w.jsx)(m.a,{className:"subtitle",variant:"body1",children:"I also work with Firebase, Heroku and GCP clouds."})]})}),Object(w.jsx)(l.a,{in:!0,timeout:{enter:5e3},children:Object(w.jsxs)(c.a,{className:"buttons",children:[Object(w.jsx)(u.a,{className:"btn-contact",variant:"contained",disableRipple:!0,size:"large",startIcon:Object(w.jsx)(x.a,{}),onClick:function(){window.scrollBy({top:9999,left:0,behavior:"smooth"})},children:"Contact"}),Object(w.jsx)(u.a,{className:"btn-work",variant:"contained",disableRipple:!0,size:"large",startIcon:Object(w.jsx)(h.a,{}),onClick:function(){return d(!r)},children:Object(w.jsx)(v.b,{className:"router-projects",to:"/projects",children:"Projects"})})]})})]}),Object(w.jsx)(c.a,{className:"right-side",children:Object(w.jsx)(l.a,{in:!0,timeout:{enter:8e3},children:Object(w.jsx)("img",{className:"".concat(i),src:b,alt:"Hero Placeholder"})})})]})}var k=i(3),q=i(89),S=i(211),N=i(212),C=i(202),I=i(214),P=i(215),A=i(216),R=i(217),F=i(218),D=i(205),T=i(92),G=i(197),L={alignItems:"center",margin:"2em auto",display:"flex",justifyContent:"center",height:"80vh",columnGap:"10em",".dev-box":{".MuiTypography-root":{fontFamily:"Roboto",fontWeight:"200",textAlign:"center"}},"@media only screen and (max-width: 780px)":{".dev-box":{display:"none"}},".contact-box":{padding:"2em 3em 2em 3em",".email":{borderColor:"#49a6e9",gridArea:"em"},".subject":{gridArea:"sj"},".message":{gridArea:"ms"},".title":{gridArea:"tt",fontSize:"3em",fontWeight:"200"},".loading-button":{gridArea:"bs",width:"10em",borderRadius:"5em"},backgroundColor:"white",display:"grid",justifyContent:"center",gridGap:"2vh",gridTemplateAreas:'"tt tt tt"\n                            "em sj sj"\n                            "ms ms ms"\n                            ". . bs"',"@media only screen and (max-width: 780px)":{".title":{fontSize:"2.5em",fontWeight:"200"}},"@media only screen and (max-width: 500px)":{gridTemplateAreas:'"tt tt tt "\n                                "em em em"\n                                "sj sj sj"\n                                "ms ms ms"\n                                ". . bs"'}}},W=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function z(){T.a.init("user_d1mS4JOxBA5704aYP1SJ4");var e={email:"",subject:"",message:""},t=Object(a.useState)(e),i=Object(o.a)(t,2),n=i[0],s=i[1],r=Object(a.useRef)(null),c=Object(a.useRef)(null),l=Object(a.useRef)(null),d=Object(a.useState)(!1),p=Object(o.a)(d,2),b=p[0],j=p[1],x=Object(a.useState)(!1),g=Object(o.a)(x,2),h=g[0],f=g[1],O=Object(a.useState)(!1),v=Object(o.a)(O,2),y=v[0],z=v[1],B=Object(a.useState)(!1),J=Object(o.a)(B,2),M=J[0],_=J[1],E=Object(a.useState)(!1),Y=Object(o.a)(E,2),H=Y[0],Q=Y[1],V=function(e){switch(e){case"send_success":j(!0);break;case"error":f(!0);break;case"emptyfields":z(!0);break;case"closing":z(!1),j(!1),f(!1)}},$=function(e){return function(t){s(Object(q.a)(Object(q.a)({},n),{},Object(k.a)({},e,t.target.value))),"email"===e&&(W.test(t.target.value)?Q(!0):Q(!1))}};return Object(w.jsxs)(S.a,{sx:L,disableGutters:!0,children:[Object(w.jsxs)(G.a,{className:"dev-box",alignSelf:"center",children:[Object(w.jsx)(m.a,{variant:"h3",sx:{userSelect:"none","span:after":{content:'"(\u3065 \u25d5\u203f\u25d5 )\u3065"'},"span:hover:after":{content:'"\u10da(\u25d5\u203f\u25d5 \u10da)"'}},children:Object(w.jsx)("span",{})}),Object(w.jsx)(m.a,{variant:"h5",marginTop:"1em",children:"Mail me something"}),Object(w.jsx)(m.a,{variant:"subtitle2",children:"I will respond you as soon as possible."})]}),Object(w.jsxs)(N.a,{className:"contact-box",elevation:4,children:[Object(w.jsx)(m.a,{className:"title",children:"Contact Me"}),Object(w.jsx)(C.a,{className:"email",onChange:$("email"),inputRef:r,defaultValue:n.email,type:"email",id:"email",variant:"outlined",required:!0,label:"E-mail"}),Object(w.jsx)(C.a,{className:"subject",onChange:$("subject"),inputRef:l,defaultValue:n.subject,id:"subject-field",variant:"outlined",label:"Subject"}),Object(w.jsx)(C.a,{className:"message",defaultValue:n.message,inputRef:c,onChange:$("message"),multiline:!0,rows:4,label:"Say something",id:"message-field",variant:"outlined"}),Object(w.jsx)(D.a,{className:"loading-button",loading:M,disabled:!H,variant:"outlined",loadingIndicator:"Sending...",onClick:function(){_(!0),e.email=n.email,e.subject=n.subject,e.message=n.message,e.email&&e.subject&&e.message?T.a.send("default_service","template_tis81xk",e).then((function(e){console.log(e),V("send_success"),c.current.value="",l.current.value="",_(!1)}),(function(e){console.log(e),_(!1),V("error"),console.log(e)})):(_(!1),V("emptyfields"))},children:"Send"}),Object(w.jsxs)(I.a,{open:b,children:[Object(w.jsx)(P.a,{id:"alert-dialog-title",children:"Thank you!"}),Object(w.jsx)(A.a,{children:Object(w.jsx)(R.a,{id:"alert-dialog-description",children:"I'll be reading your e-mail soon."})}),Object(w.jsx)(F.a,{children:Object(w.jsx)(u.a,{onClick:function(){return V("closing")},autoFocus:!0,children:"Close"})})]}),Object(w.jsxs)(I.a,{open:y,children:[Object(w.jsx)(P.a,{id:"alert-dialog-title",children:"Please fill all the fields."}),Object(w.jsx)(A.a,{children:Object(w.jsx)(R.a,{id:"alert-dialog-description",children:"Looks like one or more fields is empty, please fill all of them."})}),Object(w.jsx)(F.a,{children:Object(w.jsx)(u.a,{onClick:function(){return V("closing")},autoFocus:!0,children:"Ok"})})]}),Object(w.jsxs)(I.a,{open:h,children:[Object(w.jsx)(P.a,{id:"alert-dialog-title",children:"Oops... Something went wrong."}),Object(w.jsx)(A.a,{children:Object(w.jsxs)(R.a,{id:"alert-dialog-description",children:["An error occurred trying to send the e-mail.",Object(w.jsx)("br",{}),"Check the e-mail field, or maybe one of the text fields is blank."]})}),Object(w.jsx)(F.a,{children:Object(w.jsx)(u.a,{onClick:function(){return V("closing")},autoFocus:!0,children:"Close"})})]})]})]})}var B=i(200),J=i(219),M=i(213),_=i(201),E=i(220),Y=i(221),H=i(105),Q=i.n(H),V=i(107),$=i.n(V),U=i(108),Z=i.n(U),K=i(106),X=i.n(K),ee=i.p+"static/media/logo.7d46b8e7.svg",te="#49a6e9",ie={backgroundColor:"rgba(255,255,255,0.70)",backdropFilter:"blur(20px)",".main-container":{display:"flex",justifyContent:"space-between",alignItems:"center",".title-box":{margin:"1em",".title-link":{display:"flex",textDecoration:"none"},img:{width:"24px"},".title":{fontFamily:"Roboto",userSelect:"none",color:"black",fontSize:"1.5em",span:{color:te}}},".right-box":{".info-box, .links-box":{display:"none"},".menu":{display:"flex",color:te}},"@media only screen and (min-width: 720px)":{".right-box":{display:"inline-flex",columnGap:"2em",".menu":{display:"none"},".info-box, .links-box":{display:"flex",alignContent:"center",".router-home, .router-projects, .router-contact":{textDecoration:"none",color:"black","&:hover":{color:te}}},".whatsapp-button, .linkedin-button, .github-button":{color:te}}}}};function ae(){return Object(w.jsx)(c.a,{position:"sticky",top:"0",width:"100%",zIndex:"999",sx:ie,children:Object(w.jsxs)(S.a,{className:"main-container",maxWidth:!1,children:[Object(w.jsx)(c.a,{className:"title-box",children:Object(w.jsxs)(v.b,{className:"title-link",to:"/",onClick:function(){window.scrollBy({top:-999,left:0,behavior:"smooth"})},children:[Object(w.jsx)(B.a,{in:!0,timeout:{enter:1e3},children:Object(w.jsx)("img",{src:ee,alt:"Website Logo"})}),Object(w.jsx)(B.a,{in:!0,timeout:{enter:1e3},children:Object(w.jsxs)(m.a,{className:"title",children:["Pedro",Object(w.jsx)("span",{children:"Dev"})]})})]})}),Object(w.jsxs)(c.a,{className:"right-box",children:[Object(w.jsx)(J.a,{className:"menu",children:Object(w.jsx)(Q.a,{})}),Object(w.jsxs)(M.a,{className:"info-box",children:[Object(w.jsx)(_.a,{in:!0,timeout:{enter:500},children:Object(w.jsx)(v.b,{className:"router-home",to:"/",children:Object(w.jsx)(E.a,{disableRipple:!0,onClick:function(){window.scrollBy({top:-999,left:0,behavior:"smooth"})},children:"Home"})})}),Object(w.jsx)(_.a,{in:!0,timeout:{enter:1500},children:Object(w.jsx)(v.b,{className:"router-projects",to:"/projects",children:Object(w.jsx)(E.a,{disableRipple:!0,onClick:function(){window.scrollBy({top:-999,left:0,behavior:"smooth"})},children:"Projects"})})}),Object(w.jsx)(_.a,{in:!0,timeout:{enter:2e3},children:Object(w.jsx)(c.a,{className:"router-contact",children:Object(w.jsx)(E.a,{disableRipple:!0,onClick:function(){return window.scrollTo({top:999,left:0,behavior:"smooth"})},children:"Contact"})})})]}),Object(w.jsx)(B.a,{in:!0,timeout:{enter:1e3},children:Object(w.jsxs)(M.a,{className:"links-box",children:[Object(w.jsx)(Y.a,{children:Object(w.jsx)("a",{href:"https://wa.me/+5599982207527",rel:"noreferrer",target:"_blank",children:Object(w.jsx)(J.a,{className:"whatsapp-button",children:Object(w.jsx)(X.a,{})})})}),Object(w.jsx)(Y.a,{children:Object(w.jsx)("a",{href:"https://www.linkedin.com/in/pedro-henrique-dev1997/",rel:"noreferrer",target:"_blank",children:Object(w.jsx)(J.a,{className:"linkedin-button",children:Object(w.jsx)($.a,{})})})}),Object(w.jsx)(Y.a,{children:Object(w.jsx)("a",{href:"https://github.com/fobdev",rel:"noreferrer",target:"_blank",children:Object(w.jsx)(J.a,{className:"github-button",children:Object(w.jsx)(Z.a,{})})})})]})})]})]})})}var ne=i(109),se=i(115),re=i(112),oe=i.n(re);function ce(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),i=t[0],n=t[1];return window.onscroll=function(){document.documentElement.scrollTop>20?n(!0):n(!1)},Object(w.jsx)("div",{style:{display:"flex",position:"fixed",bottom:"0",left:"0",margin:"0 0 2em 2em"},children:Object(w.jsx)(_.a,{direction:"up",in:i,children:Object(w.jsx)(J.a,{onClick:function(){return window.scrollBy({top:-999,left:0,behavior:"smooth"})},sx:{},children:Object(w.jsx)(oe.a,{sx:{width:"2em",height:"2em"}})})})})}var le=i(18),me=i(204),ue=i(90),de={blue:"#4285F4",red:"#DB4437",yellow:"#F4B400",green:"#0F9D58"},pe={yellow:"#FFCA28",ember:"#FFA000",orange:"#F57C00"},be={indigo:"#211746",violet:"#430098",lavender:"#7673C0"},je=("linear-gradient(30deg,".concat(de.green," 20px, ").concat(de.blue," 20px, ").concat(de.blue," 40px, ").concat(de.red," 40px, ").concat(de.red," 60px, ").concat(de.yellow," 60px, ").concat(de.yellow," 80px, #fff 80px);"),"linear-gradient(30deg, ".concat(pe.orange," 10px, ").concat(pe.orange," 30px, ").concat(pe.ember," 30px, ").concat(pe.ember," 50px, ").concat(pe.yellow," 50px, ").concat(pe.yellow," 70px, #fff 70px);"),"linear-gradient(30deg, ".concat(be.indigo," 10px, ").concat(be.indigo," 30px, ").concat(be.lavender," 30px, ").concat(be.lavender," 50px, ").concat(be.violet," 50px, ").concat(be.violet," 70px, #fff 70px);"),{backgroundColor:"#eee",display:"flex",justifyContent:"center",alignContent:"center",padding:"2em 1em 2em 1em",".papers-title":{backgroundColor:"red",paddingBottom:"1em",fontWeight:"200",textAlign:"center"},".papers":{display:"flex",alignContent:"center",justifyContent:"center",".main-box":{display:"flex",flexDirection:"column",rowGap:"2em",".main-title-paper":{alignItems:"center",backgroundColor:"white",columnGap:"1em",".display-box":{display:"flex",alignItems:"center",justifyContent:"center",columnGap:"2em",padding:0,button:{border:0,background:"none",borderRadius:"1em",fontSize:"1em"},".techselector-paper":{transition:".33s",display:"flex",borderRadius:"1em",padding:".5em 1em .5em 1em",columnGap:"1em",cursor:"pointer",userSelect:"none","&:hover":{transition:".10s",backgroundColor:"#eef"},"&:active":{transition:".06s",boxShadow:"1px 1px 1px 1px rgba(0, 0, 0, .4)"}}},".main-title-box":{display:"flex",flexDirection:"column",transition:"all 0.3s",padding:"1em 4em 1em 4em",justifyContent:"left",columnGap:"2em",".main-title":{fontSize:"3em",alignSelf:"center",fontWeight:"200",color:"black"},".code-icon, .settings-icon":{fontSize:"3em",backgroundColor:"white",borderRadius:"5em"}}},".frontend-techbox, .backend-techbox":{display:"flex",alignItems:"center",justifyContent:"center",columnGap:"2em",padding:0,marginTop:"2em"}}}}),xe=i(113),ge=i.n(xe),he=i(114),fe=i.n(he),Oe=function(e){return{borderRadius:"1em",alignItems:"center",button:{transition:".5s",background:e?"#eef":"#fff",display:"flex",padding:".7em",columnGap:"1em",color:"inherit",border:"none",font:"inherit",cursor:"pointer",outline:"inherit",borderRadius:"1em"},"button:hover":{transition:".5s",background:"#eef"},".image":{width:"24px",height:"24px"},".MuiTypography-root":{alignSelf:"center",padding:0,fontWeight:"400"},userSelect:"none",cursor:"pointer","&:active":{transition:".06s",boxShadow:"1px 1px 1px 1px rgba(0, 0, 0, .4)"}}},ve=function(e){var t=e.image,i=e.title,a=e.onClick,n=e.selected;return Object(w.jsx)(N.a,{elevation:5,sx:Oe(n),children:Object(w.jsxs)(me.a,{disableRipple:!0,onClick:a,children:[Object(w.jsx)("img",{className:"image",src:t,alt:"Javascript"}),Object(w.jsx)(m.a,{className:"title",children:i})]})})},we=i.p+"static/media/typescript.7c2e5f59.svg",ye=i.p+"static/media/javascript.acc4642f.svg",ke=i.p+"static/media/React.116e502c.svg",qe=i.p+"static/media/MUI.741a52f5.svg",Se=i.p+"static/media/Sass.540ec25f.svg",Ne=i.p+"static/media/C++.2441702d.svg",Ce=i.p+"static/media/Postgres.29aef667.svg",Ie=i.p+"static/media/MySQL.e5a509a5.svg",Pe=i.p+"static/media/NodeJS.7ca28bcc.svg",Ae=i.p+"static/media/Discord.1a0c3dc4.svg",Re=i.p+"static/media/YouTube.350d8f8f.svg",Fe={display:"flex",flexDirection:"column",paddingBottom:"1em",".outside-paper":{position:"relative"},".outside-title":{display:"flex",columnGap:"1em",margin:"1em 0 1em 3em",maxWidth:"70vw",img:{width:"5em"}},".inside-paper":{padding:"1em",alignSelf:"center",margin:"0 1em 0 1em",maxWidth:"50vw"}},De=function(e){var t=e.children,i=e.title,a=e.image,n=e.growIn;return Object(w.jsx)(B.a,{in:n,timeout:{enter:500,exit:0},unmountOnExit:!0,mountOnEnter:!0,children:Object(w.jsx)(G.a,{children:Object(w.jsx)(N.a,{className:"outside-paper",elevation:2,children:Object(w.jsxs)(G.a,{sx:Fe,children:[Object(w.jsxs)(G.a,{className:"outside-title",children:[Object(w.jsx)("img",{src:a,alt:"Content"}),Object(w.jsx)(m.a,{variant:"h4",fontWeight:"300",alignSelf:"center",children:i})]}),Object(w.jsx)(N.a,{className:"inside-paper",elevation:5,children:t})]})})})})},Te=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"C/C++ Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam! Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem doloribus rem amet nobis impedit aliquid enim."})})},Ge=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"Discord.JS Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam! Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem doloribus rem amet nobis impedit aliquid enim."})})},Le=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"Javascript Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam! Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem doloribus rem amet nobis impedit aliquid enim."})})},We=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"Material UI Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam! Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem doloribus rem amet nobis impedit aliquid enim."})})},ze=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"MySQL Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam! Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem doloribus rem amet nobis impedit aliquid enim."})})},Be=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"Node.JS Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam! Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem doloribus rem amet nobis impedit aliquid enim."})})},Je=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"PostgreSQL Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"This page still under development, please check back later."})})},Me=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"React Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam! Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem doloribus rem amet nobis impedit aliquid enim."})})},_e=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"SASS Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam! Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem doloribus rem amet nobis impedit aliquid enim."})})},Ee=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"Typescript Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"This page still under development, please check back later."})})},Ye=function(e){var t=e.growIn,i=e.image;return Object(w.jsx)(De,{title:"Youtube API Projects",image:i,growIn:t,children:Object(w.jsx)(m.a,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio harum doloremque mollitia eius accusantium perspiciatis omnis saepe dicta itaque, velit dolorem accusamus, excepturi ratione facere pariatur laudantium molestias aspernatur veniam! Aspernatur sequi delectus itaque nesciunt quam debitis sint ullam explicabo, tenetur nemo ipsum eos molestiae consectetur perferendis, veritatis veniam ducimus, dolorum fugiat rerum sunt. Possimus corrupti deserunt cum, nam eveniet modi laboriosam temporibus eos assumenda quas reprehenderit molestiae pariatur, nesciunt vitae id obcaecati dolorem libero impedit aut. Nulla delectus iste praesentium error saepe recusandae beatae, ab distinctio sit provident molestias ea obcaecati quidem doloribus rem amet nobis impedit aliquid enim."})})};function He(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),i=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),c=r[0],l=r[1],u=Object(a.useState)({typescript:!0,javascript:!1,react:!1,mui:!1,sass:!1,cpp:!1,mysql:!1,postgres:!1,nodejs:!1,discord:!1,youtube:!1}),d=Object(o.a)(u,2),p=d[0],b=d[1],j=function(e){var t=p;t=Object(ue.mapValues)(t,(function(){return!1})),Object(ue.update)(t,e,(function(e){return!0})),b(t)},x=Object(a.useRef)(null),g=i?"#eef":"#fff",h=c?"#eef":"#fff",f=i?"1px 1px 1px 1px rgba(0, 0, 0, .4)":"3px 3px 3px 1px rgba(0, 0, 0, .4)",O=c?"1px 1px 1px 1px rgba(0, 0, 0, .4)":"3px 3px 3px 1px rgba(0, 0, 0, .4)";return Object(w.jsx)(G.a,{sx:je,children:Object(w.jsx)(G.a,{className:"papers",children:Object(w.jsxs)(G.a,{className:"main-box",children:[Object(w.jsx)(B.a,{in:!0,timeout:{enter:1e3},children:Object(w.jsx)(N.a,{className:"main-title-paper",elevation:3,children:Object(w.jsxs)(G.a,{className:"main-title-box",ref:x,overflow:"hidden",children:[Object(w.jsxs)(G.a,{className:"display-box",children:[Object(w.jsx)(me.a,{disableRipple:!0,onClick:function(){i||(j("typescript"),n(!0),l(!1))},children:Object(w.jsxs)(N.a,{elevation:3,className:"techselector-paper",sx:{background:g,".code-icon":{transition:".33s",boxShadow:f}},children:[Object(w.jsx)(ge.a,{className:"code-icon"}),Object(w.jsx)(m.a,{className:"main-title",variant:"h2",children:"Frontend"})]})}),Object(w.jsx)(me.a,{disableRipple:!0,onClick:function(){c||(j("postgres"),l(!0),n(!1))},children:Object(w.jsxs)(N.a,{elevation:3,className:"techselector-paper",sx:{background:h,".settings-icon":{transition:".33s",boxShadow:O}},children:[Object(w.jsx)(fe.a,{className:"settings-icon"}),Object(w.jsx)(m.a,{className:"main-title",variant:"h2",children:"Backend"})]})})]}),Object(w.jsx)(_.a,{in:i,direction:"up",timeout:{enter:500,exit:0},container:x.current,mountOnEnter:!0,unmountOnExit:!0,children:Object(w.jsxs)(G.a,{className:"frontend-techbox",children:[Object(w.jsx)(ve,{image:we,title:"Typescript",onClick:function(){return j("typescript")},selected:p.typescript}),Object(w.jsx)(ve,{image:ye,title:"JavaScript",selected:p.javascript}),Object(w.jsx)(ve,{image:ke,title:"React",selected:p.react}),Object(w.jsx)(ve,{image:qe,title:"MUI",selected:p.mui}),Object(w.jsx)(ve,{image:Se,title:"SASS",selected:p.sass})]})}),Object(w.jsx)(_.a,{in:c,direction:"up",timeout:{enter:500,exit:0},container:x.current,mountOnEnter:!0,unmountOnExit:!0,children:Object(w.jsxs)(G.a,{className:"backend-techbox",children:[Object(w.jsx)(ve,{image:Ce,title:"Postgres",selected:p.postgres}),Object(w.jsx)(ve,{image:Ne,title:"C/C++",selected:p.cpp}),Object(w.jsx)(ve,{image:Ie,title:"MySQL",selected:p.mysql}),Object(w.jsx)(ve,{image:Pe,title:"Node.JS",selected:p.nodejs}),Object(w.jsx)(ve,{image:Ae,title:"Discord.JS",selected:p.discord}),Object(w.jsx)(ve,{image:Re,title:"YouTube API",selected:p.youtube})]})})]})})}),Object(w.jsxs)(G.a,{className:"description-box",children:[Object(w.jsx)(Ee,{image:we,growIn:p.typescript}),Object(w.jsx)(Le,{image:ye,growIn:p.javascript}),Object(w.jsx)(Me,{image:ke,growIn:p.react}),Object(w.jsx)(We,{image:qe,growIn:p.mui}),Object(w.jsx)(_e,{image:Se,growIn:p.sass}),Object(w.jsx)(Je,{image:Ce,growIn:p.postgres}),Object(w.jsx)(Te,{image:Ne,growIn:p.cpp}),Object(w.jsx)(ze,{image:Ie,growIn:p.mysql}),Object(w.jsx)(Be,{image:Pe,growIn:p.nodejs}),Object(w.jsx)(Ge,{image:Ae,growIn:p.discord}),Object(w.jsx)(Ye,{image:Re,growIn:p.youtube})]})]})})})}var Qe={apiKey:"AIzaSyDy5OwVes7kWSPyYB0_9l100Rr0rmAkf2s",authDomain:"pedrodev-f4d57.firebaseapp.com",projectId:"pedrodev-f4d57",storageBucket:"pedrodev-f4d57.appspot.com",messagingSenderId:"2404850739",appId:"1:2404850739:web:6918f9470561a5b58c9746",measurementId:"G-3GYZLMB0BQ"};var Ve=function(){var e=Object(ne.a)(Qe);return Object(se.a)(e),Object(w.jsxs)(v.a,{children:[Object(w.jsx)(ae,{}),Object(w.jsxs)(le.c,{children:[Object(w.jsxs)(le.a,{exact:!0,path:"/",children:[Object(w.jsx)(y,{}),Object(w.jsx)(z,{})]}),Object(w.jsxs)(le.a,{exact:!0,path:"/projects",children:[Object(w.jsx)(He,{}),Object(w.jsx)(z,{})]}),Object(w.jsx)(le.a,{path:"*",children:Object(w.jsx)(m.a,{variant:"h3",fontWeight:"200",textAlign:"left",margin:"1em",children:"404 - Nothing to see here..."})})]}),Object(w.jsx)(ce,{})]})},$e=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,223)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(Ve,{})}),document.getElementById("root")),$e()}},[[150,1,2]]]);
//# sourceMappingURL=main.a035befb.chunk.js.map