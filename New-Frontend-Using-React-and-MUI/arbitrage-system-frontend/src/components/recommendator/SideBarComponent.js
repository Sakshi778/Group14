import React, {useState} from 'react'
import './SideBarComponent.css'
import { FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';



function SideBarComponent({updateIndex}) {

    
    const [selectedValue, setSelectedValue] = useState('');
    const options = [
        { value: 'nifty50', label: 'NIFTY 50' },
        { value: 'niftyMidCap50', label: 'NIFTY MIDCAP 50' },
        { value: 's&pBseSensex', label: 'S&P BSE SENSEX' },
        { value: 's&pBseSensex50', label: 'S&P BSE SENSEX 50' },
        {value: 's&pBseBharat22', label: 'S&P BSE BHARAT 22'}
    ];

    const handleSubmit = () =>{
        updateIndex(selectedValue);
    }
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
                <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            </span>
        </div>
    )
}

export default SideBarComponent