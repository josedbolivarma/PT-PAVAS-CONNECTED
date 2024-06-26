import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { HomePage } from '../pages'
import { Header } from '../components'
import { ProductPage } from '../pages/ProductPage'

export const DashboardRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products/:id' element={<ProductPage />} />
        </Routes>
    </BrowserRouter>
  )
}
