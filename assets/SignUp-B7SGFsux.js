import{s as S,r as c,j as e,T as j}from"./index-DVY_1ra-.js";import{u as v,o as I}from"./index.esm-Di7IinLd.js";import{s as b}from"./authShema-BfRMnm54.js";import{F as i,I as n,O as u,a as m}from"./OutlinedInput-9hGdSsS3.js";import{B as y}from"./Button-DsDnetGg.js";const w=S("form")`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  gap: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,J=()=>{var p,d,g;const[r,s]=c.useState(JSON.parse(localStorage.getItem("signup"))&&JSON.parse(localStorage.getItem("signup"))),{register:a,handleSubmit:x,formState:{errors:o},reset:h}=v({resolver:I(b),mode:"onBlur",defaultValues:r??{login:"",email:"",password:""}}),f=t=>{console.log(t),h(),s(),localStorage.removeItem("signup")};return c.useEffect(()=>{(JSON.parse(localStorage.getItem("signup"))||r)&&localStorage.setItem("signup",JSON.stringify(r))},[r]),e.jsx(e.Fragment,{children:e.jsxs(w,{onSubmit:x(f),children:[e.jsx(j,{variant:"h5",sx:{mb:3},children:"Sing up"}),e.jsxs(i,{variant:"outlined",fullWidth:!0,children:[e.jsx(n,{variant:"outlined",children:"Login"}),e.jsx(u,{label:"Login",placeholder:"Enter your login or email",onInput:t=>s(l=>({...l,login:t.target.value})),...a("login")}),e.jsx(m,{sx:{minHeight:40},error:!0,children:(p=o.login)==null?void 0:p.message})]}),e.jsxs(i,{variant:"outlined",fullWidth:!0,children:[e.jsx(n,{variant:"outlined",children:"Email"}),e.jsx(u,{label:"Email",type:"email",placeholder:"Enter your password",onInput:t=>s(l=>({...l,email:t.target.value})),...a("email")}),e.jsx(m,{sx:{minHeight:40},error:!0,children:(d=o.email)==null?void 0:d.message})]}),e.jsxs(i,{variant:"outlined",fullWidth:!0,children:[e.jsx(n,{variant:"outlined",children:"Password"}),e.jsx(u,{label:"Password",type:"password",placeholder:"Enter your password",...a("password")}),e.jsx(m,{sx:{minHeight:40},error:!0,children:(g=o.password)==null?void 0:g.message})]}),e.jsx(y,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:"Submit"})]})})};export{J as default};
