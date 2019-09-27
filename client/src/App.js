
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './styles/quiztake.css';
import axios from 'axios';
//Pages
import CreateForm from "./pages/Form.js";
import Quizzes from "./pages/Quizzes.js"
//Components
import NavItem from "./components/Navbar";
import Main from './components/Questions/Main';
import SigninAndUp from './components/SigninAndUp';
import Finish from "./pages/Finish";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/').then(response => {
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          email: response.data.user.email
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <NavItem updateUser={this.updateUser} loggedIn={this.state.loggedIn} email={this.state.email} />
            <Switch>
              <Route exact path="/" component={Quizzes} />
              <Route exact path="/quiz/:id" component={Main} />
              <Route exact path="/create" component={CreateForm} />
              <Route exact path="/finished" component={Finish} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  };
}
export default App;