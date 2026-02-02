import './App.css'
import Productos from './components/Productos'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'

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
  const productos = [
    {
      nombre: 'Pantalla',
      precio: 45.67,
      fecha: new Date()
    },
    {
      nombre: 'Teclado',
      precio: 23,
      fecha: new Date()
    },
    {
      nombre: 'Ratón',
      precio: 45,
      fecha: new Date()
    }
  ]

  return (
    <>
      <Header />
      <Productos productos={productos} />
      <Footer />
    </>
  )
}

export default App
