import React from 'react'
import { TextField } from '@mui/material'
import StockCard from '../StockCard';
import Typography from '@mui/material/Typography';
import SideMenu from '../SideMenu';
import StockList from '../StockList';


function StocksDisplay() {
  return (
    <div style={{
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
    }}>
        {/* <SideMenu/> */}
        <Typography variant="h3" color="text.secondary" gutterBottom
        style={{
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 20,
            color: 'black',
            // fontWeight: 'bold',
        }}>
            Recommender
        </Typography>
        <TextField id="outlined-basic" label="Search By Symbol" variant="outlined" 
        style={{
            margin: 5,
            width: '80%',
        }}/>
        <TextField id="outlined-basic" label="Search By Company Name" variant="outlined" 
        style={{
            margin: 5,
            width: '80%',
        }}/>
        <StockList/>
    </div>
  )
}

export default StocksDisplay