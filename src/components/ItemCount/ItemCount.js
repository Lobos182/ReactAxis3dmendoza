import { useState } from "react"
import './ItemCount.css'
import { Button } from 'reactstrap';

const ItemCount = ({ onConfirm, stock, initial = 1 }) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count <= 1) {
            console.log("No existen los productos negativos :) ")
        } else {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count >= stock) {
            console.log("no hay mas Stock")
        } else {
            setCount(count + 1)
        }
    }


    return (

        <div>
            <div className="wrapper">
                <Button className="plusminus" onClick={decrement}>-</Button>
                <input type="number" class="num" value={count} />
                <Button className="plusminus" onClick={increment}>+</Button>
            </div >
            <Button className="agregarcarrito" onClick={() => onConfirm(count)}>
                Agregar al Carrito
            </Button>
        </div>
    )


}
export default ItemCount