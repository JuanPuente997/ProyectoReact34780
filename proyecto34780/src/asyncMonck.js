const products=[
    {
        id:'1',
        name:'Producto 1',
        price:'$500',
        category:'Alimentos',
        img: 'img',
        stock:'3',
        description:'Comestible'
    },
    {
        id:'2',
        name:'Producto 2',
        price:'$800',
        category:'Alimentos',
        img:'img',
        stock:'5',
        description:'Comestible'
    },
    {
        id:'3',
        name:'Producto 3',
        price:'$900',
        category:'Alimentos',
        img:'',
        stock:'9',
        description:'Comestible'
    }
]
export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },1000)
    })
}