import axios from "axios"
import { use, useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, useParams, useSearchParams } from "react-router"

function DetalleProducto() {

    const parametros = useParams()
    const [parametrosGet, setparametrosGet] = useSearchParams()

    const [producto, setProducto] = useState({})

    useEffect(() => {
        axios.get('https://dsm-react-clase-2026-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + parametros.id + '"')
            .then((response) => {
                //console.log(response)
                setProducto({
                    id: parametros.id,
                    nombre: response.data[parametros.id].nombre,
                    precio: response.data[parametros.id].precio,
                    fecha: new Date(response.data[parametros.id].fecha),
                    descripcion: response.data[parametros.id].descripcion
                })
            })
    }, [])

    return (
        <>
            <h2>INFORMACIÓN DEL PRODUCTO {producto.nombre}</h2>
            <p>Descripción del producto: {producto.descripcion}</p>
            <Button variant='warning'><Link to={`/product/edit/${parametros.id}`}>EDITAR PRODUCTO</Link></Button>
            <h2>-----------------------------</h2>
            <h2>INFORMACIÓN DEL PRODUCTO {parametros.id}</h2>
            <p>Ficha completa del producto tal.</p>
            <p>Token: {parametros.token}</p>
            <p>Formato ficha: {parametrosGet.get('format')}</p>
        </>
    )
}

export default DetalleProducto