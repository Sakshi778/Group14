import { Typography, Paper, IconButton, Collapse, List, ListItem, ListItemText } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import React, { useState } from 'react'
import './StockDetails.css'

function StockDetails({symbol}) {
  const [profileExpand, setProfileExpand] = useState(false)
  const [nseExpand, setNseExpand] = useState(false)
  const [bseExpand, setBseExpand] = useState(false)
  const [arbitrageExpand, setArbitrageExpand] = useState(false)

  const toggleProfileExpand = () => {
    setProfileExpand(!profileExpand);
  };

  const toggleNseExpand = () => {
    setNseExpand(!nseExpand);
  };

  const toggleBseExpand = () => {
    setBseExpand(!bseExpand);
  };

  const toggleArbitrageExpand = () => {
    setArbitrageExpand(!arbitrageExpand);
  };

  return (
    <div className='stock-quote-container'>

      <Typography variant='h4' style={{
      borderBottom: '1px solid black',
      }} gutterBottom>Stock Quote</Typography>

      <div>
        <div className='stock-quote-header'>
          <Typography variant='h6' className='stock-quote-header-title'>Profile</Typography>
          <IconButton onClick={toggleProfileExpand}>
          {profileExpand ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          </div>
          <Collapse in={profileExpand}>
            <List>
              <ListItem>
                <ListItemText primary="Feature 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feature 2" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feature 3" />
              </ListItem>
              {/* Additional features */}
            </List>
          </Collapse>
      </div>
      
      <div>
        <div className='stock-quote-header'>
          <Typography variant='h6' className='stock-quote-header-title'>NSE Quote</Typography>
          <IconButton onClick={toggleNseExpand}>
          {nseExpand ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          </div>
          <Collapse in={nseExpand}>
            <List>
              <ListItem>
                <ListItemText primary="Feature 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feature 2" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feature 3" />
              </ListItem>
              {/* Additional features */}
            </List>
          </Collapse>
      </div>

      <div>
        <div className='stock-quote-header'>
          <Typography variant='h6' className='stock-quote-header-title'>BSE Quote</Typography>
          <IconButton onClick={toggleBseExpand}>
          {bseExpand ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          </div>
          <Collapse in={bseExpand}>
            <List>
              <ListItem>
                <ListItemText primary="Feature 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feature 2" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feature 3" />
              </ListItem>
              {/* Additional features */}
            </List>
          </Collapse>
      </div>

      <div>
        <div className='stock-quote-header'>
          <Typography variant='h6' className='stock-quote-header-title'>Arbitrage Opportunity</Typography>
          <IconButton onClick={toggleArbitrageExpand}>
          {arbitrageExpand ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          </div>
          <Collapse in={arbitrageExpand}>
            <List>
              <ListItem>
                <ListItemText primary="Feature 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feature 2" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feature 3" />
              </ListItem>
              {/* Additional features */}
            </List>
          </Collapse>
      </div>
        
    </div>
  )
}

export default StockDetails