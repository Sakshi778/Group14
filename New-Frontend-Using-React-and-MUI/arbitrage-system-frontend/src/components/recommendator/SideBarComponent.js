import React, {useState} from 'react'
import './SideBarComponent.css'
import { FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';



function SideBarComponent() {

    
    const [selectedValue, setSelectedValue] = useState('');
    const options = [
        { value: 'nifty50', label: 'Nifty 50' },
        { value: 'nifty100', label: 'Nifty 100' },
        { value: 'bse100', label: 'BSE 100' },
      ];
    return (
        <div className='sidebar-container'>
            <Typography gutterBottom variant='h6'
            style={{
                margin: '10px',
                marginBottom: '20px',
                // textDecoration: 'underline'
            }}>Choose Index</Typography>
            <FormControl fullWidth variant="outlined">
            <InputLabel>Select Index</InputLabel>
            <Select
                value={selectedValue}
                onChange={(event) => setSelectedValue(event.target.value)}
                label="Select index"
                style={{
                    width: 250,
                    marginBottom: 20,
                    
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
            </span>
        </div>
    )
}

export default SideBarComponent