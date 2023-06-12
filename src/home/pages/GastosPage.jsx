import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { decrementMonto, addGastos } from '../../store/cuentasSlice';

export const GastosPage = () => {
  const { categorias } = useSelector(state => state.cuentas)
  const { monto, categoriaName, onInputChange, onResetForm } = useForm({
    monto: 0,
    categoriaName: "",
  }

  )
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(decrementMonto({
      nombre: categoriaName,
      monto: Number.parseInt(monto)
    }))

    dispatch(addGastos({
      amount: Number.parseInt(monto)
    }))

    onResetForm()
  }

  return (
    <div>
      <h2>Gastos</h2>
      <p>si todavia no agregaste una categoria agrega <Link to="/categorias">aqui</Link></p>
      <form
        onSubmit={handleSubmit}
        className='d-flex flex-column align-items-center p-2'>
        <input
          placeholder='Nombre de la cuenta'
          style={{ textAlign: "center" }}
          value={categoriaName}
          name='categoriaName'
          onChange={onInputChange}
        />


        <input
          type='number'
          placeholder='monto'
          className='w-25 mt-1'
          style={{ textAlign: "center" }}
          value={monto}
          name='monto'
          onChange={onInputChange} />

        <button className='btn btn-danger w-25 m-2'>Agregar</button>

      </form>


    </div >
  )
}
