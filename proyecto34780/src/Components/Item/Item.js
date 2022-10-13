
const Item =({img, name})=>{
    return(
        <div>
            <img src={img} alt={name}/>
            <h1>{name}</h1>
        </div>
    )
}
export default Item