import { createSlice } from '@reduxjs/toolkit';

export const cuentasSlice = createSlice({
    name: 'cuentas',
    initialState: {
        categorias: [],
        ingresos: 0,
        gastos: 0,
        balance: 0
    },
    reducers: {

       
        incrementMonto: (state, action) => {

           const {nombre,monto} = action.payload
           const foundCategoria = state.categorias.find(categoria => categoria.nombre === nombre)
           if(foundCategoria) {
           
            foundCategoria.monto += monto
            alert(`${foundCategoria.nombre} ha sido actualizado`)
          
           } else {alert("no se encontro la categoria");}


        },
        decrementMonto: (state, action) => {
            const {nombre,monto} = action.payload
            const foundCategoria = state.categorias.find(categoria => categoria.nombre === nombre)
            if(foundCategoria) {
            
             foundCategoria.monto -= monto
             alert(`${foundCategoria.nombre} ha sido actualizado`)
           
            } else {alert("no se encontro la categoria");}
        },
        addCategoria: (state, action) => {
          

                state.categorias = [...state.categorias, action.payload]
                
            },
        
        removeCategoria: (state, action) => {
            state.categorias = state.categorias.filter(categoria => categoria.nombre !== action.payload)
        },
        addIngresos: (state,action) => {
            const {amount} = action.payload
            
            parseInt(state.ingresos)
            state.ingresos += amount
            
          
                
            },
        addGastos: (state,action) => {
            const {amount} = action.payload
            
            parseInt(state.gastos)
            state.gastos += amount
           
          
                

        }, 
        handleBalance: (state,action) =>{
            state.balance = action.payload
        }   
        
    }
});


// Action creators are generated for each case reducer function
export const {
    incrementMonto,
    decrementMonto,
    addCategoria,
    addIngresos,
    addGastos,
    handleBalance,
    removeCategoria } = cuentasSlice.actions;