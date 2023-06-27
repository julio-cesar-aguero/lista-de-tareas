import React, { useState } from 'react'
import '../estilos/lista-de-tareas.css'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'
const ListaDeTareas = () => {

  const [tareas, setTarea] = useState([])

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTarea(tareasActualizadas);
    }
  }
  const eliminarTarea = id => {
    const tareaActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTarea(tareaActualizadas);
  }
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea;
    })
    setTarea(tareasActualizadas);
  }
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }
      </div>
    </>
  )
}
export default ListaDeTareas;