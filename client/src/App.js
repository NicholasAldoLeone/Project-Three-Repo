import React from "react";
import CreateForm from "./pages/Form.js";
import Navbar from "./components/Navbar";
import Main from './components/Questions/Main';
import './styles/quiztake.css';
import Quizzes from "./pages/Quizzes.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Carousel from "./components/HomeCarousel"
import { Container, Col, Row } from './components/Grid'
function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <div>


            <Carousel />


          </div>
          <Switch>
            <Route exact path="/" component={Quizzes} label="Insert Quiz ID" />
            <Route exact path="/quiz/:id" component={Main} label="Insert Quiz ID" />
            <Route exact path="/create" component={CreateForm} />

          </Switch>

        </div>
      </Router>
    </div>
  )
};
export default App;
