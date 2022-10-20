
const products=[
    {
        id:'1',
        name:'Tablet',
        price: '$500',
        category:'Tablets',
        img: '/imagenes/tablet.webp',
        stock:'3',
        description:'Tablet generica de calidad media'
    },
    {
        id:'2',
        name:'Notebook',
        price: '$800',
        category:'Notebooks',
        img:'/imagenes/notebook.jpg',
        stock:'5',
        description:'Una notebook mas pero fachera facherita'
    },
    {
        id:'3',
        name:'Celular',
        price: '$900',
        category:'Celulares',
        img:'/imagenes/samsung.png',
        stock:'9',
        description:'El celu que siempre quisiste y nunca tuviste'
    }
]
export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },1000)
    })
}

export const getProductsById =(id)=>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=> prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}