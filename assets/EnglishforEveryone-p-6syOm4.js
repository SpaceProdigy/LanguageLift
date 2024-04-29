import{s as l,B as i,c as h,i as v,j as e,r as u,d as $,M as S,T as k,b as M}from"./index-Dz_bCseQ.js";import{B as _}from"./Button-ncLCGuHG.js";const O=l(i)`
  width: 100px;
  height: 133px;
  background-image: url(${({img:r})=>r});

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`,R=l(i)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position: relative;
  /* border: 1px solid ${({theme:r})=>r.palette.divider}; */
  /* width: 100%; */
  /* max-width: 400px; */
  border-radius: 10px;
`,N=l(i)`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;var b={},F=v;Object.defineProperty(b,"__esModule",{value:!0});var L=b.default=void 0,T=F(h()),A=e;L=b.default=(0,T.default)((0,A.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");var j={},W=v;Object.defineProperty(j,"__esModule",{value:!0});var C=j.default=void 0,U=W(h()),X=e;C=j.default=(0,U.default)((0,X.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5.5h1v-3h-1z"}),"PictureAsPdf");const q=l(i)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:r})=>r.palette.background.paper};
  /* box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75); */
  padding: 50px;
  border-radius: 5px;
`,J=l("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,K=l(i)`
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
  animation: ${({error:r})=>r?"shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both":""};
  animation: ${({success:r})=>r?"shake-vertical 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both":""};
`,Y=l(i)`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({borderColor:r})=>r};

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

  animation: ${({tab:r})=>r?"vibrate-1 0.3s linear both":""};
