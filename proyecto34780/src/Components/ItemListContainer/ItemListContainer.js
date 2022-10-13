import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMonck"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
    <div>
        <ItemList products={products}/>
    </div>
    )
}
export default ItemListContainer