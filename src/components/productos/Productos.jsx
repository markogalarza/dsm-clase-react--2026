import Producto from "./Producto"

function Productos(props) {
    return (
        <>
            {props.productos.map((elemento)=>{
                return <Producto key={elemento.id} producto={elemento} deleteProducto={props.deleteProducto} />
            })}
        </>
    )
}

export default Productos