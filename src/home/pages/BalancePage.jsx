import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleBalance } from '../../store/cuentasSlice'

export const BalancePage = () => {
  const {ingresos,gastos} = useSelector(state => state.cuentas)
  const dispatch = useDispatch()
  console.log(ingresos);

  let addBalance = ingresos - gastos;

  useEffect(() => {
    
    dispatch(handleBalance(addBalance))
  
 
  }, [])
  

  return (
    <>
    
      <h1 className="mt-5" style={{fontSize: "100px", color: "greenyellow"}}
        
      >Cuentas App</h1>
      <hr/>
    <div className='mt-4'>

      
      <h5>Ingresos totales: ${ingresos}</h5>
      <h5>Gastos totales: ${gastos}</h5>


      <h5>Balance: ${addBalance} </h5>
      
      {(addBalance >= 0) ? <p style={{color: "green"}}>su balance es positivo</p> :  <p style={{color: "red"}}>su balance es negativo</p> }


    </div>
    </>
  )
}
