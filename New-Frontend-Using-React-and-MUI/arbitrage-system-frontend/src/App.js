// for now if you want to test any component you created test from this file
import './App.css';
import HeaderAppBar from './components/HeaderAppBar';
import Recommender from './components/recommendator/Recommender';
import SavedStocksTableView from './components/saved_stocks/SavedStocksTableView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import Profile from './components/profile/Profile';



function App() {
  
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
