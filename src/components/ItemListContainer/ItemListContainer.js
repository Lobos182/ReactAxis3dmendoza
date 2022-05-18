import React from 'react'

export const ItemListContainer = (props) => {
  return (
    <h1 style={{color:props.color}}>{props.greeting}</h1>
  )
}

export default ItemListContainer