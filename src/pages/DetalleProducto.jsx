import { useParams, useSearchParams } from "react-router"

function DetalleProducto () {

    const parametros = useParams()
    const [parametrosGet, setparametrosGet] = useSearchParams()

    return(
        <>
        <h2>INFORMACIÓN DEL PRODUCTO {parametros.id}</h2>
        <p>Ficha completa del producto tal.</p>
        <p>Token: {parametros.token}</p>
        <p>Formato ficha: {parametrosGet.get('format')}</p>
        </>
    )
}

export default DetalleProducto