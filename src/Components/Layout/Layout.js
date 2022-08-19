import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container } from '@mui/system'
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
        <Header />
        <Container sx={{mt: '8rem', mb: '2rem'}} maxWidth="false">
            <Outlet />
        </Container>
        <Footer />
    </>
  )
}
