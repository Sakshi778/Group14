import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import StockList from '../StockList'
function RecommendedStocks(props) {
    const onHandleSave = () => {

    }

    const onHandleLearnMore = () => {

    }
  return (
    <div>
        
        <span style={{ display: 'block'}}>
                <Button variant='contained'>Submit</Button>
        </span>
        <div>
            <StockList stockList = {props.stockList} onHandleSave = {onHandleSave} onHandleLearnMore = {onHandleLearnMore}/>
        </div>
    </div>
  )
}

export default RecommendedStocks