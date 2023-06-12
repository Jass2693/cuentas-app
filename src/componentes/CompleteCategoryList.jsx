import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const CompleteCategoryList = () => {
    const { categorias } = useSelector(state => state.cuentas)
    return (
        <div className=''>
            {(categorias.length > 0)
                ? <h3 className='ms-4' style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>Categorias</h3>
                : <p>Esta es una app para controlar tus gastos,
                    antes de registrar uno tenes que agregar una categoria
                    <Link to="/categorias"
                        style={{ textDecoration: "none" }}> aqui</Link></p>}

            <ul>
                {categorias && categorias.map(categoria => (
                    <li
                        style={{ listStyle: "none" }}
                        key={categoria.id}>{categoria.nombre}: ${categoria.monto}</li>
                ))}
            </ul>
        </div>
    )
}
