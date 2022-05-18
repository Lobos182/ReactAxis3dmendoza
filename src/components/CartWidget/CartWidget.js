import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='carrito'>
            <img className='iconocarrito' src='./images/Cart.svg' width='60px' height='auto' alt='carrito' />
            <h2 className='textocarrito'>5</h2>
        </div>
            )
}

export default CartWidget