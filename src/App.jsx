import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavLink, Outlet, Route, Router, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <NavLink to="/page1">Page 1</NavLink>
        <NavLink to="/page2">Page 2</NavLink>
        <NavLink to="/page3">Page 3</NavLink>
      </div>
      <div>
        <Routes>
          <Route path="/page1" element={<div>Page 1</div>} />
          <Route path="/page2" element={<div>Page 2</div>} />
          <Route path="/page3" element={<div>Page 3</div>} />
        </Routes>
        <Outlet />
      </div>
    </>
  );
}

export default App;
