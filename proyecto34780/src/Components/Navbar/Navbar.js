import'./Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ()=>{
    return(
        <nav className = 'Navbar'>
             <div className='BoxButtons'>
             <div><h3>E-commerce</h3></div>
                <button className ='Button'>Inicio</button>
                <button className ='Button'>Productos</button>
                <button className ='Button'>Contacto</button>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar