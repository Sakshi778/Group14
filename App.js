import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import MainPage from "./Mainpage";
import SavedCards from "./SavedCards";
import LoginPage from "./LoginPage";
import EditProfilePage from "./EditProfilePage";
import './App.css';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  const [cards, setCards] = useState([
    { id: 1, title: "HDFC Bank Limited (HDFCBANK)", bse: "1,604.75 ₹", nse: "1,607.95 ₹", profit: "3.2 ₹", isChecked: false },
    { id: 2, title: "Larsen & Toubro Limited (LT)", bse: "2,354.80 ₹", nse: "2,352.00 ₹", profit: "2.8 ₹", isChecked: false },
    { id: 3, title: "Reliance Industries Ltd (RELIANCE)", bse: "2,520.40 ₹", nse: "2,517.90 ₹", profit: "2.5 ₹", isChecked: false },
    { id: 4, title: "Tata Consultancy Services Ltd (TCS)", bse: "3,243.80 ₹", nse: "3,244.90 ₹", profit: "1.1 ₹", isChecked: false },
    { id: 5, title: "Axis Bank Limited (AXISBANK)", bse: "986.40 ₹", nse: "986.95 ₹", profit: "0.55 ₹", isChecked: false }, 
    { id: 6, title: "Infosys Ltd (INFY)", bse: "1,305.35 ₹", nse: "1,304.90 ₹", profit: "0.45 ₹", isChecked: false },
    { id: 7, title: "ICICI Bank Limited (ICICIBANK)", bse: "944.10 ₹", nse: "943.75 ₹", profit: "0.35 ₹", isChecked: false }
   
  
  ]);

  const [savedCards, setSavedCards] = useState([]);
  const [savedChecked, setSavedChecked] = useState([]);

  useEffect(() => {
    const savedCardsJSON = localStorage.getItem("savedCards");
    if (savedCardsJSON) {
      setSavedCards(JSON.parse(savedCardsJSON));
    }

    const savedCheckedJSON = localStorage.getItem("savedChecked");
    if (savedCheckedJSON) {
      setSavedChecked(JSON.parse(savedCheckedJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedCards", JSON.stringify(savedCards));
    localStorage.setItem("savedChecked", JSON.stringify(savedChecked));
  }, [savedCards, savedChecked]);

  const toggleChecked = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, isChecked: !card.isChecked };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const saveSelected = () => {
    const selectedCards = cards.filter((card) => card.isChecked);
    setSavedCards([...savedCards, ...selectedCards]);
    setSavedChecked([...savedChecked, ...selectedCards.map((card) => card.id)]);
    const updatedCards = cards.map((card) => {
      if (card.isChecked) {
        return { ...card, isChecked: false };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const saveAll = () => {
    setSavedCards([...savedCards, ...cards]);
    setSavedChecked(savedCards.map((card) => card.id));
    const updatedCards = cards.map((card) => ({ ...card, isChecked: false }));
    setCards(updatedCards);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Route exact path="/">
        {isLoggedIn ? (
          <Redirect to="/main" />
        ) : (
          <LoginPage handleLogin={handleLogin} />
        )}
      </Route>

      <Route path="/main">
        {isLoggedIn ? (
          <div>
           <button className="logout-button"onClick={handleLogout}>Logout</button>
            <MainPage
              cards={cards}
              toggleChecked={toggleChecked}
              saveSelected={saveSelected}
              saveAll={saveAll}
            />
            <Link className="edit" to="/edit-profile">Edit Profile</Link>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </Route>
  
      <Route path="/saved">
        <SavedCards
          savedCards={savedCards}
          savedChecked={savedChecked}
          setSavedCards={setSavedCards}
          setSavedChecked={setSavedChecked}
        />
      </Route>
  
      <Route path="/edit-profile">
        {isLoggedIn ? (
          <EditProfilePage />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
    </Router>
  );
}

export default App; 