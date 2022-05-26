const products = [

    {
        id: '1',
        nombre: 'Dinosaurio Flexible',
        descripcion: 'Dinosaurio flexible de PLA',
        precio: 500,
        categoria: 'animales',
        stock: 10,
        imagen: 'https://i.ibb.co/W5Ffn7W/dino1.jpg'
    },
    {
        id: '2',
        nombre: 'Pokebola',
        descripcion: 'Pokebola porta tarjetas nintendo switch',
        precio: 1000,
        categoria: 'accesorios',
        stock: 15,
        imagen: 'https://i.ibb.co/3YGQKb5/pokebola1.jpg'
    },
    {
        id: '3',
        nombre: 'Darth Vader',
        descripcion: 'Miniatura Darth Vader PLA',
        precio: 500,
        categoria: 'Figuras',
        stock: 3,
        imagen: 'https://i.ibb.co/xgJwC0Z/vader1.jpg'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
