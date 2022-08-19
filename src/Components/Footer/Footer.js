import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export default function Footer() {
  return (
    <>
        <Container maxWidth="false">
            <Box component="footer" sx={{ p: 2, borderTop: '1px solid grey' }}>
                <Typography variant='h6'>Copyright</Typography>
            </Box>
        </Container>
    </>
  )
}
