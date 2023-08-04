import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './StockCard.css';
// , onHandleSave, onHandleLearnMore}
export default function StockCard(props) {
  const stock = props.stock;
  const symbol = stock.symbol;

  const profitAccurate = Math.abs(stock.bsePrice - stock.nsePrice);
  const profitRounded = parseFloat(profitAccurate.toFixed(2))

  return (
    <Card sx={{
      maxWidth: 400,
      minWidth: 400,
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
            fontSize: '30px'
          }}>
            {stock.symbol}
          </Typography>
          <div>
            <Typography variant="h5" component="div"
            style={{
              flex: 1,
              textAlign: 'right',
              fontSize: '30px'
            }}>
              {profitRounded}
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
      </CardContent>
      <CardActions>
        <Button size="small">Save</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}