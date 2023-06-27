import { useState } from 'react'
import './App.css'
import freeCodeCampLogo from './assets/imagenes/freecodecamp-logo.png'
import ListaDeTareas from './assets/components/ListaDeTareas'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="aplicacion-tareas">
        <div className="freecodecamp-logo-contenedor">
          <img 
            src={freeCodeCampLogo} 
            className='freecodecamp-logo' 
            alt="img" 
          />
        </div>
        <div className="tareas-lista-principal">
          <h1>lista de tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </>
  )
}

export default App
