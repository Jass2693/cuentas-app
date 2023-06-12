import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { addIngresos, incrementMonto } from '../../store/cuentasSlice';
import {Link} from 'react-router-dom'


export const IngresosPage = () => {


  const { categorias } = useSelector(state => state.cuentas)
  const { monto, categoriaName, onInputChange, onResetForm } = useForm({
    monto: 0,
    categoriaName: "",
  }

  )
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    
    dispatch(incrementMonto( {
      nombre: categoriaName,
      monto: Number.parseInt(monto)
    }  ))
    dispatch(addIngresos({
      amount: Number.parseInt(monto)}))
 

    onResetForm()
  }

  return (
    <div>
      <h2>Ingresos</h2>
      <p>si todavia no agregaste una categoria agrega <Link to="/categorias">aqui</Link></p>
      <form
        onSubmit={handleSubmit}
        className='d-flex flex-column align-items-center p-2'>
        <input
          placeholder='Nombre de la categoria'
          value={categoriaName}
          name='categoriaName'
          onChange={onInputChange}
          style={{textAlign: "center"}}
        />      
        
   
      <input
        type='number'
        placeholder='monto'
        className='w-25 mt-1'
        style={{ textAlign: "center" }}
        value={monto}
        name='monto'
        onChange={onInputChange} />

      <button className='btn btn-success w-25 m-2'>Agregar</button>

    </form>


    </div >
  )
}
