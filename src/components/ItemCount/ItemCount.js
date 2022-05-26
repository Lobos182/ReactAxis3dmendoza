import { useState } from "react"
import './ItemCount.css'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const ItemCount = (props) => {
    /*const [count, setCount] = useState(props.inicial)*/
    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count <= 0) {
            console.log("No existen los productos negativos :) ")
        } else {
            setCount(count - 1)
        }
    }
    const increment = () => {
        if (count >= props.stock) {
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
            <Button className="agregarcarrito">
                Agregar al Carrito
            </Button>
        </div>
    )


}
export default ItemCount