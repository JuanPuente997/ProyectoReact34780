const ItemDetail = ({name, price,category, stock, description}) =>{
        return(
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{category}</p>
            <p>{stock}</p>
            <p>{description}</p>
        </div>
        )
}
export default ItemDetail