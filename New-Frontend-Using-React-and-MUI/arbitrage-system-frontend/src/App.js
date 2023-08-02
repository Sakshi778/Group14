// for now if you want to test any component you created test from this file

import './App.css';
import HeaderAppBar from './components/HeaderAppBar';
import { AuthContextProvider } from './components/contexts/AuthContext';
import Recommender from './components/recommendator/Recommender';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <div className='header'>
          <HeaderAppBar/>
        </div>
        
        <div>
          <Recommender/>
        </div>

        
      </div>
    </AuthContextProvider>
    
  );
}

export default App;
