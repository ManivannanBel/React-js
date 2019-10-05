import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent'
import ConditionalRendering from './components/ConditionalRenderingComponent'
import ListRendering from './components/ListRendering'
function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
      <Greet fname="Shane" lname="Watson"><p>All rounder - AUS</p></Greet>
      <Welcome fname="Brett" lname="Lee"/>
      <Message/>
      <Counter/>
      <ParentComponent/>
      <ConditionalRendering/>
      <ListRendering/>
    </div>
  );
}

export default App;
