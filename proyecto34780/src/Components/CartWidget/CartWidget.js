import'./CartWidget.css'
import cart from '../assets/cart.svg'

const CartWidget = () => {
    return(
        <div className='CartWidget'>
            <img src={cart} alt='cart' />
            10
        </div>
    )
}

export default CartWidget