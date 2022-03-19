import React,{ useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import style from './css/test3.module.css'



function Home() {
  const [num, setnum] = useState(0)
  return (
    <div>
      Home{num}
    </div>
  )
}


function About() {
  console.log('==========About');
  return (
    <div>
      About
    </div>
  )
}


function App() {
  return (
    <div>
      hello react
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <hr />
      <div className={style.fs}>测试css module</div>
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
