// for now if you want to test any component you created test from this file

import { AppBar, Container, Typography } from '@mui/material';
import './App.css';
import HeaderAppBar from './components/HeaderAppBar';
import { AuthContextProvider } from './components/contexts/AuthContext';
import Recommender from './components/recommendator/Recommender';
import SavedStocksTableView from './components/saved_stocks/SavedStocksTableView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import Header from './components/Header';


function App() {
  
  return (
    <AuthContextProvider>
        <div className="App">
        <BrowserRouter>
          <div className='header'>
            <Header/>
          </div>

          <Routes>
            <Route
            path='/'
            element={<Home/>}/>

            <Route
            path='/recommender'
            element={<Recommender/>}/>

            <Route
            path='/your-stocks'
            element={<SavedStocksTableView />}/>
          </Routes>
          
          <div>
            {/* <Recommender/> */}
            {/* <SavedStockCard stock = {stock}/> */}
            
          </div>

          </BrowserRouter>
      </div>
    </AuthContextProvider>
    
    
  );
}

export default App;
