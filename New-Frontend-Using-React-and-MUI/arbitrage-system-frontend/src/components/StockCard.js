import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './StockCard.css';

export default function StockCard() {
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
            APOLO
          </Typography>
          <div>
            <Typography variant="h5" component="div"
            style={{
              flex: 1,
              textAlign: 'right',
              fontSize: '40px'
            }}>
              0.2
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
          Apollo Hospital limited arial hospital with incoming
        </Typography>
        <div>
          <Typography variant="body2" color="text.secondary">
            BSE Current Price: 125.5
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            NSE Current Price: 125.7
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