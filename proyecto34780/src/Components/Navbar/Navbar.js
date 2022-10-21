import'./Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav className = 'Navbar'>
             <div className='BoxButtons'>
             <div><h3>E-commerce</h3></div>
            
                <Link to = {'/'}>Inicio</Link>
                <Link to ={'/category/Celulares'}>celulares</Link>
                <Link to ={'/category/Tablets'}>Tablets</Link>
                <Link to ={'/category/Notebooks'}>Notbook</Link>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar