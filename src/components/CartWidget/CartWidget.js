import React from 'react'
import './CartWidget.css'
import '../ItemCount/ItemCount'


const CartWidget = (props) => {
    return (
        <div>
            <a type="button" href="#!" onClick={()=>console.log('hice click en Carrito')} className="d-flex">
                        <button className='btn-outline-dark'>
                            <i className='bi bi-cart4 me-2 icono'></i>                                                      
                            <span className='badge bg-dark text-white ms-2 rounded cantcarrito'>
                                {props.cart}
                            </span>
                        </button>
                    </a>            
        </div>
            )
}

export default CartWidget