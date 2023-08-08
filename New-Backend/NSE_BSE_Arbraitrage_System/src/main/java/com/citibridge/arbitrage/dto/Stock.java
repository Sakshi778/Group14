package com.citibridge.arbitrage.dto;

public class Stock {
    private String symbol;
    private String companyName;
    private double bseAsk;
    private double bseBid;
    private double nseAsk;
    private double nseBid;
    private double profit;

    // Constructors
    public Stock() {
    }

    public Stock(String symbol, String companyName, double bseAsk, double bseBid, double nseAsk, double nseBid, double profit) {
        this.symbol = symbol;
        this.companyName = companyName;
        this.bseAsk = bseAsk;
        this.bseBid = bseBid;
        this.nseAsk = nseAsk;
        this.nseBid = nseBid;
        this.profit = profit;
    }

    // Getters and Setters

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public double getBseAsk() {
        return bseAsk;
    }

    public void setBseAsk(double bseAsk) {
        this.bseAsk = bseAsk;
    }

    public double getBseBid() {
        return bseBid;
    }

    public void setBseBid(double bseBid) {
        this.bseBid = bseBid;
    }

    public double getNseAsk() {
        return nseAsk;
    }

    public void setNseAsk(double nseAsk) {
        this.nseAsk = nseAsk;
    }

    public double getNseBid() {
        return nseBid;
    }

    public void setNseBid(double nseBid) {
        this.nseBid = nseBid;
    }

    public double getProfit() {
        return profit;
    }

    public void setProfit(double profit) {
        this.profit = profit;
    }
}
