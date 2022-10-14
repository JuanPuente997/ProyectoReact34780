import'./Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav className = 'Navbar'>
             <div className='BoxButtons'>
             <div><h3>E-commerce</h3></div>
             
             <Link to = '/'>
                <a id='item'>Inicio</a>
             </Link>
             <li>
             <Link to = '/category/celulares'>
             <a id='item'>celulares</a>
             </Link>
             </li>
             <li>
              <Link to = '/category/tablets'>
                <a id="item">Tablets</a>
              </Link>
              </li>  
              <li>
              <Link to = '/category/notbook'>
                <a id="item">Notbook</a>
                </Link>
                </li>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar