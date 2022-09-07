import React from 'react'
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../../Components/Customer/CustomerListResults';
import { CustomerListToolbar } from '../../Components/Customer/CustomerListToolbar';

import { customers } from '../../data/customers';

export const Customers = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  )
}
