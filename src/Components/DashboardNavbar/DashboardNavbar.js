import { useState } from 'react';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Box,
    Menu,
    MenuItem,
    Button,
    Tooltip,
    Avatar,
    Container,
} from '@mui/material';
import {
    Adb as AdbIcon,
    Menu as MenuIcon
} from '@mui/icons-material';
import {
  Link
} from "react-router-dom";

const pages = [{0:'Home', 1:'/'}, {0:'Leads',1:'/leads'}, {0:'404',1:'/404'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
//import Header from '../Header/Header'

export const DashboardNavbar = (props) => {
    const { onSidebarOpen, ...other } = props;
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    //<Header />
    <AppBar sx={{left: {lg: '280px'}, width: {lg: 'calc(100% - 280px)'}}}>
            <Container maxWidth="false">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', lg: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', lg: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        PhotoCRM
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={onSidebarOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', lg: 'none' },
                        }}
                        >
                        {pages.map((page,key) => (
                            <MenuItem key={key} component={Link} to={page[1]} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page[0]}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>


                    <AdbIcon sx={{ display: { xs: 'flex', lg: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', lg: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        PhotoCRM
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                        {pages.map((page,key) => (
                            <Button
                            component={Link}
                            to={page[1]}
                            key={key}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                            {page[0]}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
  )
}