`,Z=()=>{const[r,f]=u.useState(!1),[x,c]=u.useState(null),a=u.useRef({1:"",2:"",3:"",4:""}),[p,m]=u.useState({1:"",2:"",3:"",4:""}),o=Object.values(p).join(""),d="1234",g=$(),B=()=>f(!0),z=()=>f(!1);u.useEffect(()=>{o.length===4&&a.current[x].blur()},[x,o.length]);const D=(t,n)=>{const s=t.target.value,P=s.replace(/\D/g,"");if(m(()=>({...p,[t.target.id]:P.slice(0,1)})),!isNaN(s)&&s!==""){if(n===4){a.current[1].focus();return}a.current[n+1].focus()}},I=(t,n)=>{if(t.keyCode===39){if(n===4)return a.current[1].focus();a.current[n+1].focus()}if(t.keyCode===37){if(n===1)return a.current[4].focus();a.current[n-1].focus(),a.current[n-1]}if(t.keyCode===8){if(o.length===0&&a.current[n].blur(),t.preventDefault(),n===1){m(s=>({...s,[n]:""})),a.current[4].focus();return}a.current[n-1].focus(),m(s=>({...s,[n]:""}))}},V=t=>o===d?g.palette.success.main:o.length===4&&d!==o?g.palette.error.main:p[t]?g.palette.info.main:g.palette.text.primary;return e.jsxs(e.Fragment,{children:[e.jsx(_,{onClick:B,children:"Open modal"}),e.jsx(S,{open:r,onClose:z,children:e.jsx(q,{children:e.jsxs(i,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(k,{variant:"subtitle2",children:"Enter password"}),e.jsx(i,{sx:{position:"relative",width:200,height:50},children:e.jsx(K,{error:o.length===4&&d!==o?"+":"",success:d===o?"+":"",children:[1,2,3,4].map((t,n)=>e.jsx(Y,{tab:Number(t)<=Number(p[t])?"+":"",borderColor:V(t),children:e.jsx(J,{ref:s=>{a.current[t]=s},id:t,onChange:s=>D(s,t),value:p[t],autoComplete:"off",onKeyDown:s=>I(s,t),onFocus:()=>c(t)})},n))})}),e.jsx(k,{variant:"caption",children:o.length===4&&d!==o?"Password incorect, try again":"Succsses"})]})})})]})},G="/LanguageLift/assets/level1course-G3gVfnSN.jpg",Q="/LanguageLift/assets/level1practice-B5J6Ocoh.jpg",ee="/LanguageLift/assets/course2-DSHxMhx-.jpg",re="/LanguageLift/assets/practice2-DdYZKi8g.jpg",te="/LanguageLift/assets/course3-Z1xcun6O.jpg",ne="/LanguageLift/assets/practice3-B9aIXM-B.jpg",ae="/LanguageLift/assets/course4-DHSUDOv1.jpg",se="/LanguageLift/assets/practice4-CClzIK9P.jpg",oe="/LanguageLift/assets/audio-DElmfsmO.jpg",ie=[{name:{en:"English For Everyone Course Book Level 1 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 1, початківець"},img:G,link:"https://drive.google.com/file/d/1tldpBFFFsBmUVit-S78tdWgzmfn5vR4i/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book level 1 Beginner",ua:"Книга практики «Англійська для всіх», рівень 1, початківець"},img:Q,link:"https://drive.google.com/file/d/1DcHGrud-ulHNY27IPkBXndwwZuCrGNUD/view?usp=drive_link"},{name:{en:"English for Everyone Course-Book Level 2 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 2, початківець"},img:ee,link:"https://drive.google.com/file/d/1YjWihJd4v2iITQjLi0USL3fmTCkAbZmJ/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 2 Beginner ",ua:"Книга практики «Англійська для всіх», рівень 2, початківець"},img:re,link:"https://drive.google.com/file/d/1kOnQorTUJjK8xoGTIfZy__U2RGrdTnT-/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 3 Intermediate",ua:"Підручник з курсу «Англійська для всіх» рівень 3, середній"},img:te,link:"https://drive.google.com/file/d/1fDE_AuLhuX3gVf9Ua2C6JFwJIM01CVCp/view?usp=drive_link"},{name:{en:"English for Everyone Practice-Book Level 3 Intermediate ",ua:"Книга практики «Англійська для всіх», рівень 3, середній"},img:ne,link:"https://drive.google.com/file/d/1KT9UJBtEZ3Pw8SPuF4JSqzsfmbKRyOAT/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 4 Advanced",ua:"Підручник з курсу «Англійська для всіх» рівень 4, просунутий"},img:ae,link:"https://drive.google.com/file/d/1jNw-WVcCfkxhnpwN1qoxzxkWZ7dpygkS/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 4 Advanced",ua:"Книга практики «Англійська для всіх», рівень 4, просунутий"},img:se,link:"https://drive.google.com/file/d/1BCX7RosC9cAt-lxOuPUWZr1toG95uF6k/view?usp=drive_link"},{name:{en:"Audio materials for listening can be found here",ua:"Аудіоматеріали для прослуховування можливо знайти тут"},img:oe,link:"https://www.dkefe.com/en/audio"}];var w={},le=v;Object.defineProperty(w,"__esModule",{value:!0});var E=w.default=void 0,ce=le(h()),ue=e;E=w.default=(0,ce.default)((0,ue.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link");var y={},pe=v;Object.defineProperty(y,"__esModule",{value:!0});var H=y.default=void 0,de=pe(h()),fe=e;H=y.default=(0,de.default)((0,fe.jsx)("path",{d:"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5zm2.5-.5h1.5V15H10v-4.5h1.5V9H7zm5.5 0H14V15h1.5v-4.5H17V9h-4.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5m0 2.5h-2v-1h2z"}),"Http");const he=()=>{const{language:r}=u.useContext(M);return e.jsxs(N,{children:[e.jsx(Z,{}),ie.map(({name:f,link:x,img:c},a)=>e.jsxs(R,{children:[e.jsx(i,{children:e.jsx(O,{img:c})}),e.jsxs(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,width:200},children:[e.jsx(k,{variant:"subtitle2",textAlign:"center",children:f[r]}),e.jsx("a",{href:x,download:!0,target:"_blank",rel:"noopener noreferrer",children:e.jsx(_,{variant:"contained",size:"small",startIcon:c.includes("audio")?e.jsx(H,{}):e.jsx(C,{}),endIcon:c.includes("audio")?e.jsx(E,{}):e.jsx(L,{}),children:c.includes("audio")?r==="en"?"Link":"Посилання":r==="en"?"DownLoad":"Завантажити"})})]})]},a))]})};export{he as default};
