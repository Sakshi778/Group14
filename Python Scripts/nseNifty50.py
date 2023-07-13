import pandas as pd
import os
import time
import yfinance as yf
yf.set_tz_cache_location("custom/cache/location")

start = time.time()

df_symbols = pd.read_excel(os.getcwd()+'/nifty50symbols.xlsx')
symbols = df_symbols['symbol'].tolist()
nseSymbols = [ticker+'.NS' for ticker in symbols]

# get all stock info
nse_stocksQuote = yf.Tickers(nseSymbols)

nse_col = list(nse_stocksQuote.tickers[nseSymbols[0]].info.keys())
nse_col.remove('companyOfficers')

df_nse = pd.DataFrame(columns=nse_col)

for symbol in nseSymbols:
    stockQuote = nse_stocksQuote.tickers[symbol].info
    stockQuote.pop('companyOfficers', -1)
    df_nse.loc[len(df_nse)] = stockQuote

df_nse.to_excel(os.getcwd()+'/nifty50Nse.xlsx', index=False)

end = time.time()
print(end-start)