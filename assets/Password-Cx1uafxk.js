import{A as X,C as H,j as e,s as u,B as c,N as V,P as i,a as G,b as J,r as x,a2 as Q,aH as U,a0 as Z,I as z,T as d,m as K}from"./index-D4uYY4Vt.js";import{d as M}from"./Close-BhpnAsbR.js";var w={},O=H;Object.defineProperty(w,"__esModule",{value:!0});var E=w.default=void 0,ee=O(X()),te=e;E=w.default=(0,ee.default)((0,te.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");const re=u(c)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:r})=>{var f,g;return(g=(f=r==null?void 0:r.palette)==null?void 0:f.background)==null?void 0:g.paper}};
  box-shadow: ${({theme:r})=>r.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,se=u(V)`
  color: transparent;
  text-decoration: none;
`,ne=u(c)`
  position: absolute;
  left: 15px;
  top: 15px;
`,ae=u(c)`
  position: absolute;
  right: 15px;
  top: 15px;
`,oe=u("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,le=u(c)`
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
`,ie=u(c)`
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
`,ce=({passwordKey:r,sessionKey:f,buttonBack:g=!1,closeClickInside:F=!1,openWithInitilizat:R=!1,openModal:C=!1,setOpenModal:p=!1,buttonClose:T=!1})=>{const k=G(J),[_,v]=x.useState(R??!sessionStorage.getItem(f)),[I,$]=x.useState(null),o=x.useRef({1:"",2:"",3:"",4:""}),[h,y]=x.useState({1:"",2:"",3:"",4:""}),l=Object.values(h).join(""),a=Q(),L=()=>v(!1),m=l.length===4&&r!==l,b=r===l,{state:P}=U();x.useEffect(()=>{b&&(sessionStorage.setItem(f,"access"),setTimeout(()=>{p&&p(!1),L()},500))},[b,f,p]),x.useEffect(()=>{l.length===4&&o.current[I].blur()},[I,l.length]);const Y=(t,s)=>{const n=t.target.value,j=n.replace(/\D/g,"");if(y(()=>({...h,[t.target.id]:j.slice(0,1)})),!isNaN(n)&&n!==""){if(s===4){o.current[1].focus();return}o.current[s+1].focus()}},q=(t,s)=>{if(t.keyCode===39){if(s===4)return o.current[1].focus();o.current[s+1].focus()}if(t.keyCode===37){if(s===1)return o.current[4].focus();o.current[s-1].focus(),o.current[s-1]}if(t.keyCode===8){if(l.length===0&&o.current[s].blur(),t.preventDefault(),s===1){y(n=>({...n,[s]:""})),o.current[4].focus();return}o.current[s-1].focus(),y(n=>({...n,[s]:""}))}},W=t=>{var s,n,j,S,B,N,A,D;return l===r?(n=(s=a==null?void 0:a.palette)==null?void 0:s.success)==null?void 0:n.main:l.length===4&&r!==l?(S=(j=a==null?void 0:a.palette)==null?void 0:j.error)==null?void 0:S.main:h[t]?(N=(B=a==null?void 0:a.palette)==null?void 0:B.info)==null?void 0:N.main:(D=(A=a==null?void 0:a.palette)==null?void 0:A.text)==null?void 0:D.primary};return e.jsx(e.Fragment,{children:e.jsx(Z,{open:C||_,onClose:()=>{F&&v(!1),p&&p(!1)},children:e.jsxs(re,{children:[g&&e.jsx(ne,{children:e.jsx(se,{to:P??"/",children:e.jsx(z,{children:e.jsx(E,{})})})}),T&&e.jsx(ae,{children:e.jsx(z,{onClick:()=>{p?p(!1):v(!1)},children:e.jsx(M,{})})}),e.jsxs(c,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(d,{variant:"subtitle2",children:k==="en"?"Enter password":"Введіть пароль"}),e.jsx(c,{sx:{position:"relative",width:200,height:50},children:e.jsx(le,{error:m?"+":"",success:b?"+":"",children:[1,2,3,4].map((t,s)=>e.jsx(ie,{tab:Number(t)<=Number(h[t])?"+":"",borderColor:W(t),children:e.jsx(oe,{ref:n=>{o.current[t]=n},id:t,onChange:n=>Y(n,t),value:h[t],autoComplete:"off",autoFocus:t===1,onKeyDown:n=>q(n,t),onFocus:()=>$(t),type:"tel"})},s))})}),e.jsx(K.div,{animate:{opacity:m||b?1:0},transition:{duration:.5},style:{height:50,width:"100%"},children:e.jsxs(c,{display:"flex",flexDirection:"column",alignItems:"center",gap:0,color:m?a.palette.error.main:a.palette.success.main,children:[m&&(k==="en"?e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"subtitle2",component:"span",textAlign:"center",children:"The password is incorrect,"}),e.jsx(d,{variant:"subtitle2",component:"span",textAlign:"center",children:"please try again"})]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"subtitle2",component:"span",textAlign:"center",children:"Пароль невірний,"}),e.jsx(d,{variant:"subtitle2",component:"span",textAlign:"center",children:"спробуйте ще раз"})]})),e.jsx(d,{variant:"h6",component:"span",textAlign:"center",children:b&&(k==="en"?"Success":"Yспіх")})]})})]})]})})})};ce.propTypes={passwordKey:i.string.isRequired,sessionKey:i.string.isRequired,buttonBack:i.bool,closeClickInside:i.bool,openWithInitilizat:i.bool,openModal:i.bool,setOpenModal:i.func,buttonClose:i.bool};export{ce as P};
