import React, {useEffect, useState} from 'react'
import HeaderAppBar from './components/HeaderAppBar';
import Recommender from './components/recommendator/Recommender';
import SavedStocksTableView from './components/saved_stocks/SavedStocksTableView';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/profile/Profile';
import HomePage from './components/home/HomePage';
import Footer from './components/Footer';

function MainPage() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const totalHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollHeight + windowHeight >= totalHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
          <div className='header'>
            <HeaderAppBar/>
          </div>
          <div style={{
            paddingBottom: '100px',
          }}>
              <Routes>
                <Route
                path='home-page'
                element={<HomePage/>}/>

                <Route
                path='recommender'
                element={<Recommender/>}/>

                <Route
                path='your-stocks'
                element={<SavedStocksTableView />}/>

                <Route
                path='profile'
                element={<Profile />}/>
              </Routes>

              
          </div>

          {/* <div> */}
              <Footer showFooter={showFooter} />
          {/* </div> */}



          
    </div>
  )
}

export default MainPage