import pandas as pd
import os
import time
import yfinance as yf
yf.set_tz_cache_location("custom/cache/location")
import pprint

start = time.time()

df_symbols = pd.read_excel(os.getcwd()+'/nifty50symbols.xlsx')
symbols = df_symbols['symbol'].tolist()
bseSymbols = [ticker+'.BO' for ticker in symbols]

# get all stock info
bse_stocksQuote = yf.Tickers(bseSymbols)

bse_col = list(bse_stocksQuote.tickers[bseSymbols[0]].info.keys())
bse_col.remove('companyOfficers')

df_bse = pd.DataFrame(columns=bse_col)

for symbol in bseSymbols:
    stockQuote = bse_stocksQuote.tickers[symbol].info
    stockQuote.pop('companyOfficers', -1)
    df_bse.loc[len(df_bse)] = stockQuote

df_bse.to_excel(os.getcwd()+'/nifty50Bse.xlsx', index=False)

end = time.time()
print(end-start)