import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMonck";
import ItemList from "../ItemList/ItemList";

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
        return <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
        </div>
        </div>
    }
    return (
  
    <div>
        <h1>Productos</h1>
        <ItemList products={products}/>
    </div>
   
    )
}
export default ItemListContainer