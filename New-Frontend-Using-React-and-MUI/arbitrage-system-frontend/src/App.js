// for now if you want to test any component you created test from this file

import './App.css';
import HeaderAppBar from './components/HeaderAppBar';
import { AuthContextProvider } from './components/contexts/AuthContext';
import Recommender from './components/recommendator/Recommender';
import SavedStockCard from './components/saved_stocks/SavedStockCard';


function App() {
  // const stock = {
  //   id: '1234',
  //   symbol: 'APOLO',
  //   companyName: 'Apollo Hospital',
  //   bsePrice: 123.5,
  //   nsePrice: 123.4,
  //   timeStamp: new Date().toISOString(),
  //   profit: 0.1
  // }
  return (
    <AuthContextProvider>
      <div className="App">
        <div className='header'>
          <HeaderAppBar/>
        </div>
        
        <div>
          <Recommender/>
          {/* <SavedStockCard stock = {stock}/> */}
        </div>

        
      </div>
    </AuthContextProvider>
    
  );
}

export default App;
