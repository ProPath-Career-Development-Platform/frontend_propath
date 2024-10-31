import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import {NextUIProvider} from '@nextui-org/react'
import {UserProvider} from './utils/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
     <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </NextUIProvider> 
)
