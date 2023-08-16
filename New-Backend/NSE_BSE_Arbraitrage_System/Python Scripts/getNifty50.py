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

link = 'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050'


def getNifty50():
    start = time.time()

    header = {
        # 'Cookie': 'defaultLang=en; _gid=GA1.2.783641080.1691243316; nsit=KXw0RXMNwKZhDmDoMUSjCeeh; ak_bmsc=495F45BB510CB0ABFA1786CD1A97A770~000000000000000000000000000000~YAAQl4wsMV2N4r2JAQAAce1xxhRqhnXd8YiGs7DxvCqOJq4ai3F+QRJwCFXDJLiT3oHlc+Zz/3N4ksSHmcEbsk7UpJU7s4b7WrAvo6wKZWCw/uPoqWhUfUr8uhBoxNSnIdc8BEutgpIKqs064uxx6+PeI2kkBtMy/2eNqUkWStxc8I38vZ0AfUkyUcaX4CV9uN81VpSXzpOtTfJdKfFFfaRCavMWQkUxDK/+lfsJrf+csQc+9WdvWDXzKa59oHGlzO9sgRUUfDYn+eMvLNIt/k3jZrttm0NS970CsEfIua4tUT4oWLseZ0ZN3hbO0G5s6FsomcnDqRpfFXUW72YHn3MCipb6/+dpT9qVjXyGIc6d9TpsgTphD0md2ovA4d/utMcNynJEDPK0n+T1Azj7g5aKxYdbO5+my4BnuFDlhHNnFDj7C5fkjrfj2xhqCRCHMWg8j3Cx3qhT0FM5bIKfbOLLWtybMPzr5Ta57PrkxQuVAi7QIlsLthBuxIlb; _ga=GA1.1.656431561.1690705039; AKA_A2=A; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY5MTI1NDE1OCwiZXhwIjoxNjkxMjYxMzU4fQ.jsQ_qBFoomDKF2osQ6RCIM-I0fp9x2DBA5mLc7RlUA0; RT="z=1&dm=nseindia.com&si=7b313d48-2714-431b-a097-6267011f2000&ss=lky91xqr&sl=0&se=8c&tt=0&bcn=%2F%2F684d0d49.akstat.io%2F"; _ga_PJSKY6CFJH=GS1.1.1691251502.12.1.1691254159.51.0.0; bm_sv=94CBAA1E060AC50A8F0FABA1C0BAFC11~YAAQPI0sMQ9vGaiJAQAARHmaxhQeXEQQUKlHF0SOkDJaCaL0pD0/8Vg754haN/ESgKUPw99vtvTZOAwIyeFyTRa4MNaw42gpPoVZndEJhhkZiv/bC5cE+5X3AekQudU8J+G62+ux9dvTjs22JrlWN9/ynyU2+t6dIGiLC5Yv4fOpP3FBNxYDXIY+oWjzMeWEKgUApZyQk1B+4XNranFf9zxChkWofuJuilusfGvwSOOAC3QyfKSGsHq2QpB+8IZ5fXpF~1',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }

    webPage = requests.get(url=link, headers=header)

    if webPage.status_code!=200:
        print("Error occured while getting data!")
    
    stocks = webPage.json()['data']

    print(webPage.status_code)

    nifty50_collection = db['Nifty_50_Stocks']
    cursor_nifty50 = nifty50_collection.find({})
    ids_nifty50 = [doc.get('_id') for doc in cursor_nifty50]

    market_status = db['Market_Status']
    cursor_market_status = market_status.find({})
    markets = list(cursor_market_status)

    for market in markets:
        if market['_id'] == 'nifty50':
            update_query = {"_id": market['_id']}
            entry = {
                '$set' : {
                    'Current Price': stocks[0]['lastPrice'],
                    'Last Updated Time': stocks[0]['lastUpdateTime']
                }
            }
            result = market_status.update_one(update_query, entry) 
            break
    
    for i in range(50):
        stock = stocks[i+1]
        id_n = ids_nifty50[i]
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
            result = nifty50_collection.update_one(query, entry) 

    end = time.time()
    print(end-start)

if __name__ == '__main__':
    # logger.info("Python script is being executed")
    db = db.get_db()
    # while True:
    getNifty50()