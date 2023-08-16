import { Typography, TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { memo } from 'react'
import './HomePage.css'
import SearchIcon from '@mui/icons-material/Search';
import StockDetails from '../stock-details/StockDetails';



function Home() {
  const [symbol, setSymbol] = useState('')
  const [gotSymbol, setGotSymbol] = useState(false)
  const [shouldStockRender, setShouldRender] = useState(false)

  const handleChange = (event) => {
    const inputText = event.target.value;
    setSymbol(inputText);
  }

  const handleSearch = () => {
    setGotSymbol(true);
    setShouldRender(true);
  }


  return (
    <div className='home-container'>
      <div className='search-container'>
        <TextField 
        id="search-box" 
        label="Search by Symbol" 
        variant="outlined" 
        className='search-symbol'
        value={symbol}
        onChange={handleChange}
        />
        <Button 
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        style={{flex: 'none',  marginLeft: '10px',  alignSelf: 'strech', height: 55 }}
        onClick={handleSearch}>Search</Button>
      </div>
        {!gotSymbol && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Typography variant='h3' gutterBottom>Stock Quote</Typography>
            <Typography variant='h6' gutterBottom>Enter the symbol to get Stock information.</Typography>
          </div>
        )}

      <div>
        {shouldStockRender && (
          <StockDetails symbol={symbol} />
        )}
      </div>
        
    </div>
  )
}

export default memo(Home)