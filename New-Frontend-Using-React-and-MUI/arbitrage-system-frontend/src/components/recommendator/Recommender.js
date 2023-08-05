import React, {useState, useEffect} from 'react'
import Typography from '@mui/material/Typography';
import SideBarComponent from './SideBarComponent';
import './Recommender.css'
import StocksTableView from './StocksTableView';

const baseUrl = 'http://localhost:8080/';

function Recommender() {
    const [index, setIndex] = useState('')
    const [display, setDisplay] = useState(true)

    const updateIndex = (index) => {
        setIndex(index);
        setDisplay(false);
    };
      
    return (
        <div className='recommender-container'>
            <div style={{
                display: 'flex',
                flex: '30%',
                marginRight: '20px'
            }}>
            <SideBarComponent updateIndex={updateIndex}/>
            </div>
            {display && (
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
                    }}>
                        Arbitrage Recommender
                    </Typography>
                    <Typography variant='h6'
                    style={{
                        textAlign: 'center',
                        marginTop: 20,
                        marginBottom: 20,
                        color: 'grey',
                        minWidth: '100px',
                    }}>Choose the index and get recommendations based on that index.</Typography>
                </div>
            )}

            {!display && (
                <div>
                <StocksTableView url={baseUrl+index}/>
                </div>
            )}
        </div>
  )
}

export default Recommender