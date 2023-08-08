import React, { useState, useEffect } from 'react'
import { TableContainer, TableCell, TableHead, TableRow, TableBody, Table, TableSortLabel, TextField, Button, Paper, CircularProgress } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import './StocksTableView.css'
import Checkbox from '@mui/material/Checkbox';
import SaveIcon from '@mui/icons-material/Save';
import {Alert, AlertTitle} from '@mui/material';
function StocksTableView({url}) {
    const [data, setData] = useState([])
    const [shouldRender, setShouldRender] = useState(false)
    const [saveStatus, setSaveStatus] = useState(false)
    const [gotStocks, setGotStocks] = useState(false);
    const [marketStatus, setMarketStatus] = useState(false);

    const getData = (url) => {
      fetch('http://localhost:8080/marketStatus')
      .then((response) => response.json())
      .then((status) => {
          setMarketStatus(status);
      })
      .catch((error) => console.error('Error fetching data:', error));

      //if market is open then and then only update the stocks after every 15 sec
      if(marketStatus){
        const intervalId = setInterval(() => {
          fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData(data)
            setShouldRender(true);
            setSortedData(data);
            setGotStocks(true);
            console.log(data)
          })
          .catch((error) => console.error('Error fetching data:', error));
        }, 15000);
        return () => clearInterval(intervalId);
      }

      //if market is closed then only fetch last trade data
      else{
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData(data)
            setShouldRender(true);
            setSortedData(data);
            setGotStocks(true);
            console.log(data)
          })
          .catch((error) => console.error('Error fetching data:', error));
      }
      
      
    }

    useEffect(() =>{
        getData(url)
    }, [])
    
    const [sortedData, setSortedData] = React.useState(data);
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [selectAll, setSelectAll] = React.useState(false);
    const [sortConfig, setSortConfig] = React.useState({
        key: null,
        direction: 'asc',
    });

    const [searchText, setSearchText] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
          direction = 'desc';
        }
        setSortConfig({ key, direction });
    
        const sorted = [...data].sort((a, b) => {
          if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
          if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
          return 0;
        });
    
        setSortedData(sorted);
      };

      const handleSearch = (event) => {
        const inputText = event.target.value;
        setSearchText(inputText.toLowerCase());
    
        const filteredData = data.filter((item) =>
          Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(inputText)
          )
        );
    
        setSortedData(filteredData);
      };

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

      const handleRowCheckboxToggle = (rowId) => {
        if (selectedRows.includes(rowId)) {
          setSelectedRows(selectedRows.filter((id) => id !== rowId));
        } else {
          setSelectedRows([...selectedRows, rowId]);
        }
      };
    
      const handleSelectAll = () => {
        if (selectAll) {
          setSelectedRows([]);
        } else {
          setSelectedRows(sortedData.map((item) => item.id));
        }
        setSelectAll(!selectAll);
      };

      async function sendDataToServer(data) {
        try {
          const response = await fetch('http://localhost:8080/sdavis92/addStock', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          if (response.ok) {
            // Data sent successfully
            console.log('Data sent successfully');
            setSaveStatus(true);
            
          } else {
            // Handle error
            console.error('Error sending data to server');
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              <strong>Error occured! Please try again!</strong>
            </Alert>
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }    

    const handleSave = () => {
        var savedStocks = [];
        for (let i=0;i<selectedRows.length;i++){
          var targetObject = data.find(obj => obj.id === selectedRows[i]);
          console.log(targetObject);
          var savedStock = {}
          savedStock.username = 'sdavis92';
          savedStock.symbol = targetObject.symbol;
          savedStock.companyName = targetObject.companyName;
          savedStock.bsePrice = targetObject.bsePrice;
          savedStock.nsePrice = targetObject.nsePrice;
          savedStock.profit = targetObject.profit;
          savedStock.timestamp = Date.now();
          savedStocks.push(savedStock)
        }
        // console.log(savedStocks)
        setSelectedRows([])
        sendDataToServer(savedStocks)
    }

    return (
        <div className="root">

            {!gotStocks && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <CircularProgress style={{marginTop: '10vh'}}/>
                <Typography gutterBottom variant='h4' style={{marginLeft: '25vh', marginRight: '25vh',marginBottom: '25vh', marginTop: '10vh', minWidth: '300px', maxWidth: '1500px'}}>Your Recommendations Are Getting Ready!</Typography>
              </div>
              
            )}

            
            {shouldRender && (
              
              <div>
                {saveStatus && (
                  <Alert onClose={() => {setSaveStatus(false)}}><strong>Stocks have been saved successfully!</strong></Alert>
                )}
                <Typography variant="h4" gutterBottom style={{marginBottom: '5%', marginLeft: '3%', marginTop: '3%', textAlign: 'left'}}>
                    Arbitrage Recommendations
                </Typography>
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: '2%'}}>
                <TextField
                    label="Search Company Name or Symbol"
                    variant="outlined"
                    size="small"
                    value={searchText}
                    onChange={handleSearch}
                    className='searchInput'
                    style={{marginLeft: '3%', marginRight: 5, minWidth: '300px'}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    style={{flex: 'none',  marginLeft: '10px',  alignSelf: 'strech' }}
                    onClick={handleSave}
                >
                    Save
                </Button>
                </div>
            

            <TableContainer  component={Paper} style={{ maxHeight: 'calc(90vh - 90px)' }}>
                <Table stickyHeader>
                <TableHead>
                    <TableRow>
                    <TableCell >
                        {/* <Checkbox
                        checked={selectAll}
                        onChange={handleSelectAll}
                        color="primary"
                        /> */}
                    </TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>
                    <TableSortLabel
                        active={sortConfig.key === 'companyName'}
                        direction={sortConfig.key === 'companyName' ? sortConfig.direction : 'asc'}
                        onClick={() => handleSort('companyName')}
                        >
                        Company Name
                        </TableSortLabel>
                    </TableCell>

                    <TableCell style={{fontWeight: 'bold'}}>
                    <TableSortLabel
                        active={sortConfig.key === 'symbol'}
                        direction={sortConfig.key === 'symbol' ? sortConfig.direction : 'asc'}
                        onClick={() => handleSort('symbol')}
                    >
                        Symbol
                    </TableSortLabel>
                    </TableCell>

                    <TableCell style={{fontWeight: 'bold'}}>
                        <TableSortLabel
                            active={sortConfig.key === 'bsePrice'}
                            direction={sortConfig.key === 'bsePrice' ? sortConfig.direction : 'asc'}
                            onClick={() => handleSort('bsePrice')}
                        >
                            BSE Price (INR)
                        </TableSortLabel>
                    </TableCell>

                    <TableCell style={{fontWeight: 'bold'}}>
                        <TableSortLabel
                            active={sortConfig.key === 'nsePrice'}
                            direction={sortConfig.key === 'nsePrice' ? sortConfig.direction : 'asc'}
                            onClick={() => handleSort('nsePrice')}
                        >
                            NSE Price (INR)
                        </TableSortLabel>
                    </TableCell>

                    <TableCell style={{fontWeight: 'bold'}}>
                        <TableSortLabel
                            active={sortConfig.key === 'profit'}
                            direction={sortConfig.key === 'profit' ? sortConfig.direction : 'asc'}
                            onClick={() => handleSort('profit')}
                        >
                            Profit (INR)
                        </TableSortLabel>
                    </TableCell>
                    {/* Add more table header cells */}
                    </TableRow>
                </TableHead>
                <TableBody>
                {sortedData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => (
                    <TableRow 
                        key={item.id}
                        >
                            {/* <Checkbox
                            checked={selectedRows.includes(item.id)}
                            onChange={() => handleRowCheckboxToggle(item.id)}
                            color="primary"
                            /> */}
                        <TableCell>{item.companyName}</TableCell>
                        <TableCell>{item.symbol}</TableCell>
                        <TableCell>{item.bsePrice}</TableCell>
                        <TableCell>{item.nsePrice}</TableCell>
                        <TableCell>{(item.profit).toFixed(2)}</TableCell>
                        {/* Add more table cells for other data properties */}
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20, 50]}
                component="div"
                count={sortedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </div>
            )}
            
      </div>
    );
  }
  
//   export default MuiTableView;
  

export default StocksTableView