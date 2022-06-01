import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  const { categoriaId } = useParams()
  console.log(categoriaId)


  useEffect(() => {
    if (!categoriaId) {
      getProducts().then(response => {
        setProducts(response)
      })
    } else {
      getProductsByCategory(categoriaId).then(response => {
        setProducts(response)
      })
    }

  }, [categoriaId])

  return (
    <div className='ItemListContainer'>
      <h1>{greeting}</h1>
      <ItemList products={products} />

    </div>
  )
}

export default ItemListContainer

