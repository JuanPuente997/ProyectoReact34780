import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/'element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
            <Route path='/detail/:categoryId' element={<ItemDetailContainer/>}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/> 
          </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
