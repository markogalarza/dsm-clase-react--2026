import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useParams } from "react-router"

function EditarProducto() {

    const parametros = useParams()

    //const [producto, setProducto] = useState({})

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [fecha, setFecha] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const nombreHandler = (event) => {
        setNombre(event.target.value)
    }

    const precioHandler = (event) => {
        setPrecio(event.target.value)
    }

    const fechaHandler = (event) => {
        setFecha(event.target.value)
    }

    const descripcionHandler = (event) => {
        setDescripcion(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const producto = {
            nombre: nombre,
            precio: precio,
            fecha: new Date(fecha),
            descripcion: descripcion
        }
        //console.log(producto)
        axios.put('https://dsm-react-clase-2026-default-rtdb.europe-west1.firebasedatabase.app/productos/' + parametros.id + '.json', producto)
        .then((response) => {
            alert('Se ha modificado el producto.')
        })
    }

    useEffect(() => {
        axios.get('https://dsm-react-clase-2026-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + parametros.id + '"')
            .then((response) => {
                //console.log(response)
                // setProducto({
                //     id: parametros.id,
                //     nombre: response.data[parametros.id].nombre,
                //     precio: response.data[parametros.id].precio,
                //     fecha: new Date(response.data[parametros.id].fecha),
                //     descripcion: response.data[parametros.id].descripcion
                // })
                setNombre(response.data[parametros.id].nombre)
                setPrecio(response.data[parametros.id].precio)
                setDescripcion(response.data[parametros.id].descripcion)
                setFecha(response.data[parametros.id].fecha)
            })
    }, [])

    return (
        <>
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type='text' onChange={nombreHandler} value={nombre} />
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
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control type='text' onChange={descripcionHandler} value={descripcion} />
                        </Col>
                        <Col>
                            <Button variant='success' type='submit'>EDITAR PRODUCTO</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default EditarProducto