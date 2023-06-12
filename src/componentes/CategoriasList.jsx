import React from 'react'

export const CategoriasList = ({categorias}) => {
  return (
    <div>

       <ul className='d-flex justify-content-around w-75 container'>
     {
        categorias && categorias.map(categoria => (
           
            <li 
              style={{listStyle: "none",border: "1px solid grey",width:"200px", margin: "auto",borderRadius: "5px",padding: "7px"}}          
              key={categoria.id}>{categoria.nombre}</li>
        ) )
     }
    </ul>
    </div>
  )
}
