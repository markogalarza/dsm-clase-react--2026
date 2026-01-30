import './App.css'
import Producto from './components/Producto'
import Productos from './components/Productos'

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
      <Productos productos={productos} />
      {/* <Producto producto={productos[0]} />
      <Producto producto={productos[1]} />
      <Producto producto={productos[2]} /> */}

    </>
  )
}

export default App
