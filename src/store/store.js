import {configureStore} from '@reduxjs/toolkit'
import { cuentasSlice } from './cuentasSlice'


export default configureStore({
    reducer: {
     cuentas: cuentasSlice.reducer,
     
    },
  })