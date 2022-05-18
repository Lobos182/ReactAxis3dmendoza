import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <a type="button" href="#!" onClick={()=>console.log('hice click en Carrito')} class="d-flex">
                        <button className='btn-outline-dark'>
                            <i className='bi bi-cart4 me-2 icono'></i>                                                      
                            <span className='badge bg-dark text-white ms-2 rounded cantcarrito'>
                                5
                            </span>
                        </button>
                    </a>            
        </div>
            )
}

export default CartWidget