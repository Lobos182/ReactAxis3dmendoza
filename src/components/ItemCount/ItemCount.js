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
            <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="./images/productos/vader1.jpg"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <div className="wrapper">
                            <Button className="plusminus" onClick={decrement}>-</Button>
                            <input type="number" class="num" value={count} />
                            <Button className="plusminus" onClick={increment}>+</Button>
                        </div >
                        <Button>
                            Agregar al Carrito
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )


}
export default ItemCount