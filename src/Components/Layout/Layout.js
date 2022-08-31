import {useState} from 'react'
import Footer from '../Footer/Footer'
import { DashboardSidebar } from '../DashboardSidebar/DashboardSidebar'
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import { Box } from '@mui/system'
import { Outlet } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../themes/theme1';

export const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <ThemeProvider theme={theme}>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
      <Box sx={{pt: '74px', pl: {lg: '280px'}}} maxWidth="false">
        <Outlet />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
