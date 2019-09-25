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
import LoginForm from './components/Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
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
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavItem updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            {/* greet user if logged in: */}
            {this.state.loggedIn &&
              <p>Join the party, {this.state.username}!</p>
            }
            <LoginForm />
            <Switch>
              <Route exact path="/" component={Quizzes} />
              <Route exact path="/quiz/:id" component={Main} />
              <Route exact path="/create" component={CreateForm} />
              <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
              {/* <Route path="/signup" render={() => <Signup/>} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    )
  };
}
export default App;
