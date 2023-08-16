import requests
import time
import pandas as pd
import db
from bson import ObjectId
import pprint
import yfinance as yf
import logging
yf.set_tz_cache_location("custom/cache/location")

# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

link = 'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%20IT'


def getNiftyIT():
    start = time.time()

    header = {
        # 'Cookie': '_gid=GA1.2.2092447132.1691504490; defaultLang=en; nseQuoteSymbols=[{"symbol":"DRREDDY","identifier":null,"type":"equity"}]; nsit=eK0HfmNqiRPipbaKOqDaqQLw; AKA_A2=A; _gat_UA-143761337-1=1; ak_bmsc=F12AD3B76F478C0608DEAFD4ECB9D1E1~000000000000000000000000000000~YAAQPzkgF+dSidCJAQAAv3pG2hTOI6rjdd60k7wNLP4lKfRyV3mKs6B4nCb3b+hBEKiRNSBrH7GT5d89O27ZZeRxv9Z5n42vMAVcysTXu5c30rQw3itTMNV3iOD+akdt8DTuZdQ0pZ1mD/AJXhV549JtvQx0XqFZaxDWH76iZGzKTnQrARusn8QPrvPpQx5vX+YFjToqPHVRPUo23SNKZ9YoCRHksSt+Ba7JeO3uj7CIp7gkFU6czxl0jF0zMx/BPwEw/PGP+hKXV7j8C5JBTx93E9+wYU6/5PesYj7NalyBFdxuXBjsV39IsqBuHzqdMeHLtDb1AKzojDiFZ4uPslmpOaGa9oVBKUb3Juw1hPXZBz/nsvm1sp7+xvsrMFEqiMMsuQUhK2jY2KfPciklAW1WxUAmuEO3xsRlPowveTKTfLMT1Lxhka+O1GYCGGdSG7jNuk4npnVdDmBcrxCxCpZv8tV2YAFR/94YMNRIHEkKqKXP/zgFQJFGi49h; _ga=GA1.1.656431561.1690705039; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY5MTU4NDIyNSwiZXhwIjoxNjkxNTkxNDI1fQ.Xk_kanV1ZbHTOLcmVSEdFopwwyS8cMZE-kZxSfINeqk; RT="z=1&dm=nseindia.com&si=7b313d48-2714-431b-a097-6267011f2000&ss=ll3pjzr6&sl=2&se=8c&tt=1yn&bcn=%2F%2F684d0d42.akstat.io%2F"; _ga_PJSKY6CFJH=GS1.1.1691584199.20.1.1691584226.33.0.0; bm_sv=E4C4F799C462A067E061FF9E69317ABD~YAAQPzkgF0hUidCJAQAAcORG2hR19f1LqtStrqGa9zZZhG6Q/lugM4FH4yX3TIKaRaf9QOQcUP1zTXx3J5hchuELt0fpYGvSHM5Sn0ZMQEOOsgF05u1Uxf6nwxTbr7yWveM5kBOOVkY7UwjHNG98d4RIY8uOCWikZzhBstzqkqEwWi9hxfWDFN6NS1F9m659wKp7z0QrkP9MNVXw4nvVhhI/s/g8YYgN/6MptV1uOPruNTg+5n7tTABIkHpYaVB80wu3~1',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }

    webPage = requests.get(url=link, headers=header)

    if webPage.status_code!=200:
        print("Error occured while getting data!")
    
    stocks = webPage.json()['data']

    print(webPage.status_code)

    nifty_it_collection = db['Nifty_IT_Stocks']
    cursor_nifty_it = nifty_it_collection.find({})
    ids_nifty_it = [doc.get('_id') for doc in cursor_nifty_it]

    market_status = db['Market_Status']
    cursor_market_status = market_status.find({})
    markets = list(cursor_market_status)

    for market in markets:
        if market['_id'] == 'niftyIT':
            update_query = {"_id": market['_id']}
            entry = {
                '$set' : {
                    'Current Price': stocks[0]['lastPrice'],
                    'Last Updated Time': stocks[0]['lastUpdateTime']
                }
            }
            result = market_status.update_one(update_query, entry) 
            break

    length = len(stocks)
    
    for i in range(length-1):
        stock = stocks[i+1]
        id_n = ids_nifty_it[i]
        bseQuote = yf.Ticker(stock['symbol']+'.BO')
        if bseQuote!=None:
            bse_price = bseQuote.info['currentPrice']
            entry = {
                '$set' : {
                    'Symbol': stock['symbol'],
                    'Company Name': stock['meta']['companyName'],
                    'NSE Price': stock['lastPrice'],
                    'BSE Price': bse_price,
                    'Profit': abs(stock['lastPrice']-bse_price)
                }
            }
            query = {"_id": ObjectId(id_n)}
            new_data = {"$set": {'Symbol': stock['symbol']}}
            result = nifty_it_collection.update_one(query, entry) 

    end = time.time()
    print(end-start)

if __name__ == '__main__':
    # logger.info("Python script is being executed")
    db = db.get_db()
    # while True:
    getNiftyIT()