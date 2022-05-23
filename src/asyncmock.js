const products = [
    {
        id: '1',
        name: 'celu',
        price: 500,
        category: 'celu'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
