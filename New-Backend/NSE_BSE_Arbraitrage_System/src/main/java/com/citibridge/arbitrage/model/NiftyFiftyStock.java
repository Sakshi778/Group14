package com.citibridge.arbitrage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="Nifty_50_Stocks")
public class NiftyFiftyStock {
	
	@Id
    private String id;

    private String Symbol;
    
    @Field("Company Name")
    private String companyName;
    
    @Field("BSE Price")
    private double bsePrice;
    
    @Field("NSE Price")
    private double nsePrice;
    
    @Field("Profit")
    private double profit;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public double getProfit() {
		return profit;
	}

	public void setProfit(double profit) {
		this.profit = profit;
	}

	public String getSymbol() {
		return Symbol;
	}

	public void setSymbol(String symbol) {
		Symbol = symbol;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public double getBsePrice() {
		return bsePrice;
	}

	public void setBsePrice(double bsePrice) {
		this.bsePrice = bsePrice;
	}

	public double getNsePrice() {
		return nsePrice;
	}

	public void setNsePrice(double nsePrice) {
		this.nsePrice = nsePrice;
	}

}
