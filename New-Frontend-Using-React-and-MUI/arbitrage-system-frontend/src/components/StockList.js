import React from 'react'
import StockCard from './StockCard'
import Grid from '@mui/material/Grid';

// onHandleSave = {props.onHandleSave} onHandleLearnMore = {props.onHandleLearnMore}

function StockList(props) {
  return (
    <div>
        <Grid container spacing={0.5} style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {props.stockList.map((stock, id) => (
              <Grid key = {id} stock xs = {12} sm={8} md={6}>
                <StockCard key={stock.id} stock={stock} />
              </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default StockList