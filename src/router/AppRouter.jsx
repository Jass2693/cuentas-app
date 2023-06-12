import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage,BalancePage, IngresosPage, GastosPage } from '../home/pages'
import { Categorias } from '../componentes/Categorias'


export const AppRouter = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>

    <Route path='/balance' element={<BalancePage/>}></Route>



    <Route path='/ingresos' element={<IngresosPage/>}></Route>
    
    <Route path='/gastos' element={<GastosPage/>}></Route>
    <Route path='/categorias' element={<Categorias/>}></Route>
   </Routes>
  )
}
