import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from './Slice';

export const store = configureStore({
     reducer: {
      globalstore : userDetail,
     },
     });



export default store;