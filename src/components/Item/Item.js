import React from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Item = ({ id, nombre, precio,imagen,stock }) => {

    return (
        <div>
            <CardGroup>
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
                        <Button>
                            Ver detalle
                        </Button>                      
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Item