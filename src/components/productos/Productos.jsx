import { useState } from "react"
import Producto from "./Producto"
import ProductosFiltro from "./ProductosFiltro"
import { Alert } from "react-bootstrap"

function Productos(props) {

    const [ano, setAno] = useState('')

    const productosFiltrados = props.productos.filter((producto) => {
        if (ano !== '') {
            return producto.fecha.getFullYear().toString() === ano
        }
        return true
    })

    let contenido = <Alert>NO HAY PRODUCTOS EN {ano}</Alert>
    if (productosFiltrados.length > 0) {
        contenido = productosFiltrados.map((elemento) => {
            return <Producto key={elemento.id} producto={elemento} deleteProducto={props.deleteProducto} />
        })
    }

    return (
        <>
            <ProductosFiltro setAno={setAno} ano={ano} />
            {contenido}
        </>
    )
}

export default Productos