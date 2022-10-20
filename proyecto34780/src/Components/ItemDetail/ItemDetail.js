import Counter from'../Counter/Counter'
import '../../asyncMonck'


const ItemDetail = ({name, img, price,category, stock, description}) =>{
        return(
        <div>
            <h2>{name}</h2>
            <picture>src={img} alt={}name</picture>
            <p>{price}</p>
            <p>{category}</p>
            <p>{stock}</p>
            <p>{description}</p>
           <Counter/>
        </div>
        )
}
export default ItemDetail