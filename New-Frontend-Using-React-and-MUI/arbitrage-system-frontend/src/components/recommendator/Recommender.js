import React, {useState} from 'react'
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography';
import SideBarComponent from './SideBarComponent';
import './Recommender.css'

const sideMenuList = [''];

function Recommender() {
      
  return (
    <div className='recommender-container'>
        <div style={{
            display: 'flex',
            flex: '30%',
            marginRight: '20px'
        }}>
            <SideBarComponent/>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '65%',
        }}>
            <Typography variant="h3" color="text.secondary" gutterBottom
            style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 20,
                color: 'black',
                // fontWeight: 'bold',
            }}>
                Arbitrage Recommender
            </Typography>
            <Typography variant='h6'
            style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 20,
                color: 'grey',
                // fontWeight: 'bold',
                minWidth: '100px',
            }}>Choose the index and get recommendations based on that index.</Typography>
            {/* <FormControl fullWidth variant="outlined">
            <InputLabel>Select Index</InputLabel>
            <Select
                value={selectedValue}
                onChange={(event) => setSelectedValue(event.target.value)}
                label="Select an option"
                style={{
                    width: '70%',
                    marginBottom: 10,
                }}
            >
                {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
            <span style={{ display: 'block'}}>
                <Button variant='contained'>Submit</Button>
            </span> */}
        </div>
        {/* <SideMenu/> */}
        

    </div>
  )
}

export default Recommender