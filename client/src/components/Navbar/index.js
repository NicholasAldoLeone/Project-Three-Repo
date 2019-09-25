import React, { Component } from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
// import logo from '../logo.svg';
import axios from 'axios'
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

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
          <div className="col-4" >
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                  <span className="text-secondary">logout</span></Link>

              </section>
            ) : (
                <section className="navbar-section">
                  <Link to="/" className="btn btn-link text-secondary">
                    <span className="text-secondary">home</span>
                  </Link>
                  <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary">login</span>
                  </Link>
                  <Link to="/signup" className="btn btn-link">
                    <span className="text-secondary">sign up</span>
                  </Link>
                  <Link to="/create" className="btn btn-link">
                    <span className="text-secondary">Create a Quiz</span>
                  </Link>
                </section>
              )}
          </div>
          <div className="col-4 col-mr-auto">
            <div id="top-filler"></div>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">MERN Passport</h1>
          </div>
        </header>
      </div>

    );

  }
}

export default NavbarComponent;



// const navbar = props => (
//   <div id="navbar">
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand id="Logo" href="/">Logo</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link id="Logbtn" href="/">Log In/Nothing</Nav.Link>
//           <Nav.Link id="Signbtn" href="#link">Sign Up/Out</Nav.Link>
//           <Nav.Link id="Createbtn" href="/create">Create a Quiz</Nav.Link>
//           <NavDropdown title="Your Account" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Previous Scores</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">Quizzes Created</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Extra Feature</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">Knock their Socks Off</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         <Form inline>
//           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//           <Button variant="outline-success">Search</Button>
//         </Form>
//       </Navbar.Collapse>
//     </Navbar>
//   </div>
// );


