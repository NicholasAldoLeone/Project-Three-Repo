import React from "react";
import Navbar from "./components/Navbar";
// import {Col, Row, Container } from './components/Grid'
import Main from './components/Questions/Main';
import './styles/quiztake.css';
import Quizzes from "./pages/Quizzes.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return( 
<div>
<Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path = "/" component = {Quizzes} />
          <Route exact path = "/quiz/:id" component = {Main} />

        </Switch>
      </div>
    </Router>
   
   </div>
  )
};
export default App;
