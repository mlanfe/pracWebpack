import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";



function Home() {
  return (
    <div>
      Home
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
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
