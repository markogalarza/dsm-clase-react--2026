import { useEffect, useRef, useState } from "react"
import { Button, Form } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactDOM from 'react-dom'
import './nuevoProducto.css'
import { useNavigate } from "react-router"

function InfoModal(props) {

    const [open, setOpen] = useState(true)

    const cerrarHandler = () => {
        setOpen(false)
    }
    if (open) {
        return (
            <>
                <h2>{props.titulo}</h2>
                <p>{props.mensaje}</p>
                <button onClick={cerrarHandler}>CERRAR</button>
            </>
        )
    }

    return null

}

function NuevoProducto(props) {

    useEffect(() => {
        refNombre.current.focus()
    }, [])

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [fecha, setFecha] = useState('')

    const [nombreValid, setNombreValid] = useState(true)

    const navega = useNavigate()

    const nombreHandler = (event) => {
        setNombre(event.target.value)
        setNombreValid(true)
    }

    const nombreBlurHandler = () => {
        if (nombre.length === 0) {
            setNombreValid(false)
        }
    }

    const precioHandler = (event) => {
        setPrecio(event.target.value)
    }

    const fechaHandler = (event) => {
        setFecha(event.target.value)
    }

    const refNombre = useRef()

    const submitHandler = (event) => {
        //alert('Enviado')
        event.preventDefault()
        //props.addProducto()
        const producto = {
            id: Math.random().toString(),
            nombre: nombre,
            precio: precio,
            fecha: new Date(fecha)
        }
        props.addProducto(producto)
        setNombre('')
        setPrecio('')
        setFecha('')
        refNombre.current.focus()
        setTimeout(() => {navega('/products')}, 500)  
    }

    // const contenidoModal = <InfoModal titulo='Valida el formulario' mensaje='El campo nombre está vacío' />
    const contenidoModal = ReactDOM.createPortal(
        <InfoModal titulo='Valida el formulario' mensaje='El campo nombre está vacío' />
        ,
        document.getElementById('overlay'))

    return (
        <>
            {/* {!nombreValid && contenidoModal} */}
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label className={nombreValid ? '' : 'invalid'}>Nombre:</Form.Label>
                            <Form.Control ref={refNombre} type='text' onChange={nombreHandler} onBlur={nombreBlurHandler} value={nombre} />
                        </Col>
                        <Col>
                            <Form.Label>Precio:</Form.Label>
                            <Form.Control type='number' onChange={precioHandler} value={precio} />
                        </Col>
                        <Col>
                            <Form.Label>Fecha:</Form.Label>
                            <Form.Control type='date' onChange={fechaHandler} value={fecha} />
                        </Col>
                        <Col>
                            <Button variant='success' type='submit'>NUEVO PRODUCTO</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default NuevoProducto