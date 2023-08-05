import time
import yfinance as yf
yf.set_tz_cache_location("custom/cache/location")
import pprint
import db

def getBsePrices():
    start = time.time()
    symbols_collection = db['Nifty_50_Stocks_Symbols']
    stocks_details_collection = db['Stock_Details']

    cursor = symbols_collection.find({})

    symbols = [doc.get('Symbol') for doc in cursor]

    bseSymbols = [ticker+'.BO' for ticker in symbols]

    # get all stock info
    bse_stocksQuote = yf.Tickers(bseSymbols)

    stockQuotes = []

    for symbol in bseSymbols:
        stockQuote = bse_stocksQuote.tickers[symbol].info
        syb = bse_stocksQuote.tickers[symbol].info['symbol']
        syb = syb[:len(syb)-3]
        temp = {
            'Symbol': syb,
            'BSE Price': bse_stocksQuote.tickers[symbol].info['currentPrice']
        }
        stockQuotes.append(temp)

    for stock_data in stockQuotes:
        symbol = stock_data.get('Symbol')  
        new_price = stock_data.get('BSE Price')
        update_query = {"$set": {'BSE Price': new_price}} 
        result = stocks_details_collection.update_one({'Symbol': symbol}, update_query) 

    # if len(result.modified_count) > 0:
    #     print("Success")
    # else:
    #     print("Failed")


        
        

    # df_bse.to_excel(os.getcwd()+'/nifty50Bse.xlsx', index=False)

    end = time.time()
    print(end-start)


if __name__ == '__main__':
    db = db.get_db()
    while True:
        getBsePrices()