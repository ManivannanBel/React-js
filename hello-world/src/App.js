import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
      <Greet fname="Shane" lname="Watson"><p>All rounder - AUS</p></Greet>
      <Welcome fname="Brett" lname="Lee"/>
    </div>
  );
}

export default App;
