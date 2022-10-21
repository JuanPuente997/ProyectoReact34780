import { useEffect, useState } from "react"
import { getProducts,getProductsByCategory } from "../../asyncMonck"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
  
    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
    
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])
    
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
    <div>
        <h1>Lista de productos</h1>
        <ItemList products={products}/>
    </div>
    )
}
export default ItemListContainer