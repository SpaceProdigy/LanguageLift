import{u as l,aK as c,j as e,aL as p,s as i,B as n,T as a,P as s}from"./index-e0d01OZ0.js";import{u as d,R as g}from"./index-BIIp1-kn.js";const j=()=>{const t=l(c),r=d("(max-width:480px)");return e.jsx("div",{children:e.jsx(p,{style:r&&{width:"90%",marginTop:20,marginLeft:20},position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:t})})},T={lessonsWithJillSchedule:"lessonsWithJillSchedule"},h="/languagelift/assets/city-bridg-Dpd-2PSY.jpg",x=i(n)`
  width: calc(100% + 32px);
  height: 200px;
  background-image: ${({image:t})=>t?`url(${t})`:`url(${h})`};
  margin-left: -16px;
  margin-right: -16px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  @media screen and (min-width: 600px) {
    margin-left: -24px;
    margin-right: -24px;
    width: calc(100% + 48px);
    font-size: 32px;
    height: 300px;
  }
`,u=i(n)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #11111150; */
`,m=i(n)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  background-color: ${({theme:t})=>t.palette.mode==="light"?"#ffffffbb":"#111111bb"};
  border-radius: 7px;
`;f.propTypes={tipingText:s.string,image:s.string,title:s.string};function f({tipingText:t,image:r,title:o}){return e.jsx(e.Fragment,{children:e.jsx(x,{image:r,children:e.jsx(u,{children:e.jsxs(m,{children:[e.jsx(a,{variant:"inherit",children:o}),e.jsx(a,{variant:"h6",children:t&&e.jsx(g,{strings:[t],typeSpeed:70,cursorChar:""})})]})})})})}export{j as A,f as T,T as c};
