import Producto from "./Producto"

function Productos(props) {
    return (
        <>
            <Producto producto={props.productos[0]} />
            <Producto producto={props.productos[1]} />
            <Producto producto={props.productos[2]} />
        </>
    )
}

export default Productos