import{r as s,u as O,f as J,M as Z,j as e,b as G,c as Q,L as ee,s as j,B as g,d as _,i as R,N as te,e as re,a as T,g as ne,h as se,I as oe,T as M,m as N}from"./index-DVY_1ra-.js";import{F as ae,I as ie,O as le,a as ce}from"./OutlinedInput-9hGdSsS3.js";import{B as ue}from"./Button-DsDnetGg.js";function W(){const t=s.useRef(!1);return O(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function de(){const t=W(),[u,n]=s.useState(0),a=s.useCallback(()=>{t.current&&n(u+1)},[u]);return[s.useCallback(()=>J.postRender(a),[a]),u]}class pe extends s.Component{getSnapshotBeforeUpdate(u){const n=this.props.childRef.current;if(n&&u.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function fe({children:t,isPresent:u}){const n=s.useId(),a=s.useRef(null),l=s.useRef({width:0,height:0,top:0,left:0}),{nonce:f}=s.useContext(Z);return s.useInsertionEffect(()=>{const{width:d,height:c,top:v,left:x}=l.current;if(u||!a.current||!d||!c)return;a.current.dataset.motionPopId=n;const i=document.createElement("style");return f&&(i.nonce=f),document.head.appendChild(i),i.sheet&&i.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${c}px !important;
            top: ${v}px !important;
            left: ${x}px !important;
          }
        `),()=>{document.head.removeChild(i)}},[u]),e.jsx(pe,{isPresent:u,childRef:a,sizeRef:l,children:s.cloneElement(t,{ref:a})})}const L=({children:t,initial:u,isPresent:n,onExitComplete:a,custom:l,presenceAffectsLayout:f,mode:d})=>{const c=G(he),v=s.useId(),x=s.useMemo(()=>({id:v,initial:u,isPresent:n,custom:l,onExitComplete:i=>{c.set(i,!0);for(const h of c.values())if(!h)return;a&&a()},register:i=>(c.set(i,!1),()=>c.delete(i))}),f?[Math.random()]:[n]);return s.useMemo(()=>{c.forEach((i,h)=>c.set(h,!1))},[n]),s.useEffect(()=>{!n&&!c.size&&a&&a()},[n]),d==="popLayout"&&(t=e.jsx(fe,{isPresent:n,children:t})),e.jsx(Q.Provider,{value:x,children:t})};function he(){return new Map}function xe(t){return s.useEffect(()=>()=>t(),[])}const y=t=>t.key||"";function ge(t,u){t.forEach(n=>{const a=y(n);u.set(a,n)})}function me(t){const u=[];return s.Children.forEach(t,n=>{s.isValidElement(n)&&u.push(n)}),u}const ve=({children:t,custom:u,initial:n=!0,onExitComplete:a,exitBeforeEnter:l,presenceAffectsLayout:f=!0,mode:d="sync"})=>{const c=s.useContext(ee).forceRender||de()[0],v=W(),x=me(t);let i=x;const h=s.useRef(new Map).current,k=s.useRef(i),m=s.useRef(new Map).current,w=s.useRef(!0);if(O(()=>{w.current=!1,ge(x,m),k.current=i}),xe(()=>{w.current=!0,m.clear(),h.clear()}),w.current)return e.jsx(e.Fragment,{children:i.map(r=>e.jsx(L,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:f,mode:d,children:r},y(r)))});i=[...i];const b=k.current.map(y),C=x.map(y),z=b.length;for(let r=0;r<z;r++){const o=b[r];C.indexOf(o)===-1&&!h.has(o)&&h.set(o,void 0)}return d==="wait"&&h.size&&(i=[]),h.forEach((r,o)=>{if(C.indexOf(o)!==-1)return;const p=m.get(o);if(!p)return;const B=b.indexOf(o);let I=r;if(!I){const Y=()=>{h.delete(o);const F=Array.from(m.keys()).filter(E=>!C.includes(E));if(F.forEach(E=>m.delete(E)),k.current=x.filter(E=>{const V=y(E);return V===o||F.includes(V)}),!h.size){if(v.current===!1)return;c(),a&&a()}};I=e.jsx(L,{isPresent:!1,onExitComplete:Y,custom:u,presenceAffectsLayout:f,mode:d,children:p},y(p)),h.set(o,I)}i.splice(B,0,I)}),i=i.map(r=>{const o=r.key;return h.has(o)?r:e.jsx(L,{isPresent:!0,presenceAffectsLayout:f,mode:d,children:r},y(r))}),e.jsx(e.Fragment,{children:h.size?i:i.map(r=>s.cloneElement(r))})},je=j(g)`
  width: 100px;
  height: 133px;
  background-image: url(${({img:t})=>t});

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`,ke=j(g)`
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
`,ye=j(g)`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;var H={},we=R;Object.defineProperty(H,"__esModule",{value:!0});var A=H.default=void 0,be=we(_()),Ce=e;A=H.default=(0,be.default)((0,Ce.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");var S={},Ee=R;Object.defineProperty(S,"__esModule",{value:!0});var K=S.default=void 0,_e=Ee(_()),Re=e;K=S.default=(0,_e.default)((0,Re.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5.5h1v-3h-1z"}),"PictureAsPdf");var $={},Ie=R;Object.defineProperty($,"__esModule",{value:!0});var U=$.default=void 0,ze=Ie(_()),Be=e;U=$.default=(0,ze.default)((0,Be.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");const Le=j(g)`
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
`,Me=j(te)`
  color: transparent;
  text-decoration: none;
`,He=j(g)`
  position: absolute;
  left: 15px;
  top: 15px;
`,Se=j("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,$e=j(g)`
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
`,Pe=j(g)`
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
`,De=()=>{const[t,u]=s.useState(!sessionStorage.getItem("English-For-Everyone")),[n,a]=s.useState(null),l=s.useRef({1:"",2:"",3:"",4:""}),[f,d]=s.useState({1:"",2:"",3:"",4:""}),c=Object.values(f).join(""),v="1234",x=re(),{language:i}=s.useContext(T),h=()=>u(!1),k=c.length===4&&v!==c,m=v===c,{state:w}=ne();s.useEffect(()=>{m&&(sessionStorage.setItem("English-For-Everyone","access"),setTimeout(()=>{h()},500))},[m]),s.useEffect(()=>{c.length===4&&l.current[n].blur()},[n,c.length]);const b=(r,o)=>{const p=r.target.value,B=p.replace(/\D/g,"");if(d(()=>({...f,[r.target.id]:B.slice(0,1)})),!isNaN(p)&&p!==""){if(o===4){l.current[1].focus();return}l.current[o+1].focus()}},C=(r,o)=>{if(r.keyCode===39){if(o===4)return l.current[1].focus();l.current[o+1].focus()}if(r.keyCode===37){if(o===1)return l.current[4].focus();l.current[o-1].focus(),l.current[o-1]}if(r.keyCode===8){if(c.length===0&&l.current[o].blur(),r.preventDefault(),o===1){d(p=>({...p,[o]:""})),l.current[4].focus();return}l.current[o-1].focus(),d(p=>({...p,[o]:""}))}},z=r=>c===v?x.palette.success.main:c.length===4&&v!==c?x.palette.error.main:f[r]?x.palette.info.main:x.palette.text.primary;return e.jsx(e.Fragment,{children:e.jsx(se,{open:t,children:e.jsxs(Le,{children:[e.jsx(He,{children:e.jsx(Me,{to:w,children:e.jsx(oe,{children:e.jsx(U,{})})})}),e.jsxs(g,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(M,{variant:"subtitle2",children:i==="en"?"Enter password":"Введіть пароль"}),e.jsx(g,{sx:{position:"relative",width:200,height:50},children:e.jsx($e,{error:k?"+":"",success:m?"+":"",children:[1,2,3,4].map((r,o)=>e.jsx(Pe,{tab:Number(r)<=Number(f[r])?"+":"",borderColor:z(r),children:e.jsx(Se,{ref:p=>{l.current[r]=p},id:r,onChange:p=>b(p,r),value:f[r],autoComplete:"off",onKeyDown:p=>C(p,r),onFocus:()=>a(r),type:"tel"})},o))})}),e.jsx(N.div,{animate:{opacity:k||m?1:0},transition:{duration:.5},style:{height:50},children:e.jsxs(M,{variant:"caption",textAlign:"center",color:k?x.palette.error.main:x.palette.success.main,children:[k&&(i==="en"?"The password is incorrect, please try again":"Пароль невірний, спробуйте ще раз"),m&&(i==="en"?"Success":"Yспіх")]})})]})]})})})},Fe="/languagelift/assets/level1course-G3gVfnSN.jpg",Ve="/languagelift/assets/level1practice-B5J6Ocoh.jpg",Oe="/languagelift/assets/course2-DSHxMhx-.jpg",Te="/languagelift/assets/practice2-DdYZKi8g.jpg",Ne="/languagelift/assets/course3-Z1xcun6O.jpg",We="/languagelift/assets/practice3-B9aIXM-B.jpg",Ae="/languagelift/assets/course4-DHSUDOv1.jpg",Ke="/languagelift/assets/practice4-CClzIK9P.jpg",Ue="/languagelift/assets/audio-DElmfsmO.jpg",qe=[{name:{en:"English For Everyone Course Book Level 1 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 1, початківець"},img:Fe,link:"https://drive.google.com/file/d/1tldpBFFFsBmUVit-S78tdWgzmfn5vR4i/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book level 1 Beginner",ua:"Книга практики «Англійська для всіх», рівень 1, початківець"},img:Ve,link:"https://drive.google.com/file/d/1DcHGrud-ulHNY27IPkBXndwwZuCrGNUD/view?usp=drive_link"},{name:{en:"English for Everyone Course-Book Level 2 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 2, початківець"},img:Oe,link:"https://drive.google.com/file/d/1YjWihJd4v2iITQjLi0USL3fmTCkAbZmJ/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 2 Beginner ",ua:"Книга практики «Англійська для всіх», рівень 2, початківець"},img:Te,link:"https://drive.google.com/file/d/1kOnQorTUJjK8xoGTIfZy__U2RGrdTnT-/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 3 Intermediate",ua:"Підручник з курсу «Англійська для всіх» рівень 3, середній"},img:Ne,link:"https://drive.google.com/file/d/1fDE_AuLhuX3gVf9Ua2C6JFwJIM01CVCp/view?usp=drive_link"},{name:{en:"English for Everyone Practice-Book Level 3 Intermediate ",ua:"Книга практики «Англійська для всіх», рівень 3, середній"},img:We,link:"https://drive.google.com/file/d/1KT9UJBtEZ3Pw8SPuF4JSqzsfmbKRyOAT/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 4 Advanced",ua:"Підручник з курсу «Англійська для всіх» рівень 4, просунутий"},img:Ae,link:"https://drive.google.com/file/d/1jNw-WVcCfkxhnpwN1qoxzxkWZ7dpygkS/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 4 Advanced",ua:"Книга практики «Англійська для всіх», рівень 4, просунутий"},img:Ke,link:"https://drive.google.com/file/d/1BCX7RosC9cAt-lxOuPUWZr1toG95uF6k/view?usp=drive_link"},{name:{en:"Audio materials for listening can be found here",ua:"Аудіоматеріали для прослуховування можливо знайти тут"},img:Ue,link:"https://www.dkefe.com/en/audio"}];var P={},Xe=R;Object.defineProperty(P,"__esModule",{value:!0});var q=P.default=void 0,Ye=Xe(_()),Je=e;q=P.default=(0,Ye.default)((0,Je.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link");var D={},Ze=R;Object.defineProperty(D,"__esModule",{value:!0});var X=D.default=void 0,Ge=Ze(_()),Qe=e;X=D.default=(0,Ge.default)((0,Qe.jsx)("path",{d:"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5zm2.5-.5h1.5V15H10v-4.5h1.5V9H7zm5.5 0H14V15h1.5v-4.5H17V9h-4.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5m0 2.5h-2v-1h2z"}),"Http");const nt=()=>{const[t,u]=s.useState(""),{language:n}=s.useContext(T),a=qe.filter(({name:l})=>l.en.toLocaleLowerCase().includes(t.toLocaleLowerCase().trim())||l.ua.toLocaleLowerCase().includes(t.toLocaleLowerCase().trim()));return e.jsxs(ye,{children:[e.jsx(De,{}),e.jsx(g,{sx:{width:"100%",display:"flex",justifyContent:"center"},children:e.jsxs(ae,{size:"small",fullWidth:!0,sx:{maxWidth:400},children:[e.jsx(ie,{children:n==="en"?"Search":"Пошук"}),e.jsx(le,{label:"Search",onChange:l=>u(l.target.value),value:t}),e.jsx(ce,{sx:{height:20},children:a.length===0&&(n==="ua"?"Нічого не знайдено":"Nothing found")})]})}),e.jsx(ve,{children:a.map(({name:l,link:f,img:d},c)=>e.jsx(N.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:e.jsxs(ke,{children:[e.jsx(g,{children:e.jsx(je,{img:d})}),e.jsxs(g,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,width:200},children:[e.jsx(M,{variant:"subtitle2",textAlign:"center",children:l[n]}),e.jsx("a",{href:f,download:!0,target:"_blank",rel:"noopener noreferrer",children:e.jsx(ue,{variant:"contained",size:"small",startIcon:d.includes("audio")?e.jsx(X,{}):e.jsx(K,{}),endIcon:d.includes("audio")?e.jsx(q,{}):e.jsx(A,{}),children:d.includes("audio")?n==="en"?"Link":"Посилання":n==="en"?"DownLoad":"Завантажити"})})]})]})},c))})]})};export{nt as default};
