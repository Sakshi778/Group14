from pymongo import MongoClient

# Optionally, import other necessary modules and configurations.
def get_db():
    client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB connection string
    db = client["Arbitrage_System"]  # Replace with the name of your MongoDB database
    return db

def close_db(db):
    db.close()
