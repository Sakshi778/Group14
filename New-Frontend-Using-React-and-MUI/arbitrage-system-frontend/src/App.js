// for now if you want to test any component you created test from this file
import './App.css';
import HeaderAppBar from './components/HeaderAppBar';
import { AuthContextProvider } from './components/contexts/AuthContext';
import Recommender from './components/recommendator/Recommender';
import SavedStocksTableView from './components/saved_stocks/SavedStocksTableView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import StockDetails from './components/stock-details/StockDetails';
import Profile from './components/profile/Profile';
import Login from './components/login/Login';
import IndexStatus from './components/recommendator/IndexStatus';


function App() {

  const data = {
    "_id": "nifty50",
    "Symbol": "NIFTY 50",
    "Current Price": 19632.55,
    "Last Updated Time": "09-Aug-2023 16:00:00"
  }
  
  return (
      <div className="App">
        <BrowserRouter>
          <div className='header'>
            <HeaderAppBar/>
          </div>

          <Routes>
            <Route
            path='/home'
            element={<Home/>}/>

            <Route
            path='/recommender'
            element={<Recommender/>}/>

            <Route
            path='/your-stocks'
            element={<SavedStocksTableView />}/>

            <Route
            path='/profile'
            element={<Profile />}/>
          </Routes>

          </BrowserRouter>
      </div>    
    
  );
}

export default App;
