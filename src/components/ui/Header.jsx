import { useContext } from 'react';
import './header.css';
import AuthContext from '../../store/AuthContext';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router';

function Header() {

    const loginContext = useContext(AuthContext)

    return (
        <div className='header'>
            <h2>LIST OR PRODUCTS</h2>
            <p>With description, date and price</p>
            {loginContext.login && <p>HOLA USUARIO</p>}
            <Nav className='justify-content-end'>
                <Nav.Item>
                    <Link to='/'>INICIO</Link>--
                    {/* <Nav.Link href='/'>Inicio</Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                    <Link to='/about-us'>SOBRE NOSOTROS</Link>--
                    {/* <Nav.Link href='/about-us'>Sobre nosotros</Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                    <Link to='/products'>PRODUCTOS</Link>--
                    {/* <Nav.Link href='/products'>Productos</Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                    <Link to='/product-new'>NUEVO PRODUCTO</Link>--
                </Nav.Item>
                <Nav.Item>
                    <Link to='/contact?sede=PAMPLONA&persona=Juan Andrés'>CONTACTO</Link>
                    {/* <Nav.Link  href='/contact'>Contacto</Nav.Link> */}
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Header;