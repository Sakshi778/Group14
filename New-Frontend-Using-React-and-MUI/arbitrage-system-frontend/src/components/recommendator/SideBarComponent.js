import React, {useState} from 'react'
import './SideBarComponent.css'
import { FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';



function SideBarComponent({updateIndex}) {

    
    const [selectedValue, setSelectedValue] = useState('');
    const options = [
        { value: 'nifty50', label: 'NIFTY 50' },
        { value: 'niftyIT', label: 'NIFTY IT' }
        // { value: 'niftyPrivateBank', label: 'NIFTY PRIVATE BANK' },
        // { value: 'niftyBank', label: 'NIFTY BANK' },
        // { value: 'niftyAuto', label: 'NIFTY AUTO'}
    ];

    const handleSubmit = () =>{
        updateIndex(selectedValue);
    }
    return (
        <div className='sidebar-container'>
            
            {/* <Typography gutterBottom variant='h6'
            style={{
                margin: '10px',
                marginBottom: '20px',
                // textDecoration: 'underline'
            }}>Choose Index</Typography> */}

            <FormControl  variant="outlined" style={{
                marginTop: 10
            }}>
            <InputLabel>Select Index</InputLabel>
            <Select
                value={selectedValue}
                onChange={(event) => setSelectedValue(event.target.value)}
                label="Select index"
                style={{
                    width: '250px',
                    marginBottom: 20,
                    marginRight: 20
                }}
            >
                {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
            <Button variant='contained' onClick={handleSubmit} style={{alignSelf: 'stretch', height: 55, marginTop:10}}>Submit</Button>
        </div>
    )
}

export default SideBarComponent