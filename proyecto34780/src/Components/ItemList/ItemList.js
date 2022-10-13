import Item from "../Item/Item"


const ItemList = ({products})=>{
    return(
        <div className="Itemlist">
            {products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price}/>)}
        </div>
    )
}
export default ItemList