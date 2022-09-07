import {useState} from 'react'
import { Box, Container, Typography } from '@mui/material';
import { SettingsNotifications } from '../../Components/Settings/SettingsNotifications';
import { SettingsPassword } from '../../Components/Settings/SettingsPassword';

export const Settings = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Settings
        </Typography>
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  )
}
