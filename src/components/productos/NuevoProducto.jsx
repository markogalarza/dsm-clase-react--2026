import { useEffect, useRef, useState } from "react"
import { Button, Form } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NuevoProducto(props) {

    useEffect(() => {
        refNombre.current.focus()
    }, [])
    
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [fecha, setFecha] = useState('')

    const nombreHandler = (event) => {
        setNombre(event.target.value)
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
    }

    return (
        <Form onSubmit={submitHandler}>
            <Container>
                <Row>
                    <Col>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control ref={refNombre} type='text' onChange={nombreHandler} value={nombre} />
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
    )
}

export default NuevoProducto