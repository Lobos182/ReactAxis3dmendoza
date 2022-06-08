import React, { useState } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle,Button, CardText, Container, Row, Col, CardFooter } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, nombre, precio, imagen, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const OnAdd = (count) => {
        console.log('Agregue al carrito')
        console.log(count)
        setQuantity(count)
    }
    return (
        <Container>
            <Row>
                <Col className='bg-light border'
                    fluid='fluid'
                >
                    <h2>Detalle del producto</h2>
                    <h2>{nombre}</h2>
                    <div>
                        <Card>
                            <CardImg
                                alt="IMAGEN DE LA CARD"
                                src={imagen}
                                top
                                width="auto"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {nombre}
                                </CardTitle>
                                <CardText>
                                    Precio ${precio}
                                </CardText>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    stock disponible {stock}

                                </CardSubtitle>
                                <CardFooter>
                                    {quantity > 0 ? <Link to='/cart'>
                                        <Button>
                                        Finalizar compra
                                    </Button>
                                    </Link> : <ItemCount stock={stock} onConfirm={OnAdd} />}
                                </CardFooter>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail