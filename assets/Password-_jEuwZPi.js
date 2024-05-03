import{r,ao as A,ap as U,aq as H,j as e,ar as O,as as V,at as G,a as L,i as q,s as z,B as R,N as J,P as k,I as Q,R as Z,au as ee,M as te,ad as T,T as $,m as re}from"./index-Dyyx1Aw4.js";function W(){const t=r.useRef(!1);return A(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function ne(){const t=W(),[i,n]=r.useState(0),a=r.useCallback(()=>{t.current&&n(i+1)},[i]);return[r.useCallback(()=>U.postRender(a),[a]),i]}class se extends r.Component{getSnapshotBeforeUpdate(i){const n=this.props.childRef.current;if(n&&i.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function oe({children:t,isPresent:i}){const n=r.useId(),a=r.useRef(null),y=r.useRef({width:0,height:0,top:0,left:0}),{nonce:b}=r.useContext(H);return r.useInsertionEffect(()=>{const{width:l,height:x,top:w,left:g}=y.current;if(i||!a.current||!l||!x)return;a.current.dataset.motionPopId=n;const s=document.createElement("style");return b&&(s.nonce=b),document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${x}px !important;
            top: ${w}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(s)}},[i]),e.jsx(se,{isPresent:i,childRef:a,sizeRef:y,children:r.cloneElement(t,{ref:a})})}const B=({children:t,initial:i,isPresent:n,onExitComplete:a,custom:y,presenceAffectsLayout:b,mode:l})=>{const x=O(ae),w=r.useId(),g=r.useMemo(()=>({id:w,initial:i,isPresent:n,custom:y,onExitComplete:s=>{x.set(s,!0);for(const p of x.values())if(!p)return;a&&a()},register:s=>(x.set(s,!1),()=>x.delete(s))}),b?[Math.random()]:[n]);return r.useMemo(()=>{x.forEach((s,p)=>x.set(p,!1))},[n]),r.useEffect(()=>{!n&&!x.size&&a&&a()},[n]),l==="popLayout"&&(t=e.jsx(oe,{isPresent:n,children:t})),e.jsx(V.Provider,{value:g,children:t})};function ae(){return new Map}function ie(t){return r.useEffect(()=>()=>t(),[])}const I=t=>t.key||"";function ce(t,i){t.forEach(n=>{const a=I(n);i.set(a,n)})}function le(t){const i=[];return r.Children.forEach(t,n=>{r.isValidElement(n)&&i.push(n)}),i}const we=({children:t,custom:i,initial:n=!0,onExitComplete:a,exitBeforeEnter:y,presenceAffectsLayout:b=!0,mode:l="sync"})=>{const x=r.useContext(G).forceRender||ne()[0],w=W(),g=le(t);let s=g;const p=r.useRef(new Map).current,d=r.useRef(s),C=r.useRef(new Map).current,E=r.useRef(!0);if(A(()=>{E.current=!1,ce(g,C),d.current=s}),ie(()=>{E.current=!0,C.clear(),p.clear()}),E.current)return e.jsx(e.Fragment,{children:s.map(u=>e.jsx(B,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:b,mode:l,children:u},I(u)))});s=[...s];const h=d.current.map(I),j=g.map(I),M=h.length;for(let u=0;u<M;u++){const f=h[u];j.indexOf(f)===-1&&!p.has(f)&&p.set(f,void 0)}return l==="wait"&&p.size&&(s=[]),p.forEach((u,f)=>{if(j.indexOf(f)!==-1)return;const v=C.get(f);if(!v)return;const F=h.indexOf(f);let P=u;if(!P){const _=()=>{p.delete(f);const S=Array.from(C.keys()).filter(o=>!j.includes(o));if(S.forEach(o=>C.delete(o)),d.current=g.filter(o=>{const c=I(o);return c===f||S.includes(c)}),!p.size){if(w.current===!1)return;x(),a&&a()}};P=e.jsx(B,{isPresent:!1,onExitComplete:_,custom:i,presenceAffectsLayout:b,mode:l,children:v},I(v)),p.set(f,P)}s.splice(F,0,P)}),s=s.map(u=>{const f=u.key;return p.has(f)?u:e.jsx(B,{isPresent:!0,presenceAffectsLayout:b,mode:l,children:u},I(u))}),e.jsx(e.Fragment,{children:p.size?s:s.map(u=>r.cloneElement(u))})};var D={},ue=q;Object.defineProperty(D,"__esModule",{value:!0});var Y=D.default=void 0,fe=ue(L()),pe=e;Y=D.default=(0,fe.default)((0,pe.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var N={},de=q;Object.defineProperty(N,"__esModule",{value:!0});var X=N.default=void 0,xe=de(L()),he=e;X=N.default=(0,xe.default)((0,he.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const me=z(R)`
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
`,ge=z(J)`
  color: transparent;
  text-decoration: none;
`,be=z(R)`
  position: absolute;
  left: 15px;
  top: 15px;
`,Ce=z(R)`
  position: absolute;
  right: 15px;
  top: 15px;
`,je=z("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,ve=z(R)`
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
`,ye=z(R)`
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
`,ke=({passwordKey:t,sessionKey:i,buttonBack:n=!1,closeClickInside:a=!1,openWithInitilizat:y=!1,openModal:b=!1,setOpenModal:l=!1,buttonClose:x=!1})=>{const[w,g]=r.useState(y??!sessionStorage.getItem(i)),[s,p]=r.useState(null),d=r.useRef({1:"",2:"",3:"",4:""}),[C,E]=r.useState({1:"",2:"",3:"",4:""}),h=Object.values(C).join(""),j=Q(),{language:M}=r.useContext(Z),u=()=>g(!1),f=h.length===4&&t!==h,v=t===h,{state:F}=ee();r.useEffect(()=>{v&&(sessionStorage.setItem(i,"access"),setTimeout(()=>{l&&l(!1),u()},500))},[v,i,l]),r.useEffect(()=>{h.length===4&&d.current[s].blur()},[s,h.length]);const P=(o,c)=>{const m=o.target.value,K=m.replace(/\D/g,"");if(E(()=>({...C,[o.target.id]:K.slice(0,1)})),!isNaN(m)&&m!==""){if(c===4){d.current[1].focus();return}d.current[c+1].focus()}},_=(o,c)=>{if(o.keyCode===39){if(c===4)return d.current[1].focus();d.current[c+1].focus()}if(o.keyCode===37){if(c===1)return d.current[4].focus();d.current[c-1].focus(),d.current[c-1]}if(o.keyCode===8){if(h.length===0&&d.current[c].blur(),o.preventDefault(),c===1){E(m=>({...m,[c]:""})),d.current[4].focus();return}d.current[c-1].focus(),E(m=>({...m,[c]:""}))}},S=o=>h===t?j.palette.success.main:h.length===4&&t!==h?j.palette.error.main:C[o]?j.palette.info.main:j.palette.text.primary;return e.jsx(e.Fragment,{children:e.jsx(te,{open:b||w,onClose:()=>{a&&g(!1),l&&l(!1)},children:e.jsxs(me,{children:[n&&e.jsx(be,{children:e.jsx(ge,{to:F??"/",children:e.jsx(T,{children:e.jsx(Y,{})})})}),x&&e.jsx(Ce,{children:e.jsx(T,{onClick:()=>{l?l(!1):g(!1)},children:e.jsx(X,{})})}),e.jsxs(R,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx($,{variant:"subtitle2",children:M==="en"?"Enter password":"Введіть пароль"}),e.jsx(R,{sx:{position:"relative",width:200,height:50},children:e.jsx(ve,{error:f?"+":"",success:v?"+":"",children:[1,2,3,4].map((o,c)=>e.jsx(ye,{tab:Number(o)<=Number(C[o])?"+":"",borderColor:S(o),children:e.jsx(je,{ref:m=>{d.current[o]=m},id:o,onChange:m=>P(m,o),value:C[o],autoComplete:"off",autoFocus:o===1,onKeyDown:m=>_(m,o),onFocus:()=>p(o),type:"tel"})},c))})}),e.jsx(re.div,{animate:{opacity:f||v?1:0},transition:{duration:.5},style:{height:50,width:"100%"},children:e.jsxs(R,{display:"flex",flexDirection:"column",alignItems:"center",gap:0,color:f?j.palette.error.main:j.palette.success.main,children:[f&&(M==="en"?e.jsxs(e.Fragment,{children:[e.jsx($,{variant:"subtitle2",component:"span",textAlign:"center",children:"The password is incorrect,"}),e.jsx($,{variant:"subtitle2",component:"span",textAlign:"center",children:"please try again"})]}):e.jsxs(e.Fragment,{children:[e.jsx($,{variant:"subtitle2",component:"span",textAlign:"center",children:"Пароль невірний,"}),e.jsx($,{variant:"subtitle2",component:"span",textAlign:"center",children:"спробуйте ще раз"})]})),e.jsx($,{variant:"h6",component:"span",textAlign:"center",children:v&&(M==="en"?"Success":"Yспіх")})]})})]})]})})})};ke.propTypes={passwordKey:k.string.isRequired,sessionKey:k.string.isRequired,buttonBack:k.bool,closeClickInside:k.bool,openWithInitilizat:k.bool,openModal:k.bool,setOpenModal:k.func,buttonClose:k.bool};export{we as A,ke as P,X as d};
