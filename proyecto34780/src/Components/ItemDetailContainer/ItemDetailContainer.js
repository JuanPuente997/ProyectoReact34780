import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMonck"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [products, setProduct]= useState ({})

    useEffect(()=>{
        getProductsById('1').then(products=>{
            setProduct(products)
        })
    },[])


    return (
        <>
        <h1>detalle</h1>
       <ItemDetail {...products}/>
        </>
    )
}
export default ItemDetailContainer