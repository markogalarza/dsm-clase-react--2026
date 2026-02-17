import axios from "axios"
import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"


function Login (props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=', authData)
        .then((response) => {
            //console.log(response)
            props.actualizaLogin(true, response.data)
            localStorage.setItem('login', 'true')
            localStorage.setItem('idToken', response.data.idToken)
        })
        .catch((error) => console.log('Se ha producido algún error.'))
    }

    const logoutHandler = () => {
        props.actualizaLogin(false, {})
        localStorage.clear()
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
                            <Button variant='primary' type='submit'>LOGIN</Button>
                        </Col>
                        <Col>
                            <Button variant='warning' onClick={logoutHandler}>LOGOUT</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default Login