import { useEffect, useState } from 'react'
import './App.css'
import NuevoProducto from './components/productos/NuevoProducto'
import Productos from './components/productos/Productos'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import AuthContext from './store/AuthContext'
import ProductosContext from './store/ProductosContext'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import DetalleProducto from './pages/DetalleProducto'
import axios from 'axios'
import EditarProducto from './components/productos/EditarProducto'
import Login from './components/login/Login'
import Registro from './components/login/Registro'

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
  const [loginData, setLoginData] = useState({})
  const [language, setLanguage] = useState('en-EN')

  useEffect(() => {
    if(localStorage.getItem('login')==='true') {
      setLogin(true)
      setLoginData({idToken: localStorage.getItem('idToken')})
    }
  }, [])

  const actualizaLogin = (login, loginData) => {
    setLogin(login)
    setLoginData(loginData)
  }

  const [productosFirebase, setProductosFirebase] = useState([])

  useEffect(() => {
    axios.get('https://dsm-react-clase-2026-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
      .then((response) => {
        //console.log(response.data)
        let arrayProductos = []
        for (let key in response.data) {
          arrayProductos.push(
            {
              id: key,
              nombre: response.data[key].nombre,
              precio: response.data[key].precio,
              fecha: new Date(response.data[key].fecha),
              descripcion: response.data[key].descripcion,
            }
          )
        }
        setProductosFirebase(arrayProductos)
      })
      .catch((error) => console.log('Se ha producido algún error.'))
  }, [])

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

  const contenidoProductos = <>
    {/* <NuevoProducto addProducto={addProducto} /> */}
    <ProductosContext.Provider value={{ borrarProducto: deleteProducto }}>
      <Productos productos={productosFirebase} deleteProducto={deleteProducto} />
      <Productos productos={productos} deleteProducto={deleteProducto} />
    </ProductosContext.Provider>
  </>

  return (
    <>
      <AuthContext.Provider value={{ login: login, language: language, idToken: loginData.idToken }}>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
          <Route path='/products' element={contenidoProductos} />
          <Route path='/product/:id/:token' element={<DetalleProducto />} />
          <Route path='/product-new' element={<NuevoProducto addProducto={addProducto} idToken={loginData.idToken} />} />
          <Route path='/product/edit/:id' element={<EditarProducto idToken={loginData.idToken} />} />
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login actualizaLogin={actualizaLogin} />} />
          <Route path='/register' element={<Registro actualizaLogin={actualizaLogin} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />
      </AuthContext.Provider>
    </>
  )
}

export default App
