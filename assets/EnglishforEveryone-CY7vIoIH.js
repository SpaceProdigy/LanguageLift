import{r as n,u as T,f as G,M as Q,j as e,b as ee,c as te,L as re,s as y,B as m,d as I,i as z,N as ne,P as O,e as se,a as N,g as oe,h as ae,I as ie,T as M,m as W}from"./index-DwZ7KfNv.js";import{F as le,I as ce,O as ue,a as de}from"./OutlinedInput-DfXy3izP.js";import{B as pe}from"./Button-DbmCcSll.js";function A(){const t=n.useRef(!1);return T(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function fe(){const t=A(),[l,r]=n.useState(0),a=n.useCallback(()=>{t.current&&r(l+1)},[l]);return[n.useCallback(()=>G.postRender(a),[a]),l]}class he extends n.Component{getSnapshotBeforeUpdate(l){const r=this.props.childRef.current;if(r&&l.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=r.offsetHeight||0,a.width=r.offsetWidth||0,a.top=r.offsetTop,a.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function xe({children:t,isPresent:l}){const r=n.useId(),a=n.useRef(null),h=n.useRef({width:0,height:0,top:0,left:0}),{nonce:g}=n.useContext(Q);return n.useInsertionEffect(()=>{const{width:i,height:c,top:j,left:d}=h.current;if(l||!a.current||!i||!c)return;a.current.dataset.motionPopId=r;const o=document.createElement("style");return g&&(o.nonce=g),document.head.appendChild(o),o.sheet&&o.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${c}px !important;
            top: ${j}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(o)}},[l]),e.jsx(he,{isPresent:l,childRef:a,sizeRef:h,children:n.cloneElement(t,{ref:a})})}const L=({children:t,initial:l,isPresent:r,onExitComplete:a,custom:h,presenceAffectsLayout:g,mode:i})=>{const c=ee(ge),j=n.useId(),d=n.useMemo(()=>({id:j,initial:l,isPresent:r,custom:h,onExitComplete:o=>{c.set(o,!0);for(const p of c.values())if(!p)return;a&&a()},register:o=>(c.set(o,!1),()=>c.delete(o))}),g?[Math.random()]:[r]);return n.useMemo(()=>{c.forEach((o,p)=>c.set(p,!1))},[r]),n.useEffect(()=>{!r&&!c.size&&a&&a()},[r]),i==="popLayout"&&(t=e.jsx(xe,{isPresent:r,children:t})),e.jsx(te.Provider,{value:d,children:t})};function ge(){return new Map}function me(t){return n.useEffect(()=>()=>t(),[])}const w=t=>t.key||"";function ve(t,l){t.forEach(r=>{const a=w(r);l.set(a,r)})}function je(t){const l=[];return n.Children.forEach(t,r=>{n.isValidElement(r)&&l.push(r)}),l}const ke=({children:t,custom:l,initial:r=!0,onExitComplete:a,exitBeforeEnter:h,presenceAffectsLayout:g=!0,mode:i="sync"})=>{const c=n.useContext(re).forceRender||fe()[0],j=A(),d=je(t);let o=d;const p=n.useRef(new Map).current,C=n.useRef(o),v=n.useRef(new Map).current,k=n.useRef(!0);if(T(()=>{k.current=!1,ve(d,v),C.current=o}),me(()=>{k.current=!0,v.clear(),p.clear()}),k.current)return e.jsx(e.Fragment,{children:o.map(f=>e.jsx(L,{isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:g,mode:i,children:f},w(f)))});o=[...o];const E=C.current.map(w),_=d.map(w),B=E.length;for(let f=0;f<B;f++){const s=E[f];_.indexOf(s)===-1&&!p.has(s)&&p.set(s,void 0)}return i==="wait"&&p.size&&(o=[]),p.forEach((f,s)=>{if(_.indexOf(s)!==-1)return;const u=v.get(s);if(!u)return;const x=E.indexOf(s);let b=f;if(!b){const Z=()=>{p.delete(s);const V=Array.from(v.keys()).filter(R=>!_.includes(R));if(V.forEach(R=>v.delete(R)),C.current=d.filter(R=>{const F=w(R);return F===s||V.includes(F)}),!p.size){if(j.current===!1)return;c(),a&&a()}};b=e.jsx(L,{isPresent:!1,onExitComplete:Z,custom:l,presenceAffectsLayout:g,mode:i,children:u},w(u)),p.set(s,b)}o.splice(x,0,b)}),o=o.map(f=>{const s=f.key;return p.has(s)?f:e.jsx(L,{isPresent:!0,presenceAffectsLayout:g,mode:i,children:f},w(f))}),e.jsx(e.Fragment,{children:p.size?o:o.map(f=>n.cloneElement(f))})},ye=y(m)`
  width: 100px;
  height: 133px;
  background-image: url(${({img:t})=>t});

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`,we=y(m)`
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
`,be=y(m)`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;var H={},Ce=z;Object.defineProperty(H,"__esModule",{value:!0});var U=H.default=void 0,Ee=Ce(I()),_e=e;U=H.default=(0,Ee.default)((0,_e.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");var P={},Re=z;Object.defineProperty(P,"__esModule",{value:!0});var K=P.default=void 0,Ie=Re(I()),ze=e;K=P.default=(0,Ie.default)((0,ze.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5.5h1v-3h-1z"}),"PictureAsPdf");var S={},Be=z;Object.defineProperty(S,"__esModule",{value:!0});var q=S.default=void 0,Le=Be(I()),Me=e;q=S.default=(0,Le.default)((0,Me.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");const He=y(m)`
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
`,Pe=y(ne)`
  color: transparent;
  text-decoration: none;
`,Se=y(m)`
  position: absolute;
  left: 15px;
  top: 15px;
`,$e=y("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,De=y(m)`
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
`,Ve=y(m)`
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
`,X=({passwordKey:t,sessionKey:l})=>{const[r,a]=n.useState(!sessionStorage.getItem(l)),[h,g]=n.useState(null),i=n.useRef({1:"",2:"",3:"",4:""}),[c,j]=n.useState({1:"",2:"",3:"",4:""}),d=Object.values(c).join(""),o=se(),{language:p}=n.useContext(N),C=()=>a(!1),v=d.length===4&&t!==d,k=t===d,{state:E}=oe();n.useEffect(()=>{k&&(sessionStorage.setItem(l,"access"),setTimeout(()=>{C()},500))},[k,l]),n.useEffect(()=>{d.length===4&&i.current[h].blur()},[h,d.length]);const _=(s,u)=>{const x=s.target.value,b=x.replace(/\D/g,"");if(j(()=>({...c,[s.target.id]:b.slice(0,1)})),!isNaN(x)&&x!==""){if(u===4){i.current[1].focus();return}i.current[u+1].focus()}},B=(s,u)=>{if(s.keyCode===39){if(u===4)return i.current[1].focus();i.current[u+1].focus()}if(s.keyCode===37){if(u===1)return i.current[4].focus();i.current[u-1].focus(),i.current[u-1]}if(s.keyCode===8){if(d.length===0&&i.current[u].blur(),s.preventDefault(),u===1){j(x=>({...x,[u]:""})),i.current[4].focus();return}i.current[u-1].focus(),j(x=>({...x,[u]:""}))}},f=s=>d===t?o.palette.success.main:d.length===4&&t!==d?o.palette.error.main:c[s]?o.palette.info.main:o.palette.text.primary;return e.jsx(e.Fragment,{children:e.jsx(ae,{open:r,children:e.jsxs(He,{children:[e.jsx(Se,{children:e.jsx(Pe,{to:E,children:e.jsx(ie,{children:e.jsx(q,{})})})}),e.jsxs(m,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(M,{variant:"subtitle2",children:p==="en"?"Enter password":"Введіть пароль"}),e.jsx(m,{sx:{position:"relative",width:200,height:50},children:e.jsx(De,{error:v?"+":"",success:k?"+":"",children:[1,2,3,4].map((s,u)=>e.jsx(Ve,{tab:Number(s)<=Number(c[s])?"+":"",borderColor:f(s),children:e.jsx($e,{ref:x=>{i.current[s]=x},id:s,onChange:x=>_(x,s),value:c[s],autoComplete:"off",onKeyDown:x=>B(x,s),onFocus:()=>g(s),type:"tel"})},u))})}),e.jsx(W.div,{animate:{opacity:v||k?1:0},transition:{duration:.5},style:{height:50},children:e.jsxs(M,{variant:"caption",textAlign:"center",color:v?o.palette.error.main:o.palette.success.main,children:[v&&(p==="en"?"The password is incorrect, please try again":"Пароль невірний, спробуйте ще раз"),k&&(p==="en"?"Success":"Yспіх")]})})]})]})})})};X.propTypes={passwordKey:O.string,sessionKey:O.string};const Fe="/languagelift/assets/level1course-G3gVfnSN.jpg",Oe="/languagelift/assets/level1practice-B5J6Ocoh.jpg",Te="/languagelift/assets/course2-DSHxMhx-.jpg",Ne="/languagelift/assets/practice2-DdYZKi8g.jpg",We="/languagelift/assets/course3-Z1xcun6O.jpg",Ae="/languagelift/assets/practice3-B9aIXM-B.jpg",Ue="/languagelift/assets/course4-DHSUDOv1.jpg",Ke="/languagelift/assets/practice4-CClzIK9P.jpg",qe="/languagelift/assets/audio-DElmfsmO.jpg",Xe=[{name:{en:"English For Everyone Course Book Level 1 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 1, початківець"},img:Fe,link:"https://drive.google.com/file/d/1tldpBFFFsBmUVit-S78tdWgzmfn5vR4i/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book level 1 Beginner",ua:"Книга практики «Англійська для всіх», рівень 1, початківець"},img:Oe,link:"https://drive.google.com/file/d/1DcHGrud-ulHNY27IPkBXndwwZuCrGNUD/view?usp=drive_link"},{name:{en:"English for Everyone Course-Book Level 2 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 2, початківець"},img:Te,link:"https://drive.google.com/file/d/1YjWihJd4v2iITQjLi0USL3fmTCkAbZmJ/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 2 Beginner ",ua:"Книга практики «Англійська для всіх», рівень 2, початківець"},img:Ne,link:"https://drive.google.com/file/d/1kOnQorTUJjK8xoGTIfZy__U2RGrdTnT-/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 3 Intermediate",ua:"Підручник з курсу «Англійська для всіх» рівень 3, середній"},img:We,link:"https://drive.google.com/file/d/1fDE_AuLhuX3gVf9Ua2C6JFwJIM01CVCp/view?usp=drive_link"},{name:{en:"English for Everyone Practice-Book Level 3 Intermediate ",ua:"Книга практики «Англійська для всіх», рівень 3, середній"},img:Ae,link:"https://drive.google.com/file/d/1KT9UJBtEZ3Pw8SPuF4JSqzsfmbKRyOAT/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 4 Advanced",ua:"Підручник з курсу «Англійська для всіх» рівень 4, просунутий"},img:Ue,link:"https://drive.google.com/file/d/1jNw-WVcCfkxhnpwN1qoxzxkWZ7dpygkS/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 4 Advanced",ua:"Книга практики «Англійська для всіх», рівень 4, просунутий"},img:Ke,link:"https://drive.google.com/file/d/1BCX7RosC9cAt-lxOuPUWZr1toG95uF6k/view?usp=drive_link"},{name:{en:"Audio materials for listening can be found here",ua:"Аудіоматеріали для прослуховування можливо знайти тут"},img:qe,link:"https://www.dkefe.com/en/audio"}];var $={},Ye=z;Object.defineProperty($,"__esModule",{value:!0});var Y=$.default=void 0,Je=Ye(I()),Ze=e;Y=$.default=(0,Je.default)((0,Ze.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link");var D={},Ge=z;Object.defineProperty(D,"__esModule",{value:!0});var J=D.default=void 0,Qe=Ge(I()),et=e;J=D.default=(0,Qe.default)((0,et.jsx)("path",{d:"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5zm2.5-.5h1.5V15H10v-4.5h1.5V9H7zm5.5 0H14V15h1.5v-4.5H17V9h-4.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5m0 2.5h-2v-1h2z"}),"Http");const st=()=>{const[t,l]=n.useState(""),{language:r}=n.useContext(N),a=Xe.filter(({name:h})=>h.en.toLocaleLowerCase().includes(t.toLocaleLowerCase().trim())||h.ua.toLocaleLowerCase().includes(t.toLocaleLowerCase().trim()));return e.jsxs(be,{children:[e.jsx(X,{passwordKey:"1234",sessionKey:"English-For-Everyone"}),e.jsx(m,{sx:{width:"100%",display:"flex",justifyContent:"center"},children:e.jsxs(le,{size:"small",fullWidth:!0,sx:{maxWidth:400},children:[e.jsx(ce,{children:r==="en"?"Search":"Пошук"}),e.jsx(ue,{label:"Search",onChange:h=>l(h.target.value),value:t}),e.jsx(de,{sx:{height:20},children:a.length===0&&(r==="ua"?"Нічого не знайдено":"Nothing found")})]})}),e.jsx(ke,{children:a.map(({name:h,link:g,img:i},c)=>e.jsx(W.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:e.jsxs(we,{children:[e.jsx(m,{children:e.jsx(ye,{img:i})}),e.jsxs(m,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,width:200},children:[e.jsx(M,{variant:"subtitle2",textAlign:"center",children:h[r]}),e.jsx("a",{href:g,download:!0,target:"_blank",rel:"noopener noreferrer",children:e.jsx(pe,{variant:"contained",size:"small",startIcon:i.includes("audio")?e.jsx(J,{}):e.jsx(K,{}),endIcon:i.includes("audio")?e.jsx(Y,{}):e.jsx(U,{}),children:i.includes("audio")?r==="en"?"Link":"Посилання":r==="en"?"DownLoad":"Завантажити"})})]})]})},c))})]})};export{st as default};
