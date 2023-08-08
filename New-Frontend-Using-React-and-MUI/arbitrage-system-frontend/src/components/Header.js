import { AppBar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const pages = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Recommender',
    path: '/recommender'
  },
  {
    label: 'Your Stocks',
    path: '/your-stocks'
  }
];


function Header() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  }
  return (
    <AppBar position='static'>
      <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ARBITRAGE SYSTEM
          </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
          onClick={handleNavigate('/')}
          sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
          <Button
          onClick={handleNavigate('/recommender')}
          sx={{ my: 2, color: 'white', display: 'block' }}>Recommender</Button>
          <Button
          onClick={handleNavigate('/your-stocks')}
          sx={{ my: 2, color: 'white', display: 'block' }}>Your Stocks</Button>
        </Box>

    </AppBar>
  )
}

export default Header