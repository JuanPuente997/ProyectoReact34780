import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMonck"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
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
        <h1>{greeting}</h1>
        <h3>Comestibles</h3>
        <ItemList products={products}/>
    </div>
    )
}
export default ItemListContainer