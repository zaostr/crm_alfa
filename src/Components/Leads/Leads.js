import { Button } from '@mui/material'
import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { LeadsListResults } from '../../Components/Leads/LeadsListResults';
import { LeadsListToolbar } from '../../Components/Leads/LeadsListToolbar';

import { customers } from '../../data/customers';

export const Leads = () => {
  const {signOut} = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Leads</h2>
      <Button onClick={() => signOut(()=>navigate('/sign-in', {replace: true}))}>Sign out</Button>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <LeadsListToolbar />
          <Box sx={{ mt: 3 }}>
            <LeadsListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </div>
  )
}
