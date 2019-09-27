import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Logo from '../../images/nobg.png'

import "./Navbar.css"
class NavbarComponent extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <div>
        <header className="navbar App-header" id="nav-container">
          <div className="col-6" >
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <span className="text-secondary">home</span>
                </Link>
                <Link to="/create" className="btn btn-link">
                  <span className="text-secondary">Create a Quiz</span>
                </Link>
                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                  <span className="text-secondary">logout</span>
                </Link>
              </section>
            ) : (
                <section className="navbar-section">
                  <Link to="/" className="btn btn-link text-secondary">
                    <span className="text-secondary">Home</span>
                  </Link>
                  <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary">Login</span>
                  </Link>
                  <Link to="/signup" className="btn btn-link">
                    <span className="text-secondary">Sign Up</span>
                  </Link>
                </section>
              )}
          </div>
          <div className="col-6 col-mr-auto">
            <h1 className="App-title">Taking Care of Quizness</h1>
            <img src={Logo} className="App-logo" alt="logo" />
          </div>
          
        </header>
      </div>

    );

  }
}

export default NavbarComponent;