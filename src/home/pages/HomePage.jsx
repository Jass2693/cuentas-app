import React from 'react'
import { Link } from 'react-router-dom'
import { CompleteCategoryList } from '../../componentes/CompleteCategoryList'

export const HomePage = () => {
  return (
    <div className='mt-4'>
       <h1 className="mt-5" style={{fontSize: "100px"}}>Cuentas App</h1>
       
    <Link to="/ingresos" className='btn btn-success me-2 w-25'>Ingresos</Link>
    <Link to="/gastos" className='btn btn-danger  w-25'>Gastos</Link >

    <hr/>
    <CompleteCategoryList/>
    </div>
  )
}
