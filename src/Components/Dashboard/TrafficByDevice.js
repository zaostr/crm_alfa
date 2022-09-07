import React from 'react'
import { Box, Card, CardContent, CardHeader, Divider } from '@mui/material';

export const TrafficByDevice = (props) => {
  return (
    <Card {...props}>
      <CardHeader title="Traffic by Device" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
        </Box>
      </CardContent>
    </Card>
  )
}
