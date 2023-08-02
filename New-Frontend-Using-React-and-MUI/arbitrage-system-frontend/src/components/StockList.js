import React from 'react'
import StockCard from './StockCard'
import Grid from '@mui/material/Grid';


function StockList() {
  return (
    <div>
        <Grid container spacing={2}
        >
            <Grid item xs={12} sm={6} md={4}>
                <StockCard/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <StockCard/>
            </Grid>
        </Grid>
    </div>
  )
}

export default StockList