# 1680220800
import time
import pandas as pd
import db
from bson import ObjectId
import pprint
import yfinance as yf
import logging
import sys
yf.set_tz_cache_location("custom/cache/location")

def getStockDetails(symbol, companyName):
    stock_details_collection = db['Stock_Profile']
    keysDiv = ['dividendRate', 'dividendYield', 'exDividendDate' ,'payoutRatio', 'fiveYearAvgDividendYield']
    keysStock = ['currentPrice', 'previousClose', 'open', 'dayLow', 'dayHigh', 'regularMarketPreviousClose', 'regularMarketOpen', 'regularMarketDayLow', 'regularMarketDayHigh']
    try:
        bseQuote = yf.Ticker(symbol+'.BO')
        nseQuote = yf.Ticker(symbol+'.NS')
    except Exception as e:
        print("not found on yahoo finance")
    else:
        stock = {}
        stock['_id'] = symbol
        stock['companyName'] = companyName
        for key in keysRe:
            field = key
            stock[field] = nseQuote.info[key]
        
        inserted_data = stock_dcompanyNameails_collection.insert_one(stock)
    finally:
        return

if __name__ == "__main__":
    # args = sys.argv
    # symbol = args[1] if len(args) > 1 else None
    start = time.time()
    # getStockDetails('infy')
    df = pd.read_excel("C:/Users/BHAKTEE/Downloads/MCAP31032023_0 (1).xlsx", header=0)
    db = db.get_db()
    for index, row in df.iterrows():
        if row['Market capitalization']>=500000.00:
            symbol = row['Symbol']
            if symbol != None:
                getStockDetails(symbol, row['Company Name'])
        else: break
    # df.close()
    end = time.time()
    print(end-start)