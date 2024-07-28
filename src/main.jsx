import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import {NextUIProvider} from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
      <RouterProvider router={router} />
  </NextUIProvider> 
)
