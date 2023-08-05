import time
import db
from bson import ObjectId

def addProfit():
    start = time.time()
    stocks = db['Stock_Details']
    cursor = stocks.find({})
    ids = list(cursor)
    for id in ids:
        query = {"_id": ObjectId(id['_id'])}
        new_data = {"$set": {'Profit': abs(id['BSE Price']-id['NSE Price'])}}

        stocks.update_one(query, new_data)

    end = time.time()
    print(end-start)

if __name__ == '__main__':
    db = db.get_db()
    addProfit()