
const ItemDetail =({name, category, stock, price})=>{
    return(
        <div>
            <h2>{name}</h2>
            <h4>{category}</h4>
            <h5>{stock}</h5>
            <p>{price}</p>
        </div>
    )
}
export default ItemDetail