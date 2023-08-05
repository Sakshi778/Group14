import time
import yfinance as yf
yf.set_tz_cache_location("custom/cache/location")
import db
import pprint

def getNsePrices():
    start = time.time()

    
    symbols_collection = db['Nifty_50_Stocks_Symbols']
    stocks_details_collection = db['Stock_Details']

    cursor = symbols_collection.find({})

    symbols = [doc.get('Symbol') for doc in cursor]


    nseSymbols = [ticker+'.NS' for ticker in symbols]

    # get all stock info
    nse_stocksQuote = yf.Tickers(nseSymbols)
    stockQuotes = []

    pprint.pprint(nse_stocksQuote.tickers['KOTAKBANK.NS'].info)

    for symbol in nseSymbols:
        print(symbol)
        if nse_stocksQuote.tickers[symbol] == None:
            print("not found")
            continue
        stockQuote = nse_stocksQuote.tickers[symbol].info
        syb = nse_stocksQuote.tickers[symbol].info['symbol']
        syb = syb[:len(syb)-3]
        temp = {
            'Symbol': syb,
            'NSE Price': nse_stocksQuote.tickers[symbol].info['currentPrice']
        }
        stockQuotes.append(temp)

    for stock_data in stockQuotes:
        symbol = stock_data.get('Symbol')  
        new_price = stock_data.get('NSE Price')
        update_query = {"$set": {'NSE Price': new_price}} 
        result = stocks_details_collection.update_one({'Symbol': symbol}, update_query) 

    # if len(result.modified_count) > 0:
    #     print("Success")
    # else:
    #     print("Failed")
    end = time.time()
    print(end-start)

if __name__ == '__main__':
    db = db.get_db()
    # while True:
    getNsePrices()