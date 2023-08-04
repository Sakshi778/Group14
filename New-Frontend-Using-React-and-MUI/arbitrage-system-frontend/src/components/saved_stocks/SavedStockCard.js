import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../StockCard.css'
// {id, symbol, companyName, bsePrice, nsePrice, profit, timeStamp}
export default function SavedStockCard({stock}) {

    const date = new Date(stock.timeStamp);
    const formattedDate = date.toLocaleString();

    return (
        <Card sx={{
        maxWidth: 300,
        minWidth: 300,
        margin: 5,
        }}>
        <CardContent >
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
            <Typography variant="h5" component="div"
            style={{
                flex: 1,
                fontSize: '35px'
            }}>
                {stock.symbol}
            </Typography>
            <div>
                <Typography variant="h5" component="div"
                style={{
                flex: 1,
                textAlign: 'right',
                fontSize: '40px'
                }}>
                {stock.profit}
                </Typography>
                <Typography variant="body" component="div"
                style={{
                flex: 1,
                textAlign: 'right',
                fontSize: '15px'
                }}>
                Profit (INR)
                </Typography>
            </div>
            
            </div>
        </CardContent>
        <CardContent>
            <Typography variant="h5" component="div" className='line-clamp'>
            {stock.companyName}
            </Typography>
            <div>
            <Typography variant="body2" color="text.secondary">
                BSE Current Price: {stock.bsePrice}
            </Typography>
            </div>
            <div>
            <Typography variant="body2" color="text.secondary">
                NSE Current Price: {stock.nsePrice}
            </Typography>
            </div>
            <div>
            <Typography variant="body2" color="text.secondary">
                Timestamp: {formattedDate}
            </Typography>
            </div>
        </CardContent>
        <CardActions>
            <Button size="small">Remove</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    );
}