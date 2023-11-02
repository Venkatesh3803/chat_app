import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./AuthReducer"

const store = configureStore({
    reducer: {
        user: authReducer,
    },
})

export default store