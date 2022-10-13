import'./Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ()=>{
    return(
        <nav className = 'Navbar'>
             <div className='BoxButtons'>
                <h3>E-commerce</h3>
                <button className ='Button'>Celulares</button>
                <button className ='Button'>Tablets</button>
                <button className ='Button'>Notbooks</button>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar