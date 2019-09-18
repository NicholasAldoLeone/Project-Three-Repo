import React from "react";
// import HelloDiv from "./components/HelloDiv";
import Navbar from "./components/Navbar";
// import {Col, Row, Container } from './components/Grid'
import Main from './components/Questions/Main';
import './styles/quiztake.css';
function App() {
  return( 
<div>
  {/* <HelloDiv />; */}
   <Navbar />;
   <Main />;
   
   </div>
  )
};
export default App;
