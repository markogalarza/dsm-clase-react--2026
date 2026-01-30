import './producto.css'
import FechaProducto from './FechaProducto'

function Producto(props) {

    // const nombre = 'Pantalla'
    // const precio = 45.76
    // const fecha = new Date()
    const nombre = props.producto.nombre
    const precio = props.producto.precio
    // const fecha = props.producto.fecha
    // const ano = fecha.getFullYear()
    // const mes = fecha.toLocaleString('es-ES', { month: 'long' })
    // const dia = fecha.toLocaleString('es-ES', { day: '2-digit' })

    return (
        <div className='producto'>
            <div className='producto__descripcion'>
                <FechaProducto fecha={props.producto.fecha} />
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
        </div>
    )
}

export default Producto