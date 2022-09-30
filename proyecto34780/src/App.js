import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Hola'}/>
      <Counter/>
    </div>
  );
}

export default App;
