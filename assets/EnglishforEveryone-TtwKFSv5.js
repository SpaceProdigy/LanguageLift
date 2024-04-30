import{s as c,B as i,c as x,i as v,j as e,N as F,r as l,d as N,b as I,e as T,M as A,I as W,T as w,m as q}from"./index-BhYU50di.js";import{F as U,I as X,O as Y,a as J}from"./OutlinedInput-CeLn9MZ3.js";import{B as K}from"./Button-C1_JSAt6.js";const Z=c(i)`
  width: 100px;
  height: 133px;
  background-image: url(${({img:t})=>t});

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`,G=c(i)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position: relative;
  /* border: 1px solid ${({theme:t})=>t.palette.divider}; */
  /* width: 100%; */
  /* max-width: 400px; */
  border-radius: 10px;
`,Q=c(i)`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;var y={},ee=v;Object.defineProperty(y,"__esModule",{value:!0});var B=y.default=void 0,te=ee(x()),re=e;B=y.default=(0,te.default)((0,re.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");var L={},ae=v;Object.defineProperty(L,"__esModule",{value:!0});var H=L.default=void 0,ne=ae(x()),se=e;H=L.default=(0,ne.default)((0,se.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5.5h1v-3h-1z"}),"PictureAsPdf");var _={},oe=v;Object.defineProperty(_,"__esModule",{value:!0});var S=_.default=void 0,ie=oe(x()),le=e;S=_.default=(0,ie.default)((0,le.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");const ce=c(i)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:t})=>t.palette.background.paper};
  box-shadow: ${({theme:t})=>t.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,ue=c(F)`
  color: transparent;
  text-decoration: none;
`,de=c(i)`
  position: absolute;
  left: 15px;
  top: 15px;
`,pe=c("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,fe=c(i)`
  position: absolute;
  display: flex;
  gap: 16px;
  top: 5px;
  left: -5px;

  @keyframes shake-horizontal {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
  }

  @keyframes shake-vertical {
    0%,
    100% {
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
      transform: translateY(8px);
    }
    80% {
      transform: translateY(6.4px);
    }
    90% {
      transform: translateY(-6.4px);
    }
  }
  animation: ${({error:t})=>t?"shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both":""};
  animation: ${({success:t})=>t?"shake-vertical 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both":""};
`,he=c(i)`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({borderColor:t})=>t};

  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  animation: ${({tab:t})=>t?"vibrate-1 0.3s linear both":""};
`,xe=()=>{const[t,k]=l.useState(!sessionStorage.getItem("English-For-Everyone")),[u,j]=l.useState(null),r=l.useRef({1:"",2:"",3:"",4:""}),[p,d]=l.useState({1:"",2:"",3:"",4:""}),o=Object.values(p).join(""),g="1234",f=N(),{language:b}=l.useContext(I),D=()=>k(!1),m=o.length===4&&g!==o,h=g===o,{state:V}=T();l.useEffect(()=>{h&&(sessionStorage.setItem("English-For-Everyone","access"),setTimeout(()=>{D()},500))},[h]),l.useEffect(()=>{o.length===4&&r.current[u].blur()},[u,o.length]);const P=(a,n)=>{const s=a.target.value,O=s.replace(/\D/g,"");if(d(()=>({...p,[a.target.id]:O.slice(0,1)})),!isNaN(s)&&s!==""){if(n===4){r.current[1].focus();return}r.current[n+1].focus()}},M=(a,n)=>{if(a.keyCode===39){if(n===4)return r.current[1].focus();r.current[n+1].focus()}if(a.keyCode===37){if(n===1)return r.current[4].focus();r.current[n-1].focus(),r.current[n-1]}if(a.keyCode===8){if(o.length===0&&r.current[n].blur(),a.preventDefault(),n===1){d(s=>({...s,[n]:""})),r.current[4].focus();return}r.current[n-1].focus(),d(s=>({...s,[n]:""}))}},R=a=>o===g?f.palette.success.main:o.length===4&&g!==o?f.palette.error.main:p[a]?f.palette.info.main:f.palette.text.primary;return e.jsx(e.Fragment,{children:e.jsx(A,{open:t,children:e.jsxs(ce,{children:[e.jsx(de,{children:e.jsx(ue,{to:V,children:e.jsx(W,{children:e.jsx(S,{})})})}),e.jsxs(i,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(w,{variant:"subtitle2",children:b==="en"?"Enter password":"Введіть пароль"}),e.jsx(i,{sx:{position:"relative",width:200,height:50},children:e.jsx(fe,{error:m?"+":"",success:h?"+":"",children:[1,2,3,4].map((a,n)=>e.jsx(he,{tab:Number(a)<=Number(p[a])?"+":"",borderColor:R(a),children:e.jsx(pe,{ref:s=>{r.current[a]=s},id:a,onChange:s=>P(s,a),value:p[a],autoComplete:"off",onKeyDown:s=>M(s,a),onFocus:()=>j(a),type:"tel"})},n))})}),e.jsx(q.div,{animate:{opacity:m||h?1:0},transition:{duration:.5},style:{height:50},children:e.jsxs(w,{variant:"caption",textAlign:"center",color:m?f.palette.error.main:f.palette.success.main,children:[m&&(b==="en"?"The password is incorrect, please try again":"Пароль невірний, спробуйте ще раз"),h&&(b==="en"?"Success":"Yспіх")]})})]})]})})})},ve="/LanguageLift/assets/level1course-G3gVfnSN.jpg",ge="/LanguageLift/assets/level1practice-B5J6Ocoh.jpg",me="/LanguageLift/assets/course2-DSHxMhx-.jpg",ke="/LanguageLift/assets/practice2-DdYZKi8g.jpg",je="/LanguageLift/assets/course3-Z1xcun6O.jpg",be="/LanguageLift/assets/practice3-B9aIXM-B.jpg",we="/LanguageLift/assets/course4-DHSUDOv1.jpg",ye="/LanguageLift/assets/practice4-CClzIK9P.jpg",Le="/LanguageLift/assets/audio-DElmfsmO.jpg",_e=[{name:{en:"English For Everyone Course Book Level 1 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 1, початківець"},img:ve,link:"https://drive.google.com/file/d/1tldpBFFFsBmUVit-S78tdWgzmfn5vR4i/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book level 1 Beginner",ua:"Книга практики «Англійська для всіх», рівень 1, початківець"},img:ge,link:"https://drive.google.com/file/d/1DcHGrud-ulHNY27IPkBXndwwZuCrGNUD/view?usp=drive_link"},{name:{en:"English for Everyone Course-Book Level 2 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 2, початківець"},img:me,link:"https://drive.google.com/file/d/1YjWihJd4v2iITQjLi0USL3fmTCkAbZmJ/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 2 Beginner ",ua:"Книга практики «Англійська для всіх», рівень 2, початківець"},img:ke,link:"https://drive.google.com/file/d/1kOnQorTUJjK8xoGTIfZy__U2RGrdTnT-/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 3 Intermediate",ua:"Підручник з курсу «Англійська для всіх» рівень 3, середній"},img:je,link:"https://drive.google.com/file/d/1fDE_AuLhuX3gVf9Ua2C6JFwJIM01CVCp/view?usp=drive_link"},{name:{en:"English for Everyone Practice-Book Level 3 Intermediate ",ua:"Книга практики «Англійська для всіх», рівень 3, середній"},img:be,link:"https://drive.google.com/file/d/1KT9UJBtEZ3Pw8SPuF4JSqzsfmbKRyOAT/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 4 Advanced",ua:"Підручник з курсу «Англійська для всіх» рівень 4, просунутий"},img:we,link:"https://drive.google.com/file/d/1jNw-WVcCfkxhnpwN1qoxzxkWZ7dpygkS/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 4 Advanced",ua:"Книга практики «Англійська для всіх», рівень 4, просунутий"},img:ye,link:"https://drive.google.com/file/d/1BCX7RosC9cAt-lxOuPUWZr1toG95uF6k/view?usp=drive_link"},{name:{en:"Audio materials for listening can be found here",ua:"Аудіоматеріали для прослуховування можливо знайти тут"},img:Le,link:"https://www.dkefe.com/en/audio"}];var C={},Ce=v;Object.defineProperty(C,"__esModule",{value:!0});var z=C.default=void 0,Ee=Ce(x()),Ie=e;z=C.default=(0,Ee.default)((0,Ie.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link");var E={},Be=v;Object.defineProperty(E,"__esModule",{value:!0});var $=E.default=void 0,He=Be(x()),Se=e;$=E.default=(0,He.default)((0,Se.jsx)("path",{d:"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5zm2.5-.5h1.5V15H10v-4.5h1.5V9H7zm5.5 0H14V15h1.5v-4.5H17V9h-4.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5m0 2.5h-2v-1h2z"}),"Http");const Ve=()=>{const[t,k]=l.useState(""),{language:u}=l.useContext(I),j=_e.filter(({name:r})=>(r.en.toLocaleLowerCase().includes(t.toLocaleLowerCase().trim()),r.ua.toLocaleLowerCase().includes(t.toLocaleLowerCase().trim())));return e.jsxs(Q,{children:[e.jsx(xe,{}),e.jsxs(U,{children:[e.jsx(X,{size:"small",children:u==="en"?"Search":"Пошук"}),e.jsx(Y,{label:"Search",size:"small",onChange:r=>k(r.target.value),value:t}),e.jsx(J,{sx:{height:20},children:u==="ua"?"Нічого не знайдено":"Nothing found"})]}),j.map(({name:r,link:p,img:d},o)=>e.jsxs(G,{children:[e.jsx(i,{children:e.jsx(Z,{img:d})}),e.jsxs(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,width:200},children:[e.jsx(w,{variant:"subtitle2",textAlign:"center",children:r[u]}),e.jsx("a",{href:p,download:!0,target:"_blank",rel:"noopener noreferrer",children:e.jsx(K,{variant:"contained",size:"small",startIcon:d.includes("audio")?e.jsx($,{}):e.jsx(H,{}),endIcon:d.includes("audio")?e.jsx(z,{}):e.jsx(B,{}),children:d.includes("audio")?u==="en"?"Link":"Посилання":u==="en"?"DownLoad":"Завантажити"})})]})]},o))]})};export{Ve as default};
