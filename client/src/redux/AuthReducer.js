import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { publicRequest } from './axios'
import { toast } from "react-toastify"



const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "",
  isLoading: false,
  error: false,
}


export const login = createAsyncThunk(
  'loginuser',
  async (body) => {
    try {
      const res = await publicRequest.post(`/auth/login`, body)
      return (res.data)
    } catch (error) {
      return error
    }
  }
)
export const register = createAsyncThunk(
  'registeruser',
  async (body) => {
    try {
      const res = await publicRequest.post(`/auth/register`, body)
      return (res.data)
    } catch (error) {
      return error
    }
  }
)

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = localStorage.getItem("user")
    },
    logOut: (state, action) => {
      localStorage.clear()
      state.user = null
    },
  },

  extraReducers: {
    // register
    [register.pending]: (state, action) => {
      state.loading = true
    },

    [register.fulfilled]: (state, action) => {
      state.loading = false;
      // state.user = action.payload.message ? "" : action.payload
      if (action.payload.message) {
        toast.error("Email already exist")
      } else {
        toast.success("Registered Sucessfully")
        window.location.pathname.replace("/login")
      }
    },
    [register.rejected]: (state, action) => {
      state.error = true
    },


    [login.pending]: (state) => {
      state.loading = true
      state.error = false;
      state.user = ""
    },

    [login.fulfilled]: (state, action) => {

      state.loading = false;
      state.user = action.payload.others
      if (action.payload?.others) {
        toast.success("login Sucess", {
          position: "bottom-center"
        })
      } else {
        toast.error("Invalid credentals")
      }

      if (action.payload?.others) {
        localStorage.setItem("user", JSON.stringify(action.payload?.others))
      }
      if (action.payload?.others?.token) {
        localStorage.setItem("token", action.payload?.others?.token)
      }
    },
    [login.rejected]: (state) => {
      state.error = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { addUser, logOut } = authSlice.actions

export default authSlice.reducer