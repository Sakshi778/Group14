import React, {useContext} from 'react'
import { Card,CardContent,Stack,Button,TextField,Typography } from '@mui/material'
import {AuthContext} from '../contexts/AuthContext'
export default function LoginCard({handleSubmit}) {
    const { username, setUsername, password, setPassword, isLoggedIn, handleLogIn, handleLogOut, setIsLoggedIn } = useContext(AuthContext);
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
          <TextField label="Username" variant="outlined" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
          <TextField label="Password" type="password" variant="outlined" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <Button variant="contained" color="primary" style={{width:'20%',alignSelf:'center'}}
          onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </CardContent>
      </Card>
     </div>
  )
}