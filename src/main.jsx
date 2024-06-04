import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route'
import AuthProvider from './Contexts/AuthProvider/AuthProvider'
import { ChakraProvider } from '@chakra-ui/react'
import 'swiper/css';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
