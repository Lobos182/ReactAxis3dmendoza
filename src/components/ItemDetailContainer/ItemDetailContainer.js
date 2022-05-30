import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductsById('3').then(res => {
            setProduct(res)
        })
    }, [])
    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer