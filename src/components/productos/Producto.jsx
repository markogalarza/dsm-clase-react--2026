import './producto.css'
import FechaProducto from './FechaProducto'
import { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import ProductosContext from '../../store/ProductosContext';

function Producto(props) {

    const [nombre, setNombre] = useState(props.producto.nombre)

    // const nombre = 'Pantalla'
    // const precio = 45.76
    // const fecha = new Date()
    //const nombre = props.producto.nombre
    const precio = props.producto.precio
    // const fecha = props.producto.fecha
    // const ano = fecha.getFullYear()
    // const mes = fecha.toLocaleString('es-ES', { month: 'long' })
    // const dia = fecha.toLocaleString('es-ES', { day: '2-digit' })

    const borrarContext = useContext(ProductosContext)

    const clickHandler = () => {
        //alert(props.producto.id)
        //nombre = 'NUEVO NOMBRE'
        setNombre('NUEVO NOMBRE')
        //console.log(nombre)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const borraHandlerP = () => {
        //alert('handler')
        props.deleteProducto(props.producto.id)
    }

    const borraHandlerC = () => {
        borrarContext.borrarProducto(props.producto.id)
    }

    return (
        <div className='producto'>
            <div className='producto__descripcion'>
                <FechaProducto fecha={props.producto.fecha} />
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
                <Button variant='warning' onClick={handleShow}>
                    VER DETALLES
                </Button>
                <Button variant='primary' onClick={clickHandler}>CAMBIA NOMBRE</Button>
                <Button variant='danger' onClick={borraHandlerP}>BORRAR P</Button>
                <Button variant='danger' onClick={borraHandlerC}>BORRAR C</Button>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>PRODUCTO: {nombre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Precio: {precio}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            OK
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Producto