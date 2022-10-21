import { Link } from "react-router-dom"



const Item = ({img, name,category, price, id}) => {
    return (
            <div>
                <img src={img} alt="img" />
                <h5>{name}</h5>
                <h5>{category}</h5>
                <h5>{price}</h5>
                <footer>
                <Link to={`/detail/${id}`}><h4>Detalle</h4></Link>
                </footer>
            </div>   
)}
export default Item