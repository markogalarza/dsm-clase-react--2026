import axios from "axios"
import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"


function Registro (props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=', authData)
        .then((response) => {
            console.log(response)
            props.actualizaLogin(true, response.data)
        })
        .catch((error) => console.log('Se ha producido algún errorrrrrr.'))
    }

    return(
        <>
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control onChange={(event) => setEmail(event.target.value)} type='email' value={email} />
                        </Col>
                        <Col>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control onChange={(event) => setPassword(event.target.value)} type='password' value={password} />
                        </Col>
                        <Col>
                            <Button variant='primary' type='submit'>REGISTRARSE</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default Registro