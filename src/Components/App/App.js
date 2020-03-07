import React from 'react';
import Container from '../Container/Container';
import SelectAll from '../SelectAll/SelectAll';
import MobileMenu from '../MobileMenu/MobileMenu';
import DeleteBox from '../DeleteBox/DeleteBox';

function App() {
  return (
    <div className="App">

      <h1>A Simple To-Do List</h1>
      <h2>Your to-do list online</h2>

      <SelectAll />

      <Container />

      <DeleteBox />

      <MobileMenu />
      
    </div>

  );
}

export default App;
