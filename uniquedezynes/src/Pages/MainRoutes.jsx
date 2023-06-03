import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { Admin } from './Admin'
import { Products } from './Products'
import { Men } from './Men'
import { Women } from './Women'
import { SingleProduct } from './SingleProduct'
import { Wishlist } from './Wishlist'
import { Bag } from './Bag'
import { Payment } from './Payment'

export const MainRoutes = () => {
  return (
  <Box>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<SingleProduct/>} />
        <Route path='/products' element={<Products/>} />
        {/* <Route path='/men/:id' element={<Men/>} /> */}
        <Route path='/women' element={<Women/>} />
        <Route path='/bag' element={<Bag/>} />
        <Route path='/payment' element={<Payment/>} />
    </Routes>
  </Box>
  )
}
