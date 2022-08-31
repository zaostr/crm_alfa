import { useState, useEffect } from 'react';
import {
    Typography,
    Box,
    ListItem,
    Button,
    Divider, 
    Drawer,
    useMediaQuery
} from '@mui/material';
import {
  Link,
  useLocation
} from "react-router-dom";
import { 
    OpenInNew as OpenInNewIcon,
    Dashboard as DashboardIcon,
    Settings as SettingsIcon,
    Lock as LockIcon,
    UnfoldMore as UnfoldMoreIcon,
    ShoppingBag as ShoppingBagIcon,
    Person as PersonIcon,
    PersonAdd as PersonAddIcon,
    Group as GroupIcon,
    Cancel as CancelIcon
} from '@mui/icons-material';

const items = [
    {
      href: '/',
      icon: (<DashboardIcon fontSize="small" />),
      title: 'Dashboard'
    },
    {
      href: '/leads',
      icon: (<GroupIcon fontSize="small" />),
      title: 'Leads'
    },
    {
      href: '/products',
      icon: (<ShoppingBagIcon fontSize="small" />),
      title: 'Products'
    },
    {
      href: '/account',
      icon: (<PersonIcon fontSize="small" />),
      title: 'Account'
    },
    {
      href: '/settings',
      icon: (<SettingsIcon fontSize="small" />),
      title: 'Settings'
    },
    {
      href: '/sign-in',
      icon: (<LockIcon fontSize="small" />),
      title: 'Login'
    },
    {
      href: '/register',
      icon: (<PersonAddIcon fontSize="small" />),
      title: 'Register'
    },
    {
      href: '/404',
      icon: (<CancelIcon fontSize="small" />),
      title: 'Error'
    }
  ];

export const DashboardSidebar = (props) => {
    const { open, onClose } = props;
    /*const router = useState(true);*/
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
      defaultMatches: true,
      noSsr: false
    });
    const location = useLocation();
  
    useEffect(
      () => {
        if  (!location) {
          return
        }

        if (open) {
          onClose?.();
        }
      },
      [location.pathname]
    );


    const content = (
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <div>
              <Box sx={{ p: 3 }}>
                <Link
                  to="/"
                >
                  Home
                </Link>
              </Box>
              <Box sx={{ px: 2 }}>
                <Box
                  sx={{
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 3,
                    py: '11px',
                    borderRadius: 1
                  }}
                >
                  <div>
                    <Typography
                      color="inherit"
                      variant="subtitle1"
                    >
                      Acme Inc
                    </Typography>
                    <Typography
                      color="neutral.400"
                      variant="body2"
                    >
                      Your tier
                      {' '}
                      : Premium
                    </Typography>
                  </div>
                  <UnfoldMoreIcon
                    sx={{
                      color: 'neutral.500',
                      width: 14,
                      height: 14
                    }}
                  />
                </Box>
              </Box>
            </div>
            <Divider
              sx={{
                borderColor: '#2D3748',
                my: 3
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
                <Box>
                    {items.map((item) => (
                        <ListItem
                            key={item.title}
                            onClick={onClose}
                            disableGutters
                            sx={{
                            display: 'flex',
                            mb: 0.5,
                            py: 0,
                            px: 2
                            }}
                        >
                            <Button
                                component={Link}
                                to={item.href}
                                startIcon={item.icon}
                                disableRipple
                                sx={{
                                backgroundColor: (location.pathname === item.href) && 'rgba(255,255,255, 0.08)',
                                borderRadius: 1,
                                color: (location.pathname === item.href) ? 'secondary.main' : 'neutral.300',
                                fontWeight: (location.pathname === item.href) && 'fontWeightBold',
                                justifyContent: 'flex-start',
                                px: 3,
                                textAlign: 'left',
                                textTransform: 'none',
                                width: '100%',
                                '& .MuiButton-startIcon': {
                                    color: (location.pathname === item.href) ? 'secondary.main' : 'neutral.400'
                                },
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255, 0.08)'
                                }
                                }}
                            >
                                <Box sx={{ flexGrow: 1 }}>
                                    {item.title}
                                </Box>
                          </Button>
                      </ListItem>
                    ))}
                </Box>
            </Box>
            <Divider sx={{ borderColor: '#2D3748' }} />
            <Box
              sx={{
                px: 2,
                py: 3
              }}
            >
              <Typography
                color="neutral.100"
                variant="subtitle2"
              >
                Need more features?
              </Typography>
              <Typography
                color="neutral.500"
                variant="body2"
              >
                Check out our Pro solution template.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  mt: 2,
                  mx: 'auto',
                  width: '160px',
                  '& img': {
                    width: '100%'
                  }
                }}
              >
                <img
                  alt="Go to pro"
                  src="/static/images/sidebar_pro.png"
                />
              </Box>
                <Button
                  to="/"
                  component={Link}
                  color="secondary"
                  endIcon={(<OpenInNewIcon />)}
                  fullWidth
                  sx={{ mt: 2 }}
                  variant="contained"
                >
                  Pro Live Preview
                </Button>
            </Box>
          </Box>
        </>
      );
    
      if (lgUp) {
        return (
          <Drawer
            anchor="left"
            open
            PaperProps={{
              sx: {
                backgroundColor: 'neutral.900',
                color: '#FFFFFF',
                width: 280
              }
            }}
            variant="permanent"
          >
            {content}
          </Drawer>
        );
      }
    
      return (
        <Drawer
          anchor="left"
          onClose={onClose}
          open={open}
          PaperProps={{
            sx: {
              backgroundColor: 'neutral.900',
              color: '#FFFFFF',
              width: 280
            }
          }}
          sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
          variant="temporary"
        >
          {content}
        </Drawer>
      );
}
