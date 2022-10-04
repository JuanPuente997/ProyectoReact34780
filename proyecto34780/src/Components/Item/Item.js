
const Item =(img, name, category,price)=>{
    return(
        <div>
            <img src={img} alt={name}/>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{price}</p>
        </div>
    )
}
export default Item