import requests
import os
import time
import pandas as pd
import db
from bson import ObjectId
import pprint

link = 'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050'


def getSymbols():
    start = time.time()

    header = {
        # 'Accept':'*/*',
        # 'Accept-Encoding':'gzip, deflate, br',
        # 'Accept-Language':'en-US,en;q=0.9',
        # 'Cookie': '_ga=GA1.1.658015472.1688401324; nsit=DxgEq0eBS6dQ6z1hYVmA6tPh; AKA_A2=A; defaultLang=en; ak_bmsc=0197B3A6B22FE209FDE9ACB577F4889F~000000000000000000000000000000~YAAQFI0duAXX2wOJAQAAdQeNMBT/4CWBpATVMz2rvG232NFYxMMmPtOtqsp2M+kA+yg5OZ0HKK/lkuVgSNLq4Xu/gyGPDbvioXXtg+klIVzYwyAo/CUFzM/lWToWXPFdTbey3eDtoxhdcIBZw8uvi8dF5ctSxrCkkLpReA/cg9fD5ujNQ8UUUUzPLBkGRv34OD3lQs7Ovqp/sF2gqd3QlTtHX1iFR582PEYQZjpu2lcW5/o6UrRhlG4siV40s5QctWYjhLWxZ4HVFcTsJHE3EeaR4tQrgpgAcgxTb085SfiO5kr7/E6wys9oR40R5mFewy2sYJj72p6SkfaRLbj9dnSx3V+sy2w6uO80Uf7t9qq8fvtQH4S3kGQnzZdtrnjc9aKKVd6trvymJq53lzzq1sC8VU1EYnMWN9hF3JKtZ6/i14FThiyREV1g/wXkFhjoP70YxzpzzGT18uBj1vCLWQLRj7g3bqdUvmi8HYYbvi6wBHsmsNlISgETDYM=; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY4ODczNjcxMiwiZXhwIjoxNjg4NzQzOTEyfQ.lYQ9SAE7ARBLdp9Unx-0kDhUqr6hR-zmtKD4b41XkKo; RT="z=1&dm=nseindia.com&si=c8a892b2-d2f9-4e32-bdb9-1b295672b69e&ss=ljsm80me&sl=1&se=8c&tt=7jn&bcn=%2F%2F17de4c15.akstat.io%2F"; _ga_PJSKY6CFJH=GS1.1.1688736697.7.1.1688736714.43.0.0; bm_sv=D1904A5ADA5CD54AB04537FBB8AF58CA~YAAQFI0duNzX2wOJAQAAJlGNMBTjMoa9C4/RDkVXPg3sNa9hXeWcDM54LaSxVQEU1iLbSc5YvXmploLxPuvijERWpgRPLuaerrXXlJ9BRQE6Gyb/ZrRl/KaGFrTgf4HBCV7FYNdJExppWzCNLkOf7T/swsPYzLMME+jKDeVmMMI7z5SiqTKLkBENdP2yg7cqxg1aNgBcHHjs4/eelpM3ua2scUlJHZhLz7+d02G/5BfL/LCe6K0ApcJ1dTuQE3R3SHI=~1',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
    webPage = requests.get(url=link, headers=header)
    if webPage.status_code!=200:
        print("Error occured while getting data!")
    stocks = webPage.json()['data']
    print(webPage.status_code)
    symbols_collection = db['Nifty_50_Stocks_Symbols']
    cursor = symbols_collection.find({})
    ids = [doc.get('_id') for doc in cursor]
    # print(len(stocks))
    for i in range(50):
        stock = stocks[i+1]
        pprint.pprint(stock)
        id = ids[i]
        print(id, stock['symbol'])
        query = {"_id": ObjectId(id)}
        new_data = {"$set": {'Symbol': stock['symbol']}}

        symbols_collection.update_one(query, new_data)
        # if stock['symbol']!='NIFTY 50':
        #     symbols.append(stock['symbol'])
    end = time.time()
    print(end-start)



if __name__ == '__main__':
    db = db.get_db()
    # while True:
    getSymbols()
