import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(response => {
      setProducts(response)
    })
  }, [])

  return (
    <div className='ItemListContainer'>
      <h1>{greeting}</h1>
      <ItemList products={products} />     

    </div>
  )
}

export default ItemListContainer

// export const ItemListContainer = (props) => {
//   return (
//     <h1 style={{color:props.color}}>{props.greeting}</h1>
//   )
// }

// export default ItemListContainer