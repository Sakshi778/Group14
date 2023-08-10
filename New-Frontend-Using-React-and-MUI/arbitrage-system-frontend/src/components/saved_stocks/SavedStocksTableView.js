import React, { useState, useEffect, memo } from 'react'
import { TableContainer, TableCell, TableHead, TableRow, TableBody, Table, TableSortLabel, TextField, Button, Paper, CircularProgress } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import '../recommendator/StocksTableView.css'
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import {Alert, AlertTitle} from '@mui/material';
function SavedStocksTableView() {
    const [data, setData] = useState([])
    const [deleteStatus, setDeleteStatus] = useState(false)

    const getData = (url) => {
      //if market is closed then only fetch last trade data
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData(data)
            setSortedData(data);
            console.log(data)
          })
          .catch((error) => console.error('Error fetching data:', error)); 
    }

    useEffect(() =>{
        getData('http://localhost:8080/sdavis92/stocks')
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
          const response = await fetch('http://localhost:8080/deleteStock', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          if (response.ok) {
            // Data sent successfully
            console.log('Data sent successfully');
            setDeleteStatus(true);
            for(let i = 0; i < data.length; i++) {
              setSortedData(prevItems => prevItems.filter(item => !data.includes(item.id)));
            }
            
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

    const handleDelete = () => {
        sendDataToServer(selectedRows)
        setSelectedRows([])
    }

    const formatDateAndTime = (epochTimestamp) => {
      const date = new Date(epochTimestamp); // Convert seconds to milliseconds
  
      // Using toLocaleString to format the date and time
      const formattedDateTime = date.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
      });
  
      return formattedDateTime;
    };

    const buyHandler = (bsePrice, nsePrice) => {
      if(bsePrice>nsePrice) return "NSE";
      else return "BSE";
    }

    const sellHandler = (bsePrice, nsePrice) => {
      if(bsePrice>nsePrice) return "BSE";
      else return "NSE";
    }

    return (
        <div className="root">
              <div>
                {deleteStatus && (
                  <Alert onClose={() => {setDeleteStatus(false)}}><strong>Stocks have been deleted successfully!</strong></Alert>
                )}
                <Typography variant="h4" gutterBottom style={{marginBottom: '5%', marginLeft: '3%', marginTop: '3%', textAlign: 'left'}}>
                    Saved Stocks
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
                    startIcon={<DeleteIcon />}
                    style={{flex: 'none',  marginLeft: '10px',  alignSelf: 'strech' }}
                    onClick={handleDelete}
                >
                    Delete
                </Button>
                </div>
            

            <TableContainer  component={Paper} style={{ maxHeight: 'calc(90vh - 90px)' }}>
                <Table stickyHeader>
                <TableHead>
                    <TableRow>
                    <TableCell >
                        <Checkbox
                        checked={selectAll}
                        onChange={handleSelectAll}
                        color="primary"
                        />
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

                    <TableCell style={{fontWeight: 'bold'}}>
                        <TableSortLabel
                            active={sortConfig.key === 'profit'}
                            direction={sortConfig.key === 'profit' ? sortConfig.direction : 'asc'}
                            onClick={() => handleSort('profit')}
                        >
                            Bought On (Exchange Market)
                        </TableSortLabel>
                    </TableCell>

                    <TableCell style={{fontWeight: 'bold'}}>
                        <TableSortLabel
                            active={sortConfig.key === 'profit'}
                            direction={sortConfig.key === 'profit' ? sortConfig.direction : 'asc'}
                            onClick={() => handleSort('profit')}
                        >
                            Sold On (Exchange Market)
                        </TableSortLabel>
                      </TableCell>

                    <TableCell style={{fontWeight: 'bold'}}>
                        <TableSortLabel
                            active={sortConfig.key === 'timestamp'}
                            direction={sortConfig.key === 'timestamp' ? sortConfig.direction : 'asc'}
                            onClick={() => handleSort('timestamp')}
                        >
                            Timestamp
                        </TableSortLabel>
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {sortedData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => (
                    <TableRow 
                        key={item.id}
                        >
                            <Checkbox
                            checked={selectedRows.includes(item.id)}
                            onChange={() => handleRowCheckboxToggle(item.id)}
                            color="primary"
                            />
                        <TableCell>{item.companyName}</TableCell>
                        <TableCell>{item.symbol}</TableCell>
                        <TableCell>{item.bsePrice}</TableCell>
                        <TableCell>{item.nsePrice}</TableCell>
                        <TableCell>{(item.profit).toFixed(2)}</TableCell>
                        <TableCell>{buyHandler(item.bsePrice, item.nsePrice)}</TableCell>
                        <TableCell>{sellHandler(item.bsePrice, item.nsePrice)}</TableCell>
                        <TableCell>{formatDateAndTime(item.timestamp)}</TableCell>
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
      </div>
    );
  }  

export default memo(SavedStocksTableView)