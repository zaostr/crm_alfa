import { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { LoginPage } from '../../Pages/LoginPage/LoginPage'
import { Container } from '@mui/system'
import { Outlet, useLocation, Navigate } from "react-router-dom"

export const Layout = () => {
  const [isLoggedIn, setIsLoginIn] = useState(
    localStorage.getItem('loggedIn') === 'true'
  );
  let location = useLocation();
  
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
