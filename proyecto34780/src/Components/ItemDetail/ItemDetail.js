import Counter from'../Counter/Counter'
import '../../asyncMonck'


const ItemDetail = ({name, img, price,category, stock, description}) =>{
        
        return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{price}</p>
            <p>{category}</p>
            <p>{stock}</p>
            <p>{description}</p>
           <Counter/>
        </div>
        )
        
}
export default ItemDetail