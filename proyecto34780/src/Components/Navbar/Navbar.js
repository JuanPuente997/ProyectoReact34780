import'./Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ()=>{
    return(
        <nav className='Navbar'>
            <div>
             <div><h3 className='Title'>E-commerce</h3></div>
             <div className='BoxButtons'>
                <button className='Button'>Inicio</button>
                <button className='Button'>Productos</button>
                <button className='Button'>Contacto</button>
            </div>
                <div>
                    <CartWidget/>
                </div>
                
            </div>
        </nav>
    )
}
export default Navbar