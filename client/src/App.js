import React from "react";
import NewForm from "./components/Form";
import Navbar from "./components/Navbar";
// import {Col, Row, Container } from './components/Grid'
import Main from './components/Questions/Main';
import './styles/quiztake.css';
// import Quizzes from "./pages/Quizzes.js"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
    
        <div>
          <Navbar />
    
    <Main />
        </div>
  
    </div>
  )
};
export default App;
