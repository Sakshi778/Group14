import React, {useState, useEffect} from 'react'
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography';
import SideBarComponent from './SideBarComponent';
import './Recommender.css'
import RecommendedStocks from './RecommendedStocks';
import StockList from '../StockList';


function Recommender() {
    const [gotStocks, setGotStocks] = useState(false);
    const [isFirt, setIsFirst] = useState(false);
    const [stocks, setStocks] = useState([]);

    const handleSubmit = () => {
        //fetch the data for first time
        if(isFirt){
            getData('')
            gotStocks = true;
        }
        else{
            getData('')
            gotStocks = true;
        }
    }

    const getData = (url) => {
        //get it for first time
        const intervalId = setInterval(() => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
              setStocks(data)
              console.log(data)
            })
            .catch((error) => console.error('Error fetching data:', error));
          }, 15000);
          return () => clearInterval(intervalId);
    }

    

    useEffect(() =>{
        getData('http://localhost:8080/getStockDetails')
    }, [])
      
    return (
        <div className='recommender-container'>
            <div style={{
                display: 'flex',
                flex: '30%',
                marginRight: '20px'
            }}>
                {/* <SideBarComponent/>
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
                }}>Choose the index and get recommendations based on that index.</Typography> */}
            </div>

            {/* <RecommendedStocks stockList = {stocks}/> */}
            <StockList stockList = {stocks}/>
            

        </div>
  )
}

export default Recommender