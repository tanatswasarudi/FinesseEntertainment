import { configureStore } from '@reduxjs/toolkit' 
import userSliceReducer from './userSlice'
import productSlideReducer from './productSlide'
import showSlideReducer from './showSlide'

export const store = configureStore({
  reducer:{ 
    user : userSliceReducer,
    product : productSlideReducer,
    shows : showSlideReducer
  }
})