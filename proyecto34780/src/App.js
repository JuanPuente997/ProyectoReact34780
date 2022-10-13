import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Lista de productos'}/>
      <Counter Name={'Producto 1'} Img={''} Description={'Descripcion 1'} Price={'$150'} />
      <Counter Name={'Producto 2'} Img={''} Description={'Descripcion 2'} Price={'$300'} />
      <Counter Name={'Producto 3'} Img={''} Description={'Descripcion 3'} Price={'$600'} />
    </div>
  );
}

export default App;
