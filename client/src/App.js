import React from "react";
import CreateForm from "./pages/Form.js";
import Nav from "./components/Navbar"
import Main from './components/Questions/Main';
import './styles/quiztake.css';
import Quizzes from "./pages/Quizzes.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Quizzes} />
            <Route exact path="/quiz/:id" component={Main} />
            <Route exact path="/create" component={CreateForm} />

          </Switch>
        </div>
      </Router>
    </div>
  )
};
export default App;
