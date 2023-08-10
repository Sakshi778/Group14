import React from 'react'
import { Card,CardContent,Stack,Button,TextField,Typography } from '@mui/material'
export default function LoginCard() {
  return (
    <div style={{
        flex: 1,
        width: '400px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        border: '1px solid #ccc',
    }} >
      <Card>
      <CardContent>
        <Stack spacing={2}>
        <Typography variant='h4'
            style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 20,
                color: 'black',
                fontWeight: 'bold',
                minWidth: '100px',
            }}>Login </Typography>
          <TextField label="Username" variant="outlined" />
          <TextField label="Password" type="password" variant="outlined" />
          <Button variant="contained" color="primary" style={{width:'20%',alignSelf:'center'}}>
            Submit
          </Button>
        </Stack>
      </CardContent>
      </Card>
     </div>
  )
}