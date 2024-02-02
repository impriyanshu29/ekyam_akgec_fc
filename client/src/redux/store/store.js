import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../function/userSlice'

export const store = configureStore({
    reducer:{
       user: userReducer,
    },
})