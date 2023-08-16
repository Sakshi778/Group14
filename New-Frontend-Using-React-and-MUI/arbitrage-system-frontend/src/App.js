// for now if you want to test any component you created test from this file
import './App.css';
import HeaderAppBar from './components/HeaderAppBar';
import Recommender from './components/recommendator/Recommender';
import SavedStocksTableView from './components/saved_stocks/SavedStocksTableView';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home'
import Profile from './components/profile/Profile';
import LoginPage from './components/login/LoginPage';
import { useContext } from 'react';
import MainPage from './MainPage';
import { AuthContext } from './components/contexts/AuthContext';
import HomePage from './components/home/HomePage';

const ProtectedRoute = ({ path, element }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};

function App() {

  const { username, setUsername, password, setPassword, isLoggedIn, handleLogIn, handleLogOut, setIsLoggedIn } = useContext(AuthContext);
  
  
  return (
      <div className="App">
        <BrowserRouter>
          {/* <div className='header'>
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
          </Routes> */}
          {/* <Routes>
            <Route path="/" element={isLoggedIn ? <MainPage /> : <LoginPage />} />
            <Route path="/routes" element={isLoggedIn ? <MainPage /> : <LoginPage />} />
          </Routes> */}

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home/*" element={<MainPage />}>
            <Route path="home-page" element={<ProtectedRoute element={<HomePage />} />} />
            <Route path="profile" element={<ProtectedRoute element={<Profile />} />} />
            <Route path="recommender" element={<ProtectedRoute element={<Recommender />} />} />
            <Route path="your-stocks" element={<ProtectedRoute element={<SavedStocksTableView />} />} />
          </Route>  

          <Route path="/routes" element={<ProtectedRoute element={<MainPage />} />} />
        </Routes>

          </BrowserRouter>
          {/* <LoginPage/> */}
      </div>    
    
  );
}

export default App;
