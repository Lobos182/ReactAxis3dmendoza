import React from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Item.css"

const Item = ({ id, nombre, precio, imagen, stock }) => {

    return (
        <Container>
            <Row>
                <Col className='bg-light border'
                    fluid='fluid'>
                    <div>
                        <CardGroup>
                            <Card>
                                <CardImg
                                    className='cardImg'
                                    alt="IMAGEN DE LA CARD"
                                    src={imagen}
                                    top 
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {nombre}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        id de base de datos {id}

                                    </CardSubtitle>
                                    <CardText>
                                        Precio ${precio}
                                    </CardText>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        stock disponible {stock}

                                    </CardSubtitle>
                                    <Link to={`/detalle/${id}`}>
                                        <Button>
                                            Detalle
                                        </Button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Item