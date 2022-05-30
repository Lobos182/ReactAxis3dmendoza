const products = [

    {
        id: '1',
        nombre: 'Dinosaurio Flexible',
        descripcion: 'Dinosaurio flexible de PLA',
        precio: 500,
        categoria: 'animales',
        stock: 10,
        imagen: './images/productos/dino1.jpg'
    },
    {
        id: '2',
        nombre: 'Pokebola',
        descripcion: 'Pokebola porta tarjetas nintendo switch',
        precio: 1000,
        categoria: 'accesorios',
        stock: 15,
        imagen: './images/productos/pokebola1.jpg'
    },
    {
        id: '3',
        nombre: 'Darth Vader',
        descripcion: 'Miniatura Darth Vader PLA',
        precio: 500,
        categoria: 'Figuras',
        stock: 3,
        imagen: './images/productos/vader1.jpg'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

