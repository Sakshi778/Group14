# NSE BSE Arbitrage System 

## Problem Statement
**Build a trade recommendation system based on Arbitrage opportunity between BSE and NSE (from Nifty stocks).**

## User Requirements
- User should be able to login using his/her username and password.
- User should be able to view arbitrage opportunities.
- User should be able to save stock to his/her account.
- User should be able to delete stocks from his/her account.
- User should be able to view his/her profile.
- User should be able to edit his/her profile.

## Optional Requirements
- User should be able to view stocks which does not have arbitrage opportunity.
- User should be able filter stocks according to his/her need. Filter options could be price range, indexes e.g. nifty 50, nifty 100, bse 100 etc.

## Functional Requirements
- The user should be able to log into the system with a username and password.
- Once logged in, the market data should be used to take the Nifty stocks and their prices from BSE and NSE.
- On the basis of the difference between the two prices, a set of recommendations should be made where arbitrage opportunities exist.
- For these stocks, use live market data (like Yahoo Finance API) and as output display key statistics alongside suggestions.
- Users can select to save any of the recommended arbitrage trades with quantity and current market price. The data should be persisted in DB so that it is not lost after the user closes the browser.
- When the user logs in again the user should be able to see the saved stocks and stats.
- Use an appropriate DB (like Oracle) for persistence, Buisness logic on the application server with a Single Page Web Application (connected using REST API).

## Tech Stack Used
- **Frontend**
    - ReactJs
    - HTML
    - CSS
- **Backend**
    - Spring Boot (Java)
- **Database**
    - MongoDB
