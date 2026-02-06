import { useContext } from 'react';
import './header.css';
import AuthContext from '../../store/AuthContext';

function Header() {

    const loginContext = useContext(AuthContext)

    return (
        <div className='header'>
            <h2>LIST OR PRODUCTS</h2>
            <p>With description, date and price</p>
            {loginContext.login && <p>HOLA USUARIO</p>}
        </div>
    )
}

export default Header;