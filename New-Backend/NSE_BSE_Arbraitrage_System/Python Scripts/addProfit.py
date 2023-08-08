import requests
import time
import pandas as pd
import db
from bson import ObjectId
import pprint
import yfinance as yf
yf.set_tz_cache_location("custom/cache/location")

link = 'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%20IT'


def getNifty50():
    start = time.time()

    header = {
        'Cookie': 'nsit=4FLAGfGHzT70jwQz9y0ByCrU; defaultLang=en; ak_bmsc=4EB650B735F30522A1C3C8F11693CBD1~000000000000000000000000000000~YAAQBY0sMdks1LWJAQAADBo+1RTXAdX3yonDQH0Z4kBOARSLc9ru/xCbISnJwH3NYeVx3EGblowt0grXx8FO4cCkkG0jIwZ0TGui5D1gtYT4kPS2vPSTrSo668DGxdQzUnWkqAwiigPsD5I4bANG+qz1djDJYfFGbGZeVkkQ8ELEJFnLiGGgmJgFDFqm1ibM3Kjby3Pr4cyus72SPpYUcTaEX8rN85wpvOQydTm846IljUxxocOgYaSllCIg+8l1/HDV+cQdVdExC1yTvYJPjQ9XMyTDsD3fB89xbyhpil6aoThVNT55RcCVdukphAaJbvYG8DEEk/0/sF779EiKsIUPC8lZYv7tm9uO0eZ9fv6GQRj0fP8N8dfZmw0ZneajEfx8h7Afa4b9ifg75kBaipfebaUvyVEZAmWnK755yJzIc1kv6HZ4FGFDQZpvHTtnRJLXzW+vrRWlobG7VDPRdw9rfAT2j2nThSETPZigxZ91Z7YTTGlhPNiDF7dZ; AKA_A2=A; _gid=GA1.2.2092447132.1691504490; _ga=GA1.1.656431561.1690705039; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY5MTUwNDYyMSwiZXhwIjoxNjkxNTExODIxfQ.tcp0ROr2A0nG12jaFqX7RkOfVA9mqHmmZbWOLH_KNrY; RT="z=1&dm=nseindia.com&si=7b313d48-2714-431b-a097-6267011f2000&ss=ll2e3hhd&sl=2&se=8c&tt=29o&bcn=%2F%2F684d0d49.akstat.io%2F"; _ga_PJSKY6CFJH=GS1.1.1691504474.16.1.1691504622.59.0.0; bm_sv=357E8FD44647917930AEEA13B0155D1B~YAAQJ40sMfawvc6JAQAA3DqI1RR9ZnXdneAP7EQ2sqCCC4megyEELuBS+0xssLMoMSMiVzwpXDiu2JehSkiYEWhQESN7RwbJY0WK0M4+8OV5AGXxISPwzb6I+tH/GZBjTOssS4roy4XeJ8PmQ2xtDPEJZJumlCdbD8uUSAh1jPRjaVf8M9wlgpH2b3Lv0c3lI885ZIIPJ3lUqBTaMNe2iKeTcDRLtEEUpzKQnxa/j7qai3NJ/yABOi8vSa+VQ3pKOWBX~1',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    }

    webPage = requests.get(url=link, headers=header)


    if webPage.status_code!=200:
        print("Error occured while getting data!")
        print(webPage.status_code)
        return
    
    

    print(webPage.status_code)

    stocks = webPage.json()['data']

    nifty_it_collection = db['Nifty_IT_Stocks']

    market_status = db['Market_Status']

    # mentry = {
    #     'Symbol': stocks[0]['symbol'],
    #     'Current Price': stocks[0]['lastPrice'],
    #     'Last Updated Time': stocks[0]['lastUpdateTime']
    # }
    # result = market_status.insert_one(mentry)

    length = len(stocks) 
    # bseQuote = yf.Ticker('GUJGASLTD.BO')
    
    for i in range(length-1):
        stock = stocks[i+1]
        bseQuote = yf.Ticker(stock['symbol']+'.BO')
        if bseQuote!=None:
            bse_price = 0.0
            if 'currentPrice' in bseQuote.info:
                bse_price = bseQuote.info['currentPrice']
            else:
                bse_price = bseQuote.info['ask']
            entry = {
                'Symbol': stock['symbol'],
                'Company Name': stock['meta']['companyName'],
                'NSE Price': stock['lastPrice'],
                'BSE Price': bse_price,
                'Profit': abs(stock['lastPrice']-bse_price)
            }
            inserted_data = nifty_it_collection.insert_one(entry)
    pprint.pprint(bseQuote.info)
            

    end = time.time()
    print(end-start)

if __name__ == '__main__':
    db = db.get_db()
    # while True:
    getNifty50()