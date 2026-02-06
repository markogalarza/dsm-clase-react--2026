import { useState } from 'react'
import './App.css'
import NuevoProducto from './components/productos/NuevoProducto'
import Productos from './components/productos/Productos'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import AuthContext from './store/AuthContext'
import ProductosContext from './store/ProductosContext'

// function Producto() {
//   return (
//     <div>
//       <p>Nombre: Pantalla</p>
//       <p>Precio: 45.67</p>
//       <p>Fecha: 2026/2/2</p>
//     </div>
//   )
// }

function App() {

  // const producto = {
  //   nombre: 'Pantalla',
  //   precio: 45.67,
  //   fecha: new Date()
  // }

  const [login, setLogin] = useState(false)
  const [language, setLanguage] = useState('en-EN')

  const [productos, setProductos] = useState(
    [
      {
        id: Math.random().toString(),
        nombre: 'Pantalla',
        precio: 45.67,
        fecha: new Date(2025, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Teclado',
        precio: 23,
        fecha: new Date(2026, 4, 4)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón',
        precio: 45,
        fecha: new Date(2025, 6, 6)
      }
      ,
      {
        id: Math.random().toString(),
        nombre: 'Auriculares',
        precio: 23,
        fecha: new Date(2025, 10, 1)
      }
    ]
  )

  const addProducto = (producto) => {
    4
    //alert('Addproducto')
    //productos.push(producto)
    // let productosAux = [...productos]
    // productosAux.push(producto)
    // setProductos(productosAux)
    setProductos((prevProductos) => {
      return [producto, ...prevProductos]
    })
  }

  const deleteProducto = (id) => {
    // alert('Borrar ' + id)
    // let productosAux = [...productos]
    // productosAux = productosAux.filter((elemento) => {
    //   return elemento.id !== id
    // })
    // setProductos(productosAux)
    setProductos((prevProductos) => {
      return prevProductos.filter((elemento) => {
        return elemento.id !== id
      })
    })
  }

  return (
    <>
      <AuthContext.Provider value={{ login: login, language: language }}>
        <Header />
        <NuevoProducto addProducto={addProducto} />
        <ProductosContext.Provider value={{borrarProducto: deleteProducto}}>
          <Productos productos={productos} deleteProducto={deleteProducto} />
        </ProductosContext.Provider>
        <Footer />
      </AuthContext.Provider>
    </>
  )
}

export default App
