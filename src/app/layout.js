"use client"
import './globals.css'
import { useState} from 'react'
import { Inter } from 'next/font/google'
import {AppContext,CartProvider} from '@/components/Context/AppContext'
import { AuthProvider } from './Providers'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <CartProvider>
      <body className={inter.className}>
      <AuthProvider >
      {children}  
      <ToastContainer />
      </AuthProvider>
      </body>
    </CartProvider>
    </html>
  )
}
