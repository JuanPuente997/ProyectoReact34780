const products=[
    {
        id:'1',
        name:'Producto 1',
        price:'$500',
        category:'Alimentos',
        img: '/imagenes/NootbookCoreI9.jpg',
        stock:'3',
        description:'Comestible',
        detail:'Detalle del producto'
    },
    {
        id:'2',
        name:'Producto 2',
        price:'$800',
        category:'Alimentos',
        img:'/imagenes/samsungGalaxiA23.png',
        stock:'5',
        description:'Comestible',
        detail:'Detalle del producto'
    },
    {
        id:'3',
        name:'Producto 3',
        price:'$900',
        category:'Alimentos',
        img:'/imagenes/tablet.png',
        stock:'9',
        description:'Comestible',
        detail:'Detalle del producto'
    }
]
export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },1000)
    })
}
export const getProductsById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products.map (prod => prod.id === id))
        },2000)
    })
}