(this.webpackJsonptandem_quiz_app=this.webpackJsonptandem_quiz_app||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),i=r.n(c),a=r(6),o=r.n(a),s=(r(14),r(8)),l=r(2),u=r(7),h=function(e){var t=e.slice(0);return t.forEach((function(r,n){var c=n+Math.floor(Math.random()*e.length-n),i=t[n];t[n]=t[c],t[c]=i})),t},d=function(e){var t=e.question,r=e.questionIdx,i=e.score,a=e.handleSubmit,o=e.ans,s=Object(c.useState)(o),u=Object(l.a)(s,2),h=u[0],d=(u[1],Object(c.useState)(0)),b=Object(l.a)(d,2),j=b[0],m=b[1],O=Object(c.useState)(t.correct),p=Object(l.a)(O,2),f=p[0],x=(p[1],Object(c.useState)("")),g=Object(l.a)(x,2),y=g[0],w=g[1],v=Object(c.useState)(!1),k=Object(l.a)(v,2),q=k[0],S=k[1],W=Object(c.useRef)(),N=Object(c.useRef)(),T=Object(c.useRef)(),C=Object(c.useRef)(),P=[W,N,T,C];return Object(n.jsxs)("div",{className:q?"questions-container fade-out":"questions-container fade-in",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:["Question ",r+1,":"]}),Object(n.jsx)("h3",{children:t.question})]}),Object(n.jsx)("div",{className:"answer-container",children:h.map((function(e,t){return Object(n.jsx)("div",{id:t+1===j?"selected":"",className:"answer",onClick:function(){m(t+1),w(e)},ref:P[t],children:e})}))}),Object(n.jsx)("p",{id:q?"hide":"",className:"submit-btn",onClick:function(){a(f,y),""!==y.trim()&&(W.current.innerText===f?W.current.style.backgroundColor="green":(W.current.innerText===y&&W.current.innerText!==f||(W.current.style.backgroundColor="red"),W.current.style.opacity=.5),N.current.innerText===f?N.current.style.backgroundColor="green":(N.current.innerText===y&&N.current.innerText!==f||(N.current.style.backgroundColor="red"),N.current.style.opacity=.5),T.current.innerText===f?T.current.style.backgroundColor="green":(T.current.innerText===y&&T.current.innerText!==f||(T.current.style.backgroundColor="red"),T.current.style.opacity=.5),C.current.innerText===f?C.current.style.backgroundColor="green":(C.current.innerText===y&&C.current.innerText!==f||(C.current.style.backgroundColor="red"),C.current.style.opacity=.5),S(!0),setTimeout((function(){return S(!1)}),3e3))},children:"Submit"}),Object(n.jsxs)("p",{id:q?"":"hide",className:"score",children:["Current Score: ",i]})]})},b=function(){return Object(n.jsxs)("div",{className:"splash-footer",children:[Object(n.jsx)("p",{children:"Created by: Eric Chen"}),Object(n.jsxs)("div",{className:"footer-links",children:[Object(n.jsx)("a",{href:"https://github.com/echen831",target:"_blank",children:"Github"}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/eric-chen-782b951a9/",target:"_blank",children:"LinkedIn"}),Object(n.jsx)("a",{href:"https://echen831.github.io/Eric-Chen/",target:"_blank",children:"Portfolio"})]})]})},j=function(){var e=Object(c.useState)(h(u).slice(0,10)),t=Object(l.a)(e,2),r=t[0],i=(t[1],Object(c.useState)(0)),a=Object(l.a)(i,2),o=a[0],j=a[1],m=Object(c.useState)(0),O=Object(l.a)(m,2),p=O[0],f=O[1],x=function(e,t){0!==t.trim().length&&(e===t&&f(p+10),setTimeout((function(){return j(o+1)}),1e3))};return Object(n.jsxs)("div",{className:"game-container",children:[Object(n.jsx)("div",{children:r.map((function(e,t){return Object(n.jsx)("div",{id:o!==t?"hide":"",children:Object(n.jsx)(d,{questionIdx:t,ans:h([].concat(Object(s.a)(e.incorrect),[e.correct])),score:p,question:e,handleSubmit:x},t)})}))}),Object(n.jsx)(b,{}),Object(n.jsxs)("div",{className:"fade-in end-game",id:10===o?"":"hide",children:[Object(n.jsxs)("div",{className:"end-container",children:[Object(n.jsx)("h2",{children:"Thank you for playing!"}),Object(n.jsxs)("p",{children:["Your Score is: ",p]}),Object(n.jsx)("p",{children:function(e){return 100===e?"You have a perfect score!":e>=80?"What an amazing score!":e>=60?"A couple hicups, but still an honorable score!":e>=40?"Maybe try a little harder next time?":e>=20?"Were you even trying?":"Please press the refresh button and try again!"}(p)}),Object(n.jsx)("p",{className:"submit-btn",onClick:function(){return window.location.reload(),!1},children:"Play Again"})]}),Object(n.jsx)("div",{className:"end-img-container",children:Object(n.jsx)("img",{src:"https://i.pinimg.com/originals/e5/94/e7/e594e7a30ba52cae164bf95aa6a8651b.gif",alt:""})})]})]})},m=r.p+"static/media/intro.c087cafa.gif",O=["You will get 10 random multiple choice trivia questions.","Select the best answer out of 4 choices.","Press submit when you are ready.","You will see the correct answer after you submit.","See how many can you answer correctly!"],p=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),r=t[0],i=t[1],a=Object(c.useState)(0),o=Object(l.a)(a,2),s=o[0],u=o[1];Object(c.useEffect)((function(){setTimeout(h,2500)}));var h=function(){u(4===s?0:s+1)};return Object(n.jsx)("div",{className:r?"splash-container":"hide",children:Object(n.jsxs)("div",{className:"splash",children:[Object(n.jsxs)("div",{className:"splash-header",children:[Object(n.jsx)("h1",{children:"Lets Play Tandem Trivia!"}),Object(n.jsx)("div",{className:"close-btn-container",children:Object(n.jsx)("p",{className:"close-btn",onClick:function(){return i(!1)},children:"\xd7"})})]}),Object(n.jsxs)("div",{className:"instruction-container",children:[Object(n.jsxs)("div",{className:"instructions",children:[Object(n.jsx)("h3",{children:"Instructions: "}),Object(n.jsx)("ul",{children:O.map((function(e,t){return Object(n.jsx)("p",{id:s===t?"current":"",children:"".concat(t+1,") ").concat(e)})}))}),Object(n.jsx)("p",{className:"submit-btn",onClick:function(){return i(!1)},children:"Play Now!"})]}),Object(n.jsx)("div",{className:"intro",children:Object(n.jsx)("img",{src:m,alt:""})})]}),Object(n.jsx)(b,{})]})})};var f=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(p,{}),Object(n.jsx)("h1",{children:"Welcome to Tandem Trivia"}),Object(n.jsx)(j,{})]})};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"question":"What was Tandem previous name?","incorrect":["Tandem","Burger Shack","Extraordinary Humans"],"correct":"Devmynd"},{"question":"In Shakespeare\'s play Julius Caesar, Caesar\'s last words were...","incorrect":["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],"correct":"Et tu, Brute?"},{"question":"A group of tigers are referred to as:","incorrect":["Chowder","Pride","Destruction"],"correct":"Ambush"},{"question":"What is the top speed an average cat can travel?","incorrect":["42 mph","13 mph","9 mph"],"correct":"31 mph"},{"question":"A cat can jump to _____ times its own height:","incorrect":["3","9","7"],"correct":"5"},{"question":"What is the only letter that doesn\'t appear in a US state name?","incorrect":["M","Z","X"],"correct":"Q"},{"question":"What is the name for a cow-bison hybrid?","incorrect":["Cowson","Bicow","Mooson"],"correct":"Beefalo"},{"question":"What is the largest freshwater lake in the world?","incorrect":["Lake Baikal","Lake Michigan","Lake Victoria"],"correct":"Lake Superior"},{"question":"In a website address bar, what does WWW stand for?","incorrect":["Wild Wild West","War World Web","Work WOrk WORK"],"correct":"World Wide Web"},{"question":"In a game of bingo, what number is represented by the name two little ducks?","incorrect":["20","55","77"],"correct":"22"},{"question":"According to Greek mythology, who was the first woman on Earth?","incorrect":["Lilith","Eve","Hera"],"correct":"Pandora"},{"question":"In which European city would you find Orly airport?","incorrect":["London","Belgium","Munich"],"correct":"Paris"},{"question":"Where would you find the Sea of Tranquility?","incorrect":["California","Siberia","China"],"correct":"The Moon"},{"question":"Which artist painted \'Girl with a Pearl Earrin\'?","incorrect":["Van Gogh","Picasso","Da Vinci"],"correct":"Vermeer"},{"question":"What is the official name for the \'hashtag\' symbol?","incorrect":["Number sign","Hash Sign","Pound"],"correct":"Octothorpe"},{"question":"Not American at all, where is apple pie from?","incorrect":["Japan","Ethiopia","Canada"],"correct":"England"},{"question":"What is the national animal of Scotland?","incorrect":["Bear","Rabbit","Seal"],"correct":"Unicorn"},{"question":"Where in the world is the only place where Canada is *due south*","incorrect":["Alaska","Russia","Washington"],"correct":"Detroit"},{"question":"Approximately how many grapes go into a bottle of wine?","incorrect":["500","200","1000"],"correct":"700"},{"question":"How much does a US One Dollar Bill cost to make?","incorrect":["$0.25","$1","$5"],"correct":"$0.05"},{"question":"The Vatican bank has the only ATM in the world that allows users to do what?","incorrect":["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],"correct":"Perform transactions in Latin"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.16515f0d.chunk.js.map