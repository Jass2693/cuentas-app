import React from 'react'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { addCategoria, removeCategoria } from '../store/cuentasSlice';
import { CategoriasList } from './CategoriasList';

export const Categorias = () => {
  const { categorias } = useSelector(state => state.cuentas)
  const dispatch = useDispatch()
  const { nombre, onInputChange, onResetForm } = useForm({
    nombre: ""
  })



  const handleAddCategoria = (event) => {
    event.preventDefault();

    const nuevaCategoria = {
      id: new Date().getTime(),
      nombre,
      monto: 0,
    }
    dispatch(addCategoria(nuevaCategoria))
    

    onResetForm()
    alert(`se agrego ${nombre} a la lista`)

  }
  const handleRemoveCategoria = () => {
   
      dispatch(removeCategoria(nombre))
      
      onResetForm()
      
      alert(`se elimino ${nombre} de la lista`)

    
    
  }



  return (
    <div>
      <h2>Categorias</h2>

      <hr />
      <div className='d-flex justify-content-around'>
        <form
          onSubmit={handleAddCategoria}
          className='d-flex flex-column align-items-center p-2 w-50'>
          <input
            type="text"
            placeholder='Nombre de la categoria'
            className='form control w-75 ' style={{ textAlign: "center" }}
            name='nombre'
            value={nombre}
            onChange={onInputChange}
          />
          <button
            className='btn btn-outline-success w-75 m-2'
            type='submit'
          >Agregar</button>

        </form>

        <div className='d-flex flex-column align-items-center p-2 w-50'>

          <input

            type="text"
            placeholder='Nombre de la categoria'
            className='form control w-75 ' style={{ textAlign: "center" }}
            name='nombre'
            value={nombre}
            onChange={onInputChange}

          />


          <button className='btn btn-outline-danger m-2 w-75'
            onClick={() => handleRemoveCategoria(nombre)}

          >Eliminar</button>

        </div>





      </div>

      {/* lista de categorias */}

      <CategoriasList categorias={categorias} />
    </div>
  )
}
