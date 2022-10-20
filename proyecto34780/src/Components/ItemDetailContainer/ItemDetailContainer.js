import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMonck"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [products, setProduct]= useState ([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    
    useEffect(() => {
        getProductsById(productId ).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <div>
        <h1> Loading...</h1>
        </div>
    }
    return (
        <>
        <h1>detalle</h1>
       <ItemDetail key= {products.id}{...products}/>
        </>
    )
}
export default ItemDetailContainer