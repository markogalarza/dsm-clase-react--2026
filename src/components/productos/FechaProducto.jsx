
import { useContext } from 'react'
import './fechaProducto.css'
import AuthContext from '../../store/AuthContext'

function FechaProducto(props) {

    const languageContext = useContext(AuthContext).language

    const ano = props.fecha.getFullYear()
    const mes = props.fecha.toLocaleString(languageContext, { month: 'long' })
    const dia = props.fecha.toLocaleString(languageContext, { day: '2-digit' })

    return (
        <div className='producto-fecha'>
            <div className='producto-fecha__dia'>{dia}</div>
            <div className='producto-fecha__mes'>{mes}</div>
            <div className='producto-fecha__ano'>{ano}</div>
        </div>
    )
}

export default FechaProducto